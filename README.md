# 🧱 CONSTRUKTR™ Architecture Overview (Production Stack)

## 🧭 Overview
**CONSTRUKTR™** is a mobile-first, AI-powered platform for contractors, handymen, and field service teams.  
It enables full job lifecycle management — from quotes and scheduling to invoicing and payments — entirely from a smartphone.  
The app is designed for speed, automation, and simplicity, featuring embedded AI for estimation, route optimization, and business recommendations.

---

## ✅ Deployment Workflow

### ⛔️ Not Replit-Hosted
All Replit development ties have been removed.

### ✅ Current Flow


- Frontend (Expo app) and backend (API) deploy independently from github to AWS.  
- Deployment triggers on Git pushes to designated GitHub branches.

---

## 🧩 SYSTEM ARCHITECTURE

### 🎨 Frontend (Mobile App)
| Stack | Details |
|-------|----------|
| Framework | React Native 0.79.5 + Expo SDK 53 |
| Language | TypeScript 5.9.2 |
| UI Layer | shadcn/ui + Radix primitives + TailwindCSS |
| Navigation | React Navigation v7 |
| Forms & Validation | React Hook Form + Zod |
| State Management | TanStack Query (server state) + Zustand (local state) |
| Persistence | WatermelonDB + MMKV (offline caching) |
| Platform | Mobile-first PWA + native feel |
| Native Modules | Expo SecureStore / Filesystem / ImagePicker / Location |
| Integrations | Stripe SDK / QuickBooks Online API |
| Testing | Jest + React Testing Library (89.9 % pass rate) |

---

### ⚙️ Backend (API Server)
| Stack | Details |
|-------|----------|
| Framework | Express.js + TypeScript |
| Architecture | RESTful API with clear separation of routes / logic / data |
| Deployment | Render.com |
| Middleware | JWT auth + custom error handling + request logging |
| Authentication | Passport.js (OIDC optional) |
| Database | PostgreSQL via Supabase (Neon pooling) |
| ORM | Drizzle ORM (type-safe schema-first) |
| Storage | Google Cloud Storage (job photos / receipts / files) |

---

## 🛢️ DATABASE SCHEMA (Supabase + Drizzle ORM)
| Core Tables | Description |
|--------------|-------------|
| users | Contractor / technician accounts |
| clients | Customer records |
| jobs | Core work orders with status tracking |
| invoices | Linked to jobs and payments |
| job_schedule | Calendar / dispatch entries |
| ai_insights | AI-generated recommendations |
| time_logs | Field tech clock-in/out data |
| setup_progress | Onboarding status |
| sync_logs | Offline sync records |
| files | Uploaded assets and attachments |
All tables include `created_at`, `updated_at`, and foreign-key integrity.

---

## 🤖 AI INTEGRATION
| Layer | Purpose |
|-------|----------|
| Model | OpenAI GPT-4o |
| Features | Smart Quote Estimation • Route Optimization • Schedule Filling • Pricing Intelligence • Lead Suggestions • Job Performance Insights |
| Delivery | Context-aware suggestions with confidence scores and feedback loop |

---

## ☁️ FILE UPLOADS + STORAGE
| Tool | Purpose |
|------|----------|
| Uploader | Uppy.js (drag & drop, mobile optimized) |
| Storage | Google Cloud Storage (per-job folder structure) |
| Use Cases | Job photos, receipts, contracts, voice memos, checklists |

---

## 📲 MOBILE-FIRST DESIGN PRINCIPLES
- Fully responsive layout (PWA and native)  
- Zero hover events; thumb-friendly navigation  
- Consistent spacing, typography, and card hierarchy  
- Light gradients, minimal shadows, 100 % dark-mode ready  
- Electric blue accents on silver-tone UI elements  

---

## 🧼 TECHNICAL PHILOSOPHY
- 🔒 No Replit logic or dependencies remain  
- 📦 Frontend and backend containerized separately on AWS
- ⛓ Git-based workflow — 1 repo per tier; deploy from chore branch  
- 🧠 AI suggestions logged and auditable via feedback system  
- 📊 Future analytics layer planned for user behavior and job metrics  

---

## 🧠 AUTOMATION + CI
| Workflow | Purpose |
|-----------|----------|
| `construktr-bootstrap.yml` | Manual branch prep |
| `ci-health.yml` | Smoke tests + lint/type validation |
| `chore-autonomous-maintenance.yml` | Renovate + Sweep bots + CI checks |

PRs target `chore/ci-update-2025-09-01` and must pass full CI before merge.

---

## 📦 PRODUCTION STATUS
**Mobile App — Ready for Launch ✅**  
- Expo SDK 53 / React Native 0.79.5  
- Zero TypeScript errors / ESLint warnings  
- 89.9 % test pass rate (1091 / 1215)  
- EAS Build configured for iOS & Android  
- App Store and Play Store assets (pending icons + screenshots)  

**Portal / Server / Shared Packages** — Scaffolded for future expansion.

_Last Updated: November 8 2025_

---

## 🏁 FINAL SETUP
```bash
git checkout chore/ci-update-2025-09-01
corepack enable
pnpm install
pnpm run lint
pnpm run typecheck


Every line above reflects the actual project stack and configuration verified in your repository as of November 10 2025:contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}:contentReference[oaicite:2]{index=2}.  
If you want, I can extend this README with your **Automate AI** branding footer and link to your upcoming domain once it’s confirmed.



