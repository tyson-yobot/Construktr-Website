import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Wrench, Clock, DollarSign, Users } from "lucide-react";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";

export default function PlumberLanding() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <Helmet>
        <title>Best Plumber Business Software | CONSTRUKTR - Quote, Schedule, Get Paid</title>
        <meta name="description" content="Plumber business management software that automates quoting, scheduling, and payments. Join 1,000+ plumbers saving 8+ hours weekly with AI-powered tools." />
        <meta name="keywords" content="plumber business software, plumbing scheduling app, plumber invoicing, plumbing quotes, plumber CRM, plumbing business management" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                The #1 <span className="text-electric-blue">Plumber Business Software</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-[var(--clr-text-2)] mb-8"
              >
                Stop losing money on manual quotes and missed appointments. CONSTRUKTR automates your entire plumbing business workflow - from emergency calls to routine maintenance.
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
                  Watch Plumber Demo
                </Button>
              </motion.div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Used by 1,000+ plumbers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Save 8+ hours weekly</span>
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
                  <div className="bg-electric-blue text-white p-6">
                    <h3 className="font-bold text-lg">Emergency Call</h3>
                    <p className="text-sm opacity-90">Water heater replacement</p>
                    <div className="mt-4 bg-white/20 rounded-xl p-4">
                      <div className="text-2xl font-bold">$1,250</div>
                      <div className="text-sm">Auto-generated quote</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plumber-Specific Benefits */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built Specifically for Plumbing Businesses</h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Every feature designed around real plumber workflows, from drain cleans to whole-house repipes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Emergency Response */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Emergency Response</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                Get emergency calls routed instantly. Auto-quote common fixes like water heater repairs, pipe bursts, and drain clogs in under 30 seconds.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Instant emergency pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">GPS dispatch optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">After-hours premium rates</span>
                </div>
              </div>
            </motion.div>

            {/* Service Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-electric-blue/20 rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Plumbing-Specific Tools</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                Pre-loaded with plumbing fixtures, pipe sizes, and labor rates. AI knows the difference between a simple snake and a full sewer line replacement.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Fixture database (toilets, faucets, etc.)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Pipe sizing calculator</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Code compliance checker</span>
                </div>
              </div>
            </motion.div>

            {/* Revenue Growth */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Increase Your Revenue 40%</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                Stop undercharging for complex jobs. Our AI pricing ensures you capture full value for water heater installs, repiping, and major repairs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Dynamic pricing by job complexity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Upsell maintenance contracts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Same-day payment collection</span>
                </div>
              </div>
            </motion.div>

            {/* Customer Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Build Customer Loyalty</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                Turn one-time emergency calls into recurring maintenance customers. Automated follow-ups and service reminders keep you top-of-mind.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Annual maintenance reminders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Customer history tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Review request automation</span>
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
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-2xl font-medium mb-6">
              "CONSTRUKTR doubled my revenue in 6 months. The AI quoting is scary accurate, it knows plumbing better than some techs I've hired."
            </blockquote>
            <div className="text-[var(--clr-text-2)]">
              <div className="font-semibold text-white">Mike Rodriguez</div>
              <div>Rodriguez Plumbing, Phoenix AZ</div>
              <div className="text-sm mt-2">$2.1M annual revenue • 8 trucks</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join 1,000+ Successful Plumbers</h2>
          <p className="text-xl text-[var(--clr-text-2)] mb-8">
            Start your free trial today. No credit card required.
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