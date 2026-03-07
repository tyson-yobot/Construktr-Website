import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Play, Star, Users, Award, CheckCircle, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import VideoDemoModal from "@/components/video-demo-modal";
import VideoWalkthroughModal from "./video-walkthrough-modal";
import IndustryTargeting from "./industry-targeting";
import AppStoreBadges from "./app-store-badges";
import OptimizedImage from "./optimized-image";
import SMSAppLink from "./sms-app-link";
import { trackCTAStartTrialClicked, trackCTABookDemoClicked, trackTradeChipClicked } from "@/lib/analytics-events";
import construktrLogo from "@assets/Construktr_Logo_Transparent_1024_x_1024_1772187695111.jpg";
import appScreenshotImage from "/screens/dashboard.png";
import StandardizedPhoneMockup from "./standardized-phone-mockup";

export default function EnhancedHero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false);


  return (
    <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Logo Watermark - Positioned left/top so phone never covers it */}
      <img
        src={construktrLogo}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute z-0 opacity-[.06]
          hidden md:block
          w-[min(380px,28vw)]
          left-[clamp(24px,5vw,80px)]
          top-[clamp(24px,6vh,72px)]
          mix-blend-screen
        "
        width="380"
        height="121"
        loading="eager"
        decoding="async"
      />
      
      {/* Starfield Background Effect */}
      <div className="stars"></div>
      


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 text-left lg:text-left">
            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-start"
            >
              <Badge className="chip">
                <Award className="w-4 h-4 mr-2" />
                #1 Contractor Platform 2024
              </Badge>
            </motion.div>

            {/* Bold Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="h1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ color: 'var(--clr-text)' }}>
                Best Contractor Job Management
              </h1>
              
              <p className="subtle text-xl sm:text-2xl font-medium max-w-2xl" style={{ color: 'var(--clr-text-2)' }}>
                30-second quotes. Smarter schedules. Same-day payments. Built for crews in all 50 states.
              </p>
              
              {/* ROI Teaser */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-green-500/20 border border-green-400/30 rounded-xl px-6 py-3 max-w-md mx-auto"
              >
                <div className="text-green-300 text-lg font-bold">
                  ROI 800% avg • Pays for itself with your first job
                </div>
              </motion.div>
              
              {/* Quick 10-Second Process Animation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-start gap-2 pt-4"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    backgroundColor: ["rgba(251, 191, 36, 0.2)", "rgba(251, 191, 36, 0.4)", "rgba(251, 191, 36, 0.2)"]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="px-3 py-1 rounded-full text-sm font-bold text-yellow-400 border border-yellow-400/30"
                >
                  📝 Quote
                </motion.div>
                <motion.div
                  animate={{ 
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-yellow-400 text-xl"
                >
                  →
                </motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    backgroundColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.4)", "rgba(59, 130, 246, 0.2)"]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                  className="px-3 py-1 rounded-full text-sm font-bold text-blue-400 border border-blue-400/30"
                >
                  📅 Schedule
                </motion.div>
                <motion.div
                  animate={{ 
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: 0.25,
                    ease: "easeInOut"
                  }}
                  className="text-blue-400 text-xl"
                >
                  →
                </motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    backgroundColor: ["rgba(34, 197, 94, 0.2)", "rgba(34, 197, 94, 0.4)", "rgba(34, 197, 94, 0.2)"]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                  className="px-3 py-1 rounded-full text-sm font-bold text-green-400 border border-green-400/30"
                >
                  💰 Paid
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Full Trade Coverage Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="text-center">
                <p className="text-lg text-gray-300 font-medium mb-4">
                  Trusted by contractors in all trades:
                </p>
              </div>
              
              {/* Trade Chips Navigation - Scroll to sections */}
              <nav className="trade-chips w-full">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-3 min-w-max pb-2 justify-center md:justify-start">
                    {[
                      { name: "HVAC", emoji: "❄️", color: "from-cyan-500 to-cyan-600", href: "#trade-hvac" },
                      { name: "Plumbing", emoji: "🔧", color: "from-blue-500 to-blue-600", href: "#trade-plumbing" },
                      { name: "Electrical", emoji: "⚡", color: "from-yellow-500 to-yellow-600", href: "#trade-electrical" },
                      { name: "Roofing", emoji: "🏠", color: "from-red-500 to-red-600", href: "#trade-roofing" },
                      { name: "Painting", emoji: "🎨", color: "from-purple-500 to-purple-600", href: "#trade-painting" },
                      { name: "Landscaping", emoji: "🌱", color: "from-emerald-500 to-emerald-600", href: "#trade-landscaping" },
                      { name: "Handyman", emoji: "🔨", color: "from-orange-500 to-orange-600", href: "#trade-handyman" },
                      { name: "General", emoji: "🏗️", color: "from-gray-500 to-gray-600", href: "#trade-general" }
                    ].map((trade, index) => (
                      <motion.a
                        key={trade.name}
                        href={trade.href}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        onClick={(e) => {
                          e.preventDefault();
                          trackTradeChipClicked(trade.name);
                          const element = document.querySelector(trade.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className={`chip bg-gradient-to-r ${trade.color} text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer`}
                      >
                        <span className="text-base">{trade.emoji}</span>
                        <span>{trade.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </nav>
                
              {/* "Join 2,500+ contractors..." Banner */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-4 bg-[var(--clr-surface)]/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3"
              >
                <div className="flex flex-wrap justify-center items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-yellow-400" />
                    <span>Join <span className="font-bold text-yellow-400">2,500+</span> active contractors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span>Save <span className="font-bold text-green-400">8 hours/week</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-blue-400" />
                    <span>Get paid <span className="font-bold text-blue-400">3x faster</span></span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-start items-center gap-8 text-white"
            >
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">2,500+ active contractors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">8 hours saved/week</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">3× faster payments</span>
              </div>
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-4 justify-start items-stretch w-full sm:flex-row sm:items-start sm:w-auto">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 30px rgba(251, 191, 36, 0.4)", 
                      "0 0 50px rgba(251, 191, 36, 0.6)", 
                      "0 0 30px rgba(251, 191, 36, 0.4)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild 
                    className="button-primary w-full sm:w-auto focus-ring"
                  >
                    <Link 
                      href="/get"
                      onClick={() => trackCTAStartTrialClicked('hero')}
                    >
                      Start Free Trial
                    </Link>
                  </Button>
                </motion.div>
              
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      trackCTABookDemoClicked('hero');
                      setIsWalkthroughOpen(true);
                    }}
                    className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 font-bold text-lg px-8 py-4 rounded-full w-full sm:w-auto focus-ring"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Book a Demo
                  </Button>
                </motion.div>
              </div>
              
              {/* Third Minor CTA - Ghost Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex justify-center sm:justify-start"
              >
                <Button 
                  variant="ghost"
                  onClick={() => {
                    const element = document.getElementById('video-demo');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-white/80 hover:text-white hover:bg-[var(--clr-surface)]/10 font-medium px-4 py-2 rounded-lg group"
                >
                  See a 45-sec Workflow
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Button>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg text-gray-300 font-medium"
              >
                <span className="text-yellow-400">👷‍♂️ Built by contractors, for contractors</span> • No credit card required
              </motion.p>

              {/* App Store Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="pt-4"
              >
                <AppStoreBadges variant="hero" className="justify-start" />
              </motion.div>

              {/* SMS App Link */}
              <SMSAppLink />

              {/* Credibility Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
              >
                <div className="flex flex-col items-center text-center bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-black font-bold text-sm">AI</span>
                  </div>
                  <span className="text-white text-sm font-semibold">AI-Powered</span>
                </div>
                
                <div className="flex flex-col items-center text-center bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">👷</span>
                  </div>
                  <span className="text-white text-sm font-semibold">Made for Contractors</span>
                </div>
                
                <div className="flex flex-col items-center text-center bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">🔒</span>
                  </div>
                  <span className="text-white text-sm font-semibold">Secure & Reliable</span>
                </div>
                
                <div className="flex flex-col items-center text-center bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">QB</span>
                  </div>
                  <span className="text-white text-sm font-semibold">QuickBooks Compatible</span>
                </div>
              </motion.div>

              {/* Trust Statement */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-gray-300 font-medium pt-4 text-center"
              >
                Trusted by pros in HVAC, Plumbing, Electrical, and Home Services.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Column - App Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <StandardizedPhoneMockup
              src={appScreenshotImage}
              alt="CONSTRUKTR app screenshot showing 30-second quotes feature"
              withGlow={true}
              size="desktop"
              className="transform hover:scale-105 transition-transform duration-300"
              loading="eager"
              width={540}
              height={720}
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      {/* Video Demo Modal */}
      <VideoDemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
      
      {/* Video Walkthrough Modal */}
      <VideoWalkthroughModal isOpen={isWalkthroughOpen} onClose={() => setIsWalkthroughOpen(false)} />
    </section>
  );
}