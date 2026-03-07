import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Play, ArrowRight, CheckCircle2, Route, CreditCard, Sparkles } from "lucide-react";
import { trackCTAStartTrialClicked, trackCTABookDemoClicked, trackTradeChipClicked } from "@/lib/analytics-events";
import TrustBar from "./TrustBar";
import DeviceFrame from "./DeviceFrame";
import AppStoreBadges from "./app-store-badges";
import appMainImage from "@assets/Screenshot_1772172229_1772186144938.png";

const rotatingMessages = [
  "Photo → quote in under 60 seconds",
  "Smart routing saves time every day",
  "Same-day Stripe deposits",
  "Works offline in basements & barns",
  "QuickBooks sync in one click",
  "63+ features built for the field"
];

const aiFeatureBullets = [
  { icon: Sparkles, text: "Photo Estimator with AI annotations" },
  { icon: Route, text: "Smart Scheduling & AI Time Tracking" },
  { icon: CreditCard, text: "Invoicing + Payments via Stripe" },
];

export default function CEOHero() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [, navigate] = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % rotatingMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero min-h-screen text-[var(--color-text-primary)] relative overflow-hidden" style={{ background: 'var(--gradient-hero-rich)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--color-primary)]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[var(--color-hero-end)]/50 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                63+ features · AI at every paid tier
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
                Your Entire Field Service Business on{' '}
                <span className="text-[var(--color-primary)]">AI Autopilot</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
                Turn photos, routes, and timesheets into quotes, schedules, and paid invoices—automatically. 
                One app for estimating, dispatch, payments, compliance, and profitability.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Painting', 'Landscaping', 'Handyman', 'General'].map((trade) => (
                  <button
                    key={trade}
                    onClick={() => {
                      trackTradeChipClicked(trade);
                      const element = document.getElementById(`${trade.toLowerCase()}-section`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="chip px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[var(--color-text-secondary)] border border-[var(--color-border-light)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 transition-all duration-200 shadow-sm"
                    aria-label={`Jump to ${trade} contractor section`}
                    tabIndex={0}
                  >
                    {trade}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 h-6 overflow-hidden" data-testid="rotating-microcopy">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] flex-shrink-0" aria-hidden="true" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={messageIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-medium text-[var(--color-text-secondary)]"
                  >
                    {rotatingMessages[messageIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    trackCTAStartTrialClicked('hero');
                    navigate('/get');
                  }}
                  className="btn-primary text-base px-6 py-3"
                  aria-label="Get started free"
                  tabIndex={0}
                  data-testid="button-hero-trial"
                >
                  Get Started Free
                </button>
                
                <button
                  onClick={() => {
                    trackCTABookDemoClicked('hero');
                    const demoSection = document.getElementById('see-in-action') || document.getElementById('how-it-works');
                    if (demoSection) {
                      demoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-secondary flex items-center justify-center gap-2"
                  aria-label="Watch 2-minute workflow demo"
                  tabIndex={0}
                  data-testid="button-hero-demo"
                >
                  <Play className="w-4 h-4" aria-hidden="true" />
                  Watch 2-Minute Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 pt-2"
            >
              <div className="grid grid-cols-1 gap-2">
                {aiFeatureBullets.map((bullet, index) => {
                  const Icon = bullet.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                      <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[var(--color-primary)]" aria-hidden="true" />
                      </div>
                      <span className="font-medium">{bullet.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 space-y-4"
            >
              <div className="flex items-center gap-4">
                <AppStoreBadges variant="hero" />
              </div>
              
              <p className="text-xs text-gray-500">
                Free forever · No credit card required
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative lg:pl-8"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative">
              <DeviceFrame
                src={appMainImage}
                alt="CONSTRUKTR app — AI-powered field service management showing jobs, scheduling, and payments"
                withGlow={true}
                size="mobile"
                showBadge={true}
                className="confidence-enter"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-[var(--color-border-light)] p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">AI Suggested Price</p>
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">$4,500 · 87% confident</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <TrustBar />
        </motion.div>
      </div>
    </section>
  );
}
