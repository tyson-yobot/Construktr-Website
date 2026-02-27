import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Download, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import AppStoreBadges from "./app-store-badges";

interface StreamlinedCTAsProps {
  variant?: "primary" | "secondary" | "minimal";
  showDemo?: boolean;
  showAppDownload?: boolean;
  className?: string;
}

export default function StreamlinedCTAs({ 
  variant = "primary", 
  showDemo = true, 
  showAppDownload = true,
  className = ""
}: StreamlinedCTAsProps) {
  
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary"; 
  const isMinimal = variant === "minimal";

  return (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
      {/* Primary Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* App Download - Primary CTA */}
        {showAppDownload && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size={isPrimary ? "lg" : "default"}
              className={`
                ${isPrimary 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg" 
                  : "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3"
                } 
                rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
              `}
            >
              <Link href="/get">
                <Download className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        )}

        {/* Demo Video - Secondary CTA */}
        {showDemo && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Scroll to demo section
              const element = document.getElementById('video-demo');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <Button 
              variant="outline" 
              size={isPrimary ? "lg" : "default"}
              className={`
                ${isPrimary 
                  ? "border-2 border-white/20 bg-[var(--clr-surface)]/10 hover:bg-[var(--clr-surface)]/20 text-white font-semibold px-8 py-4 text-lg" 
                  : "border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-6 py-3"
                }
                rounded-xl backdrop-blur-sm transition-all duration-300
              `}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo (60s)
            </Button>
          </motion.button>
        )}
      </div>

      {/* App Store Badges - Only for Primary variant */}
      {isPrimary && showAppDownload && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AppStoreBadges variant="default" />
        </motion.div>
      )}

      {/* Minimal text for non-primary variants */}
      {!isPrimary && (
        <p className="text-sm text-gray-500 text-center">
          No credit card required • Cancel anytime
        </p>
      )}
    </div>
  );
}

// Quick CTA for sections that just need simple download
export function QuickDownloadCTA({ className = "" }: { className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          asChild 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl"
        >
          <Link href="/get">
            Download App
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}

// Demo-only CTA for video sections
export function DemoOnlyCTA({ className = "" }: { className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          variant="outline"
          onClick={() => {
            const element = document.getElementById('video-demo');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl"
        >
          <Play className="w-4 h-4 mr-2" />
          See How It Works
        </Button>
      </motion.div>
    </div>
  );
}