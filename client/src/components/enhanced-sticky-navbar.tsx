import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const construktrLogo = "/construktr-logo.svg";

export default function EnhancedStickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDemo = () => {
    const element = document.getElementById('video-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg" 
          : "bg-gray-900 border-b border-gray-700/30"
        }
        transition-all duration-300
      `}
    >
      {/* Trust Bar - Only visible when not scrolled */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 py-2"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center space-x-6 text-white text-sm">
                <span>🏆 #1 Contractor Platform 2024</span>
                <span>⭐ 4.9/5 Rating</span>
                <span>🛡️ SOC 2 Certified</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          flex items-center justify-between 
          ${isScrolled ? "h-24" : "h-32 md:h-36"}
          transition-all duration-300
        `}>
          {/* Logo */}
          <Link href="/">
            <motion.div
              animate={{ 
                scale: isScrolled ? 0.8 : 1 
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center group cursor-pointer"
            >
              <img 
                src={construktrLogo} 
                alt="CONSTRUKTR" 
                className={`
                  ${isScrolled ? "h-32" : "h-40 md:h-48"} 
                  w-auto group-hover:scale-105 transition-all duration-200
                `}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Always visible */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
            <Link href="/features">
              <span className="text-white hover:text-blue-400 transition-colors font-medium text-sm xl:text-base whitespace-nowrap">
                Features
              </span>
            </Link>
            <Link href="/pricing">
              <span className="text-white hover:text-blue-400 transition-colors font-medium text-sm xl:text-base whitespace-nowrap">
                Pricing
              </span>
            </Link>
            <Link href="/about">
              <span className="text-white hover:text-blue-400 transition-colors font-medium text-sm xl:text-base whitespace-nowrap">
                About
              </span>
            </Link>
          </div>

          {/* Always Visible CTAs */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
            <Button 
              className="button-secondary px-3 xl:px-4 py-2 text-sm xl:text-base whitespace-nowrap"
              onClick={scrollToDemo}
            >
              <Play className="w-4 h-4 mr-1 xl:mr-2" />
              Book a Demo
            </Button>
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-3 xl:px-6 py-2 text-sm xl:text-base shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              <Link href="/get">
                <Download className="w-4 h-4 mr-1 xl:mr-2" />
                Download Free App
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-blue-400 hover:bg-[var(--clr-surface)]/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-gray-800 border-t border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/features">
                <div className="block py-2 text-white hover:text-blue-400 transition-colors font-medium">
                  Features
                </div>
              </Link>
              <Link href="/pricing">
                <div className="block py-2 text-white hover:text-blue-400 transition-colors font-medium">
                  Pricing
                </div>
              </Link>
              <Link href="/about">
                <div className="block py-2 text-white hover:text-blue-400 transition-colors font-medium">
                  About
                </div>
              </Link>
              
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 text-white hover:bg-gray-700"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(scrollToDemo, 100);
                  }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Book a Demo
                </Button>
                <Link href="/get">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
                    <Download className="w-4 h-4 mr-2" />
                    Download Free App
                  </Button>
                </Link>
              </div>

              <div className="pt-4 border-t border-gray-700 text-center">
                <p className="text-sm text-gray-400">
                  <span className="text-green-400 font-semibold">2,500+</span> active contractors trust CONSTRUKTR
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}