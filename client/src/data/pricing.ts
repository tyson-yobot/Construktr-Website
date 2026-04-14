// Pricing data derived from featureGates.ts (single source of truth).
// Last synced: 2026-04-05

export const FOUNDERS_PROMO_ENABLED = false;

export type TierKey = "free" | "starter" | "core" | "pro" | "business";

export interface Tier {
  key: TierKey;
  name: string;
  priceMonthly: number;
  priceAnnual: number | null;
  users: string;
  isMostPopular?: boolean;
  cta: string;
  tagline: string;
  features: string[];
  paymentRate?: string;
  storage: string;
  retention: string;
}

export const tiers: Tier[] = [
  {
    key: "free",
    name: "Free",
    priceMonthly: 0,
    priceAnnual: null,
    users: "1 user",
    cta: "Start Free",
    tagline: "Perfect for getting started",
    storage: "100 MB",
    retention: "7 days",
    features: [
      "5 active jobs",
      "5 estimates per month",
      "5 invoices per month",
      "25 contacts",
      "Basic scheduling",
      "Basic invoicing",
      "Basic reporting",
      "Stripe payments",
      "Mobile app (iOS & Android)",
    ],
  },
  {
    key: "starter",
    name: "Starter",
    priceMonthly: 49,
    priceAnnual: 39,
    users: "2 users",
    cta: "Start 14-Day Free Trial",
    tagline: "For solo operators ready to grow",
    paymentRate: "2.9% + $0.30",
    storage: "2 GB",
    retention: "1 year",
    features: [
      "Everything in Free",
      "Unlimited jobs, estimates, invoices",
      "Unlimited contacts",
      "Team scheduling",
      "Two-way SMS (100/month)",
      "Google Calendar sync",
      "Wisetack financing",
    ],
  },
  {
    key: "core",
    name: "Core",
    priceMonthly: 99,
    priceAnnual: 79,
    users: "5 users",
    isMostPopular: true,
    cta: "Start 14-Day Free Trial",
    tagline: "AI tools + QuickBooks for small teams",
    paymentRate: "2.7% + $0.25",
    storage: "5 GB",
    retention: "1 year",
    features: [
      "Everything in Starter",
      "AI photo estimation (15/month)",
      "QuickBooks bidirectional sync",
      "GPS tracking + geofencing",
      "Client portal",
      "Dispatch board",
      "DocuSign e-signatures",
      "Job costing",
      "Lien tracking",
      "Custom forms",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    priceMonthly: 199,
    priceAnnual: 159,
    users: "15 users",
    cta: "Start 14-Day Free Trial",
    tagline: "Full AI power + web platform for growing teams",
    paymentRate: "2.7% + $0.25",
    storage: "25 GB",
    retention: "2 years",
    features: [
      "Everything in Core",
      "Unlimited AI photo estimates",
      "AI dispatch + route optimization",
      "AI business intelligence",
      "AI damage analysis",
      "Web platform access",
      "Advanced client portal",
      "Progress invoicing",
      "NFC/BLE check-in",
      "Fleet management",
      "Custom automation builder",
      "Payroll + email marketing sync",
      "Priority email support",
    ],
  },
  {
    key: "business",
    name: "Business",
    priceMonthly: 349,
    priceAnnual: 279,
    users: "Unlimited users",
    cta: "Start 14-Day Free Trial",
    tagline: "For operations that run themselves",
    paymentRate: "2.5% + $0.20",
    storage: "Unlimited",
    retention: "Unlimited",
    features: [
      "Everything in Pro",
      "24/7 AI receptionist",
      "White-label client portal",
      "Custom report builder",
      "API access + webhooks + Zapier",
      "HubSpot sync",
      "SSO + advanced RBAC",
      "Multi-location support",
      "Subcontractor management",
      "Advanced fleet management",
      "Dedicated support",
      "Priority phone + email support",
    ],
  },
];

export const globalFeatures = [
  "Free forever to start",
  "No credit card required",
  "No per-user fees",
  "Cancel anytime",
];
