import { useEffect } from 'react';

export default function PerformanceOptimizerEnhanced() {
  useEffect(() => {
    // Convert PNG images to WebP references for modern browsers
    const optimizeImageSources = () => {
      // Create WebP versions mapping for critical images
      const webpMappings = {
        '/attached_assets/CONSTRUKTR Transparent Logo White_1755375117162.png': '/attached_assets/CONSTRUKTR Transparent Logo White_1755375117162.webp',
        '/attached_assets/image_1754832756730.png': '/attached_assets/image_1754832756730.webp',
        '/attached_assets/IMG_4330_1754274611770.jpeg': '/attached_assets/IMG_4330_1754274611770.webp',
        '/attached_assets/IMG_4332_1754274611770.jpeg': '/attached_assets/IMG_4332_1754274611770.webp'
      };

      // Check WebP support
      const supportsWebP = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('webp') !== -1;
      };

      if (supportsWebP()) {
        // Replace PNG/JPEG sources with WebP for supported browsers
        const images = document.querySelectorAll('img[src]') as NodeListOf<HTMLImageElement>;
        images.forEach(img => {
          const webpSrc = webpMappings[img.src as keyof typeof webpMappings];
          if (webpSrc) {
            // Create a new image to test if WebP exists
            const testImage = new Image();
            testImage.onload = () => {
              img.src = webpSrc;
            };
            testImage.src = webpSrc;
          }
        });
      }
    };

    // Preload critical resources with proper priorities
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: '/attached_assets/CONSTRUKTR Transparent Logo White_1755375117162.png', type: 'image/png', priority: 'high' },
        { href: '/attached_assets/image_1754832756730.png', type: 'image/png', priority: 'high' },
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource.href;
        link.type = resource.type;
        if (resource.priority === 'high') {
          link.setAttribute('fetchpriority', 'high');
        }
        document.head.appendChild(link);
      });
    };

    // Optimize animations to use only transform/opacity
    const optimizeAnimations = () => {
      // Add performance classes to animated elements
      const animatedElements = document.querySelectorAll(
        '.animate-pulse, .animate-spin, .animate-bounce, [data-animate]'
      );
      
      animatedElements.forEach(element => {
        (element as HTMLElement).style.willChange = 'transform, opacity';
      });

      // Create observer to clean up will-change when animations complete
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            (entry.target as HTMLElement).style.willChange = 'auto';
          }
        });
      });

      animatedElements.forEach(element => observer.observe(element));
    };

    // Optimize font loading with proper fallbacks
    const optimizeFontLoading = () => {
      // Add font-display: swap to dynamically loaded fonts
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
        @font-face {
          font-family: 'Satoshi';
          font-display: swap;
        }
        .font-loading {
          font-family: system-ui, -apple-system, sans-serif;
        }
        .fonts-loaded {
          font-family: 'Inter', 'Satoshi', system-ui, sans-serif;
        }
      `;
      document.head.appendChild(style);

      // Monitor font loading
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          document.body.classList.add('fonts-loaded');
          document.body.classList.remove('font-loading');
        });
      }
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]') as NodeListOf<HTMLScriptElement>;
      scripts.forEach(script => {
        if (script.src.includes('replit-dev-banner') || 
            script.src.includes('analytics') ||
            script.src.includes('gtag')) {
          script.setAttribute('defer', '');
          script.setAttribute('async', '');
        }
      });
    };

    // Add critical CSS for above-the-fold content
    const addCriticalCSS = () => {
      const criticalStyle = document.createElement('style');
      criticalStyle.textContent = `
        /* Critical above-the-fold optimizations */
        .hero-section {
          contain: layout style;
          content-visibility: auto;
        }
        
        /* Optimize image containers */
        .image-container {
          contain: layout style paint;
        }
        
        /* Reduce layout thrashing */
        .card-hover-optimized {
          will-change: transform, opacity;
          transition: transform 0.2s ease-out, opacity 0.2s ease-out;
        }
        
        .card-hover-optimized:hover {
          transform: translateY(-2px) scale(1.02);
        }
        
        /* Optimize scroll elements */
        .scroll-optimized {
          transform: translateZ(0);
          will-change: scroll-position;
        }
      `;
      document.head.appendChild(criticalStyle);
    };

    // Run all optimizations
    preloadCriticalResources();
    optimizeAnimations();
    optimizeFontLoading();
    optimizeThirdPartyScripts();
    addCriticalCSS();
    
    // Delay non-critical optimizations
    setTimeout(() => {
      optimizeImageSources();
    }, 100);

    // Performance monitoring
    if ('web-vitals' in window) {
      console.log('Performance optimizations applied');
    }

  }, []);

  return null; // This component doesn't render anything
}