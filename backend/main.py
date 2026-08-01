import os
import sqlite3
import secrets
import hashlib
import time
from datetime import datetime, timedelta
from typing import Optional, List
from fastapi import FastAPI, HTTPException, Depends, Header, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

DB_FILE = os.path.join(os.path.dirname(__file__), "database.db")

app = FastAPI(title="KeyAuth Management API", version="1.0")

# Enable CORS for frontend web interface
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # Applications table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS applications (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            owner_id TEXT NOT NULL,
            secret TEXT NOT NULL,
            version TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # License Keys table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS license_keys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            app_id TEXT NOT NULL,
            key_code TEXT UNIQUE NOT NULL,
            duration_days INTEGER NOT NULL,
            status TEXT DEFAULT 'ACTIVE',
            hwid TEXT,
            used_by TEXT,
            expires_at TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (app_id) REFERENCES applications (id)
        )
    ''')
    
    # Users / Admins table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            role TEXT DEFAULT 'admin'
        )
    ''')
    
    # Seed default application if none exists
    cursor.execute("SELECT COUNT(*) FROM applications")
    if cursor.fetchone()[0] == 0:
        default_app_id = "app_" + secrets.token_hex(6)
        owner_id = secrets.token_hex(8)
        secret = secrets.token_hex(32)
        cursor.execute(
            "INSERT INTO applications (id, name, owner_id, secret, version) VALUES (?, ?, ?, ?, ?)",
            (default_app_id, "Srivaladeno's Application", owner_id, secret, "1.0")
        )
        
        # Seed sample keys for default app
        sample_keys = [
            ("KEY-MVP-30DAYS-DEMO", 30),
            ("KEY-SUPER-LIFETIME-DEV", 3650),
            ("KEY-TRIAL-7DAYS-TEST", 7)
        ]
        for key, days in sample_keys:
            exp = datetime.utcnow() + timedelta(days=days)
            cursor.execute(
                "INSERT INTO license_keys (app_id, key_code, duration_days, status, expires_at) VALUES (?, ?, ?, ?, ?)",
                (default_app_id, key, days, 'ACTIVE', exp.strftime("%Y-%m-%d %H:%M:%S"))
            )
            
    # Seed default admin user
    cursor.execute("SELECT COUNT(*) FROM users")
    if cursor.fetchone()[0] == 0:
        default_pwd_hash = hashlib.sha256("admin123".encode()).hexdigest()
        cursor.execute(
            "INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)",
            ("admin", default_pwd_hash, "admin")
        )
        
    conn.commit()
    conn.close()

init_db()

# Pydantic Request Schemas
class LoginRequest(BaseModel):
    username: str
    password: str

class VerifyKeyRequest(BaseModel):
    app_id: str
    secret: str
    key_code: str
    hwid: Optional[str] = "HWID-DEFAULT-001"

class CreateAppRequest(BaseModel):
    name: str
    version: Optional[str] = "1.0"

class GenerateKeyRequest(BaseModel):
    app_id: str
    duration_days: int
    count: Optional[int] = 1

class ResetHwidRequest(BaseModel):
    key_id: int

# API Endpoints

@app.get("/api/v1/health")
def health():
    return {"status": "online", "system": "KeyAuth Management Engine"}

@app.post("/api/v1/auth/login")
def login(req: LoginRequest, db: sqlite3.Connection = Depends(get_db)):
    pwd_hash = hashlib.sha256(req.password.encode()).hexdigest()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE username = ? AND password_hash = ?", (req.username, pwd_hash))
    user = cursor.fetchone()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid username or password")
    
    session_token = secrets.token_hex(24)
    return {
        "success": True,
        "message": "Login successful",
        "username": user["username"],
        "role": user["role"],
        "token": session_token
    }

@app.get("/api/v1/apps")
def list_applications(db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM applications ORDER BY created_at DESC")
    apps = cursor.fetchall()
    return [dict(app) for app in apps]

@app.post("/api/v1/apps/create")
def create_application(req: CreateAppRequest, db: sqlite3.Connection = Depends(get_db)):
    app_id = "app_" + secrets.token_hex(6)
    owner_id = secrets.token_hex(8)
    secret = secrets.token_hex(32)
    
    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO applications (id, name, owner_id, secret, version) VALUES (?, ?, ?, ?, ?)",
        (app_id, req.name, owner_id, secret, req.version or "1.0")
    )
    db.commit()
    
    cursor.execute("SELECT * FROM applications WHERE id = ?", (app_id,))
    new_app = cursor.fetchone()
    return {"success": True, "app": dict(new_app)}

@app.post("/api/v1/apps/{app_id}/refresh-secret")
def refresh_app_secret(app_id: str, db: sqlite3.Connection = Depends(get_db)):
    new_secret = secrets.token_hex(32)
    cursor = db.cursor()
    cursor.execute("UPDATE applications SET secret = ? WHERE id = ?", (new_secret, app_id))
    if cursor.rowcount == 0:
        raise HTTPException(status_code=404, detail="Application not found")
    db.commit()
    return {"success": True, "new_secret": new_secret}

@app.get("/api/v1/apps/{app_id}/keys")
def get_app_keys(app_id: str, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM license_keys WHERE app_id = ? ORDER BY id DESC", (app_id,))
    keys = cursor.fetchall()
    return [dict(k) for k in keys]

@app.post("/api/v1/keys/generate")
def generate_keys(req: GenerateKeyRequest, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM applications WHERE id = ?", (req.app_id,))
    app_obj = cursor.fetchone()
    if not app_obj:
        raise HTTPException(status_code=404, detail="Application not found")
        
    created_keys = []
    count = max(1, min(req.count, 50))
    
    for _ in range(count):
        random_suffix = secrets.token_hex(4).upper()
        prefix = "KEY-"
        if req.duration_days == 1:
            prefix += "1DAY-"
        elif req.duration_days == 7:
            prefix += "7DAYS-"
        elif req.duration_days == 30:
            prefix += "30DAYS-"
        elif req.duration_days >= 365:
            prefix += "LIFETIME-"
        
        key_code = prefix + random_suffix
        exp = datetime.utcnow() + timedelta(days=req.duration_days)
        exp_str = exp.strftime("%Y-%m-%d %H:%M:%S")
        
        cursor.execute(
            "INSERT INTO license_keys (app_id, key_code, duration_days, status, expires_at) VALUES (?, ?, ?, ?, ?)",
            (req.app_id, key_code, req.duration_days, 'ACTIVE', exp_str)
        )
        created_keys.append(key_code)
        
    db.commit()
    return {"success": True, "keys": created_keys}

@app.post("/api/v1/auth/verify-key")
def verify_license_key(req: VerifyKeyRequest, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM applications WHERE id = ? AND secret = ?", (req.app_id, req.secret))
    app_obj = cursor.fetchone()
    if not app_obj:
        raise HTTPException(status_code=401, detail="Invalid Application Credentials (app_id or secret mismatch)")
        
    cursor.execute("SELECT * FROM license_keys WHERE app_id = ? AND key_code = ?", (req.app_id, req.key_code))
    key_obj = cursor.fetchone()
    if not key_obj:
        raise HTTPException(status_code=404, detail="Invalid License Key")
        
    if key_obj["status"] != "ACTIVE":
        raise HTTPException(status_code=403, detail=f"License Key is currently {key_obj['status']}")
        
    # Check expiration
    if key_obj["expires_at"]:
        exp_time = datetime.strptime(key_obj["expires_at"], "%Y-%m-%d %H:%M:%S")
        if datetime.utcnow() > exp_time:
            cursor.execute("UPDATE license_keys SET status = 'EXPIRED' WHERE id = ?", (key_obj["id"],))
            db.commit()
            raise HTTPException(status_code=403, detail="License Key has expired")
            
    # Check / bind HWID
    current_hwid = key_obj["hwid"]
    if current_hwid is None or current_hwid == "":
        # Bind key to this HWID
        cursor.execute("UPDATE license_keys SET hwid = ? WHERE id = ?", (req.hwid, key_obj["id"]))
        db.commit()
        current_hwid = req.hwid
    elif current_hwid != req.hwid:
        raise HTTPException(status_code=403, detail="License Key is bound to a different Hardware ID (HWID mismatch)")
        
    return {
        "success": True,
        "message": "License Key Verified Successfully",
        "app_name": app_obj["name"],
        "key": req.key_code,
        "expires_at": key_obj["expires_at"],
        "hwid": current_hwid
    }

@app.post("/api/v1/keys/reset-hwid")
def reset_hwid(req: ResetHwidRequest, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("UPDATE license_keys SET hwid = NULL WHERE id = ?", (req.key_id,))
    if cursor.rowcount == 0:
        raise HTTPException(status_code=404, detail="Key not found")
    db.commit()
    return {"success": True, "message": "HWID reset successfully"}

@app.delete("/api/v1/keys/{key_id}")
def delete_key(key_id: int, db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("DELETE FROM license_keys WHERE id = ?", (key_id,))
    db.commit()
    return {"success": True, "message": "Key deleted successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
