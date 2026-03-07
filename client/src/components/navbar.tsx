import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
const logoPath = "/construktr-logo.svg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled 
        ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg" 
        : "bg-gray-900 border-b border-gray-700/30"
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img 
                src={logoPath} 
                alt="CONSTRUKTR" 
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 flex-shrink-0">
            {location === "/" ? (
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/80 hover:text-electric-blue transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
              >
                Features
              </button>
            ) : (
              <Link href="/features" className="text-white/80 hover:text-electric-blue transition-colors duration-200 text-sm lg:text-base whitespace-nowrap">
                Features
              </Link>
            )}
            {location === "/" ? (
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-white/80 hover:text-electric-blue transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
              >
                Pricing
              </button>
            ) : (
              <Link href="/pricing" className="text-white/80 hover:text-electric-blue transition-colors duration-200 text-sm lg:text-base whitespace-nowrap">
                Pricing
              </Link>
            )}
            <Link href="/demos" className="text-white/80 hover:text-electric-blue transition-colors duration-200 text-sm lg:text-base whitespace-nowrap">
              Demos
            </Link>
            <Link href="/support" className="text-white/80 hover:text-electric-blue transition-colors duration-200 text-sm lg:text-base whitespace-nowrap">
              Support
            </Link>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white/80 hover:text-electric-blue transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
            >
              Reviews
            </button>
            <Link
              href="/get"
              className="text-white/80 hover:text-electric-blue transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
            >
              Login
            </Link>
            <Link href="/get">
              <button className="btn btn-primary">
                Start Free Trial
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-ghost p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 border-t border-gray-700"
          >
            <div className="px-4 py-4 space-y-4">
              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("features")}
                  className="block w-full text-left text-white/80 hover:text-electric-blue"
                >
                  Features
                </button>
              ) : (
                <Link 
                  href="/features" 
                  className="block w-full text-left text-white/80 hover:text-electric-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
              )}
              
              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="block w-full text-left text-white/80 hover:text-electric-blue"
                >
                  Pricing
                </button>
              ) : (
                <Link 
                  href="/pricing" 
                  className="block w-full text-left text-white/80 hover:text-electric-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              )}
              
              <Link 
                href="/demos" 
                className="block w-full text-left text-white/80 hover:text-electric-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demos
              </Link>
              
              <Link 
                href="/support" 
                className="block w-full text-left text-white/80 hover:text-electric-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
              
              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block w-full text-left text-white/80 hover:text-electric-blue"
                >
                  Reviews
                </button>
              ) : (
                <Link 
                  href="/#testimonials" 
                  className="block w-full text-left text-white/80 hover:text-electric-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
              )}
              
              <Link
                href="/get"
                className="block text-white/80 hover:text-electric-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link href="/get" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-electric-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-electric-blue/25">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
