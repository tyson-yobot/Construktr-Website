import { motion } from "framer-motion";
import AppStoreBadgesEnhanced from "./app-store-badges-enhanced";
import { trackCustomEvent } from "@/lib/analytics-events";

export default function FooterEnhanced() {
  const handleNewsletterSignup = (email: string) => {
    trackCustomEvent('newsletter_signup', { source: 'footer', email_domain: email.split('@')[1] });
  };

  return (
    <footer className="bg-[var(--clr-surface)] border-t border-[var(--clr-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-[var(--clr-text)] mb-4">CONSTRUKTR</h3>
            <p className="text-[var(--clr-text-2)] text-sm mb-6">
              The complete job management platform built by contractors, for contractors.
            </p>
            
            {/* App Store Badges in Footer */}
            <AppStoreBadgesEnhanced location="footer" />
            
            {/* Promo Mention */}
            <p className="text-[var(--color-primary)] text-sm mt-4 font-medium">
              🎁 1 month free for the next 250 downloads
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-md font-semibold text-[var(--clr-text)] mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Features</a></li>
              <li><a href="#pricing" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Pricing</a></li>
              <li><a href="#integrations" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Integrations</a></li>
              <li><a href="#security" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Security</a></li>
            </ul>
          </div>

          {/* For Contractors */}
          <div>
            <h4 className="text-md font-semibold text-[var(--clr-text)] mb-4">For Contractors</h4>
            <ul className="space-y-2">
              <li><a href="#hvac-section" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">HVAC Job Scheduling App</a></li>
              <li><a href="#plumbing-section" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Plumbing Quote App</a></li>
              <li><a href="#electrical-section" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Electrical Job Management</a></li>
              <li><a href="#roofing-section" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Roofing Estimate App</a></li>
              <li><a href="#general-section" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">General Contractor App</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-md font-semibold text-[var(--clr-text)] mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/help" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Help Center</a></li>
              <li><a href="/contact" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Contact Us</a></li>
              <li><a href="/privacy" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Privacy Policy</a></li>
              <li><a href="/terms" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--clr-border)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--clr-text-2)] text-sm">
            © 2025 CONSTRUKTR Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Privacy</a>
            <a href="/terms" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Terms</a>
            <a href="/cookies" className="text-[var(--clr-text-2)] hover:text-[var(--clr-text)] text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}