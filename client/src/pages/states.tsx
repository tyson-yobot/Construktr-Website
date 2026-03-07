import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, TrendingUp, Star, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import EnhancedStickyNavbar from "@/components/enhanced-sticky-navbar";
import StickyMobileCTA from "@/components/sticky-mobile-cta";

// This would normally come from a CMS or API
const statePageData: Record<string, any> = {
  texas: {
    name: "Texas",
    description: "The Lone Star State leads America in contractor growth and opportunity",
    contractors: "15,200+",
    growth: "+18%",
    avgRevenue: "$134,000",
    topTrades: ["HVAC", "Roofing", "Electrical", "Plumbing", "General Contracting"],
    cities: [
      { name: "Houston", contractors: "3,200+", slug: "houston" },
      { name: "Dallas", contractors: "2,800+", slug: "dallas" },
      { name: "Austin", contractors: "2,100+", slug: "austin" },
      { name: "San Antonio", contractors: "1,900+", slug: "san-antonio" },
      { name: "Fort Worth", contractors: "1,400+", slug: "fort-worth" },
      { name: "El Paso", contractors: "800+", slug: "el-paso" },
      { name: "Arlington", contractors: "700+", slug: "arlington" },
      { name: "Corpus Christi", contractors: "650+", slug: "corpus-christi" }
    ],
    testimonials: [
      {
        name: "Miguel Rodriguez",
        trade: "HVAC Contractor",
        city: "Houston",
        quote: "CONSTRUKTR has transformed my business. I'm booking 30% more jobs and getting paid faster.",
        revenue: "+40% revenue"
      },
      {
        name: "Sarah Williams", 
        trade: "Roofing Contractor",
        city: "Dallas",
        quote: "The scheduling tools alone save me 2 hours every day. Best investment I've ever made.",
        revenue: "+65% efficiency"
      }
    ],
    stats: {
      averageJobSize: "$2,400",
      contractorDensity: "5.2 per 1,000 residents",
      growthRate: "18% year-over-year",
      topSeason: "Spring/Summer"
    },
    seoContent: {
      title: "Texas Contractor Software | CONSTRUKTR",
      metaDescription: "Join 15,200+ Texas contractors using CONSTRUKTR to grow their business. AI-powered quotes, scheduling, and payments. Available in Houston, Dallas, Austin & more.",
      h1: "The Leading Contractor Software in Texas",
      localKeywords: ["Texas contractor software", "Houston HVAC software", "Dallas plumbing app", "Austin electrician tools"]
    }
  },
  california: {
    name: "California",
    description: "Golden State contractors trust CONSTRUKTR for growth and efficiency",
    contractors: "22,400+",
    growth: "+22%",
    avgRevenue: "$156,000",
    topTrades: ["Electrical", "Solar", "Plumbing", "HVAC", "Landscaping"],
    cities: [
      { name: "Los Angeles", contractors: "4,800+", slug: "los-angeles" },
      { name: "San Diego", contractors: "2,600+", slug: "san-diego" },
      { name: "San Jose", contractors: "2,200+", slug: "san-jose" },
      { name: "San Francisco", contractors: "1,900+", slug: "san-francisco" },
      { name: "Fresno", contractors: "1,100+", slug: "fresno" },
      { name: "Sacramento", contractors: "1,000+", slug: "sacramento" },
      { name: "Long Beach", contractors: "900+", slug: "long-beach" },
      { name: "Oakland", contractors: "800+", slug: "oakland" }
    ],
    testimonials: [
      {
        name: "David Chen",
        trade: "Solar Installer", 
        city: "San Diego",
        quote: "The AI quotes are incredibly accurate. I'm winning 45% more solar installation jobs.",
        revenue: "+45% win rate"
      },
      {
        name: "Maria Gonzalez",
        trade: "Electrical Contractor",
        city: "Los Angeles", 
        quote: "Scheduling has never been easier. No more double bookings or missed appointments.",
        revenue: "+30% capacity"
      }
    ],
    stats: {
      averageJobSize: "$3,200",
      contractorDensity: "5.8 per 1,000 residents", 
      growthRate: "22% year-over-year",
      topSeason: "Year-round"
    },
    seoContent: {
      title: "California Contractor Software | CONSTRUKTR",
      metaDescription: "Join 22,400+ California contractors using CONSTRUKTR. Perfect for LA, San Diego, San Francisco contractors. AI quotes, smart scheduling, instant payments.",
      h1: "California's Most Trusted Contractor Software",
      localKeywords: ["California contractor app", "Los Angeles plumbing software", "San Diego solar tools", "Bay Area electrical app"]
    }
  }
};

export default function StatePage() {
  const [, params] = useRoute("/states/:state");
  const stateSlug = params?.state || "";
  const stateData = statePageData[stateSlug];

  if (!stateData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">State Not Found</h1>
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-blue-600/20 border-blue-500/30 text-blue-400 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {stateData.name} Contractors
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
                {stateData.seoContent.h1}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {stateData.description}
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{stateData.contractors}</div>
                  <div className="text-sm text-slate-400">Active Contractors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{stateData.growth}</div>
                  <div className="text-sm text-slate-400">Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{stateData.avgRevenue}</div>
                  <div className="text-sm text-slate-400">Avg Revenue</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:text-right"
            >
              <div className="bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Top Trades in {stateData.name}</h3>
                <div className="space-y-3">
                  {stateData.topTrades.map((trade: string, index: number) => (
                    <div key={trade} className="flex items-center justify-between">
                      <span className="text-slate-300">{trade}</span>
                      <Link to={`/${trade.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                          View <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Cities We Serve in {stateData.name}
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              CONSTRUKTR is trusted by contractors in every major city across {stateData.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stateData.cities.map((city: any, index: number) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/states/${stateSlug}/${city.slug}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg font-bold text-white group-hover:text-blue-600 transition-colors">
                        {city.name}
                      </CardTitle>
                      <div className="flex items-center justify-center gap-2 text-[var(--clr-text-2)]">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold">{city.contractors}</span>
                        <span className="text-sm">contractors</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        asChild
                      >
                        <Link to={`/states/${stateSlug}/${city.slug}`}>
                          View {city.name} <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--clr-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
              Success Stories from {stateData.name}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stateData.testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-gray-200">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-[var(--clr-text-2)] text-sm">{testimonial.trade}</div>
                        <div className="text-gray-500 text-sm">{testimonial.city}, {stateData.name}</div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        {testimonial.revenue}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Join {stateData.name}'s Growing Contractor Community
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get the tools that help {stateData.name} contractors win more jobs and grow their business.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold">{stateData.stats.averageJobSize}</div>
                  <div className="text-blue-200 text-sm">Average Job Size</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{stateData.stats.growthRate}</div>
                  <div className="text-blue-200 text-sm">Growth Rate</div>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-[var(--clr-surface)] text-blue-600 hover:bg-gray-100 font-bold px-8 py-4"
                asChild
              >
                <Link to="/get">
                  Start Your Free Trial
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Quick {stateData.name} Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Contractor Density</span>
                  <span className="font-semibold">{stateData.stats.contractorDensity}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Peak Season</span>
                  <span className="font-semibold">{stateData.stats.topSeason}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Growth Rate</span>
                  <span className="font-semibold">{stateData.stats.growthRate}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StickyMobileCTA />
    </div>
  );
}