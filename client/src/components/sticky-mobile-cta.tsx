import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { Sparkles } from "lucide-react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let scrollPastHero = false;
    let pricingVisible = false;

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      scrollPastHero = currentScrollY > heroHeight * 0.8;
      updateVisibility();
    };

    const updateVisibility = () => {
      setIsVisible(scrollPastHero && !pricingVisible);
    };

    const pricingSection = document.getElementById('pricing');
    let observer: IntersectionObserver | null = null;

    if (pricingSection) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            pricingVisible = entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight * 0.5;
            updateVisibility();
          });
        },
        {
          threshold: [0, 0.1, 0.25]
        }
      );
      observer.observe(pricingSection);
    }

    let timeoutId: number | null = null;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-blue-700 shadow-2xl border-t border-white/20">
            <div className="px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-white flex-1 min-w-0">
                  <Sparkles className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                  <span className="text-sm font-medium truncate">
                    Save 8+ hours/week with AI
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href="https://apps.apple.com/app/construktr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-black rounded-lg hover:bg-gray-900 transition-colors"
                    aria-label="Download on the App Store"
                    data-testid="button-mobile-cta-appstore"
                  >
                    <SiApple className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.construktr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-black rounded-lg hover:bg-gray-900 transition-colors"
                    aria-label="Get it on Google Play"
                    data-testid="button-mobile-cta-googleplay"
                  >
                    <SiGoogleplay className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
