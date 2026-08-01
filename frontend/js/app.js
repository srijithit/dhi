const API_BASE = "http://127.0.0.1:8000/api/v1";

let currentApps = [];
let selectedApp = null;
let currentKeys = [];

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initLoginForm();
  initKeyForm();
  initAppSelector();
  initSnippetToggle();
  initCustomCursor();
  checkHealthAndLoad();
});

// Custom Cursor Engine
function initCustomCursor() {
  const cursor = document.getElementById("cursor");
  const cursorDot = document.getElementById("cursor-dot");
  
  if (!cursor || !cursorDot) return;
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Dot follows instantly
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });
  
  // Outer circle follows with easing
  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);
  
  // Add hover effect for interactive elements
  const interactables = document.querySelectorAll("button, a, input, select, .toggle-switch-wrapper");
  interactables.forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
}

// Toast notification engine
function showToast(msg, type = "info") {
  const stack = document.getElementById("toast-stack");
  if (!stack) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>${msg}</span>
  `;
  stack.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Copy to Clipboard Helper
window.copyToClipboard = function(elementId, labelName) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${labelName} to clipboard!`);
  }).catch(() => {
    showToast("Failed to copy text", "error");
  });
};

// Tabs initialization
function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const mode = tab.dataset.tab;
      document.getElementById("user-login-fields").style.display = mode === "user" ? "block" : "none";
      document.getElementById("key-login-fields").style.display = mode === "key" ? "block" : "none";
    });
  });
}

// Check Backend Connection & Load Initial Data
async function checkHealthAndLoad() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (res.ok) {
      console.log("Backend Connected");
    }
  } catch (err) {
    showToast("Backend Server Offline. Ensure python main.py is running on port 8000", "error");
  }
}

// Handle User Authentication
function initLoginForm() {
  const form = document.getElementById("user-auth-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userVal = document.getElementById("input-username").value;
    const pwdVal = document.getElementById("input-password").value;

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userVal, password: pwdVal })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Login Successful! Welcome back.");
        switchToDashboardView();
        loadApplications();
      } else {
        showToast(data.detail || "Authentication Failed", "error");
      }
    } catch (err) {
      showToast("Server Connection Error", "error");
    }
  });
}

// Handle Key Verification Login
function initKeyForm() {
  const btn = document.getElementById("verify-key-btn");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const keyVal = document.getElementById("input-license-key").value;
    if (!keyVal) {
      showToast("Please enter a License Key", "error");
      return;
    }

    // Default to first application if available
    const appId = selectedApp ? selectedApp.id : "app_default";
    const appSecret = selectedApp ? selectedApp.secret : "default_secret";

    try {
      const res = await fetch(`${API_BASE}/auth/verify-key`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          app_id: appId,
          secret: appSecret,
          key_code: keyVal,
          hwid: "HWID-USER-DEVICE-99"
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showToast(`Key Verified! Access Granted to ${data.app_name}`);
        switchToDashboardView();
        loadApplications();
      } else {
        showToast(data.detail || "Invalid or Expired License Key", "error");
      }
    } catch (err) {
      showToast("Verification Error", "error");
    }
  });
}

function switchToDashboardView() {
  document.getElementById("login-stage").style.display = "none";
  document.getElementById("dashboard-stage").style.display = "block";
}

// Load Multi-Applications List
async function loadApplications() {
  try {
    const res = await fetch(`${API_BASE}/apps`);
    const apps = await res.json();
    currentApps = apps;

    const selectEl = document.getElementById("app-selector-dropdown");
    selectEl.innerHTML = "";
    apps.forEach(app => {
      const opt = document.createElement("option");
      opt.value = app.id;
      opt.textContent = app.name;
      selectEl.appendChild(opt);
    });

    if (apps.length > 0) {
      selectedApp = apps[0];
      renderAppCredentials(selectedApp);
      loadAppKeys(selectedApp.id);
    }
  } catch (err) {
    showToast("Error loading applications list", "error");
  }
}

// App Selector Dropdown Change Handler
function initAppSelector() {
  const selectEl = document.getElementById("app-selector-dropdown");
  if (selectEl) {
    selectEl.addEventListener("change", (e) => {
      const appId = e.target.value;
      selectedApp = currentApps.find(a => a.id === appId);
      if (selectedApp) {
        renderAppCredentials(selectedApp);
        loadAppKeys(selectedApp.id);
      }
    });
  }

  // Create New App Modal Controls
  const openModalBtn = document.getElementById("open-create-app-modal");
  const closeModalBtn = document.getElementById("close-app-modal");
  const modalBackdrop = document.getElementById("create-app-modal");

  if (openModalBtn) openModalBtn.addEventListener("click", () => modalBackdrop.classList.add("active"));
  if (closeModalBtn) closeModalBtn.addEventListener("click", () => modalBackdrop.classList.remove("active"));

  const createAppForm = document.getElementById("create-app-form");
  if (createAppForm) {
    createAppForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const appName = document.getElementById("new-app-name").value;
      const appVer = document.getElementById("new-app-ver").value || "1.0";

      try {
        const res = await fetch(`${API_BASE}/apps/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: appName, version: appVer })
        });
        const data = await res.json();
        if (res.ok && data.success) {
          showToast(`Application '${appName}' Created Successfully!`);
          modalBackdrop.classList.remove("active");
          document.getElementById("new-app-name").value = "";
          loadApplications();
        }
      } catch (err) {
        showToast("Failed to create application", "error");
      }
    });
  }

  // Refresh Secret Button Click
  const refreshSecretBtn = document.getElementById("btn-refresh-secret");
  if (refreshSecretBtn) {
    refreshSecretBtn.addEventListener("click", async () => {
      if (!selectedApp) return;
      try {
        const res = await fetch(`${API_BASE}/apps/${selectedApp.id}/refresh-secret`, { method: "POST" });
        const data = await res.json();
        if (res.ok && data.success) {
          selectedApp.secret = data.new_secret;
          renderAppCredentials(selectedApp);
          showToast("Application Secret refreshed successfully!");
        }
      } catch (err) {
        showToast("Error refreshing secret", "error");
      }
    });
  }

  // Key Generator Button
  const generateKeyBtn = document.getElementById("btn-generate-key");
  if (generateKeyBtn) {
    generateKeyBtn.addEventListener("click", async () => {
      if (!selectedApp) return;
      const durationVal = parseInt(document.getElementById("gen-duration-select").value);
      try {
        const res = await fetch(`${API_BASE}/keys/generate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ app_id: selectedApp.id, duration_days: durationVal, count: 1 })
        });
        const data = await res.json();
        if (res.ok && data.success) {
          showToast(`Generated key: ${data.keys[0]}`);
          loadAppKeys(selectedApp.id);
        }
      } catch (err) {
        showToast("Error generating key", "error");
      }
    });
  }
}

// Render Application Credentials Card UI (EXACT SCREENSHOT UI)
function renderAppCredentials(app) {
  document.getElementById("cred-app-name").innerText = app.name;
  document.getElementById("cred-owner-id").innerText = app.owner_id;
  document.getElementById("cred-secret").innerText = app.secret;
  document.getElementById("cred-version").innerText = app.version;

  updateCodeSnippet(app);
}

// Snippet Toggle & Code Renderer
function initSnippetToggle() {
  const toggle = document.getElementById("toggle-snippet");
  const codeBox = document.getElementById("code-snippet-box");
  if (toggle && codeBox) {
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        codeBox.classList.add("active");
      } else {
        codeBox.classList.remove("active");
      }
    });
  }
}

function updateCodeSnippet(app) {
  const pre = document.getElementById("code-snippet-content");
  if (!pre) return;
  pre.textContent = `import requests

API_URL = "${API_BASE}/auth/verify-key"

def authenticate_license(license_key, hwid="HWID-DESKTOP-CLIENT"):
    payload = {
        "app_id": "${app.id}",
        "secret": "${app.secret}",
        "key_code": license_key,
        "hwid": hwid
    }
    response = requests.post(API_URL, json=payload)
    if response.status_code == 200:
        data = response.json()
        print(f"[+] Authenticated! App: {data['app_name']} | Expiration: {data['expires_at']}")
        return True
    else:
        print(f"[-] Authentication Failed: {response.json().get('detail')}")
        return False

# Usage
authenticate_license("KEY-MVP-30DAYS-DEMO")`;
}

// Load Application Keys Table
async function loadAppKeys(appId) {
  try {
    const res = await fetch(`${API_BASE}/apps/${appId}/keys`);
    const keys = await res.json();
    currentKeys = keys;

    const tbody = document.getElementById("keys-table-body");
    tbody.innerHTML = "";

    if (keys.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No keys generated for this application yet.</td></tr>`;
      return;
    }

    keys.forEach(k => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="key-pill">${k.key_code}</span></td>
        <td>${k.duration_days >= 3650 ? 'Lifetime' : k.duration_days + ' Days'}</td>
        <td><span style="color: ${k.status === 'ACTIVE' ? '#10b981' : '#ef4444'}; font-weight: 700;">${k.status}</span></td>
        <td style="font-family: var(--font-mono); font-size: 0.8rem; color: #94a3b8;">${k.hwid || 'Unbound'}</td>
        <td>
          ${k.hwid ? `<button class="btn-secondary" onclick="resetKeyHwid(${k.id})" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">Reset HWID</button>` : ''}
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (err) {
    showToast("Error loading keys", "error");
  }
}

// Reset HWID helper
window.resetKeyHwid = async function(keyId) {
  try {
    const res = await fetch(`${API_BASE}/keys/reset-hwid`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key_id: keyId })
    });
    if (res.ok) {
      showToast("HWID Reset Successfully!");
      if (selectedApp) loadAppKeys(selectedApp.id);
    }
  } catch (err) {
    showToast("Error resetting HWID", "error");
  }
};
