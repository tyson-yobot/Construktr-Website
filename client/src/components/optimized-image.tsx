import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
  webpSrc?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  width,
  height,
  webpSrc
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Convert to WebP if available, otherwise use original
  const optimizedSrc = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const fallbackSrc = src;

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder while loading */}
      {!imageLoaded && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{ 
            width: width ? `${width}px` : undefined,
            height: height ? `${height}px` : undefined 
          }}
        />
      )}
      
      {/* WebP image with fallback */}
      <picture>
        {/* WebP source for modern browsers */}
        <source srcSet={optimizedSrc} type="image/webp" />
        
        {/* Fallback image */}
        <img
          src={imageError ? fallbackSrc : optimizedSrc}
          alt={alt}
          className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading={loading}
          decoding="async"
          width={width}
          height={height}
          onError={handleError}
          onLoad={handleLoad}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      </picture>
    </div>
  );
}