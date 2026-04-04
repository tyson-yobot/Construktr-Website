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
    cta: "Get Started Free",
    tagline: "For solo contractors getting started",
    storage: "100 MB",
    retention: "7 days",
    features: [
      "3 active jobs",
      "5 manual quotes/month",
      "50 customer contacts",
      "Basic scheduling & calendar",
      "Manual time tracking",
      "Mobile app (iOS & Android)",
      "Offline-first architecture",
      "Push notifications",
      "Basic invoicing",
      "Photo documentation",
      "Customer notes & history",
      "Job status tracking",
    ],
  },
  {
    key: "starter",
    name: "Starter",
    priceMonthly: 49,
    priceAnnual: 39,
    users: "Up to 5 users",
    cta: "Start with Starter",
    tagline: "For growing crews ready to automate",
    paymentRate: "2.9% + $0.30",
    storage: "5 GB",
    retention: "1 year",
    features: [
      "Everything in Free",
      "25 active jobs",
      "Dispatch board",
      "Stripe payment processing",
      "Professional branded invoicing",
      "GPS time tracking",
      "Client portal & change orders",
      "Maps & route planning",
      "In-app messaging (100/month)",
      "Equipment tracking",
      "Digital job forms",
      "2-way SMS with customers",
      "Basic analytics & reports",
    ],
  },
  {
    key: "core",
    name: "Core",
    priceMonthly: 99,
    priceAnnual: 79,
    users: "Up to 10 users",
    isMostPopular: true,
    cta: "Go Core",
    tagline: "AI-powered quoting, scheduling & accounting sync",
    paymentRate: "2.7% + $0.25",
    storage: "10 GB",
    retention: "2 years",
    features: [
      "Everything in Starter",
      "Unlimited active jobs",
      "AI Photo Estimation (15/month)",
      "AI Smart Quoting (50/month)",
      "QuickBooks bidirectional sync",
      "CRM & lead management",
      "Document scanning (OCR)",
      "Receipt reconciliation",
      "Customer CRM & notes",
      "Push notifications to team",
      "Lien waiver tracking",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    priceMonthly: 199,
    priceAnnual: 159,
    users: "Up to 25 users",
    cta: "Go Pro",
    tagline: "Full AI power — dispatch, analytics & automations",
    paymentRate: "2.5% + $0.20",
    storage: "25 GB",
    retention: "3 years",
    features: [
      "Everything in Core",
      "AI Dispatch & route optimization",
      "AI Scheduler with delay prediction",
      "Advanced analytics & KPI tracking",
      "Workflow automations",
      "Unlimited AI Photo Estimates",
      "Communications hub",
      "Weather integration for scheduling",
      "Delay alerts & notifications",
      "Multi-location job management",
      "NFC/BLE equipment tracking",
      "Inventory management with barcode scanning",
      "Recurring billing & subscriptions",
      "Review automation & reputation management",
    ],
  },
  {
    key: "business",
    name: "Business",
    priceMonthly: 349,
    priceAnnual: 279,
    users: "Unlimited users",
    cta: "Contact Sales",
    tagline: "Enterprise — AI Voice, subcontractors & custom webhooks",
    paymentRate: "2.3% + $0.15",
    storage: "Unlimited",
    retention: "Unlimited",
    features: [
      "Everything in Pro",
      "24/7 AI Call Operator (200 calls/month)",
      "Subcontractor management",
      "Safety & compliance tracking",
      "Custom API webhooks",
      "Advanced RBAC & SSO integration",
      "White-label client portal & branding",
      "Multi-location management & reporting",
      "Priority support (phone + chat)",
      "Dedicated account manager",
      "Custom integrations & data exports",
      "Enterprise-grade security compliance",
      "Custom reporting & dashboards",
      "Franchise/multi-location oversight",
    ],
  },
];

export const globalFeatures = [
  "Free forever to start",
  "No credit card required",
  "Cancel anytime",
];
