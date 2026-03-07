import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { trackCTAStartTrialClicked, trackDownloadClicked } from "@/lib/analytics-events";
import CountdownTimer from "@/components/CountdownTimer";

interface PromoData {
  remainingDownloads: number;
  isActive: boolean;
}

export default function PromoBarSlim() {
  const [promoData, setPromoData] = useState<PromoData>({ remainingDownloads: 250, isActive: true });
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hide promo bar when user scrolls (to prevent stacking with StickyNavEnhanced)
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200; // Hide after scrolling 200px
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch remaining count from endpoint with localStorage fallback
  useEffect(() => {
    const fetchPromoData = async () => {
      try {
        // Endpoint stub - replace with actual API
        const response = await fetch('/api/promo/downloads-remaining');
        if (response.ok) {
          const data = await response.json();
          setPromoData(data);
          // Cache to localStorage
          localStorage.setItem('promo-data', JSON.stringify(data));
        } else {
          throw new Error('API unavailable');
        }
      } catch (error) {
        // Fallback to localStorage cache
        const cached = localStorage.getItem('promo-data');
        if (cached) {
          const parsedData = JSON.parse(cached);
          setPromoData(parsedData);
        }
        // If no cache, keep default values
      }
    };

    fetchPromoData();
  }, []);

  // Don't render if promo is inactive, no downloads remaining, or user has scrolled
  if (!isVisible || !promoData.isActive || promoData.remainingDownloads <= 0 || isScrolled) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
    // Store dismissal in localStorage
    localStorage.setItem('promo-bar-dismissed', 'true');
  };

  const handleDownload = () => {
    trackDownloadClicked('ios');
    // Trigger app download logic
    window.open('https://apps.apple.com/app/construktr', '_blank');
  };

  const handleStartTrial = () => {
    trackCTAStartTrialClicked('hero');
    // Scroll to pricing or open trial flow
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[var(--color-brand-900)] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 md:h-10">
          
          {/* Left Side - Promo Message with Countdown */}
          <div className="flex items-center space-x-3 text-sm">
            <span className="text-[var(--color-primary)]">🎁</span>
            <span className="hidden md:inline font-semibold">
              50% off/month for 6 months
            </span>
            <span className="hidden sm:inline md:hidden font-semibold">
              50% off for 6 months
            </span>
            <span className="sm:hidden font-semibold">
              50% off
            </span>
            <span className="hidden sm:inline text-white/50">•</span>
            <CountdownTimer 
              resetHours={168} 
              className="text-yellow-400"
              compact={true}
            />
            <span className="hidden sm:inline text-white/70 text-xs">
              left
            </span>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Download Button (Ghost) */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-1 px-3 py-1 text-xs font-medium text-white border border-white/30 rounded-full hover:bg-[var(--clr-surface)]/10 focus:outline-none focus:ring-1 focus:ring-white/50 transition-colors"
              aria-label="Download CONSTRUKTR mobile app from App Store"
              role="button"
              tabIndex={0}
            >
              <Download className="w-3 h-3" />
              <span className="hidden sm:inline">Download</span>
            </button>

            {/* Start Free Trial Button (Primary) */}
            <button
              onClick={handleStartTrial}
              className="inline-flex items-center px-3 py-1 text-xs font-medium bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-primary)]/90 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-colors"
              aria-label="Start your free trial, no setup fees, cancel anytime"
              role="button"
              tabIndex={0}
            >
              Start Free Trial
            </button>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white focus:outline-none focus:text-white transition-colors p-1"
              aria-label="Close promo banner"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}