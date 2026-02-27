import { motion } from "framer-motion";
import OptimizedImage from "./optimized-image";

interface StandardizedPhoneMockupProps {
  src?: string;
  alt: string;
  className?: string;
  withGlow?: boolean;
  size?: 'mobile' | 'tablet' | 'desktop';
  customContent?: React.ReactNode;
  showBadge?: boolean;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
}

export default function StandardizedPhoneMockup({ 
  src = "", 
  alt, 
  className = "", 
  withGlow = false,
  size = 'desktop',
  customContent,
  showBadge = true,
  loading = "lazy",
  width,
  height
}: StandardizedPhoneMockupProps) {
  
  // Standardized device frame sizes with ≥420px width requirement
  const sizeClasses = {
    mobile: {
      container: "h-[560px]",
      width: "w-[420px]", // Minimum 420px width as per policy
      padding: "p-3",
      radius: "rounded-[32px]", // Consistent corner radius
      innerRadius: "rounded-[28px]"
    },
    tablet: {
      container: "h-[640px]",
      width: "w-[480px]", // Above minimum width
      padding: "p-4",
      radius: "rounded-[32px]", // Consistent corner radius
      innerRadius: "rounded-[28px]"
    },
    desktop: {
      container: "h-[720px]",
      width: "w-[540px]", // Large desktop width
      padding: "p-4", 
      radius: "rounded-[32px]", // Consistent corner radius
      innerRadius: "rounded-[28px]"
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses['desktop'];

  return (
    <div className={`relative ${className} mx-auto md:mx-0 px-6 md:px-0`}>
      {/* Consistent Drop Shadow Layers */}
      <div className="absolute top-8 left-4 right-4 bottom-2 bg-black/15 rounded-[28px] blur-2xl transform scale-95"></div>
      <div className="absolute top-6 left-2 right-2 bottom-0 bg-black/25 rounded-[28px] blur-xl transform scale-97"></div>
      <div className="absolute top-4 left-1 right-1 bottom-2 bg-black/10 rounded-[28px] blur-3xl transform scale-90"></div>
      
      <motion.div 
        className={`relative bg-slate-800 ${currentSize.radius} ${currentSize.padding} ${currentSize.container} ${currentSize.width} shadow-device`}
        style={{
          filter: withGlow 
            ? "drop-shadow(0 30px 80px rgba(0, 0, 0, 0.35)) drop-shadow(0 0 50px rgba(36, 99, 255, 0.3))"
            : "drop-shadow(0 30px 80px rgba(0, 0, 0, 0.35))",
          boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.05)"
        }}
        whileHover={withGlow ? { 
          filter: "drop-shadow(0 35px 90px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 60px rgba(36, 99, 255, 0.4))",
          scale: 1.02,
          y: -5
        } : {
          scale: 1.02,
          y: -2
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className={`w-full h-full bg-black ${currentSize.innerRadius} overflow-hidden relative`}>
          {/* Real App Label - Consistent Placement */}
          {showBadge && (
            <div className="absolute top-3 right-3 z-20 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Real App
            </div>
          )}
          
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-brand-blue/90 flex items-center justify-between px-6 text-sm font-medium text-white z-10">
            <span>9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-[var(--clr-surface)] rounded-sm"></div>
              <div className="w-1 h-2 bg-[var(--clr-surface)] rounded-sm"></div>
              <div className="w-6 h-2 bg-success rounded-sm"></div>
            </div>
          </div>
          
          {/* App Screenshot or Custom Content */}
          {customContent ? (
            customContent
          ) : (
            <OptimizedImage 
              src={src} 
              alt={alt}
              className="w-full h-full object-cover"
              loading={loading}
              width={width || (size === 'mobile' ? 420 : size === 'tablet' ? 480 : 540)}
              height={height || (size === 'mobile' ? 560 : size === 'tablet' ? 640 : 720)}
            />
          )}
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[var(--clr-surface)]/60 rounded-full"></div>
        </div>
        
        {/* Phone Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
      </motion.div>
    </div>
  );
}