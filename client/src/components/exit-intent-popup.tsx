import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, Play, DollarSign, Clock } from "lucide-react";
import VideoWalkthroughModal from "./video-walkthrough-modal";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    let exitTimer: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the viewport
      if (e.clientY <= 0 && !hasTriggered) {
        exitTimer = setTimeout(() => {
          setIsVisible(true);
          setHasTriggered(true);
        }, 500); // Small delay to avoid accidental triggers
      }
    };

    const handleMouseEnter = () => {
      if (exitTimer) {
        clearTimeout(exitTimer);
      }
    };

    // Add some delay before enabling exit intent
    const enableTimer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }, 10000); // Enable after 10 seconds on site

    return () => {
      clearTimeout(enableTimer);
      clearTimeout(exitTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [hasTriggered]);

  const handleDemoClick = () => {
    setIsVisible(false);
    setIsVideoModalOpen(true);
  };

  const handleDiscountClick = () => {
    setIsVisible(false);
    // Scroll to pricing with discount highlight
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <Dialog open={isVisible} onOpenChange={setIsVisible}>
            <DialogContent className="max-w-lg p-0 bg-gradient-to-br from-slate-900 to-blue-900 border-blue-500/20 text-white">
              <DialogTitle className="sr-only">Special Offer</DialogTitle>
              <DialogDescription className="sr-only">Don't leave yet - see our demo or get a discount offer</DialogDescription>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative p-8"
              >
                {/* Close button */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    className="text-2xl font-bold mb-2"
                  >
                    Wait! Don't Leave Yet 👋
                  </motion.div>
                  <p className="text-blue-200">
                    Before you go, see how to save 15 hours/week and grow 40% faster
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  {/* Demo Option */}
                  <motion.button
                    onClick={handleDemoClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-xl transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-[var(--clr-surface)]/10 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">🎬 See Demo Video</div>
                      <div className="text-sm text-blue-100">60-second walkthrough of how it works</div>
                    </div>
                  </motion.button>

                  {/* Discount Option */}
                  <motion.button
                    onClick={handleDiscountClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white p-4 rounded-xl transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-[var(--clr-surface)]/10 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">💰 Get 50% Off First Month</div>
                      <div className="text-sm text-green-100">Only $24.50/month • Promo ends Aug 31st</div>
                    </div>
                  </motion.button>
                </div>

                {/* Trust elements */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Free forever plan</span>
                    </div>
                    <div>🔒 No commitments</div>
                    <div>✓ No credit card required</div>
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <VideoWalkthroughModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}