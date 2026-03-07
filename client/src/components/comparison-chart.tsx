import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "AI-Powered Quotes", construktr: true, competitor1: false, competitor2: false },
  { name: "Smart Route Optimization", construktr: true, competitor1: false, competitor2: true },
  { name: "Instant Payment Processing", construktr: true, competitor1: true, competitor2: false },
  { name: "Real-time Calendar Sync", construktr: true, competitor1: true, competitor2: true },
  { name: "Automated Invoice Generation", construktr: true, competitor1: true, competitor2: false },
  { name: "Customer Portal", construktr: true, competitor1: false, competitor2: false },
  { name: "Business Analytics Dashboard", construktr: true, competitor1: false, competitor2: true },
  { name: "24/7 Customer Support", construktr: true, competitor1: false, competitor2: false },
  { name: "Mobile App", construktr: true, competitor1: true, competitor2: false },
  { name: "Multi-language Support", construktr: true, competitor1: false, competitor2: false }
];

export default function ComparisonChart() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Zap className="w-4 h-4 mr-2" />
            Comparison
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why CONSTRUKTR vs Others?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how CONSTRUKTR stacks up against other service business platforms.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-6 text-slate-300 font-medium">Feature</th>
                  <th className="text-center p-6 bg-gradient-to-r from-blue-600/30 to-purple-600/30 relative shadow-2xl shadow-blue-500/20 border-2 border-blue-500/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-xl"></div>
                    <div className="relative z-10 flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-6 h-6 text-blue-400" />
                        <span className="text-white font-bold text-xl">CONSTRUKTR</span>
                      </div>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm shadow-lg">
                        <Star className="w-4 h-4 mr-1" />
                        Recommended
                      </Badge>
                    </div>
                  </th>
                  <th className="text-center p-6 text-slate-400">
                    <div className="text-slate-300 font-medium">ServiceTitan</div>
                    <div className="text-xs text-slate-500 mt-1">Enterprise Focus</div>
                  </th>
                  <th className="text-center p-6 text-slate-400">
                    <div className="text-slate-300 font-medium">Jobber</div>
                    <div className="text-xs text-slate-500 mt-1">Basic Features</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
                  >
                    <td className="p-6 text-slate-300 font-medium">{feature.name}</td>
                    <td className="text-center p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 relative shadow-lg shadow-blue-500/10 border-x border-blue-500/20">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 blur-md"></div>
                      <div className="relative z-10">
                        {feature.construktr ? (
                          <Check className="w-7 h-7 text-green-400 mx-auto drop-shadow-lg" />
                        ) : (
                          <X className="w-7 h-7 text-red-400 mx-auto" />
                        )}
                      </div>
                    </td>
                    <td className="text-center p-6">
                      {feature.competitor1 ? (
                        <Check className="w-6 h-6 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-slate-500 mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-6">
                      {feature.competitor2 ? (
                        <Check className="w-6 h-6 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-slate-500 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center">
            <h4 className="text-slate-300 font-medium mb-2">ServiceTitan</h4>
            <div className="text-2xl font-bold text-slate-400 mb-2">$199<span className="text-sm font-normal">/month</span></div>
            <p className="text-slate-500 text-sm">Enterprise complexity</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-2 border-blue-500 rounded-xl p-6 text-center relative shadow-2xl shadow-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-xl rounded-xl"></div>
            <div className="relative z-10">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                Best Value
              </Badge>
              <h4 className="text-white font-bold mb-2 text-lg">CONSTRUKTR</h4>
              <div className="text-4xl font-bold text-white mb-2">$49<span className="text-sm font-normal">/month</span></div>
              <p className="text-blue-200 text-sm">All features included</p>
              <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Start Free Trial
              </Button>
            </div>
          </div>
          
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center">
            <h4 className="text-slate-300 font-medium mb-2">Jobber</h4>
            <div className="text-2xl font-bold text-slate-400 mb-2">$89<span className="text-sm font-normal">/month</span></div>
            <p className="text-slate-500 text-sm">Missing key features</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-300 mb-6">
            Ready to switch to the most complete service business platform?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Download Free App
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg rounded-xl"
            >
              Compare Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}