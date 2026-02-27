import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Info } from "lucide-react";
import { trackCTAStartTrialClicked } from "@/lib/analytics-events";

export default function StickyNavEnhanced() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const shouldShow = scrolled > 800 && !isDismissed;
      setIsVisible(shouldShow);
    };

    // Check if user has dismissed the sticky nav
    const dismissed = localStorage.getItem('sticky_nav_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('sticky_nav_dismissed', 'true');
  };

  const handleTrialClick = () => {
    trackCTAStartTrialClicked('sticky-nav');
    window.location.href = '/get';
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[var(--clr-surface)] border-b border-[var(--clr-border)] shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-4">
                <div className="text-[var(--clr-text)] font-semibold">
                  Ready to transform your contractor business?
                </div>
                
                {/* Trial Info with Tooltip */}
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] transition-colors"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[var(--clr-brand-900)] text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-10"
                    >
                      <strong>Free to start</strong> — No credit card required
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-[var(--clr-brand-900)]"></div>
                    </motion.div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  onClick={handleTrialClick}
                  className="btn-primary h-9"
                >
                  Start Free Trial
                </Button>
                
                <button
                  onClick={handleDismiss}
                  className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}