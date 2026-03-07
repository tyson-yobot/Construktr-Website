export const FOUNDERS_PROMO_ENABLED = false;

export type TierKey = "free" | "starter" | "pro" | "business";

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
      "2 active jobs",
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
      "Unlimited active jobs",
      "AI Photo Estimation (10/month)", 
      "Stripe payment processing",
      "Professional branded invoicing",
      "QuickBooks bidirectional sync",
      "GPS time tracking",
      "Client portal & change orders",
      "Maps & route planning",
      "In-app messaging (100/month)",
      "Equipment tracking",
      "Digital job forms",
      "Customer CRM & notes",
      "Push notifications to team",
      "2-way SMS with customers",
      "Basic analytics & reports",
      "Document scanning (OCR)",
      "Receipt reconciliation",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    priceMonthly: 89,
    priceAnnual: 69,
    users: "Up to 15 users",
    isMostPopular: true,
    cta: "Go Pro",
    tagline: "For companies that need full AI power",
    paymentRate: "2.7% + $0.25",
    storage: "25 GB",
    retention: "2 years",
    features: [
      "Everything in Starter", 
      "Unlimited AI Photo Estimates",
      "Route optimization & multi-crew dispatch",
      "NFC/BLE equipment tracking", 
      "Automated lien tracking",
      "Inventory management with barcode scanning",
      "AR guides & AI Part Finder",
      "Custom job forms & checklists",
      "Recurring billing & subscriptions",
      "In-app messaging (500/month)",
      "Advanced analytics & KPI tracking",
      "Voice commands & hands-free control",
      "Business card scanner",
      "Weather integration for scheduling",
      "Review automation & reputation management",
      "Multi-location job management",
      "Team performance monitoring",
      "Automated follow-up sequences",
      "Permit & compliance tracking",
    ],
  },
  {
    key: "business",
    name: "Business",
    priceMonthly: 199,
    priceAnnual: 159,
    users: "Unlimited users",
    cta: "Contact Sales",
    tagline: "For enterprise operations & multi-location",
    paymentRate: "2.5% + $0.20",
    storage: "Unlimited",
    retention: "Unlimited",
    features: [
      "Everything in Pro",
      "Unlimited users & locations",
      "Voice commands & AI Quote Writer", 
      "AI Predictive Analytics & forecasting",
      "OCR document & business card scanning",
      "Advanced RBAC & SSO integration",
      "API access & custom webhooks",
      "White-label client portal & branding",
      "Multi-location management & reporting",
      "Priority support (phone + chat)",
      "Dedicated account manager",
      "Custom integrations & data exports",
      "Advanced workflow automation",
      "Enterprise-grade security compliance",
      "Custom reporting & dashboards",
      "Franchise/multi-location oversight",
      "Advanced profit margin analytics",
      "Custom training & onboarding",
    ],
  },
];

export const globalFeatures = [
  "Free forever to start",
  "No credit card required",
  "Cancel anytime",
];
