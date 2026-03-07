import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import construktrLogo from "@assets/Construktr_Logo_Transparent_1024_x_1024_1772187695111.jpg";

export default function UnifiedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleStartTrial = () => {
    navigate('/get');
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    navigate('/get');
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ 
        y: 0,
        height: isScrolled ? "80px" : "auto"
      }}
      transition={{ duration: 0.3 }}
      className={`
        fixed top-0 left-0 right-0 z-50 
        ${isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--color-border-light)] shadow-sm" 
          : "bg-white border-b border-[var(--color-border-light)]"
        }
        transition-all duration-300
      `}
    >
      {/* Live Apps Banner - Only visible when not scrolled */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[var(--color-primary)] py-2"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center space-x-6 text-sm font-medium" style={{ color: '#ffffff' }}>
                <span className="text-white">📱 Available on App Store & Google Play</span>
                <span className="text-white hidden sm:inline">·</span>
                <span className="text-white hidden sm:inline">63+ Features · AI-Powered · Offline-First</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          flex items-center justify-between 
          ${isScrolled ? "h-20" : "h-24"}
          transition-all duration-300
        `}>
          {/* Logo */}
          <Link href="/">
            <motion.div
              animate={{ scale: isScrolled ? 0.85 : 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img 
                src={construktrLogo} 
                alt="CONSTRUKTR" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-12"
                }`}
                loading="eager"
                decoding="async"
              />
              <span className={`font-extrabold tracking-tight transition-all duration-300 text-[var(--color-text-primary)] ${
                isScrolled ? "text-2xl" : "text-3xl"
              }`}>CONSTRUKTR</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Canonical Structure */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/features">
              <span className="text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium cursor-pointer">
                Features
              </span>
            </Link>
            <Link href="/pricing">
              <span className="text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium cursor-pointer">
                Pricing
              </span>
            </Link>
            <Link href="/support">
              <span className="text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium cursor-pointer">
                Support
              </span>
            </Link>
          </div>

          {/* Right Actions - Get Started Free (primary) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Get Started Free - Primary CTA with supporting text */}
            <div className="flex flex-col items-center">
              <Button
                onClick={handleStartTrial}
                className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] font-semibold px-6"
                style={{ borderRadius: '8px' }}
                data-testid="button-header-trial"
              >
                Get Started Free
              </Button>
              <span className="text-[10px] text-[var(--color-text-secondary)] mt-1">
                iOS & Android · Free Forever
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[var(--color-text-primary)] p-2 hover:bg-[var(--color-surface)] rounded-md transition-colors"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-[var(--color-border-light)] shadow-lg"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation */}
              <Link href="/features">
                <span className="block w-full text-left text-[var(--color-text-primary)] hover:text-[var(--color-primary)] py-3 px-4 rounded-md hover:bg-[var(--color-surface)] transition-colors font-medium cursor-pointer">
                  Features
                </span>
              </Link>
              <Link href="/pricing">
                <span className="block w-full text-left text-[var(--color-text-primary)] hover:text-[var(--color-primary)] py-3 px-4 rounded-md hover:bg-[var(--color-surface)] transition-colors font-medium cursor-pointer">
                  Pricing
                </span>
              </Link>
              <Link href="/support">
                <span className="block w-full text-left text-[var(--color-text-primary)] hover:text-[var(--color-primary)] py-3 px-4 rounded-md hover:bg-[var(--color-surface)] transition-colors font-medium cursor-pointer">
                  Support
                </span>
              </Link>
              
              <div className="pt-4 border-t border-[var(--color-border-light)] space-y-3">
                {/* Mobile CTAs */}
                <Button
                  onClick={handleStartTrial}
                  className="w-full bg-[var(--color-primary)] text-white font-semibold py-3 hover:bg-[var(--color-primary-hover)] transition-colors"
                  style={{ borderRadius: '8px', height: '48px' }}
                  data-testid="button-mobile-trial"
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}