import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  Play, ArrowRight, CheckCircle2, Sparkles, Brain, Zap, 
  Bot, Cpu, Database, Eye, Mic, Route
} from "lucide-react";
import { trackCTAStartTrialClicked, trackCTABookDemoClicked } from "@/lib/analytics-events";
import TrustBar from "./TrustBar";
import DeviceFrame from "./DeviceFrame";
import AppStoreBadges from "./app-store-badges";

// Enhanced rotating messages highlighting AI superiority
const rotatingMessages = [
  "17 AI tools vs competitors' basic automation",
  "GPT-4 powered quotes in 60 seconds",
  "Computer Vision for instant part identification", 
  "Deep Learning predicts your revenue trends",
  "Machine Learning optimizes every route",
  "99.7% OCR accuracy for all documents",
  "Voice AI that understands natural language",
  "24/7 AI call operator never sleeps"
];

// AI technology stack visualization
const aiTechnologies = [
  { icon: Brain, label: "GPT-4", color: "text-purple-500" },
  { icon: Eye, label: "Computer Vision", color: "text-blue-500" },
  { icon: Database, label: "Deep Learning", color: "text-green-500" },
  { icon: Cpu, label: "Machine Learning", color: "text-orange-500" },
  { icon: Mic, label: "Natural Language", color: "text-pink-500" },
  { icon: Route, label: "Predictive AI", color: "text-cyan-500" },
];

// Advanced feature highlights
const aiFeatureHighlights = [
  { 
    icon: Sparkles, 
    text: "17 Advanced AI Tools",
    subtext: "Industry's most comprehensive AI platform"
  },
  { 
    icon: Brain, 
    text: "GPT-4 Business Intelligence",
    subtext: "Strategic insights & pattern analysis"
  },
  { 
    icon: Zap, 
    text: "Real-Time AI Automation", 
    subtext: "From quotes to completion, fully automated"
  },
];

export default function EnhancedAIHero() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [techIndex, setTechIndex] = useState(0);
  const [, navigate] = useLocation();

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % rotatingMessages.length);
    }, 3000);
    
    const techInterval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % aiTechnologies.length);
    }, 2000);
    
    return () => {
      clearInterval(messageInterval);
      clearInterval(techInterval);
    };
  }, []);

  return (
    <section className="hero min-h-screen text-[var(--color-text-primary)] relative overflow-hidden">
      {/* Advanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 via-purple-50 to-slate-50">
        {/* Animated AI-themed particles */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Subtle tech grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Enhanced Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* AI Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-blue-700">AI-POWERED PLATFORM</span>
              </div>
              <div className="h-4 w-px bg-blue-300" />
              <div className="flex items-center gap-1">
                {aiTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === techIndex ? 'bg-blue-500 scale-125' : 'bg-blue-300'
                    }`}
                    animate={{ scale: index === techIndex ? 1.25 : 1 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Main Headline - More Aggressive */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
                <span className="text-[var(--color-text-primary)]">The World's Most</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Advanced AI Platform
                </span>
                <br />
                <span className="text-[var(--color-text-primary)]">for Construction</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
                While competitors offer basic automation, CONSTRUKTR delivers <strong className="text-[var(--color-primary)]">17 AI-powered tools</strong> using 
                GPT-4, Deep Learning, and Computer Vision. <strong>Built for contractors who think 5 years ahead.</strong>
              </p>
            </motion.div>

            {/* Rotating AI Capability Messages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 h-8 overflow-hidden bg-gradient-to-r from-green-50 to-blue-50 rounded-xl px-4 border border-green-200/50">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={messageIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-semibold text-[var(--color-text-primary)]"
                  >
                    {rotatingMessages[messageIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* AI Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 gap-4"
            >
              {aiFeatureHighlights.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02, x: 8 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[var(--color-border-light)] hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-[var(--color-text-primary)] text-lg">{feature.text}</span>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">{feature.subtext}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAStartTrialClicked('enhanced_hero');
                  navigate('/get');
                }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                Experience the AI Advantage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTABookDemoClicked('enhanced_hero');
                  const demoSection = document.getElementById('see-in-action');
                  if (demoSection) {
                    demoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold text-lg border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Play className="w-5 h-5 group-hover:animate-pulse" />
                See 17 AI Tools Demo
              </motion.button>
            </motion.div>

            {/* App Store Badges with Enhanced Context */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6 space-y-4"
            >
              <div className="flex items-center gap-4">
                <AppStoreBadges variant="hero" />
              </div>
              
              <p className="text-sm text-[var(--color-text-secondary)] flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-500" />
                17 AI tools included · No credit card required · Used by Fortune 500 contractors
              </p>
            </motion.div>

            {/* Animated Technology Stack Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {aiTechnologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.label}
                    animate={{ 
                      scale: index === techIndex ? 1.1 : 1,
                      opacity: index === techIndex ? 1 : 0.7 
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-200 ${tech.color} transition-all duration-300`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">{tech.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Phone Mockup - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:pl-8"
          >
            {/* Multiple gradient glows for AI effect */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl animate-pulse delay-1000" />
            
            <div className="relative">
              <DeviceFrame
                src="/screens/Screenshot_1773335198.png"
                alt="CONSTRUKTR AI Platform — Advanced analytics dashboard with GPT-4 powered insights"
                withGlow={true}
                size="mobile"
                showBadge={true}
                className="confidence-enter"
              />
              
              {/* Enhanced AI Suggestion Popup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl border border-blue-200/50 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)] font-medium">GPT-4 AI Analysis</p>
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">Revenue +32% predicted</p>
                    <p className="text-xs text-green-600 font-medium">94% confidence</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional AI Feature Callout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl shadow-2xl p-3"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-bold">17 AI Tools Active</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20"
        >
          <TrustBar />
        </motion.div>
      </div>
    </section>
  );
}