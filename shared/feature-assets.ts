export type FeatureAsset = {
  id: string;
  type: 'img' | 'video';
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const FEATURE_ASSETS: Record<string, FeatureAsset> = {
  // Using existing attached assets as placeholders
  'ai-job-estimator': {
    id: 'ai-job-estimator',
    type: 'img',
    src: '/attached_assets/image_1754830866827.jpeg',
    alt: 'Quote in 30s with materials',
    width: 420,
    height: 800
  },
  'smart-scheduling': {
    id: 'smart-scheduling',
    type: 'img',
    src: '/attached_assets/image_1754831262579.png',
    alt: 'Drag-drop calendar with conflict guard',
    width: 420,
    height: 800
  },
  'route-optimization': {
    id: 'route-optimization',
    type: 'img',
    src: '/attached_assets/image_1754832611201.png',
    alt: 'Optimized multi-stop route',
    width: 420,
    height: 800
  },
  'voice-ai': {
    id: 'voice-ai',
    type: 'img',
    src: '/attached_assets/image_1754832756730.png',
    alt: 'Hands-free notes & updates',
    width: 420,
    height: 800
  },
  'payments': {
    id: 'payments',
    type: 'img',
    src: '/attached_assets/image_1755367497746.png',
    alt: 'Tap-to-Pay and invoice sent',
    width: 420,
    height: 800
  },
  'crm-checklist': {
    id: 'crm-checklist',
    type: 'img',
    src: '/attached_assets/image_1755367522044.png',
    alt: 'Customer record with job checklist',
    width: 420,
    height: 800
  },
  // Use existing attached assets as placeholders for now
  'ai-quotes': {
    id: 'ai-quotes',
    type: 'img',
    src: '/attached_assets/image_1754830866827.jpeg',
    alt: 'AI-powered quote generation in 30 seconds',
    width: 420,
    height: 800
  },
  'instant-payments': {
    id: 'instant-payments',
    type: 'img', 
    src: '/attached_assets/image_1754831262579.png',
    alt: 'Same-day deposits and instant payments',
    width: 420,
    height: 800
  },
  'client-management': {
    id: 'client-management',
    type: 'img',
    src: '/attached_assets/image_1754832611201.png',
    alt: 'Complete client management and tracking',
    width: 420,
    height: 800
  }
};

// Development guard to prevent random screen bugs
export function getFeatureAsset(id: string): FeatureAsset | null {
  const asset = FEATURE_ASSETS[id];
  
  if (!asset && process.env.NODE_ENV === 'development') {
    console.warn(`⚠️ QA WARNING: Unknown asset ID "${id}" requested. Add to FEATURE_ASSETS.`);
    return null;
  }
  
  return asset || null;
}

// QA Development Badge - placeholder for React component
export interface AssetQABadgeProps {
  assetId: string;
}