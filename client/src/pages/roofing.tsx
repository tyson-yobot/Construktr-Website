import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Wrench, Clock, DollarSign, Star, CheckCircle, ArrowRight, Cloud } from "lucide-react";
import EnhancedNavbar from "@/components/enhanced-navbar";
import AppStoreBadges from "@/components/app-store-badges";
import UrgencyBanner from "@/components/urgency-banner";
import LeadMagnetCapture from "@/components/lead-magnet-capture";
import SEOFooter from "@/components/seo-footer";

export default function RoofingLanding() {
  const scrollToDownload = () => {
    const element = document.getElementById('download-section');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--clr-surface)]">
      <title>Roofing Business App | CONSTRUKTR - Roof Quote & Job Management Software</title>
      
      <UrgencyBanner variant="downloads" position="top" />
      <EnhancedNavbar />

      {/* Hero Section - Roofing Specific */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Home className="w-12 h-12 text-red-600 mr-4" />
                <div>
                  <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                    AI for Roofers
                  </h1>
                  <p className="text-xl text-red-600 font-semibold">The #1 Roofing Business App</p>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Quote Roofing Jobs Fast & Win More Contracts
              </h2>

              <p className="text-xl text-[var(--clr-text-2)] mb-8 leading-relaxed">
                Generate accurate roofing estimates with satellite measurements, manage weather delays, 
                and handle insurance claims seamlessly. Built for residential and commercial roofers.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Clock, title: "2-Min Quotes", desc: "Repairs to full replacements" },
                  { icon: DollarSign, title: "Insurance Ready", desc: "Claims documentation built-in" },
                  { icon: Cloud, title: "Weather Alerts", desc: "Smart scheduling around weather" },
                  { icon: Star, title: "Warranty Tracking", desc: "Customer follow-up automated" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <feature.icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-bold text-white">{feature.title}</h3>
                    <p className="text-sm text-[var(--clr-text-2)]">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToDownload}
                  className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Get Roofing App Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <LeadMagnetCapture 
                  magnet="ai-toolkit"
                  trigger={
                    <Button 
                      variant="outline" 
                      className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      <Wrench className="w-5 h-5 mr-2" />
                      Free Roofing Toolkit
                    </Button>
                  }
                />
              </div>
            </motion.div>

            {/* Roofing-specific mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-[var(--clr-surface)] rounded-2xl p-4 h-full">
                    <div className="flex items-center mb-4">
                      <Home className="w-6 h-6 text-red-600 mr-2" />
                      <h3 className="font-bold text-white">Roof Replacement</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Shingles (2,400 sqft): $3,600</p>
                        <p className="text-sm text-[var(--clr-text-2)]">Architectural grade</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Labor & Installation: $4,200</p>
                        <p className="text-sm text-[var(--clr-text-2)]">3-day project + cleanup</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm font-medium">Permits & Disposal: $800</p>
                        <p className="text-sm text-[var(--clr-text-2)]">City fees + old roof removal</p>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span className="text-red-600">$8,600</span>
                        </div>
                      </div>
                      <Button className="w-full bg-red-600 text-white">
                        Send Quote (2 minutes)
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Insurance Ready
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download-section" className="py-20 bg-gradient-to-br from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
              Join 700+ Roofers Using CONSTRUKTR
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Download the app trusted by roofing contractors nationwide. 
              Start your 30‑day free trial, no credit card required.
            </p>
            
            <div className="mb-8">
              <AppStoreBadges className="justify-center" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2 Minutes</div>
                <div className="text-red-200">Any Roof Quote</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Weather</div>
                <div className="text-red-200">Smart Scheduling</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Insurance</div>
                <div className="text-red-200">Claims Ready</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SEOFooter />
    </div>
  );
}