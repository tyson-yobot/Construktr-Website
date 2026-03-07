import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wrench, TrendingUp, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import EnhancedStickyNavbar from "@/components/enhanced-sticky-navbar";
import StateTradeGrids from "@/components/state-trade-landing-grids";
import StickyMobileCTA from "@/components/sticky-mobile-cta";

export default function StateTradeHub() {
  return (
    <div className="min-h-screen">
      <EnhancedStickyNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="bg-blue-600/20 border-blue-500/30 text-blue-400 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Nationwide Coverage
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
              CONSTRUKTR Across America
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover how contractors in your state and trade are growing their business with CONSTRUKTR. 
              From local plumbers to nationwide general contractors, find your specialized solution.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50</div>
                <div className="text-sm text-slate-400">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">150,000+</div>
                <div className="text-sm text-slate-400">Active Contractors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-sm text-slate-400">Trade Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">$2.8B</div>
                <div className="text-sm text-slate-400">Revenue Generated</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4"
                asChild
              >
                <Link to="/get">
                  Start Free Trial
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-[var(--clr-surface)]/10"
                asChild
              >
                <Link to="/demos">
                  Watch Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* State & Trade Grids */}
      <StateTradeGrids showStates={true} showTrades={true} maxItems={12} />

      {/* Benefits Section */}
      <section className="py-20 bg-[var(--clr-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Why Contractors Choose CONSTRUKTR
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Local expertise meets nationwide innovation. Built by contractors, for contractors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Local Market Expertise",
                description: "Pricing, regulations, and business practices tailored to your specific market and trade requirements.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Wrench,
                title: "Trade-Specific Features",
                description: "Specialized tools for HVAC, plumbing, electrical, roofing, and more. Built for your industry's unique needs.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: TrendingUp,
                title: "Proven Growth Results",
                description: "Contractors see 40% revenue growth on average. Join thousands who've transformed their business.",
                color: "from-purple-500 to-violet-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-[var(--clr-text-2)] leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Find Your State & Trade Combination
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with CONSTRUKTR today and join contractors in your area who are already growing their business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[var(--clr-surface)] text-blue-600 hover:bg-gray-100 font-bold px-8 py-4"
                asChild
              >
                <Link to="/get">
                  Start Free Trial
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-[var(--clr-surface)]/10"
                asChild
              >
                <Link to="/support">
                  Contact Sales Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <StickyMobileCTA />
    </div>
  );
}