import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Star, TrendingUp } from "lucide-react";
import { Link } from "wouter";

const majorStates = [
  { name: "California", cities: ["Los Angeles", "San Francisco", "San Diego"] },
  { name: "Texas", cities: ["Houston", "Dallas", "Austin"] },
  { name: "Florida", cities: ["Miami", "Tampa", "Orlando"] },
  { name: "New York", cities: ["New York City", "Buffalo", "Albany"] },
  { name: "Illinois", cities: ["Chicago", "Rockford", "Peoria"] },
  { name: "Arizona", cities: ["Phoenix", "Tucson", "Mesa"] }
];

const contractorTypes = [
  { type: "HVAC", keywords: "heating cooling air conditioning" },
  { type: "Plumbing", keywords: "plumber water pipe repair" },
  { type: "Electrical", keywords: "electrician wiring installation" },
  { type: "Roofing", keywords: "roofer roof repair replacement" },
  { type: "General", keywords: "handyman home improvement renovation" }
];

export default function SEOLocalTargeting() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main SEO Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-blue-600/20 text-blue-700 border-blue-600/30 mb-4 px-4 py-2">
            🌎 Serving Contractors Nationwide
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Best Contractor Business App in Your State
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-4xl mx-auto">
            CONSTRUKTR™ contractor job management software helps HVAC, plumbing, electrical, and roofing contractors across all 50 states. 
            From construction scheduling apps to plumber quoting software, we've got your trade covered.
          </p>
        </motion.div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {majorStates.map((state, index) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--clr-surface)] rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-white">{state.name} Contractors</h3>
              </div>
              
              <p className="text-[var(--clr-text-2)] mb-4">
                Leading contractor management app for {state.name} trades
              </p>
              
              <div className="space-y-2 mb-4">
                {state.cities.map((city) => (
                  <div key={city} className="text-sm text-gray-500">
                    • Best contractor app in {city}, {state.name}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  500+ contractors
                </div>
                <Link href={`/contractors/${state.name.toLowerCase()}`}>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trade-Specific SEO Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[var(--clr-surface)] rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Contractor Job Management by Trade
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractorTypes.map((trade, index) => (
              <motion.div
                key={trade.type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200"
              >
                <h4 className="text-xl font-bold text-white mb-3">
                  {trade.type} Contractor Software
                </h4>
                <p className="text-[var(--clr-text-2)] text-sm mb-4">
                  Construction scheduling app and {trade.keywords} business management tools
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <Star className="w-4 h-4 mr-1" />
                  Specialized for {trade.type.toLowerCase()} contractors
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Keywords Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Why Contractors Choose CONSTRUKTR™
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Contractor Job Management</div>
              <div className="text-blue-100">Complete business workflow automation</div>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Construction Scheduling App</div>
              <div className="text-blue-100">Smart calendar and route optimization</div>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">Plumber Quoting Software</div>
              <div className="text-blue-100">AI-powered estimates for all trades</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}