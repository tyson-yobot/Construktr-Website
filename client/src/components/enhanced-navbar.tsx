import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Mail, Shield, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const construktrLogo = "/construktr-logo.svg";

export default function EnhancedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--clr-surface)]/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      {/* Trust Bar - Hidden on Mobile to prevent double header */}
      <div className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 text-white text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-32 lg:h-36">
          {/* Logo and Brand */}
          <Link href="/">
            <div className="flex flex-col items-start group cursor-pointer">
              <img 
                src={construktrLogo} 
                alt="CONSTRUKTR" 
                className="h-24 md:h-28 lg:h-32 w-auto group-hover:scale-105 transition-transform duration-200"
              />
              <div className="text-xs md:text-sm text-[var(--clr-text-2)] font-bold mt-1 group-hover:text-white transition-colors duration-200">
                Save Time. Make More Money. Eliminate Headaches.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/features">
              <span className="text-gray-700 hover:text-white transition-colors duration-200 font-semibold text-base">
                Features
              </span>
            </Link>
            <Link href="/pricing">
              <span className="text-gray-700 hover:text-white transition-colors duration-200 font-semibold text-base">
                Pricing
              </span>
            </Link>
            <Link href="/demos">
              <span className="text-gray-700 hover:text-white transition-colors duration-200 font-semibold text-base">
                Demo
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-700 hover:text-white transition-colors duration-200 font-semibold text-base">
                Blog
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-white transition-colors duration-200 font-semibold text-base">
                About
              </span>
            </Link>
            <Link href="/support">
              <span className="text-gray-700 hover:text-white transition-colors duration-200 font-semibold text-base">
                Support
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[var(--clr-text-2)] text-sm">
              <Mail className="w-4 h-4" />
              <span>support@construktr.com</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="text-[var(--clr-text-2)] text-sm">
              <span className="text-green-600 font-semibold">2,500+</span> active contractors
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              className="btn btn-ghost"
              onClick={() => {
                const element = document.getElementById('video-demo');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Watch Demo
            </button>
            <Link href="/get">
              <button className="btn btn-primary">Start Free Trial</button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[var(--clr-text-2)] hover:text-white hover:bg-gray-100 transition-colors duration-200"
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
            className="lg:hidden bg-[var(--clr-surface)] border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/features">
                <div className="block py-2 text-gray-700 hover:text-white transition-colors duration-200">
                  Features
                </div>
              </Link>
              <Link href="/pricing">
                <div className="block py-2 text-gray-700 hover:text-white transition-colors duration-200">
                  Pricing
                </div>
              </Link>
              <Link href="/demos">
                <div className="block py-2 text-gray-700 hover:text-white transition-colors duration-200">
                  Demo
                </div>
              </Link>
              <Link href="/blog">
                <div className="block py-2 text-gray-700 hover:text-white transition-colors duration-200">
                  Blog
                </div>
              </Link>
              <Link href="/about">
                <div className="block py-2 text-gray-700 hover:text-white transition-colors duration-200">
                  About
                </div>
              </Link>
              <Link href="/support">
                <div className="block py-2 text-gray-700 hover:text-white transition-colors duration-200">
                  Support
                </div>
              </Link>
              
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById('video-demo');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                >
                  Learn More
                </Button>
                <Link href="/get">
                  <Button className="button-primary w-full">
                    Start Free Trial
                  </Button>
                </Link>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-[var(--clr-text-2)] text-sm mb-2">
                  <Mail className="w-4 h-4" />
                  <span>support@construktr.com</span>
                </div>
                <div className="text-[var(--clr-text-2)] text-sm">
                  <span className="text-green-600 font-semibold">2,500+</span> active contractors trust CONSTRUKTR
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}