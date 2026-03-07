import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap, AlertTriangle, Calculator, FileCheck } from "lucide-react";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";

export default function ElectricalLanding() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <Helmet>
        <title>Best Electrical Contractor Software | CONSTRUKTR - Code Compliant Quoting</title>
        <meta name="description" content="Electrical contractor business management software with code compliance checking and safety-focused quoting. Trusted by 600+ electrical contractors nationwide." />
        <meta name="keywords" content="electrical contractor software, electrician business app, electrical quoting software, electrical code compliance, electrician scheduling" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-blue-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Smart <span className="text-electric-blue">Electrical Contractor Quoting</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-[var(--clr-text-2)] mb-8"
              >
                Stop losing bids to competitors. CONSTRUKTR's AI knows electrical codes, load calculations, and material costs. Generate compliant quotes in minutes, not hours.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Button className="bg-electric-blue text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-xl">
                  Start Free 30-Day Trial
                </Button>
                <Button variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl">
                  See Electrical Demo
                </Button>
              </motion.div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>600+ electrical contractors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>NEC 2023 compliant</span>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="bg-yellow-500 text-black p-6">
                    <h3 className="font-bold text-lg">Panel Upgrade Quote</h3>
                    <p className="text-sm opacity-80">200A Service Upgrade</p>
                    <div className="mt-4 bg-white/30 rounded-xl p-4">
                      <div className="text-2xl font-bold">$3,250</div>
                      <div className="text-sm">Materials + Labor + Permit</div>
                      <div className="text-xs mt-2 text-green-800">✓ NEC Compliant</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Electrical-Specific Benefits */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for Electrical Professionals</h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              From residential rewires to commercial installations, every feature designed around electrical work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Code Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">NEC 2023 Code Compliance</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                Every quote automatically checks against current electrical codes. Avoid costly callbacks and inspection failures with built-in compliance verification.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Real-time code checking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Permit requirement alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Local code variations</span>
                </div>
              </div>
            </motion.div>

            {/* Load Calculations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-electric-blue/20 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Automatic Load Calculations</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                No more manual math errors. AI calculates panel loads, wire sizing, and breaker requirements instantly for any job size.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Panel load analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Wire gauge recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Voltage drop calculations</span>
                </div>
              </div>
            </motion.div>

            {/* Safety Focus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Safety-First Approach</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                Identifies potential hazards before they become problems. Automatically includes AFCI, GFCI, and surge protection where required by code.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Hazard identification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Required protection devices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Safety compliance reports</span>
                </div>
              </div>
            </motion.div>

            {/* Project Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">All Project Types Covered</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                From simple outlet additions to complete commercial builds. Pre-loaded templates for every type of electrical work you encounter.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Residential rewiring templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Commercial installation guides</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Service call quick quotes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-electric-blue/10 to-purple-600/5 border border-electric-blue/20 rounded-3xl p-12"
          >
            <div className="text-6xl mb-6">⚡</div>
            <blockquote className="text-2xl font-medium mb-6">
              "This software knows electrical better than some electricians I've worked with. The code compliance checking alone has saved me from multiple callbacks."
            </blockquote>
            <div className="text-[var(--clr-text-2)]">
              <div className="font-semibold text-white">James Martinez</div>
              <div>Martinez Electric, Denver CO</div>
              <div className="text-sm mt-2">Master Electrician • 15 years experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join 600+ Electrical Contractors</h2>
          <p className="text-xl text-[var(--clr-text-2)] mb-8">
            Start your free trial. No contracts, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-electric-blue text-white hover:bg-blue-700 px-10 py-4 text-xl font-bold rounded-xl">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-xl font-semibold rounded-xl">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}