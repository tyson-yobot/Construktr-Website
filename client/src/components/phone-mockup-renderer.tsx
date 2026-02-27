import { getFeatureAsset, type FeatureAsset, type AssetQABadgeProps } from "@shared/feature-assets";

interface PhoneMockupRendererProps {
  assetId: string;
  className?: string;
  showRealAppBadge?: boolean;
}

// QA Development Badge Component
function AssetQABadge({ assetId }: AssetQABadgeProps) {
  const asset = getFeatureAsset(assetId);
  
  if (asset || process.env.NODE_ENV !== 'development') {
    return null;
  }
  
  return (
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
      Missing: {assetId}
    </div>
  );
}

export default function PhoneMockupRenderer({ 
  assetId, 
  className = "", 
  showRealAppBadge = true 
}: PhoneMockupRendererProps) {
  const asset = getFeatureAsset(assetId);
  
  return (
    <div className={`relative ${className}`}>
      <AssetQABadge assetId={assetId} />
      
      {/* Phone Frame */}
      <div className="relative w-[420px] h-[520px] bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-bg)] rounded-[2rem] border-4 border-white/10 overflow-hidden">
        
        {/* Phone Content */}
        <div className="absolute inset-4 bg-[var(--color-bg)] rounded-[1.5rem] overflow-hidden">
          {asset ? (
            asset.type === 'video' ? (
              <video
                src={asset.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                title={asset.alt}
                onError={(e) => {
                  console.warn(`Failed to load video: ${asset.src}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <img
                src={asset.src}
                alt={asset.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.warn(`Failed to load image: ${asset.src}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            )
          ) : (
            /* Fallback for missing assets in development */
            <div className="w-full h-full bg-gradient-to-b from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">Loading...</p>
              </div>
            </div>
          )}
        </div>
        
        
        {/* Phone Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}

// Specific phone mockup variants for consistent sizing
export function PhoneMockupLarge({ assetId }: { assetId: string }) {
  return (
    <PhoneMockupRenderer 
      assetId={assetId} 
      className="w-80 h-[640px]" 
    />
  );
}

export function PhoneMockupMedium({ assetId }: { assetId: string }) {
  return (
    <PhoneMockupRenderer 
      assetId={assetId} 
      className="w-64 h-[520px]" 
    />
  );
}

export function PhoneMockupSmall({ assetId }: { assetId: string }) {
  return (
    <PhoneMockupRenderer 
      assetId={assetId} 
      className="w-52 h-[420px]" 
    />
  );
}