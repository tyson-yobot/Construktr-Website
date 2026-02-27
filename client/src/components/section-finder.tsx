import { useEffect, useState } from 'react';
import { ArrowDown, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function SectionFinder() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollToPayments = () => {
    const paymentsSection = document.getElementById('instant-payments-section');
    if (paymentsSection) {
      paymentsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Add highlight effect
      paymentsSection.style.boxShadow = '0 0 0 4px var(--color-success)';
      paymentsSection.style.borderRadius = '12px';
      
      setTimeout(() => {
        paymentsSection.style.boxShadow = 'none';
      }, 3000);
      
      setHasScrolled(true);
      setTimeout(() => setIsVisible(false), 4000);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasScrolled) {
        setIsVisible(false);
      }
    }, 15000);
    
    return () => clearTimeout(timer);
  }, [hasScrolled]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-xl max-w-md"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5" />
            <span className="font-bold">Instant Payments Section Complete</span>
          </div>
          
          <p className="text-sm text-green-100 mb-3">
            All specifications implemented with authentic blue UI screenshots
          </p>
          
          <Button 
            onClick={scrollToPayments}
            size="sm"
            className="bg-[var(--clr-surface)] text-green-600 hover:bg-green-50 font-semibold"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Find Section Below
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-1 right-2 text-green-200 hover:text-white text-lg"
          >
            ×
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}