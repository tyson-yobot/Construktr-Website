import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wrench, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// State data with major cities
const statesData = [
  {
    name: "Texas",
    slug: "texas",
    contractors: "15,200+",
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
    growth: "+18%",
    color: "from-red-500 to-orange-500"
  },
  {
    name: "California",
    slug: "california", 
    contractors: "22,400+",
    cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno"],
    growth: "+22%",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Florida",
    slug: "florida",
    contractors: "12,800+", 
    cities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Tallahassee"],
    growth: "+25%",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "New York",
    slug: "new-york",
    contractors: "18,600+",
    cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    growth: "+15%",
    color: "from-purple-500 to-violet-500"
  },
  {
    name: "Pennsylvania", 
    slug: "pennsylvania",
    contractors: "9,400+",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"],
    growth: "+12%",
    color: "from-indigo-500 to-blue-500"
  },
  {
    name: "Illinois",
    slug: "illinois",
    contractors: "11,200+",
    cities: ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville"],
    growth: "+16%",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Ohio",
    slug: "ohio",
    contractors: "8,900+",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    growth: "+14%",
    color: "from-pink-500 to-rose-500"
  },
  {
    name: "Georgia",
    slug: "georgia",
    contractors: "7,600+",
    cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah"],
    growth: "+20%",
    color: "from-teal-500 to-green-500"
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    contractors: "6,800+",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"],
    growth: "+19%",
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Michigan",
    slug: "michigan",
    contractors: "7,200+",
    cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Lansing"],
    growth: "+11%",
    color: "from-violet-500 to-purple-500"
  },
  {
    name: "New Jersey",
    slug: "new-jersey",
    contractors: "8,100+",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"],
    growth: "+17%",
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Virginia",
    slug: "virginia",
    contractors: "5,900+",
    cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News"],
    growth: "+21%",
    color: "from-rose-500 to-pink-500"
  }
];

// Trade data with specialties and growth metrics
const tradesData = [
  {
    name: "Plumbing",
    slug: "plumbing",
    icon: "🔧",
    contractors: "45,000+",
    avgRevenue: "$127K",
    specialties: ["Emergency Repair", "New Construction", "Remodeling", "Commercial", "Drain Cleaning"],
    growth: "+23%",
    color: "from-blue-600 to-cyan-600",
    description: "Pipe repair, installation, and emergency services"
  },
  {
    name: "HVAC",
    slug: "hvac", 
    icon: "❄️",
    contractors: "38,200+",
    avgRevenue: "$142K",
    specialties: ["AC Repair", "Heating Install", "Duct Cleaning", "Commercial HVAC", "Energy Audits"],
    growth: "+19%",
    color: "from-green-600 to-emerald-600",
    description: "Heating, cooling, and ventilation systems"
  },
  {
    name: "Electrical",
    slug: "electrical",
    icon: "⚡",
    contractors: "42,100+",
    avgRevenue: "$134K", 
    specialties: ["Wiring", "Panel Upgrades", "Lighting", "Commercial Electric", "Smart Home"],
    growth: "+26%",
    color: "from-yellow-600 to-orange-600",
    description: "Wiring, panels, and electrical installations"
  },
  {
    name: "Roofing",
    slug: "roofing",
    icon: "🏠",
    contractors: "32,800+",
    avgRevenue: "$156K",
    specialties: ["Roof Repair", "New Roofs", "Gutters", "Commercial Roofing", "Solar Install"],
    growth: "+18%", 
    color: "from-red-600 to-rose-600",
    description: "Roof installation, repair, and maintenance"
  },
  {
    name: "Handyman",
    slug: "handyman",
    icon: "🔨",
    contractors: "28,600+",
    avgRevenue: "$89K",
    specialties: ["Home Repair", "Maintenance", "Small Projects", "Assembly", "Odd Jobs"],
    growth: "+31%",
    color: "from-purple-600 to-violet-600", 
    description: "General repair and maintenance services"
  },
  {
    name: "Landscaping",
    slug: "landscaping",
    icon: "🌿",
    contractors: "24,400+",
    avgRevenue: "$98K",
    specialties: ["Lawn Care", "Design", "Hardscaping", "Tree Service", "Irrigation"],
    growth: "+24%",
    color: "from-green-600 to-teal-600",
    description: "Lawn care, design, and outdoor maintenance"
  },
  {
    name: "Painting",
    slug: "painting", 
    icon: "🎨",
    contractors: "21,200+",
    avgRevenue: "$76K",
    specialties: ["Interior Paint", "Exterior Paint", "Commercial Paint", "Drywall", "Staining"],
    growth: "+15%",
    color: "from-indigo-600 to-blue-600",
    description: "Interior and exterior painting services"
  },
  {
    name: "Flooring",
    slug: "flooring",
    icon: "🪵",
    contractors: "18,900+", 
    avgRevenue: "$112K",
    specialties: ["Hardwood", "Tile", "Carpet", "Laminate", "Refinishing"],
    growth: "+22%",
    color: "from-amber-600 to-yellow-600",
    description: "Floor installation and refinishing"
  },
  {
    name: "General Contracting",
    slug: "general-contracting",
    icon: "👷",
    contractors: "35,600+",
    avgRevenue: "$189K", 
    specialties: ["Remodeling", "New Construction", "Commercial", "Project Management", "Permits"],
    growth: "+17%",
    color: "from-slate-600 to-gray-600",
    description: "Full-service construction and remodeling"
  }
];

interface StateTradeGridsProps {
  showStates?: boolean;
  showTrades?: boolean;
  maxItems?: number;
}

export default function StateTradeGrids({ 
  showStates = true, 
  showTrades = true,
  maxItems = 12 
}: StateTradeGridsProps) {
  const displayStates = statesData.slice(0, maxItems);
  const displayTrades = tradesData.slice(0, maxItems);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showStates && (
          <div className="mb-20">
            {/* States Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                CONSTRUKTR by State
              </h2>
              <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto leading-relaxed">
                Join thousands of contractors across America who trust CONSTRUKTR to grow their business
              </p>
            </motion.div>

            {/* States Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayStates.map((state, index) => (
                <motion.div
                  key={state.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/states/${state.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-gray-200 bg-[var(--clr-surface)]">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${state.color} flex items-center justify-center`}>
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            {state.growth} growth
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-white group-hover:text-blue-600 transition-colors">
                          {state.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-[var(--clr-text-2)]">
                          <Users className="w-4 h-4" />
                          <span className="font-semibold">{state.contractors}</span>
                          <span className="text-sm">contractors</span>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="space-y-2 mb-4">
                          <div className="text-sm font-medium text-gray-700 mb-2">Top Cities:</div>
                          {state.cities.slice(0, 4).map((city, cityIndex) => (
                            <div key={city} className="flex items-center justify-between text-sm">
                              <span className="text-[var(--clr-text-2)]">{city}</span>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-6 px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                asChild
                              >
                                <Link to={`/states/${state.slug}/${city.toLowerCase().replace(/\s+/g, '-')}`}>
                                  View <ArrowRight className="w-3 h-3 ml-1" />
                                </Link>
                              </Button>
                            </div>
                          ))}
                          {state.cities.length > 4 && (
                            <div className="text-xs text-gray-500 text-center pt-2">
                              +{state.cities.length - 4} more cities
                            </div>
                          )}
                        </div>

                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          asChild
                        >
                          <Link to={`/states/${state.slug}`}>
                            View {state.name} <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {showTrades && (
          <div>
            {/* Trades Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                CONSTRUKTR by Trade
              </h2>
              <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto leading-relaxed">
                Purpose-built features for every type of contractor and service professional
              </p>
            </motion.div>

            {/* Trades Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayTrades.map((trade, index) => (
                <motion.div
                  key={trade.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/${trade.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-gray-200 bg-[var(--clr-surface)] h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${trade.color} flex items-center justify-center text-2xl`}>
                            {trade.icon}
                          </div>
                          <Badge className="bg-green-100 text-green-700 border-green-200">
                            {trade.growth} growth
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-white group-hover:text-blue-600 transition-colors">
                          {trade.name}
                        </CardTitle>
                        <p className="text-sm text-[var(--clr-text-2)] mb-3">{trade.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-[var(--clr-text-2)]">
                            <Users className="w-4 h-4" />
                            <span className="font-semibold">{trade.contractors}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[var(--clr-text-2)]">
                            <Star className="w-4 h-4" />
                            <span className="font-semibold">{trade.avgRevenue}</span>
                            <span className="text-xs">avg revenue</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0 flex-1 flex flex-col">
                        <div className="space-y-2 mb-4 flex-1">
                          <div className="text-sm font-medium text-gray-700 mb-2">Specialties:</div>
                          {trade.specialties.slice(0, 4).map((specialty, specIndex) => (
                            <div key={specialty} className="flex items-center justify-between text-sm">
                              <span className="text-[var(--clr-text-2)] text-xs">{specialty}</span>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="h-5 px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                asChild
                              >
                                <Link to={`/${trade.slug}/${specialty.toLowerCase().replace(/\s+/g, '-')}`}>
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </Button>
                            </div>
                          ))}
                          {trade.specialties.length > 4 && (
                            <div className="text-xs text-gray-500 text-center pt-2">
                              +{trade.specialties.length - 4} more specialties
                            </div>
                          )}
                        </div>

                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-auto"
                          asChild
                        >
                          <Link to={`/${trade.slug}`}>
                            View {trade.name} <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Grow Your {showTrades ? 'Trade' : 'Local'} Business?
          </h3>
          <p className="text-xl mb-6 text-blue-100">
            Join contractors across America who've increased revenue by 40% with CONSTRUKTR
          </p>
          <Button 
            size="lg"
            className="bg-[var(--clr-surface)] text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg"
            asChild
          >
            <Link to="/get">
              Start Your Free Trial
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}