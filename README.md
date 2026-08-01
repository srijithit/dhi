# DhiGrowth — Digital Agency Platform

A multi-module repository containing the full digital platform for **DhiGrowth**, a premier digital marketing, website development, and business automation agency based in Coimbatore, India.

---

## 📂 Project Structure

This repository is organized into three primary modules:

1. **`next-frontend/`**: The modern, high-performance, SEO-optimized marketing website built with Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, and TypeScript.
2. **`frontend/`**: The legacy React + Vite dashboard app.
3. **`backend/`**: The Node.js + Python server containing user authentication, structured logging pipelines, and RAG (Retrieval-Augmented Generation) document search databases.

---

## ⚡ Quick Start

### 🚀 1. Run the Marketing Website (Next.js)

The primary client-facing platform is built using the Next.js App Router for dynamic rendering and search engine crawling speed.

```bash
# Navigate to next-frontend
cd next-frontend

# Install dependencies
npm install

# Run the local development server
npm run dev

# Build the project for production
npm run build
```

* Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.
* **Key Features**:
  * **Brand Logo**: Hand-coded SVG logo icon and trademark details styled consistently for all theme states.
  * **Premium Layout**: Light/dark mode configurations, backdrop blurs, and glassmorphism.
  * **Interactivity**: Budgets calculator, animated stats counters, and floating WhatsApp contact points.
  * **Dynamic Routings**: Pre-rendered templates for all 13 core agency services.

### 💻 2. Run the Legacy Frontend (Vite)

```bash
# Navigate to the Vite directory
cd frontend

# Install dependencies
npm install

# Run local development server
npm run dev
```

### ⚙️ 3. Run the Backend API Server

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start server
node server.js
```

---

## 🛡️ Next.js 15/16 Routing Compliance

This project complies with Next.js 15+ routing specifications where dynamic parameters are parsed asynchronously. In `src/app/services/[slug]/page.tsx`, properties are unwrapped asynchronously before lookup:

```typescript
interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find(s => s.id === slug);
  // ...
}
```

---

## 🛠️ Tech Stack & Dependencies

| Module | Core Technologies | Key Libraries |
| :--- | :--- | :--- |
| **`next-frontend`** | Next.js 16 (App Router), TypeScript, HTML5 | Tailwind CSS v4, Framer Motion, Lucide Icons |
| **`frontend`** | React, Vite, JavaScript | Tailwind CSS, Lucide Icons, Particles.js |
| **`backend`** | Node.js, Express, Python | mongoose, jsonwebtoken, OpenAI embeddings |

---

## 📬 Contact & Inquiries

* **Company**: DhiGrowth Digital Solutions
* **Location**: Avinashi Road, Peelamedu, Coimbatore, India
* **Website**: [https://github.com/srijithit/dhigrowth-NEW](https://github.com/srijithit/dhigrowth-NEW)
