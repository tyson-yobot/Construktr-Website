import { useState, useRef, useCallback } from "react";

interface PerformanceOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
  loading?: "lazy" | "eager";
  quality?: number;
}

export default function PerformanceOptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  loading = "lazy",
  quality = 80
}: PerformanceOptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and fallback sources
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const optimizedSrc = src.includes('?') ? `${src}&q=${quality}` : `${src}?q=${quality}`;

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // Preload critical images
  if (priority && typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = webpSrc;
    link.type = 'image/webp';
    if (!document.head.contains(link)) {
      document.head.appendChild(link);
    }
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {/* Placeholder with proper aspect ratio */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width, height }}
          aria-hidden="true"
        />
      )}
      
      {/* Optimized image with WebP support */}
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          ref={imgRef}
          src={hasError ? src : optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            aspectRatio: `${width}/${height}`,
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </picture>
    </div>
  );
}