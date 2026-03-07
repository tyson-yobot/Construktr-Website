import { Link } from "wouter";
import { Shield, Award, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
const construktrLogo = "/construktr-logo.svg";
import AppStoreBadges from "./app-store-badges";

export default function UnifiedFooter() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border-light)]" role="contentinfo" aria-label="Site footer">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Logo, Description, and Trust Badges */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <img 
                src={construktrLogo} 
                alt="CONSTRUKTR Logo" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-[var(--color-text-primary)] font-bold text-xl">CONSTRUKTR</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
              AI-powered job management for contractors. Quote, schedule, get paid, all in one app.
            </p>
            
            {/* Trust Badges */}
            <div className="flex gap-4 mb-6">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-1 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-colors">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs text-[var(--color-text-secondary)]">Stripe</span>
              </div>
              
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-1 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs text-[var(--color-text-secondary)]">Supabase</span>
              </div>
              
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-1 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-xs text-[var(--color-text-secondary)]">QuickBooks</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="https://facebook.com/construktr.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/construktr_ai" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/construktr" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2">
            <h3 className="text-[var(--color-text-primary)] font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/features" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demos" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Demos
                </Link>
              </li>
              <li>
                <Link href="/get" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="text-[var(--color-text-primary)] font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2">
            <h3 className="text-[var(--color-text-primary)] font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/terms" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="md:col-span-2">
            <h3 className="text-[var(--color-text-primary)] font-semibold text-sm mb-4">Download App</h3>
            <AppStoreBadges variant="footer" className="flex-col items-start gap-3" />
          </div>
        </div>

        <Separator className="my-8 bg-[var(--color-border-light)]" />

        {/* Bottom Bar with Automate AI Branding */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-[var(--color-text-secondary)] text-sm">
              © 2026 Automate AI LLC. All rights reserved.
            </p>
            <p className="text-[var(--color-text-tertiary)] text-xs mt-1">
              CONSTRUKTR is a product of Automate AI LLC, Scottsdale, AZ
            </p>
          </div>
          
          {/* Enhanced Automate AI Ecosystem Branding */}
          <div className="text-center md:text-right">
            <p className="text-[var(--color-text-secondary)] text-sm font-medium">
              <span className="text-[var(--color-text-tertiary)]">Part of the </span>
              <a 
                href="https://automateai.bot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-semibold transition-colors underline decoration-1 underline-offset-2"
              >
                Automate AI Ecosystem
              </a>
            </p>
            <p className="text-[var(--color-text-tertiary)] text-xs mt-1">
              AI-powered tools for modern businesses
            </p>
          </div>
        </div>
      </div>

      {/* SEO Content Strip */}
      <div className="bg-[var(--color-bg)] border-t border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-[var(--color-text-tertiary)] text-xs leading-relaxed text-center">
            Serving contractors nationwide: General contractors, HVAC technicians, plumbers, electricians, 
            roofers, landscapers, handymen, painters, flooring installers, and home improvement specialists. 
            Available on iOS and Android mobile devices.
          </p>
        </div>
      </div>
    </footer>
  );
}
