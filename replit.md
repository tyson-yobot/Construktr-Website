# CONSTRUKTR™ Official Website

## Overview
Marketing website for Construktr — an AI-powered contractor job management mobile app built by Automate AI LLC (Phoenix, AZ). The website promotes the mobile app, explains features and pricing, and supports App Store submission requirements with accurate legal pages.

## Company Information
- **Legal Entity**: Automate AI LLC
- **Location**: Phoenix, AZ
- **App Name**: CONSTRUKTR™ (logo/headers), "Construktr" (body text)
- **Contact**: support@construktr.ai, privacy@construktr.ai, legal@construktr.ai
- **Copyright**: © 2026 Automate AI LLC

## Content Standards (FTC/App Store Compliance)
- **No fabricated statistics**: No fake user counts, star ratings, revenue figures, or certifications
- **No "15-day free trial"**: Replaced with "Free forever plan" and "Get Started Free" CTAs
- **No "SOC 2 Certified"**: Replaced with accurate "Encrypted & Secure" / "Stripe PCI DSS" / "256-bit SSL"
- **No "#1 Contractor" claims**: Removed from all headers and navigation
- **Real pricing only**: Free / Starter $49 / Pro $89 / Business $199 (annual: $39/$69/$159)
- **Comma separators not dashes**: Use "·" instead of "•" or "—" in trust lines

## Pricing Tiers (Exact)
| Tier | Monthly | Annual/mo | Users |
|---|---|---|---|
| Free | $0 | — | 1 user |
| Starter | $49 | $39 | Up to 5 |
| Pro | $89 | $69 | Up to 15 |
| Business | $199 | $159 | Unlimited |

Stripe rates: 2.9%+$0.30 / 2.7%+$0.25 / 2.5%+$0.20 (Free has no payments)

## Key Pages
- `/` — Homepage (single narrative flow)
- `/pricing` — Full pricing page with feature comparison
- `/privacy` — Full CCPA-compliant privacy policy (Automate AI LLC, privacy@construktr.ai)
- `/terms` — Full Terms of Service (Arizona law, Maricopa County, legal@construktr.ai)
- `/support` — Support center with real FAQ (9 questions), no fake phone number
- `/get` — App download page (iOS + Android)
- `/robots.txt` and `/sitemap.xml` — SEO infrastructure

## Homepage Section Order
CEOHero → CredibilityStrip → BeforeAfterStory → TabbedDemo → HowItWorks → ComprehensiveFeatures → RoleBasedSections → AICapabilities → ComparisonTable → ComprehensiveFAQ → Pricing (4 tiers) → FinalCTA → ProductGrid → AppDownloadSection

## Navigation (UnifiedHeader)
- Links: Features, Pricing, Support (no Blog, no Login)
- Primary CTA: "Get Started Free" (desktop + mobile)
- No fake badges (no "#1 Contractor", no "4.9/5", no "SOC 2 Certified")

## Key Components
- `client/src/components/unified-header.tsx` — Single header for all pages
- `client/src/components/unified-footer.tsx` — Footer with real copyright, real integration logos
- `client/src/components/Pricing.tsx` — 4-tier pricing cards (homepage section)
- `client/src/data/pricing.ts` — Single source of truth for pricing data
- `client/src/lib/content.ts` — Centralized copy/content (cleaned of fake stats)
- `client/src/lib/siteConfig.ts` — Site-wide config (cleaned of fake metrics)

## Legal Pages Architecture
- Privacy + Terms + Support all use `UnifiedFooter`, Helmet for SEO, `<Link>` for cross-linking
- No `EnhancedNavbar` or `SEOFooter` (old components) on these pages

## System Architecture

### Frontend
- React 18 + Vite + TypeScript
- Wouter for client-side routing
- TanStack Query for server state
- Framer Motion for animations
- Tailwind CSS + shadcn/ui + Radix UI

### Backend
- Express.js + TypeScript
- Lightweight API with MemStorage (no database currently in use)
- Drizzle ORM configured for PostgreSQL (Neon) if needed

### Build System
- Vite for frontend (served on same port as backend)
- esbuild for server bundling
- `npm run dev` starts both via `tsx server/index.ts`

## External Integrations Configured
- Stripe (payment processing)
- Slack (notifications)
- Google Analytics
- SendGrid (email)
- Supabase (object storage, via Replit integration)

## SEO Infrastructure
- `client/public/robots.txt` — Allow all, sitemap reference
- `client/public/sitemap.xml` — 7 URLs with priorities and lastmod dates
- `client/src/components/seo-head.tsx` — Per-page SEO meta tags + structured data
- Organization schema: Automate AI LLC, Phoenix AZ
- SoftwareApplication schema: accurate pricing (Free/$49/$89/$199)
- FAQPage schema: real Q&A content

## User Preferences
- Communication: Simple, everyday language
- Logo: `Construktr_Logo_Transparent_1024_x_1024_1772187695111.jpg` — icon + "CONSTRUKTR™" text side by side
- Commas/dots preferred over hyphens in trust lines: use `·` not `•` or `—`
- All "Start Free Trial" → "Get Started Free" everywhere
- Feature count: "33+ features · AI at every paid tier"
