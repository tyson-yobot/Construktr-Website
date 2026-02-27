import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, X, Gift } from "lucide-react";
import { trackCustomEvent } from "@/lib/analytics-events";

interface PromoData {
  totalSlots: number;
  usedSlots: number;
  isActive: boolean;
}

export default function PromoBarAdvanced() {
  const [promoData, setPromoData] = useState<PromoData>({ totalSlots: 250, usedSlots: 0, isActive: true });
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has dismissed the promo
    const dismissed = localStorage.getItem('promo_bar_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
      setIsLoading(false);
      return;
    }

    // Fetch promo data from lightweight server or use cached value
    const fetchPromoData = async () => {
      try {
        // Check cached data first
        const cachedData = localStorage.getItem('promo_data');
        const cachedTimestamp = localStorage.getItem('promo_data_timestamp');
        const cacheAge = Date.now() - (parseInt(cachedTimestamp || '0'));
        
        // Use cache if less than 5 minutes old
        if (cachedData && cacheAge < 300000) {
          setPromoData(JSON.parse(cachedData));
          setIsLoading(false);
          return;
        }

        // Simulate server call - replace with actual endpoint
        const simulatedUsed = Math.floor(Math.random() * 50) + 200; // Simulating 200-250 used
        const newPromoData = {
          totalSlots: 250,
          usedSlots: simulatedUsed,
          isActive: simulatedUsed < 250
        };

        // Cache the data
        localStorage.setItem('promo_data', JSON.stringify(newPromoData));
        localStorage.setItem('promo_data_timestamp', Date.now().toString());
        
        setPromoData(newPromoData);
      } catch (error) {
        // Fallback to default values
        setPromoData({ totalSlots: 250, usedSlots: 217, isActive: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPromoData();
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('promo_bar_dismissed', 'true');
    trackCustomEvent('promo_bar_dismissed', { timestamp: Date.now() });
  };

  const handleDownloadClick = () => {
    trackCustomEvent('promo_bar_clicked', { 
      button_id: 'download',
      context: 'promo_bar',
      timestamp: Date.now()
    });
    // Redirect to app stores with UTM
    window.open('https://apps.apple.com/app/construktr?utm_source=app-store-badge&utm_medium=site&utm_campaign=promo-bar', '_blank');
  };

  const handleTrialClick = () => {
    trackCustomEvent('promo_bar_clicked', { 
      button_id: 'start_trial',
      context: 'promo_bar',
      timestamp: Date.now()
    });
    window.location.href = '/get';
  };

  if (!isVisible || !promoData.isActive || isLoading) return null;

  const slotsLeft = promoData.totalSlots - promoData.usedSlots;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        className="bg-gradient-to-r from-[var(--clr-brand-500)] to-[var(--clr-brand-400)] text-white relative z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            
            {/* Left Side - Promo Message */}
            <div className="flex items-center space-x-3">
              <Gift className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold">
                🎁 1 month free for the next 250 downloads
              </span>
              <span className="text-xs bg-[var(--clr-surface)]/20 px-2 py-1 rounded-full">
                {slotsLeft} left
              </span>
            </div>

            {/* Right Side - CTAs */}
            <div className="flex items-center space-x-3">
              {/* Ghost Download Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownloadClick}
                className="text-white border-white/30 hover:bg-[var(--clr-surface)]/10 hover:text-white text-sm h-8"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              
              {/* Yellow Start Trial Button */}
              <Button
                size="sm"
                onClick={handleTrialClick}
                className="bg-[var(--clr-primary)] text-[var(--clr-brand-900)] hover:bg-[var(--clr-primary-600)] font-semibold text-sm h-8"
              >
                Start Free Trial
              </Button>
              
              {/* Dismiss Button */}
              <button
                onClick={handleDismiss}
                className="text-white/70 hover:text-white transition-colors ml-2"
                aria-label="Dismiss promo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}