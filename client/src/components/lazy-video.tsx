import { useState, useRef, useEffect } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  preload?: "none" | "metadata" | "auto";
  'aria-label'?: string;
}

export default function LazyVideo({
  src,
  poster,
  className = "",
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  preload = "none",
  'aria-label': ariaLabel
}: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}

      {/* Video element - only load when visible */}
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          preload={preload}
          onLoadedData={handleLoadedData}
          className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          aria-label={ariaLabel || "CONSTRUKTR app demonstration video"}
          aria-describedby={`video-description-${src?.split('/').pop()?.split('.')[0]}`}
        >
          <track kind="captions" src="/captions/demo-captions.vtt" srcLang="en" label="English" default />
          <track kind="descriptions" src="/captions/demo-descriptions.vtt" srcLang="en" label="Audio descriptions" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}