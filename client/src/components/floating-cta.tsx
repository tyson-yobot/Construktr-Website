import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after user scrolls down 500px
      const scrolled = window.scrollY > 500;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 md:hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-4 border border-blue-400/20 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm mb-1">
                  Ready to grow your business?
                </p>
                <p className="text-blue-100 text-xs">
                  Join 2,500+ contractors using CONSTRUKTR™
                </p>
              </div>
              <Button
                onClick={handleDismiss}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-[var(--clr-surface)]/20 p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex space-x-2 mt-3">
              <Button 
                size="sm"
                className="bg-[var(--clr-surface)] text-blue-600 hover:bg-gray-100 font-semibold text-xs px-4 py-2 rounded-xl flex-1"
              >
                <Download className="w-4 h-4 mr-1" />
                Download Now
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-[var(--clr-surface)]/20 text-xs px-3 py-2 rounded-xl"
              >
                Demo
              </Button>
            </div>
          </div>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 animate-pulse -z-10"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}