import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Leaf, Sun, Droplets, Clock, Calendar, MapPin } from "lucide-react";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";
import ProductScreenshot from "@/components/product-screenshots";

export default function LandscapingContractor() {
  return (
    <div className="min-h-screen bg-gradient-primary text-white">
      <Helmet>
        <title>Landscaping Contractor Software - Seasonal Scheduling & Route Optimization | CONSTRUKTR</title>
        <meta name="description" content="Complete landscaping business software for seasonal scheduling, maintenance contracts, crew management, and customer communication. Built for landscape professionals." />
        <meta name="keywords" content="landscaping software, lawn care app, landscape contractor management, seasonal scheduling, maintenance contracts" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-emerald-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-green-400 font-semibold text-lg">LANDSCAPING & LAWN CARE</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Seasonal Scheduling & Landscaping Business Management
              </h1>
              
              <p className="text-xl text-[var(--clr-text-2)] mb-8 leading-relaxed">
                Complete landscaping software for seasonal scheduling, maintenance contracts, crew routing, and customer communication. Built for landscape professionals who demand efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg font-bold rounded-xl glow-blue"
                >
                  <Link href="/pricing">
                    <Clock className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  See Seasonal Features
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-[var(--clr-text-2)]">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span>Weather Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Route Optimization</span>
                </div>
              </div>
            </motion.div>
            
            {/* App Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ProductScreenshot type="schedule" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Landscaping-Specific Features */}
      <section className="py-24 bg-gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Built for Seasonal Landscaping Operations
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Everything you need to manage year-round landscaping services and seasonal transitions
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📅",
                title: "Seasonal Service Scheduling",
                description: "Automatically transition between spring cleanup, summer maintenance, fall cleanups, and winter services."
              },
              {
                icon: "🗺️",
                title: "Smart Route Optimization", 
                description: "AI-powered routing saves 25+ miles daily. Group nearby properties and optimize for fuel efficiency."
              },
              {
                icon: "🌧️",
                title: "Weather-Based Adjustments",
                description: "Real-time weather integration automatically reschedules rain-sensitive services like fertilizing and seeding."
              },
              {
                icon: "📋",
                title: "Maintenance Contract Management",
                description: "Track recurring services, seasonal add-ons, and contract renewals. Automated billing and invoicing."
              },
              {
                icon: "👥",
                title: "Crew & Equipment Tracking",
                description: "Assign crews, track equipment usage, monitor fuel consumption, and manage maintenance schedules."
              },
              {
                icon: "📷",
                title: "Before/After Documentation",
                description: "Photo documentation for property transformations. Perfect for marketing and customer satisfaction."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-card p-6 rounded-2xl border border-white/10 card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[var(--clr-text-2)] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Results from Landscaping Professionals
            </h2>
            <div className="divider-blue max-w-xs mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "Route Efficiency",
                value: "25 Miles Saved",
                description: "Daily mileage reduction through intelligent routing"
              },
              {
                metric: "Customer Retention", 
                value: "94%",
                description: "Annual contract renewal rate with CONSTRUKTR users"
              },
              {
                metric: "Time Savings",
                value: "3 Hours Daily",
                description: "Less time on scheduling, more time growing your business"
              }
            ].map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-card p-8 rounded-2xl border border-green-500/20 text-center card-hover"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">{result.value}</div>
                <div className="text-white font-semibold mb-3">{result.metric}</div>
                <p className="text-[var(--clr-text-2)] text-sm">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Streamline Your Landscaping Business?
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] mb-10">
              Join landscaping professionals nationwide using CONSTRUKTR to optimize routes, manage contracts, and grow revenue
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 px-10 py-4 text-xl font-bold rounded-2xl glow-blue"
              >
                <Link href="/pricing">
                  <Clock className="w-6 h-6 mr-3" />
                  Start 30-Day Free Trial
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                Schedule Landscaping Demo
              </Button>
            </div>
            
            <p className="text-sm text-[var(--clr-text-2)]">
              No credit card required • Cancel anytime • Built for seasonal operations
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}