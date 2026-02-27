import { useEffect } from 'react';

/**
 * Performance optimization component for critical resource loading
 * Task 14: Enhanced with lazy loading and image optimization
 */
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical above-the-fold resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/construktr-app-hero.webp',
        '/phone-mockup-hero.webp',
        '/app-screenshot-quotes.webp'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.type = 'image/webp';
        document.head.appendChild(link);
      });
    };

    // Task 14: Apply lazy loading to all below-the-fold images
    const applyLazyLoading = () => {
      const images = document.querySelectorAll('img:not([loading])') as NodeListOf<HTMLImageElement>;
      images.forEach((img, index) => {
        // Skip first 3 images (above the fold)
        if (index > 2) {
          img.loading = 'lazy';
          img.decoding = 'async';
        }
      });
    };

    // Task 14: Add native lazy loading to iframes
    const lazyLoadIframes = () => {
      const iframes = document.querySelectorAll('iframe:not([loading])') as NodeListOf<HTMLIFrameElement>;
      iframes.forEach(iframe => {
        iframe.loading = 'lazy';
      });
    };

    // Optimize third-party scripts loading
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]') as NodeListOf<HTMLScriptElement>;
      scripts.forEach(script => {
        if (script.src && script.src.includes('replit-dev-banner')) {
          script.setAttribute('defer', '');
        }
      });
    };

    // Clean up will-change properties after animations complete
    const cleanupWillChange = () => {
      const animatedElements = document.querySelectorAll('[style*="will-change"]');
      animatedElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              (entry.target as HTMLElement).style.willChange = 'auto';
            }
          });
        });
        observer.observe(element);
      });
    };

    // Optimize font loading
    const optimizeFontLoading = () => {
      // Check if fonts are loaded and swap fallbacks if needed
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          document.body.classList.add('fonts-loaded');
        });
      }
    };

    // Run optimizations
    preloadCriticalResources();
    applyLazyLoading();
    lazyLoadIframes();
    optimizeThirdPartyScripts();
    cleanupWillChange();
    optimizeFontLoading();

    // Task 14: Re-apply lazy loading after dynamic content loads
    const observer = new MutationObserver(() => {
      applyLazyLoading();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
}