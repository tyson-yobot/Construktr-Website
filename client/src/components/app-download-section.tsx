import { motion } from "framer-motion";
import { Download, Smartphone, Shield, Clock } from "lucide-react";
import AppStoreBadgesEnhanced from "./app-store-badges-enhanced";

export default function AppDownloadSection() {
  return (
    <section 
      id="download"
      className="relative py-20 overflow-hidden"
      aria-labelledby="download-heading"
      data-testid="app-download-section"
    >
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0243D5] via-[#0355f0] to-[#0239bd]" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main Headline */}
          <h2 
            id="download-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Download the App, Start Building Smarter
          </h2>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            AI-powered quotes, smart scheduling, and same-day payments — all from your phone.
            Free to start, no credit card required.
          </p>

          {/* App Store Badges - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <AppStoreBadgesEnhanced 
              location="download_section" 
              className="justify-center"
            />
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-10"
            data-testid="trust-indicators"
          >
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-medium">Encrypted & Secure</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-medium">Free Plan Available</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Smartphone className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-medium">iOS & Android</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Download className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm font-medium">No Setup Fees</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
