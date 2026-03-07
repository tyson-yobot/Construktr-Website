import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Award, 
  Users, 
  Clock,
  Star,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
const construktrLogo = "/construktr-logo.svg";

export default function EnhancedFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Get Weekly Tips + Early Access Updates
            </h3>
            <p className="text-slate-300 mb-6">
              Join 15,000+ contractors getting exclusive insights, new features, and business growth tips delivered weekly.
            </p>
            
            {/* Email/Phone Toggle Options */}
            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Enter your email or phone number" 
                  className="bg-slate-800 border-slate-600 text-white flex-1"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Access
                </Button>
              </div>
              
              {/* Checkbox for app trial */}
              <div className="flex items-center justify-center space-x-2 text-sm">
                <input 
                  type="checkbox" 
                  id="try-app" 
                  className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                  defaultChecked
                />
                <label htmlFor="try-app" className="text-slate-300">
                  ✅ Yes, I want to try CONSTRUKTR and get SMS link to download
                </label>
              </div>
              
              {/* Trust micro-copy for SMS */}
              <div className="text-center">
                <p className="text-xs text-slate-400 italic">
                  We'll never spam. Unsub anytime.
                </p>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 mt-1">
              Get tips via email + app download link via SMS. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>



      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              🚀 Ready to book more jobs? Download CONSTRUKTR now.
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of contractors who are already growing their business with smart scheduling, AI quotes, and instant payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg"
                className="bg-[var(--clr-surface)] text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/get">
                  Download Free App
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-[var(--clr-surface)] hover:text-blue-600 font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300"
              >
                <Link href="/demos">
                  Watch Demo First
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={construktrLogo} 
                alt="CONSTRUKTR" 
                className="h-12 w-auto rounded-lg"
              />
              <div>
                <div className="text-white font-bold text-xl">
                  CONSTRUKTR<span className="text-blue-400">™</span>
                </div>
                <Badge variant="outline" className="text-xs border-blue-500 text-blue-300">
                  Pro Platform
                </Badge>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              The complete service business management platform trusted by 2,500+ professionals worldwide.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Best Service Platform 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Users className="w-4 h-4 text-blue-400" />
                <span>2,500+ Active Businesses</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demos" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/get" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Download App
                </Link>
              </li>
              <li>
                <a href="mailto:support@construktr.ai?subject=API Documentation Request" className="text-slate-400 hover:text-white transition-colors duration-200">
                  API Documentation
                </a>
              </li>
              <li>
                <Link href="/features" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Investors
                </Link>
              </li>
              <li>
                <a href="mailto:careers@construktr.ai?subject=Career Inquiry" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="mailto:press@construktr.ai?subject=Press Kit Request" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Press Kit
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <a href="mailto:partnerships@construktr.ai?subject=Partnership Inquiry" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/support" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:support@construktr.ai?subject=Support Request" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="mailto:training@construktr.ai?subject=Training Request" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Training
                </a>
              </li>
              <li>
                <a href="https://status.construktr.ai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
                  System Status
                </a>
              </li>
            </ul>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span>support@construktr.com</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span>1-800-CONSTRUKTR</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Austin, TX</span>
              </div>
            </div>

            {/* App Store Download Buttons */}
            <div className="space-y-3">
              <h5 className="text-white font-medium text-sm mb-3">Download the App</h5>
              <div className="space-y-2">
                <a
                  href="https://apps.apple.com/app/construktr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 group"
                >
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-400">Download on the</div>
                    <div className="text-white text-sm font-medium -mt-0.5">App Store</div>
                  </div>
                </a>
                
                <a
                  href="https://play.google.com/store/apps/details?id=com.construktr.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 group"
                >
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-slate-400">Get it on</div>
                    <div className="text-white text-sm font-medium -mt-0.5">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-slate-700" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <a href="mailto:security@construktr.ai?subject=Security Inquiry" className="text-slate-400 hover:text-white transition-colors duration-200">
              Security
            </a>
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
              GDPR
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a href="https://twitter.com/construktr_ai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/construktr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/construktr.ai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/construktr.ai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/@construktr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-500 text-center lg:text-right">
            <p>© 2024 CONSTRUKTR. All rights reserved.</p>
            <p className="mt-1">Built with ❤️ for service professionals.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}