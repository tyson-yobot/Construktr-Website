import { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Download, Star, Shield, Zap, Clock, Users, CheckCircle, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const appFeatures = [
  {
    icon: Zap,
    title: "AI-Powered Quotes",
    description: "Generate accurate estimates in minutes, not hours",
    color: "bg-yellow-500"
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Optimize routes and prevent double-bookings automatically",
    color: "bg-blue-500"
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Coordinate your crew with real-time updates",
    color: "bg-green-500"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Accept payments on-site with military-grade security",
    color: "bg-purple-500"
  },
  {
    icon: Smartphone,
    title: "Offline Mode",
    description: "Work without internet, sync when connected",
    color: "bg-orange-500"
  },
  {
    icon: CheckCircle,
    title: "Job Tracking",
    description: "Track progress from quote to completion",
    color: "bg-teal-500"
  }
];

const testimonials = [
  {
    name: "Mike Rodriguez",
    company: "Rodriguez Plumbing",
    location: "Austin, TX",
    rating: 5,
    quote: "This app completely transformed how I run my business. I'm booking 40% more jobs and my customers love the professional experience.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Sarah Chen",
    company: "Elite HVAC Services",
    location: "Denver, CO",
    rating: 5,
    quote: "The AI quotes are incredibly accurate. I used to spend hours on estimates, now it takes 5 minutes and customers approve instantly.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e9a3?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "David Thompson",
    company: "Thompson Construction",
    location: "Phoenix, AZ",
    rating: 5,
    quote: "My team loves how easy it is to update job status on-site. Customers always know what's happening and we look incredibly professional.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Jennifer Martinez",
    company: "Green Thumb Landscaping",
    location: "Miami, FL",
    rating: 5,
    quote: "The scheduling optimization saved me 2 hours of drive time per day. That's 10 extra hours a week I can spend with my family or taking on more jobs.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
  }
];

const downloadStats = [
  {
    number: "50K+",
    label: "Active Users"
  },
  {
    number: "4.9",
    label: "App Store Rating"
  },
  {
    number: "$2.5M+",
    label: "Processed Monthly"
  },
  {
    number: "99.9%",
    label: "Uptime"
  }
];

export default function GetApp() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--clr-surface)]">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Run Your Business
                <span className="text-electric-blue"> From Your Phone</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join 50,000+ service professionals who've transformed their business with the CONSTRUKTR mobile app. Everything you need to quote, schedule, and get paid, all in your pocket.
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href="https://apps.apple.com/app/construktr" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3">
                    <img src="https://developer.apple.com/assets/elements/icons/app-store/app-store-128x128_2x.png" alt="App Store" className="w-6 h-6" width="24" height="24" loading="lazy" decoding="async" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </Button>
                </a>
                
                <a href="https://play.google.com/store/apps/details?id=com.construktr.app" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-3">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="w-6 h-6" width="24" height="24" loading="lazy" decoding="async" />
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </Button>
                </a>
              </div>
              
              {/* Trust Line */}
              <p className="text-gray-300 text-sm mb-8">Cancel anytime · No setup fees · Free plan available</p>
              
              {/* QR Code Toggle */}
              <button
                onClick={() => setShowQR(!showQR)}
                className="flex items-center space-x-2 text-electric-blue hover:text-blue-300 transition-colors duration-200"
              >
                <QrCode className="w-5 h-5" />
                <span>Scan QR Code to Download</span>
              </button>
              
              {showQR && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-[var(--clr-surface)] rounded-xl inline-block"
                >
                  <div className="w-32 h-32 bg-gray-900 rounded-lg flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-[var(--clr-text-2)] text-sm mt-2 text-center">QR Code Placeholder</p>
                </motion.div>
              )}
            </motion.div>
            
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-[var(--clr-surface)] rounded-2xl overflow-hidden">
                  <div className="h-full bg-gradient-to-b from-electric-blue to-blue-600 p-6 text-white">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-[var(--clr-surface)]/20 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                        <Smartphone className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg">CONSTRUKTR</h3>
                      <p className="text-sm opacity-80">Pro Dashboard</p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[var(--clr-surface)]/10 rounded-xl p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Today's Jobs</span>
                          <span className="font-bold">12</span>
                        </div>
                      </div>
                      <div className="bg-[var(--clr-surface)]/10 rounded-xl p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Revenue</span>
                          <span className="font-bold">$4,250</span>
                        </div>
                      </div>
                      <div className="bg-[var(--clr-surface)]/10 rounded-xl p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Active Quotes</span>
                          <span className="font-bold">8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {downloadStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-electric-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--clr-text-2)] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              What You Get With The App
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Everything you need to run your service business professionally, right from your smartphone
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--clr-surface)] p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--clr-text-2)] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Loved by Service Professionals
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              See what real users say about the CONSTRUKTR mobile app
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] p-8 rounded-3xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-800 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-[var(--clr-text-2)] text-sm">
                      {testimonial.company} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-electric text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Download Now, Transform Tomorrow
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful service professionals. Free to download, easy to use.
            </p>
            
            {/* Large Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button className="bg-black text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-4 shadow-2xl">
                <img src="https://developer.apple.com/assets/elements/icons/app-store/app-store-128x128_2x.png" alt="App Store" className="w-8 h-8" width="32" height="32" loading="lazy" decoding="async" />
                <div className="text-left">
                  <div className="text-sm">Download on the</div>
                  <div className="text-2xl font-bold">App Store</div>
                </div>
              </Button>
              
              <Button className="bg-black text-white px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-4 shadow-2xl">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="w-8 h-8" width="32" height="32" loading="lazy" decoding="async" />
                <div className="text-left">
                  <div className="text-sm">Get it on</div>
                  <div className="text-2xl font-bold">Google Play</div>
                </div>
              </Button>
            </div>
            
            <p className="text-blue-100 text-lg">
              📱 Free download • ⚡ 2-minute setup • 🚀 Transform your business today
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}