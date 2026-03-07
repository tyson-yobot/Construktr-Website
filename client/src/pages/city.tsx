import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Phone, Star, Clock, DollarSign, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import EnhancedStickyNavbar from "@/components/enhanced-sticky-navbar";
import StickyMobileCTA from "@/components/sticky-mobile-cta";

// City-specific data - would normally come from CMS/API
const cityPageData: Record<string, Record<string, any>> = {
  texas: {
    houston: {
      name: "Houston",
      state: "Texas",
      description: "America's Energy Capital leads in contractor innovation and growth",
      contractors: "3,200+",
      population: "2.3M",
      medianIncome: "$52,338",
      avgJobValue: "$2,650",
      topTrades: ["HVAC", "Electrical", "Plumbing", "Roofing", "General Contracting"],
      neighborhoods: [
        { name: "Downtown", demand: "High", avgJob: "$3,200" },
        { name: "The Heights", demand: "Very High", avgJob: "$4,100" },
        { name: "River Oaks", demand: "Premium", avgJob: "$8,500" },
        { name: "Montrose", demand: "High", avgJob: "$3,800" },
        { name: "Katy", demand: "Growing", avgJob: "$2,900" }
      ],
      localStats: {
        permits: "45,000+ annual permits",
        growth: "18% contractor growth",
        season: "Year-round demand",
        specialties: ["Hurricane restoration", "Oil & gas commercial"]
      },
      testimonial: {
        name: "Carlos Rodriguez",
        trade: "HVAC Contractor",
        quote: "Houston's heat means constant AC work. CONSTRUKTR helps me handle 60% more service calls efficiently.",
        revenue: "+60% capacity",
        rating: 5
      },
      seoContent: {
        title: "Houston Contractor Software | CONSTRUKTR - HVAC, Plumbing, Electrical",
        metaDescription: "Join 3,200+ Houston contractors using CONSTRUKTR. Perfect for Houston HVAC, plumbing, electrical contractors. AI quotes, smart scheduling for Harris County.",
        h1: "Houston's Leading Contractor Management Software",
        localKeywords: ["Houston contractor software", "Harris County HVAC app", "Houston plumbing software", "contractor app Houston TX"]
      }
    },
    dallas: {
      name: "Dallas",
      state: "Texas",
      description: "Big D contractors choose CONSTRUKTR for business growth and efficiency",
      contractors: "2,800+",
      population: "1.3M",
      medianIncome: "$54,747",
      avgJobValue: "$2,850",
      topTrades: ["Roofing", "HVAC", "Electrical", "Plumbing", "Landscaping"],
      neighborhoods: [
        { name: "Uptown", demand: "Premium", avgJob: "$5,200" },
        { name: "Deep Ellum", demand: "High", avgJob: "$3,400" },
        { name: "Bishop Arts", demand: "High", avgJob: "$3,900" },
        { name: "Plano", demand: "Very High", avgJob: "$4,200" },
        { name: "Richardson", demand: "Growing", avgJob: "$3,100" }
      ],
      localStats: {
        permits: "38,000+ annual permits",
        growth: "22% contractor growth",
        season: "Spring/Summer peak",
        specialties: ["Hail damage repair", "Commercial construction"]
      },
      testimonial: {
        name: "Jennifer Wilson",
        trade: "Roofing Contractor",
        quote: "Dallas weather means constant roofing work. CONSTRUKTR's storm damage features are perfect for our needs.",
        revenue: "+45% efficiency",
        rating: 5
      },
      seoContent: {
        title: "Dallas Contractor Software | CONSTRUKTR - Roofing, HVAC, Electrical",
        metaDescription: "Join 2,800+ Dallas contractors using CONSTRUKTR. Perfect for Dallas roofing, HVAC, electrical contractors. Storm damage tools for Dallas County.",
        h1: "Dallas Contractor Software That Works",
        localKeywords: ["Dallas contractor software", "Dallas County roofing app", "Dallas HVAC software", "contractor management Dallas TX"]
      }
    }
  },
  california: {
    "los-angeles": {
      name: "Los Angeles",
      state: "California", 
      description: "City of Angels contractors trust CONSTRUKTR for premium service delivery",
      contractors: "4,800+",
      population: "3.9M",
      medianIncome: "$62,474",
      avgJobValue: "$3,850",
      topTrades: ["Electrical", "Solar", "Pool Service", "HVAC", "Landscaping"],
      neighborhoods: [
        { name: "Beverly Hills", demand: "Ultra Premium", avgJob: "$12,000" },
        { name: "Santa Monica", demand: "Premium", avgJob: "$6,500" },
        { name: "Hollywood", demand: "High", avgJob: "$4,200" },
        { name: "Venice", demand: "High", avgJob: "$4,800" },
        { name: "Downtown LA", demand: "Commercial", avgJob: "$5,500" }
      ],
      localStats: {
        permits: "65,000+ annual permits",
        growth: "24% contractor growth", 
        season: "Year-round demand",
        specialties: ["Solar installation", "Pool maintenance", "High-end remodeling"]
      },
      testimonial: {
        name: "David Kim",
        trade: "Solar Installer",
        quote: "LA's solar incentives create huge demand. CONSTRUKTR helps me manage complex installations and permits.",
        revenue: "+55% project volume",
        rating: 5
      },
      seoContent: {
        title: "Los Angeles Contractor Software | CONSTRUKTR - Solar, Electrical, Pool",
        metaDescription: "Join 4,800+ Los Angeles contractors using CONSTRUKTR. Perfect for LA solar, electrical, pool contractors. Premium features for LA County.",
        h1: "Los Angeles Contractor Software for Premium Service",
        localKeywords: ["Los Angeles contractor software", "LA County solar app", "Los Angeles electrical software", "contractor app LA California"]
      }
    }
  }
};

export default function CityPage() {
  const [, params] = useRoute("/states/:state/:city");
  const stateSlug = params?.state || "";
  const citySlug = params?.city || "";
  
  const cityData = cityPageData[stateSlug]?.[citySlug];

  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">City Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <EnhancedStickyNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge className="bg-blue-600/20 border-blue-500/30 text-blue-400 mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              {cityData.name}, {cityData.state}
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
              {cityData.seoContent.h1}
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {cityData.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{cityData.contractors}</div>
                <div className="text-sm text-slate-400">Active Contractors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{cityData.population}</div>
                <div className="text-sm text-slate-400">Population</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{cityData.avgJobValue}</div>
                <div className="text-sm text-slate-400">Avg Job Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{cityData.medianIncome}</div>
                <div className="text-sm text-slate-400">Median Income</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4"
                asChild
              >
                <Link to="/get">
                  Start Free Trial
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-[var(--clr-surface)]/10"
                asChild
              >
                <Link to="/demos">
                  Watch Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {Object.entries(cityData.localStats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] rounded-xl p-6 shadow-lg text-center border border-gray-200"
              >
                <div className="text-2xl font-bold text-white mb-2">{value}</div>
                <div className="text-sm text-[var(--clr-text-2)] capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-[var(--clr-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-6">
              Top {cityData.name} Neighborhoods for Contractors
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              High-demand areas where CONSTRUKTR contractors are thriving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityData.neighborhoods.map((neighborhood: any, index: number) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg font-bold text-white">{neighborhood.name}</span>
                      <Badge className={`${
                        neighborhood.demand === 'Ultra Premium' ? 'bg-purple-100 text-purple-700 border-purple-200' :
                        neighborhood.demand === 'Premium' ? 'bg-gold-100 text-yellow-700 border-yellow-200' :
                        neighborhood.demand === 'Very High' ? 'bg-green-100 text-green-700 border-green-200' :
                        neighborhood.demand === 'High' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                        'bg-gray-100 text-gray-700 border-gray-200'
                      }`}>
                        {neighborhood.demand}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--clr-text-2)]">Average Job Value</span>
                      <span className="font-bold text-green-600 text-lg">{neighborhood.avgJob}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Trades */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-6">
              Most In-Demand Trades in {cityData.name}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cityData.topTrades.map((trade: string, index: number) => (
              <motion.div
                key={trade}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/${trade.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-3">
                        {trade === 'HVAC' ? '❄️' : 
                         trade === 'Electrical' ? '⚡' :
                         trade === 'Plumbing' ? '🔧' :
                         trade === 'Roofing' ? '🏠' :
                         trade === 'Solar' ? '☀️' :
                         trade === 'Landscaping' ? '🌿' :
                         trade === 'Pool Service' ? '🏊' :
                         '👷'}
                      </div>
                      <h3 className="font-bold text-white mb-2">{trade}</h3>
                      <Button size="sm" variant="outline" className="w-full">
                        View {trade} <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonial */}
      <section className="py-20 bg-[var(--clr-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-gray-200 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(cityData.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl text-gray-700 mb-6 italic font-medium">
                  "{cityData.testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <div className="font-bold text-white text-lg">{cityData.testimonial.name}</div>
                    <div className="text-[var(--clr-text-2)]">{cityData.testimonial.trade}</div>
                    <div className="text-gray-500 text-sm">{cityData.name}, {cityData.state}</div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2">
                    {cityData.testimonial.revenue}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join {cityData.contractors} {cityData.name} Contractors?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and see why contractors in {cityData.name} choose CONSTRUKTR
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[var(--clr-surface)] text-blue-600 hover:bg-gray-100 font-bold px-8 py-4"
                asChild
              >
                <Link to="/get">
                  Start Free Trial
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-[var(--clr-surface)]/10"
                asChild
              >
                <Link to="/demos">
                  <Phone className="w-4 h-4 mr-2" />
                  Book Demo Call
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <StickyMobileCTA />
    </div>
  );
}