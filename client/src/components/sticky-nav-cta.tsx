import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { trackCTAStartTrialClicked } from "@/lib/analytics-events";

export default function StickyNavCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const shouldShow = scrolled > 800 && !isDismissed;
      setIsVisible(shouldShow);
    };

    // Check if user has dismissed the sticky CTA
    const dismissed = localStorage.getItem('sticky_cta_dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('sticky_cta_dismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 border-b border-yellow-500 shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-4">
                <div className="text-black font-semibold">
                  Ready to transform your contractor business?
                </div>
                <Button
                  size="sm"
                  className="bg-black text-yellow-400 hover:bg-gray-800 font-bold"
                  onClick={() => {
                    trackCTAStartTrialClicked('sticky-nav');
                    window.location.href = '/get';
                  }}
                >
                  Start Free Trial
                </Button>
              </div>
              
              <button
                onClick={handleDismiss}
                className="text-black hover:text-gray-700 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}