import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Thermometer, Wrench, Clock, DollarSign, Star, CheckCircle, ArrowRight, Wind } from "lucide-react";

import AppStoreBadges from "@/components/app-store-badges";
import UrgencyBanner from "@/components/urgency-banner";
import LeadMagnetCapture from "@/components/lead-magnet-capture";
import SEOFooter from "@/components/seo-footer";

export default function HVACLanding() {
  const scrollToDownload = () => {
    const element = document.getElementById('download-section');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--clr-surface)]">
      <title>HVAC Job Scheduler & Business App | CONSTRUKTR - AI Quote Software</title>
      
      <UrgencyBanner variant="downloads" position="top" />

      {/* Hero Section - HVAC Specific */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Thermometer className="w-12 h-12 text-orange-600 mr-4" />
                <div>
                  <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                    AI for HVAC
                  </h1>
                  <p className="text-xl text-orange-600 font-semibold">The #1 HVAC Business App</p>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Quote HVAC Jobs 10x Faster & Win More Work
              </h2>

              <p className="text-xl text-[var(--clr-text-2)] mb-8 leading-relaxed">
                Generate professional HVAC quotes instantly, schedule installations without conflicts, 
                and manage seasonal demand like a pro. Built for heating, cooling, and ventilation contractors.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Clock, title: "1-Min Quotes", desc: "AC repairs to full installs" },
                  { icon: DollarSign, title: "45% More Sales", desc: "Professional estimates close more" },
                  { icon: Wind, title: "Seasonal Planning", desc: "Manage peak summer/winter demand" },
                  { icon: Star, title: "Happy Customers", desc: "On-time service builds trust" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <feature.icon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-[var(--clr-text-2)]">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToDownload}
                  className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all duration-300 shadow-xl"
                >
                  <Thermometer className="w-5 h-5 mr-2" />
                  Get HVAC App Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <LeadMagnetCapture 
                  magnet="ai-toolkit"
                  trigger={
                    <Button 
                      variant="outline" 
                      className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
                    >
                      <Wrench className="w-5 h-5 mr-2" />
                      Free HVAC Toolkit
                    </Button>
                  }
                />
              </div>
            </motion.div>

            {/* HVAC-specific mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-[var(--clr-surface)] rounded-2xl p-4 h-full">
                    <div className="flex items-center mb-4">
                      <Thermometer className="w-6 h-6 text-orange-600 mr-2" />
                      <h3 className="font-bold text-white">AC Unit Replacement</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">3-Ton Central AC: $4,200</p>
                        <p className="text-sm text-[var(--clr-text-2)]">High-efficiency unit</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Installation: $1,800</p>
                        <p className="text-sm text-[var(--clr-text-2)]">8hrs labor + materials</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Ductwork Upgrade: $900</p>
                        <p className="text-sm text-[var(--clr-text-2)]">Insulation & sealing</p>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span className="text-orange-600">$6,900</span>
                        </div>
                      </div>
                      <Button className="w-full bg-orange-600 text-white">
                        Send Quote (1 minute)
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

      {/* Pain Points - HVAC Specific */}
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
              Stop These HVAC Business Problems
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Every HVAC contractor deals with these issues. CONSTRUKTR eliminates them all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                problem: "Losing jobs to competitors with faster quotes",
                solution: "AI generates detailed HVAC estimates in under 60 seconds",
                icon: "⚡"
              },
              {
                problem: "Emergency calls disrupting scheduled work",
                solution: "Smart scheduling balances emergency and planned jobs",
                icon: "🚨"
              },
              {
                problem: "Seasonal cash flow problems",
                solution: "Automated invoicing and payment plans smooth revenue",
                icon: "💸"
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

      {/* Social Proof - HVAC Testimonials */}
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
              What HVAC Contractors Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Tom Martinez",
                business: "Martinez Heating & Air",
                location: "Dallas, TX",
                quote: "During peak summer, this app helped me schedule 40% more jobs without chaos. The automated quotes saved my business.",
                rating: 5,
                result: "+40% summer capacity"
              },
              {
                name: "Lisa Thompson",
                business: "Thompson HVAC Solutions", 
                location: "Denver, CO",
                quote: "My quotes went from taking 30 minutes to 1 minute. Customers love the professional look and I win more installs.",
                rating: 5,
                result: "30x faster quotes"
              },
              {
                name: "David Park",
                business: "Park Climate Control",
                location: "Atlanta, GA",
                quote: "The seasonal planning feature is incredible. I can see my winter workload in advance and hire accordingly.",
                rating: 5,
                result: "Better seasonal planning"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-orange-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-orange-600 font-medium">{testimonial.business}</p>
                  <p className="text-sm text-[var(--clr-text-2)]">{testimonial.location}</p>
                  <p className="text-sm font-bold text-green-600 mt-2">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download-section" className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Join 800+ HVAC Contractors Using CONSTRUKTR
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Download the app trusted by heating and cooling professionals nationwide. 
              Start your 15-day free trial, no credit card required.
            </p>
            
            <div className="mb-8">
              <AppStoreBadges className="justify-center" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">60 Seconds</div>
                <div className="text-orange-200">Quote Any Job</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-orange-200">Emergency Scheduling</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">45%</div>
                <div className="text-orange-200">Higher Close Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SEOFooter />
    </div>
  );
}