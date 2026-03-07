import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Droplets, Wrench, Clock, DollarSign, Star, CheckCircle, ArrowRight } from "lucide-react";
import EnhancedNavbar from "@/components/enhanced-navbar";
import AppStoreBadges from "@/components/app-store-badges";
import UrgencyBanner from "@/components/urgency-banner";
import LeadMagnetCapture from "@/components/lead-magnet-capture";
import SEOFooter from "@/components/seo-footer";

export default function PlumbingLanding() {
  const scrollToDownload = () => {
    const element = document.getElementById('download-section');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--clr-surface)]">
      {/* SEO-optimized meta tags would be handled by a proper head manager */}
      <title>AI Plumbing Business App | CONSTRUKTR - Job Scheduler & Quote Software</title>
      
      <UrgencyBanner variant="downloads" position="top" />
      <EnhancedNavbar />

      {/* Hero Section - Plumbing Specific */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Droplets className="w-12 h-12 text-blue-600 mr-4" />
                <div>
                  <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                    AI for Plumbers
                  </h1>
                  <p className="text-xl text-blue-600 font-semibold">The #1 Plumbing Business App</p>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Stop Losing Money on Manual Quotes & Missed Jobs
              </h2>

              <p className="text-xl text-[var(--clr-text-2)] mb-8 leading-relaxed">
                Generate professional plumbing quotes in 30 seconds, schedule jobs without conflicts, 
                and get paid 3x faster with automated invoicing. Built specifically for plumbing contractors.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Clock, title: "2-Min Quotes", desc: "Pipe repairs to full remodels" },
                  { icon: DollarSign, title: "40% More Jobs", desc: "Professional estimates win more" },
                  { icon: CheckCircle, title: "Zero Conflicts", desc: "Smart scheduling prevents double-booking" },
                  { icon: Star, title: "5-Star Reviews", desc: "Automated follow-up increases ratings" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-[var(--clr-text-2)]">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToDownload}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl"
                >
                  <Droplets className="w-5 h-5 mr-2" />
                  Get Plumbing App Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <LeadMagnetCapture 
                  magnet="ai-toolkit"
                  trigger={
                    <Button 
                      variant="outline" 
                      className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <Wrench className="w-5 h-5 mr-2" />
                      Free Plumbing Toolkit
                    </Button>
                  }
                />
              </div>
            </motion.div>

            {/* Plumbing-specific mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-[var(--clr-surface)] rounded-2xl p-4 h-full">
                    <div className="flex items-center mb-4">
                      <Droplets className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="font-bold text-white">Kitchen Sink Repair</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Service Call: $125</p>
                        <p className="text-sm text-[var(--clr-text-2)]">Diagnostic & travel</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Faucet Replacement: $180</p>
                        <p className="text-sm text-[var(--clr-text-2)]">Parts + 1hr labor</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Drain Cleaning: $95</p>
                        <p className="text-sm text-[var(--clr-text-2)]">Snake & inspection</p>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span className="text-blue-600">$400</span>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 text-white">
                        Send Quote (30 seconds)
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  AI Generated
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points - Plumbing Specific */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Stop These Plumbing Business Problems
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Every plumber faces these daily frustrations. CONSTRUKTR solves them all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                problem: "Handwritten quotes that look unprofessional",
                solution: "AI generates professional quotes with your logo in 30 seconds",
                icon: "📝"
              },
              {
                problem: "Double-booked emergency calls",
                solution: "Smart scheduling prevents conflicts and optimizes your route",
                icon: "📅"
              },
              {
                problem: "Chasing customers for payment",
                solution: "Automated invoicing and payment reminders get you paid faster",
                icon: "💰"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  ❌ {item.problem}
                </h3>
                <p className="text-gray-700 font-medium">
                  ✅ {item.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Plumber Testimonials */}
      <section className="py-20 bg-[var(--clr-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              What Plumbers Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mike Rodriguez",
                business: "Rodriguez Plumbing",
                location: "Phoenix, AZ",
                quote: "Went from scribbling quotes on napkins to sending professional estimates that win 60% more jobs. This app paid for itself in the first week.",
                rating: 5,
                result: "+60% quote acceptance"
              },
              {
                name: "Sarah Chen",
                business: "Chen Emergency Plumbing",
                location: "Seattle, WA", 
                quote: "The scheduling feature is a game-changer. No more double-booking emergency calls or driving across town twice in one day.",
                rating: 5,
                result: "Saves 2+ hours daily"
              },
              {
                name: "James Wilson",
                business: "Wilson Drain Services",
                location: "Chicago, IL",
                quote: "My customers love getting professional invoices instantly. Payment time went from 30 days to 5 days average.",
                rating: 5,
                result: "6x faster payments"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-blue-600 font-medium">{testimonial.business}</p>
                  <p className="text-sm text-[var(--clr-text-2)]">{testimonial.location}</p>
                  <p className="text-sm font-bold text-green-600 mt-2">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download-section" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Join 1,200+ Plumbers Using CONSTRUKTR
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Download the app trusted by plumbing contractors nationwide. 
              Start your 15-day free trial - no credit card required.
            </p>
            
            <div className="mb-8">
              <AppStoreBadges className="justify-center" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15 Days</div>
                <div className="text-blue-200">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30 Seconds</div>
                <div className="text-blue-200">Quote Generation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-blue-200">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SEOFooter />
    </div>
  );
}