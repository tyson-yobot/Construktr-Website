import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Calendar, X, Sparkles } from "lucide-react";

export default function EnhancedStickyMobileFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    // Track the conversion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'app_download_click', {
        'event_category': 'engagement',
        'event_label': 'sticky_mobile_footer'
      });
    }
    
    // Redirect to app store
    window.open('https://apps.apple.com/app/construktr', '_blank');
  };

  const handleBookDemo = () => {
    // Track demo booking click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'demo_booking_click', {
        'event_category': 'engagement',
        'event_label': 'sticky_mobile_footer'
      });
    }
    
    // Scroll to demo booking section
    const demoSection = document.getElementById('demo-booking');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="bg-gradient-to-r from-electric-blue to-blue-600 shadow-lg border-t border-blue-700/20">
          <div className="px-4 py-3">
            <AnimatePresence>
              {isExpanded ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-3 overflow-hidden"
                >
                  <div className="text-white text-sm mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">CONSTRUKTR™ Mobile App</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsExpanded(false)}
                        className="text-white hover:bg-[var(--clr-surface)]/10 p-1 h-auto"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-blue-100 text-xs">
                      Get AI-powered quotes, smart scheduling, and instant payments. 
                      Trusted by 2,500+ contractors.
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
            
            <div className="flex items-center gap-2">
              <Button
                onClick={handleDownload}
                className="flex-1 bg-[var(--clr-surface)] hover:bg-gray-100 text-electric-blue font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-1" />
                📲 Download Free App
              </Button>
              
              <Button
                onClick={handleBookDemo}
                variant="outline"
                className="flex-1 border-white/30 text-white hover:bg-[var(--clr-surface)]/10 rounded-xl font-bold py-3"
              >
                <Calendar className="w-4 h-4 mr-1" />
                📅 Book a Demo
              </Button>
              
              {!isExpanded && (
                <Button
                  variant="outline"
                  onClick={() => setIsExpanded(true)}
                  className="border-white/30 text-white hover:bg-[var(--clr-surface)]/10 rounded-xl p-3"
                >
                  <Sparkles className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}