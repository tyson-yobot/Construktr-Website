export const FEATURE_ASSETS = {
  "ai-job-estimator": { src: "/assets/screens/quote-30s.webp", alt: "Quote in 30s with materials" },
  "smart-scheduling": { src: "/assets/screens/schedule-1click.webp", alt: "Smart calendar with conflict guard" },
  "route-optimization": { src: "/assets/screens/route-optimizer.webp", alt: "Optimized multi-stop route" },
  "voice-ai": { src: "/assets/screens/voice-update.webp", alt: "Hands-free notes & updates" },
  "payments": { src: "/assets/screens/tap-to-pay.webp", alt: "Tap to Pay + automatic invoice" },
  "crm-checklist": { src: "/assets/screens/crm-checklist.webp", alt: "Customer record with job checklist" },
} as const;

export type FeatureAssetId = keyof typeof FEATURE_ASSETS;