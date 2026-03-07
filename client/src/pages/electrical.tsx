import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Wrench, Clock, DollarSign, Star, CheckCircle, ArrowRight, Shield } from "lucide-react";
import AppStoreBadges from "@/components/app-store-badges";
import UrgencyBanner from "@/components/urgency-banner";
import LeadMagnetCapture from "@/components/lead-magnet-capture";
import SEOFooter from "@/components/seo-footer";

export default function ElectricalLanding() {
  const scrollToDownload = () => {
    const element = document.getElementById('download-section');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--clr-surface)]">
      <title>Electrical Business App | CONSTRUKTR - Electrician Quote & Job Software</title>
      
      <UrgencyBanner variant="downloads" position="top" />

      {/* Hero Section - Electrical Specific */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Zap className="w-12 h-12 text-yellow-600 mr-4" />
                <div>
                  <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                    AI for Electricians
                  </h1>
                  <p className="text-xl text-yellow-600 font-semibold">The #1 Electrical Business App</p>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Quote Electrical Work Instantly & Get Paid Faster
              </h2>

              <p className="text-xl text-[var(--clr-text-2)] mb-8 leading-relaxed">
                Generate code-compliant electrical quotes in seconds, manage service calls efficiently, 
                and track materials automatically. Built specifically for licensed electricians.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Clock, title: "30-Sec Quotes", desc: "Outlets to panel upgrades" },
                  { icon: DollarSign, title: "50% More Jobs", desc: "Professional estimates win" },
                  { icon: Shield, title: "Code Compliant", desc: "NEC standards built-in" },
                  { icon: Star, title: "Safety First", desc: "Track permits & inspections" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <feature.icon className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <h3 className="font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-[var(--clr-text-2)]">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToDownload}
                  className="bg-yellow-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-700 transition-all duration-300 shadow-xl"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Electrical App Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <LeadMagnetCapture 
                  magnet="ai-toolkit"
                  trigger={
                    <Button 
                      variant="outline" 
                      className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 hover:text-white transition-all duration-300"
                    >
                      <Wrench className="w-5 h-5 mr-2" />
                      Free Electrical Toolkit
                    </Button>
                  }
                />
              </div>
            </motion.div>

            {/* Electrical-specific mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-[var(--clr-surface)] rounded-2xl p-4 h-full">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-yellow-600 mr-2" />
                      <h3 className="font-bold text-white">Panel Upgrade 200A</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">200A Panel: $850</p>
                        <p className="text-sm text-[var(--clr-text-2)]">Square D Homeline</p>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Installation: $1,200</p>
                        <p className="text-sm text-[var(--clr-text-2)]">6hrs labor + permits</p>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Service Line: $400</p>
                        <p className="text-sm text-[var(--clr-text-2)]">20ft underground</p>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span className="text-yellow-600">$2,450</span>
                        </div>
                      </div>
                      <Button className="w-full bg-yellow-600 text-white">
                        Send Quote (30 seconds)
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Code Compliant
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points - Electrical Specific */}
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
              Stop These Electrical Business Problems
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Every electrician faces these daily challenges. CONSTRUKTR solves them all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                problem: "Spending hours calculating material costs",
                solution: "AI instantly calculates accurate electrical material pricing",
                icon: "⚡"
              },
              {
                problem: "Emergency calls disrupting scheduled jobs", 
                solution: "Smart scheduling prioritizes urgent electrical work safely",
                icon: "🚨"
              },
              {
                problem: "Permit paperwork taking forever",
                solution: "Automated permit applications and inspection tracking",
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

      {/* Social Proof - Electrician Testimonials */}
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
              What Electricians Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Rivera",
                business: "Rivera Electric Services",
                location: "Miami, FL",
                quote: "The material calculator is spot-on every time. I used to underbid jobs, now my quotes are accurate and profitable.",
                rating: 5,
                result: "+30% profit margins"
              },
              {
                name: "Jennifer Walsh",
                business: "Walsh Electrical Solutions",
                location: "Portland, OR",
                quote: "Emergency calls used to mess up my whole schedule. Now I can fit them in without disappointing other customers.",
                rating: 5,
                result: "Better customer service"
              },
              {
                name: "Mark Johnson",
                business: "Johnson Commercial Electric",
                location: "Houston, TX",
                quote: "The permit tracking feature alone saves me 5 hours per week. Everything is automated and organized.",
                rating: 5,
                result: "5 hours saved weekly"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-yellow-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-yellow-600 font-medium">{testimonial.business}</p>
                  <p className="text-sm text-[var(--clr-text-2)]">{testimonial.location}</p>
                  <p className="text-sm font-bold text-green-600 mt-2">{testimonial.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download-section" className="py-20 bg-gradient-to-br from-yellow-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Join 900+ Electricians Using CONSTRUKTR
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Download the app trusted by licensed electricians nationwide. 
              Start your 30‑day free trial, no credit card required.
            </p>
            
            <div className="mb-8">
              <AppStoreBadges className="justify-center" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">30 Seconds</div>
                <div className="text-yellow-200">Any Electrical Quote</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">NEC</div>
                <div className="text-yellow-200">Code Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50%</div>
                <div className="text-yellow-200">More Jobs Won</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SEOFooter />
    </div>
  );
}