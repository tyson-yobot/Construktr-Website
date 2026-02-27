import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackCTAStartTrialClicked, trackCTABookDemoClicked } from "@/lib/analytics-events";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Approximate hero height
      const pricingSection = document.getElementById('pricing');
      const scrollY = window.scrollY;
      
      // Show when scrolled past hero
      const showCTA = scrollY > heroHeight * 0.8;
      
      // Hide when pricing section is ≥75% visible
      let hideCTA = false;
      if (pricingSection) {
        const pricingRect = pricingSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const sectionHeight = pricingRect.height;
        
        // Calculate how much of the pricing section is visible
        const visibleTop = Math.max(0, -pricingRect.top);
        const visibleBottom = Math.min(sectionHeight, viewportHeight - pricingRect.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityPercentage = visibleHeight / sectionHeight;
        
        hideCTA = visibilityPercentage >= 0.75;
      }
      
      setIsVisible(showCTA && !hideCTA);
    };

    // Throttle scroll events for performance
    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null as any;
      }, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleStartTrial = () => {
    trackCTAStartTrialClicked('sticky-nav');
    // Navigate to sign-up or app store
    window.open('https://app.construktr.com/signup', '_blank');
  };

  const handleWatchDemo = () => {
    trackCTABookDemoClicked('sticky-nav'); // Note: keeping analytics event name for historical data
    // Scroll to demo section or open video modal
    const demoSection = document.getElementById('how-it-works') || document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--color-bg)]/95 backdrop-blur-lg border-t border-white/10 shadow-2xl pb-safe-bottom"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <div className="px-4 pt-3 pb-1 max-w-sm mx-auto">
            <div className="flex gap-3">
              
              {/* Primary CTA */}
              <button
                onClick={handleStartTrial}
                className="button-primary flex-1 text-sm keyboard-focus-visible touch-manipulation"
                aria-label="Get started free with CONSTRUKTR"
              >
                Get Started Free
              </button>
              
              {/* Ghost Demo Button */}
              <button
                onClick={handleWatchDemo}
                className="button-secondary flex-shrink-0 text-sm flex items-center gap-2 keyboard-focus-visible touch-manipulation"
                aria-label="Watch 2-minute product demonstration video"
              >
                <Play className="w-4 h-4" aria-hidden="true" />
                <span className="hidden xs:inline">Watch 2-min demo</span>
                <span className="xs:hidden">Demo</span>
              </button>
            </div>
            
            {/* Subtle indicator */}
            <div className="flex justify-center mt-2">
              <div className="w-8 h-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}