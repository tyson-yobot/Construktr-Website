import { Link } from "wouter";
import { Shield, Award, CheckCircle, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import construktrLogo from "@assets/Construktr_Logo_Transparent_1024_x_1024_1772187695111.jpg";
import AppStoreBadges from "./app-store-badges";

export default function SEOFooter() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border-light)]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo and Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <img 
                src={construktrLogo} 
                alt="CONSTRUKTR™ Logo" 
                className="h-8 w-auto mr-3"
              />
              <span className="text-[var(--color-text-primary)] font-bold text-lg">CONSTRUKTR™</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              CONSTRUKTR™ is the all-in-one AI app for contractors, handymen, HVAC, roofing, plumbing, landscaping, and more.
            </p>
          </div>

          {/* Trust Icons */}
          <div className="text-center">
            <h4 className="text-[var(--color-text-primary)] font-semibold text-sm mb-4">Security & Reliability</h4>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-2 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs text-[var(--color-text-secondary)]">SOC 2</span>
                <span className="text-xs text-[var(--color-text-secondary)]">Certified</span>
              </div>
              
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-2 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-colors">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs text-[var(--color-text-secondary)]">PCI</span>
                <span className="text-xs text-[var(--color-text-secondary)]">Compliant</span>
              </div>
              
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-2 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-xs text-[var(--color-text-secondary)]">99.9%</span>
                <span className="text-xs text-[var(--color-text-secondary)]">Uptime</span>
              </div>
            </div>
          </div>

          {/* App Store Download Links */}
          <div className="text-center md:text-right">
            <h4 className="text-[var(--color-text-primary)] font-semibold text-sm mb-4">Download Mobile App</h4>
            <AppStoreBadges variant="footer" className="justify-center md:justify-end mb-4" />
            <div className="flex flex-col space-y-2">
              <Link 
                href="/terms" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-xs transition-colors inline-block"
              >
                Terms of Service
              </Link>
              <Link 
                href="/privacy" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-xs transition-colors inline-block"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/support" 
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-xs transition-colors inline-block"
              >
                Support Center
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-[var(--color-border-light)]" />

        {/* Bottom Row - Copyright and Additional SEO Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-[var(--color-text-secondary)] text-sm">
              © 2024 CONSTRUKTR™. All rights reserved.
            </p>
            <p className="text-[var(--color-text-tertiary)] text-xs mt-1">
              Professional contractor management software trusted by thousands
            </p>
          </div>
          
          {/* SEO Keywords Footer */}
          <div className="text-center md:text-right">
            <p className="text-[var(--color-text-tertiary)] text-xs leading-relaxed max-w-md">
              Construction project management • Field service software • Contractor CRM • 
              Job scheduling app • Invoice generator • Quote calculator • Route optimization
            </p>
          </div>
        </div>
      </div>

      {/* Additional SEO Content Strip */}
      <div className="bg-[var(--color-surface)]/50 border-t border-[var(--color-border-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-[var(--color-text-tertiary)] text-xs leading-relaxed">
              Serving contractors nationwide: General contractors, HVAC technicians, plumbers, electricians, 
              roofers, landscapers, handymen, painters, flooring installers, and home improvement specialists. 
              Available on iOS and Android mobile devices.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}