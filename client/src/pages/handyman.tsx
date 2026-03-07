import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Hammer, Wrench, Clock, DollarSign, Star, CheckCircle, ArrowRight, Settings } from "lucide-react";

import AppStoreBadges from "@/components/app-store-badges";
import UrgencyBanner from "@/components/urgency-banner";
import LeadMagnetCapture from "@/components/lead-magnet-capture";
import SEOFooter from "@/components/seo-footer";

export default function HandymanLanding() {
  const scrollToDownload = () => {
    const element = document.getElementById('download-section');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--clr-surface)]">
      <title>Handyman Quoting Software | CONSTRUKTR - Business App for Handymen</title>
      
      <UrgencyBanner variant="downloads" position="top" />

      {/* Hero Section - Handyman Specific */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Hammer className="w-12 h-12 text-green-600 mr-4" />
                <div>
                  <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                    AI for Handymen
                  </h1>
                  <p className="text-xl text-green-600 font-semibold">The #1 Handyman Business App</p>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Quote Any Job in 30‑Seconds & Build Your Business
              </h2>

              <p className="text-xl text-[var(--clr-text-2)] mb-8 leading-relaxed">
                From small repairs to complete remodels, generate professional quotes instantly, 
                manage multiple jobs, and get paid faster. Built for independent handymen.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Clock, title: "Quick Quotes", desc: "Any repair or project" },
                  { icon: DollarSign, title: "35% More Jobs", desc: "Professional appearance wins" },
                  { icon: Settings, title: "Multi-Trade", desc: "Plumbing, electrical, carpentry" },
                  { icon: Star, title: "Happy Customers", desc: "On-time & professional service" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <feature.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-[var(--clr-text-2)]">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToDownload}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-xl"
                >
                  <Hammer className="w-5 h-5 mr-2" />
                  Get Handyman App Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <LeadMagnetCapture 
                  magnet="ai-toolkit"
                  trigger={
                    <Button 
                      variant="outline" 
                      className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 hover:text-white transition-all duration-300"
                    >
                      <Wrench className="w-5 h-5 mr-2" />
                      Free Handyman Toolkit
                    </Button>
                  }
                />
              </div>
            </motion.div>

            {/* Handyman-specific mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-[var(--clr-surface)] rounded-2xl p-4 h-full">
                    <div className="flex items-center mb-4">
                      <Hammer className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="font-bold text-white">Bathroom Renovation</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Tile Work: $850</p>
                        <p className="text-sm text-[var(--clr-text-2)]">48 sqft ceramic + labor</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Plumbing: $650</p>
                        <p className="text-sm text-[var(--clr-text-2)]">Fixture install + connections</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Electrical: $300</p>
                        <p className="text-sm text-[var(--clr-text-2)]">Light fixtures + outlets</p>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span className="text-green-600">$1,800</span>
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 text-white">
                        Send Quote (30 seconds)
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Multi-Trade
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points - Handyman Specific */}
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
              Stop These Handyman Business Problems
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Every handyman deals with these daily frustrations. CONSTRUKTR fixes them all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                problem: "Undercharging because you forgot something",
                solution: "AI remembers every material and labor cost automatically",
                icon: "💰"
              },
              {
                problem: "Juggling multiple small jobs and losing track",
                solution: "Smart scheduling keeps all your projects organized",
                icon: "📅"
              },
              {
                problem: "Looking unprofessional with handwritten quotes",
                solution: "Professional branded estimates that win more work",
                icon: "📋"
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

      {/* Social Proof - Handyman Testimonials */}
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
              What Handymen Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rick Thompson",
                business: "Thompson Home Repairs",
                location: "Nashville, TN",
                quote: "I used to lose money on every job because I'd forget materials. Now my quotes are accurate and I'm actually making profit.",
                rating: 5,
                result: "+25% profit per job"
              },
              {
                name: "Maria Santos",
                business: "Santos Handyman Services",
                location: "Phoenix, AZ",
                quote: "Managing 15 different jobs was chaos. This app keeps everything organized and my customers love the professional quotes.",
                rating: 5,
                result: "15 jobs organized"
              },
              {
                name: "Steve Miller",
                business: "Miller Home Solutions",
                location: "Tampa, FL",
                quote: "The multi-trade calculator is perfect for someone like me who does everything. Plumbing, electrical, carpentry - it handles it all.",
                rating: 5,
                result: "Quotes all trades"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-green-600 font-medium">{testimonial.business}</p>
                  <p className="text-sm text-[var(--clr-text-2)]">{testimonial.location}</p>
                  <p className="text-sm font-bold text-green-600 mt-2">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download-section" className="py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Join 600+ Handymen Using CONSTRUKTR
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Download the app trusted by independent handymen nationwide. 
              Start your 30‑day free trial, no credit card required.
            </p>
            
            <div className="mb-8">
              <AppStoreBadges className="justify-center" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30 Seconds</div>
                <div className="text-green-200">Quote Any Project</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Multi-Trade</div>
                <div className="text-green-200">All Skills Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">35%</div>
                <div className="text-green-200">More Jobs Won</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SEOFooter />
    </div>
  );
}