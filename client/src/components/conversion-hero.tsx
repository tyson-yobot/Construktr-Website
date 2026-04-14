import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { HERO_HOOKS } from "@/lib/scenario-hooks";
import { AI_TOOL_COUNT } from "@/lib/pricing-data";
import TrustBar from "./TrustBar";
import DeviceFrame from "./DeviceFrame";
import AppStoreBadges from "./app-store-badges";
import appMainImage from "@assets/Construktr_Logo_Black_Background_1024_x_1024_1772187695111.jpg";

const heroHooks = HERO_HOOKS.slice(0, 5);

export default function ConversionHero() {
  const [hookIndex, setHookIndex] = useState(0);
  const [, navigate] = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setHookIndex((prev) => (prev + 1) % heroHooks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen text-[var(--color-text-primary)] relative overflow-hidden" style={{ background: 'var(--gradient-hero-rich)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--color-primary)]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  {AI_TOOL_COUNT} AI tools built in. Free to start.
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl lg:text-6xl font-black leading-[1.08] mb-6"
              >
                Your AI-Powered{" "}
                <span className="text-[var(--color-primary)]">Business Manager.</span>
                <br />
                Free.
              </motion.h1>

              {/* Rotating scenario hooks */}
              <div className="h-24 sm:h-20 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={hookIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-[var(--color-text-secondary)] leading-relaxed italic"
                  >
                    "{heroHooks[hookIndex].quote}"
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => navigate("/get")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-bold text-lg rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg shadow-[var(--color-primary)]/25"
              >
                Start Free — No Credit Card
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("pricing");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold text-lg rounded-xl hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                See Pricing
              </button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-text-secondary)]"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Free forever plan
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                No per-user fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                {AI_TOOL_COUNT} AI tools included
              </span>
            </motion.div>

            {/* App Store Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <AppStoreBadges />
            </motion.div>
          </div>

          {/* Right Column — Device Frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <DeviceFrame>
              <img
                src={appMainImage}
                alt="Construktr mobile app dashboard showing revenue, active jobs, and AI assistant"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </DeviceFrame>
          </motion.div>
        </div>

        {/* Trust bar below hero */}
        <div className="mt-16">
          <TrustBar />
        </div>
      </div>
    </section>
  );
}
