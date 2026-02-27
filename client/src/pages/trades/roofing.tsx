import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, Shield, DollarSign, Clock, Zap, Camera } from "lucide-react";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";
import ProductScreenshot from "@/components/product-screenshots";

export default function RoofingContractor() {
  return (
    <div className="min-h-screen bg-gradient-primary text-white">
      <Helmet>
        <title>Roofing Contractor Software - Storm Response & Repair Management | CONSTRUKTR™</title>
        <meta name="description" content="Professional roofing contractor software for storm response, insurance claims, repair estimates, and crew scheduling. Trusted by roofers nationwide." />
        <meta name="keywords" content="roofing contractor software, storm damage software, roofing estimates, insurance claim management, roof repair app" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-orange-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1)_0%,transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-red-400" />
                </div>
                <span className="text-red-400 font-semibold text-lg">ROOFING CONTRACTORS</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Storm Response & Roofing Business Management
              </h1>
              
              <p className="text-xl text-[var(--clr-text-2)] mb-8 leading-relaxed">
                Complete roofing contractor software for storm response, insurance claims, repair estimates, and crew scheduling. Purpose-built for roofing professionals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg font-bold rounded-xl glow-blue"
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
                  <Camera className="w-5 h-5 mr-2" />
                  See Live Demo
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-[var(--clr-text-2)]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Insurance Claims Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Storm Response Mode</span>
                </div>
              </div>
            </motion.div>
            
            {/* App Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ProductScreenshot type="quotes" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roofing-Specific Features */}
      <section className="py-24 bg-gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Built Specifically for Roofing Professionals
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Everything you need to manage storm response, insurance claims, and roofing projects
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Storm Damage Assessment",
                description: "Quick photo documentation, damage assessment tools, and instant repair estimates for storm-damaged roofs."
              },
              {
                icon: "📋",
                title: "Insurance Claim Management", 
                description: "Generate insurance-ready reports, track claim status, and communicate directly with adjusters."
              },
              {
                icon: "👥",
                title: "Crew Scheduling & Dispatch",
                description: "Optimize crew assignments, track material deliveries, and manage multi-day roofing projects."
              },
              {
                icon: "💰",
                title: "Material Cost Tracking",
                description: "Real-time pricing for shingles, underlayment, and supplies. Automatic markup calculations."
              },
              {
                icon: "📱",
                title: "Mobile-First Design",
                description: "Work entirely from your phone or tablet. Perfect for on-roof assessments and estimates."
              },
              {
                icon: "📊",
                title: "Job Progress Tracking",
                description: "Track project phases from tear-off to completion. Keep customers informed with real-time updates."
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
              Real Results from Roofing Contractors
            </h2>
            <div className="divider-blue max-w-xs mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "Storm Response Time",
                value: "50% Faster",
                description: "Get to storm damage sites quicker with optimized routing"
              },
              {
                metric: "Insurance Approval Rate", 
                value: "95%",
                description: "Professional documentation increases claim approvals"
              },
              {
                metric: "Revenue Increase",
                value: "+$275K/year",
                description: "Average revenue growth for CONSTRUKTR roofing contractors"
              }
            ].map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-card p-8 rounded-2xl border border-red-500/20 text-center card-hover"
              >
                <div className="text-3xl font-bold text-red-400 mb-2">{result.value}</div>
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
              Ready to Transform Your Roofing Business?
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] mb-10">
              Join hundreds of roofing contractors using CONSTRUKTR to streamline storm response and grow revenue
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-red-600 text-white hover:bg-red-700 px-10 py-4 text-xl font-bold rounded-2xl glow-blue"
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
                Schedule Roofing Demo
              </Button>
            </div>
            
            <p className="text-sm text-[var(--clr-text-2)]">
              No credit card required • Cancel anytime • Setup in under 10 minutes
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}