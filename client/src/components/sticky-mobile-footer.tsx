import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, X } from "lucide-react";

export default function StickyMobileFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow && !isDismissed);
    };

    // Check if user is on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDownload = () => {
    // Track conversion event
    console.log('Mobile footer download clicked');
    
    // For now, just scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-r from-blue-600 to-purple-600 border-t border-blue-500/20 shadow-2xl"
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--clr-surface)]/10 rounded-full flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">📲 Download Free</div>
              <div className="text-blue-100 text-xs">Save 15 hours/week • 15-day trial</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <motion.button
              onClick={handleDownload}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-sm"
            >
              Start Free Trial
            </motion.button>
            
            <button
              onClick={() => setIsDismissed(true)}
              className="w-8 h-8 bg-[var(--clr-surface)]/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-[var(--clr-surface)]/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="h-1 bg-[var(--clr-surface)]/20">
          <motion.div
            className="h-full bg-[var(--clr-surface)]/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}