import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Footer from "@/components/footer";
import FeatureList from "@/components/feature-list";
import { tiers, globalFeatures, FOUNDERS_PROMO_ENABLED } from "@/data/pricing";
import { Zap, Users, Building, Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/seo-head";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Product schema for each pricing plan
  const productSchemas = tiers.map((tier) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `CONSTRUKTR ${tier.name} Plan`,
    "description": `${tier.name === 'starter' ? 'Perfect for solo contractors getting started' :
                    tier.name === 'pro' ? 'For growing businesses with advanced needs' :
                    'For teams & agencies with enterprise requirements'}`,
    "brand": {
      "@type": "Brand",
      "name": "CONSTRUKTR"
    },
    "category": "Software",
    "offers": {
      "@type": "Offer",
      "price": tier.priceMonthly,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://construktr.ai/pricing",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": tier.priceMonthly,
        "priceCurrency": "USD",
        "unitText": "per month"
      },
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "minValue": 1
      },
      "validFrom": "2025-01-01",
      "seller": {
        "@type": "Organization",
        "name": "CONSTRUKTR"
      }
    },
    "features": tier.features,
    "applicationCategory": "BusinessApplication"
  }));

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <SEOHead 
        title="CONSTRUKTR™ Pricing — Free Plan + Starter, Pro & Business Tiers"
        description="Transparent contractor software pricing. Free forever plan available. Starter ($49/mo), Pro ($89/mo), Business ($199/mo). Annual billing saves ~20%. No credit card required."
        canonical="https://construktr.ai/pricing"
        structuredData={productSchemas}
      />
      
      {/* Additional JSON-LD for pricing-specific data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "CONSTRUKTR Pricing Plans",
            "description": "Contractor software pricing plans with AI quoting, scheduling, and payments",
            "numberOfItems": 3,
            "itemListElement": tiers.map((tier, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": `CONSTRUKTR ${tier.name} Plan`,
                "offers": {
                  "@type": "Offer",
                  "price": tier.priceMonthly,
                  "priceCurrency": "USD"
                }
              }
            }))
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Turn your phone into an 
                <span className="text-electric-blue"> AI-powered business manager</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-[var(--clr-text-2)] mb-8"
              >
                Quoting, scheduling, invoicing, done automatically. Choose the perfect plan for your service business.
              </motion.p>
              
              {/* Founders Launch Banner */}
              {FOUNDERS_PROMO_ENABLED && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-gradient-to-r from-electric-blue/15 to-purple-600/15 border-2 border-electric-blue/30 rounded-2xl p-6 mb-6 max-w-lg mx-auto lg:mx-0 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-electric-blue font-bold text-lg mb-1">🚀 FOUNDERS LAUNCH</div>
                      <div className="text-white text-sm">Limited time pricing for early adopters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 font-bold text-xs">SAVE UP TO</div>
                      <div className="text-white font-black text-2xl">50%</div>
                    </div>
                  </div>
                  <div className="mt-3 bg-yellow-400/20 border border-yellow-400/30 rounded-lg p-2">
                    <div className="text-yellow-300 text-xs font-medium text-center">
                      Only 237 spots remaining • Expires Jan 31st
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  className="bg-electric-blue text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started Free
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  See Demo
                </Button>
              </motion.div>
            </div>

            {/* Right: App Screenshot/Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-black text-white text-xs flex justify-between items-center px-6 py-2">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 border border-white rounded-sm"></div>
                        <div className="w-1 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-6 bg-gradient-to-b from-blue-50 to-white h-full">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">CONSTRUKTR™</h3>
                        <p className="text-gray-600 text-sm">AI Business Manager</p>
                      </div>
                      
                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-electric-blue/10 rounded-2xl p-4 text-center">
                          <div className="w-10 h-10 bg-electric-blue rounded-xl mx-auto mb-2 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-800">Quick Quote</span>
                        </div>
                        <div className="bg-green-100 rounded-2xl p-4 text-center">
                          <div className="w-10 h-10 bg-green-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-800">Schedule</span>
                        </div>
                      </div>
                      
                      {/* Recent Jobs */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 text-sm">Recent Jobs</h4>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900 text-sm">Kitchen Remodel</span>
                            <span className="text-green-600 font-bold text-sm">$2,450</span>
                          </div>
                          <p className="text-gray-500 text-xs">Johnson Residence • Completed</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900 text-sm">HVAC Repair</span>
                            <span className="text-electric-blue font-bold text-sm">$890</span>
                          </div>
                          <p className="text-gray-500 text-xs">Smith Property • In Progress</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone highlights */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-electric-blue rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-6 -left-6 bg-white rounded-full px-3 py-1 shadow-lg">
                  <span className="text-xs font-bold text-gray-800">AI Powered</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white rounded-full px-3 py-1 shadow-lg">
                  <span className="text-xs font-bold">30s Quotes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Visuals Section */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              See CONSTRUKTR in <span className="text-electric-blue">Action</span>
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              See how Construktr handles quoting, scheduling, and payments in one mobile app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Part Finder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-electric-blue/10 to-purple-600/5 border border-electric-blue/20 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">AI Part Finder</h3>
                <p className="text-[var(--clr-text-2)] text-center mb-6">Camera → Auto-part match in seconds</p>
                
                {/* Visual Demo */}
                <div className="bg-black/20 rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400">AR Part Finder</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-electric-blue rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">📸</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Take Photo</div>
                        <div className="text-gray-400 text-xs">Scan broken part</div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs font-bold">🔍</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Match Found</div>
                        <div className="text-green-400 text-xs font-bold">$24.99 • In Stock</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-electric-blue font-semibold">Save 2+ hours per job</div>
              </div>
            </motion.div>

            {/* Smart Scheduling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-blue-600/5 border border-green-500/20 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Scheduling</h3>
                <p className="text-[var(--clr-text-2)] text-center mb-6">Auto-reschedule on weather alerts</p>
                
                {/* Visual Demo */}
                <div className="bg-black/20 rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400">Today's Schedule</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-yellow-400">Weather Alert</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-2 relative">
                      <div className="absolute -right-1 -top-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⚠</span>
                      </div>
                      <div className="text-white text-sm">Outdoor HVAC Install</div>
                      <div className="text-red-400 text-xs line-through">10:00 AM • Rain Expected</div>
                    </div>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2">
                      <div className="text-white text-sm">→ Rescheduled</div>
                      <div className="text-green-400 text-xs font-bold">Tomorrow 9:00 AM • Clear</div>
                    </div>
                    <div className="bg-electric-blue/20 rounded-lg p-2">
                      <div className="text-white text-sm">Indoor Plumbing Repair</div>
                      <div className="text-electric-blue text-xs">Moved to 10:00 AM slot</div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-green-400 font-semibold">Zero missed appointments</div>
              </div>
            </motion.div>

            {/* Payment Flow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-400/10 to-orange-500/5 border border-yellow-400/20 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Instant Payments</h3>
                <p className="text-[var(--clr-text-2)] text-center mb-6">Quote → Invoice → Payment in 60 seconds</p>
                
                {/* Visual Demo */}
                <div className="bg-black/20 rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400">Payment Flow</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded-lg p-2 flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm">Quote Generated</div>
                        <div className="text-gray-400 text-xs">Kitchen Faucet Repair</div>
                      </div>
                      <div className="text-green-400 text-sm font-bold">✓</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm">Invoice Sent</div>
                        <div className="text-gray-400 text-xs">johndoe@email.com</div>
                      </div>
                      <div className="text-green-400 text-sm font-bold">✓</div>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-2 flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm font-bold">Payment Received</div>
                        <div className="text-green-400 text-xs">$189.50 • Same Day Deposit</div>
                      </div>
                      <div className="text-green-400 text-sm font-bold animate-pulse">💰</div>
                    </div>
                  </div>
                </div>
                <div className="text-center text-sm text-yellow-400 font-semibold">Get paid instantly</div>
              </div>
            </motion.div>
          </div>
          
          {/* CTA after Features */}
          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Ready to transform your business?</h3>
              <p className="text-[var(--clr-text-2)] mb-6 max-w-2xl mx-auto">
                Construktr brings quoting, scheduling, and payments into one mobile app — built for the job site.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-electric-blue text-white hover:bg-blue-700 px-8 py-3 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Pricing Plans →
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-xl"
                >
                  Watch Demo Video
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by contractors, integrated with your favorite tools
            </h3>
            <p className="text-[var(--clr-text-2)]">
              CONSTRUKTR works seamlessly with the suppliers and services you already use
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
            {/* Home Depot */}
            <div className="flex items-center justify-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">HD</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Home Depot</span>
              </div>
            </div>
            
            {/* Lowe's */}
            <div className="flex items-center justify-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Lowe's</span>
              </div>
            </div>
            
            {/* QuickBooks */}
            <div className="flex items-center justify-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xs">QB</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">QuickBooks</span>
              </div>
            </div>
            
            {/* Stripe */}
            <div className="flex items-center justify-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xs">stripe</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Stripe</span>
              </div>
            </div>
            
            {/* Google Calendar */}
            <div className="flex items-center justify-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xs">📅</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Google Cal</span>
              </div>
            </div>
            
            {/* Ferguson */}
            <div className="flex items-center justify-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xs">FE</span>
                </div>
                <span className="text-xs text-gray-400 font-medium">Ferguson</span>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-3 bg-white/5 rounded-full px-6 py-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-white font-medium">Encrypted & Secure</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 rounded-full px-6 py-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">🔒</span>
              </div>
              <span className="text-white font-medium">Bank-Level Security</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 rounded-full px-6 py-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">⭐</span>
              </div>
              <span className="text-white font-medium">Available on iOS & Android</span>
            </div>
          </div>
          
          {/* CTA after Social Proof */}
          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-3">Trusted by contractors nationwide</h3>
              <p className="text-[var(--clr-text-2)] mb-6">
                See why contractors choose CONSTRUKTR over outdated spreadsheets and generic apps
              </p>
              <Button 
                className="bg-electric-blue text-white hover:bg-blue-700 px-8 py-3 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Choose Your Plan →
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const IconComponent = tier.key === 'starter' ? Zap : tier.key === 'pro' ? Users : Building;
              const showPromoPrice = FOUNDERS_PROMO_ENABLED;
              const realPrice = tier.key === 'starter' ? 49 : tier.key === 'pro' ? 99 : 199;
              
              // Tier-specific styling
              const getTierStyling = () => {
                switch (tier.key) {
                  case 'starter':
                    return {
                      card: 'border border-gray-600 bg-black shadow-md hover:shadow-lg transition-all duration-300',
                      button: 'border-2 border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent',
                      buttonVariant: 'outline' as const
                    };
                  case 'pro':
                    return {
                      card: 'border-2 border-electric-blue bg-gradient-to-br from-electric-blue/15 via-blue-600/10 to-indigo-700/15 shadow-2xl shadow-electric-blue/30 scale-105 ring-4 ring-electric-blue/40 relative overflow-hidden',
                      button: 'bg-electric-blue text-white hover:bg-blue-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200',
                      buttonVariant: 'default' as const
                    };
                  case 'enterprise':
                    return {
                      card: 'border border-gray-300 bg-gradient-to-br from-slate-200 via-white to-gray-300 shadow-2xl hover:shadow-3xl transition-all duration-300 text-gray-900 relative overflow-hidden',
                      button: 'bg-gradient-to-r from-slate-300 via-gray-200 to-slate-400 text-black hover:from-slate-400 hover:via-gray-300 hover:to-slate-500 shadow-xl font-bold',
                      buttonVariant: 'default' as const
                    };
                  default:
                    return {
                      card: 'border-white/10 bg-[var(--color-surface)] shadow-lg',
                      button: 'bg-electric-blue text-white hover:bg-blue-700',
                      buttonVariant: 'default' as const
                    };
                }
              };
              
              const styling = getTierStyling();
              
              return (
                <motion.div
                  key={tier.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative p-8 rounded-3xl ${styling.card}`}
                >
                  {/* Pro Plan Glow Effect */}
                  {tier.key === 'pro' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-transparent to-indigo-600/20 rounded-3xl blur-xl -z-10"></div>
                  )}
                  
                  {/* Enterprise Plan Shine Effect */}
                  {tier.key === 'enterprise' && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
                  )}
                  {tier.isMostPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-electric-blue to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg border-b-2 border-electric-blue/50">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="underline decoration-yellow-300">Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      tier.key === 'starter' ? 'bg-gray-800' :
                      tier.key === 'pro' ? 'bg-electric-blue/20' :
                      'bg-gray-300'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        tier.key === 'starter' ? 'text-gray-300' :
                        tier.key === 'pro' ? 'text-electric-blue' :
                        'text-gray-600'
                      }`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      tier.key === 'enterprise' ? 'text-gray-900' : 'text-white'
                    }`}>{tier.name}</h3>
                    <p className={`mb-6 ${
                      tier.key === 'enterprise' ? 'text-gray-600' : 'text-[var(--color-text-secondary)]'
                    }`}>
                      {tier.key === 'starter' ? 'Perfect for solo contractors getting started' :
                       tier.key === 'pro' ? 'For growing businesses with advanced needs' :
                       'For teams & agencies with enterprise requirements'}
                    </p>
                    
                    <div className="mb-6">
                      <div className={`text-5xl font-black mb-2 ${
                        tier.key === 'enterprise' ? 'text-gray-900' : 'text-white'
                      }`}>
                        ${tier.priceMonthly}
                        <span className={`text-lg font-normal ${
                          tier.key === 'enterprise' ? 'text-gray-600' : 'text-[var(--color-text-secondary)]'
                        }`}>/mo</span>
                      </div>
                      {showPromoPrice && (
                        <div className={`text-sm ${
                          tier.key === 'enterprise' ? 'text-gray-600' : 'text-[var(--clr-text-2)]'
                        }`}>
                          <span className="line-through">${realPrice}/mo</span>
                          <span className={`ml-2 font-semibold ${
                            tier.key === 'enterprise' ? 'text-gray-800' : 'text-electric-blue'
                          }`}>Save ${realPrice - tier.priceMonthly}/mo</span>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${styling.button}`}
                      variant={styling.buttonVariant}
                    >
                      {tier.cta}
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className={`font-semibold ${
                      tier.key === 'enterprise' ? 'text-gray-900' : 'text-white'
                    }`}>What's included:</h4>
                    <div className={tier.key === 'enterprise' ? '[&_span]:text-gray-700 [&_svg]:text-gray-600' : ''}>
                      <FeatureList items={tier.features} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Features */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Everything Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {globalFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--color-bg)] p-6 rounded-2xl border border-white/10"
                >
                  <div className="text-electric-blue text-4xl mb-4">✓</div>
                  <h3 className="text-white font-semibold mb-2">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Final CTA Section */}
          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-electric-blue/10 to-purple-600/5 border border-electric-blue/20 rounded-3xl p-12 max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start with <span className="text-electric-blue">Construktr for free</span> today
              </h2>
              <p className="text-xl text-[var(--clr-text-2)] mb-8 max-w-2xl mx-auto">
                No credit card required. Setup takes under 5 minutes. Cancel anytime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  className="bg-electric-blue text-white hover:bg-blue-700 px-10 py-4 text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Free
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-xl font-semibold rounded-xl"
                >
                  Schedule Demo
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-[var(--clr-text-2)]">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>24/7 support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer with dark theme enforcement */}
      <Footer />
    </div>
  );
}

/* Removed duplicate sections to clean up the website:
   - Trust & Compliance Badges (already covered in components)
   - Stripe Security Messaging (redundant with existing trust indicators) 
   - Trade-specific sections (duplicated from home page)
   - Additional feature showcases (covered in main pricing section above)
*/