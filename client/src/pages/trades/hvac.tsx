import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Thermometer, Calendar, TrendingUp, Shield } from "lucide-react";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";

export default function HVACLanding() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <Helmet>
        <title>Best HVAC Business Software | CONSTRUKTR™ - Scheduling & Service Management</title>
        <meta name="description" content="HVAC business management software for contractors. Automated scheduling, seasonal maintenance tracking, and instant HVAC quotes. Trusted by 800+ HVAC pros." />
        <meta name="keywords" content="HVAC scheduling software, HVAC business management, HVAC service app, air conditioning contractor software, heating contractor CRM" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-blue-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                #1 <span className="text-electric-blue">HVAC Scheduling App</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-[var(--clr-text-2)] mb-8"
              >
                Never miss another seasonal maintenance window. CONSTRUKTR's AI schedules your HVAC routes perfectly, tracks equipment history, and automates your entire service workflow.
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
                  See HVAC Demo
                </Button>
              </motion.div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>800+ HVAC contractors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>35% more service calls</span>
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
                  <div className="bg-orange-500 text-white p-6">
                    <h3 className="font-bold text-lg">Today's Schedule</h3>
                    <div className="mt-4 space-y-3">
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="font-semibold">9:00 AM - AC Tune-up</div>
                        <div className="text-sm opacity-90">Johnson Residence</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="font-semibold">11:30 AM - Furnace Repair</div>
                        <div className="text-sm opacity-90">Smith Building</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HVAC-Specific Benefits */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for HVAC Professionals</h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Every feature designed around seasonal demands, equipment tracking, and maintenance contracts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Seasonal Scheduling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Seasonal Scheduling</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                AI automatically schedules spring AC tune-ups and fall furnace maintenance. Never lose revenue from missed seasonal opportunities again.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Automatic seasonal reminders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Weather-based scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Peak season optimization</span>
                </div>
              </div>
            </motion.div>

            {/* Equipment Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-electric-blue/20 rounded-2xl flex items-center justify-center mb-6">
                <Thermometer className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete Equipment History</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                Track every unit's age, maintenance history, and warranty status. Know exactly when to recommend replacements vs repairs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Equipment database (Carrier, Trane, etc.)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Warranty tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Replacement recommendations</span>
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
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Grow Revenue 50%</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                Convert more maintenance visits into equipment sales. Our data shows HVAC contractors increase revenue 50% with systematic upselling.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Smart upsell recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Maintenance contract automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Equipment financing options</span>
                </div>
              </div>
            </motion.div>

            {/* Service Agreements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[var(--color-bg)] p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Recurring Service Contracts</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                Build predictable recurring revenue with automated maintenance agreements. Perfect for commercial buildings and residential customers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Contract templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Automatic billing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Priority customer management</span>
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
            <div className="text-6xl mb-6">🌟</div>
            <blockquote className="text-2xl font-medium mb-6">
              "Finally, software that understands HVAC. The seasonal scheduling alone increased our maintenance contracts by 60%. This is a game-changer."
            </blockquote>
            <div className="text-[var(--clr-text-2)]">
              <div className="font-semibold text-white">Sarah Chen</div>
              <div>Climate Control Experts, Dallas TX</div>
              <div className="text-sm mt-2">$3.2M annual revenue • 12 technicians</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join 800+ Successful HVAC Contractors</h2>
          <p className="text-xl text-[var(--clr-text-2)] mb-8">
            Start your free trial today. No setup fees, cancel anytime.
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