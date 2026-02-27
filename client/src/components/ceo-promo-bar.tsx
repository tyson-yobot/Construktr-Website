import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Clock } from "lucide-react";

export default function CEOPromoBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Check if user has dismissed the promo
    const dismissed = localStorage.getItem('promo_dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
      return;
    }

    // Set countdown to 7 days from now (example)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('promo_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      className="promo-bar"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Clock className="w-4 h-4" />
          <span>
            <strong>Limited Time:</strong> 1 month free for next 250 downloads
          </span>
          <div className="text-sm opacity-90">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left
          </div>
        </div>
        
        <button
          onClick={handleDismiss}
          className="text-white/80 hover:text-white transition-colors p-1"
          aria-label="Close promo"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}