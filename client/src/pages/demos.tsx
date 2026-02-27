import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Download, ChevronRight, Wrench, Droplets, Wind, Zap, Building, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const industries = [
  {
    id: "contractor",
    name: "General Contractor",
    icon: Building,
    color: "bg-blue-500",
    demos: [
      {
        title: "Project Estimation & Bidding",
        description: "See how contractors create accurate estimates and win more bids",
        duration: "3:24",
        thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=225&fit=crop",
        videoId: "demo-contractor-estimation"
      },
      {
        title: "Multi-Phase Project Management",
        description: "Managing complex construction projects with multiple phases",
        duration: "4:12",
        thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=225&fit=crop",
        videoId: "demo-contractor-management"
      }
    ]
  },
  {
    id: "plumber",
    name: "Plumbing",
    icon: Droplets,
    color: "bg-cyan-500",
    demos: [
      {
        title: "Emergency Service Scheduling",
        description: "Rapid response scheduling for urgent plumbing calls",
        duration: "2:45",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop",
        videoId: "demo-plumber-emergency"
      },
      {
        title: "Parts & Labor Tracking",
        description: "Track materials and labor costs for accurate billing",
        duration: "3:18",
        thumbnail: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=225&fit=crop",
        videoId: "demo-plumber-tracking"
      }
    ]
  },
  {
    id: "hvac",
    name: "HVAC",
    icon: Wind,
    color: "bg-orange-500",
    demos: [
      {
        title: "Seasonal Maintenance Scheduling",
        description: "Automate seasonal HVAC maintenance appointments",
        duration: "3:56",
        thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=225&fit=crop",
        videoId: "demo-hvac-maintenance"
      },
      {
        title: "Energy Audit Reporting",
        description: "Generate professional energy efficiency reports",
        duration: "4:33",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop",
        videoId: "demo-hvac-audit"
      }
    ]
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: Zap,
    color: "bg-yellow-500",
    demos: [
      {
        title: "Code Compliance Tracking",
        description: "Ensure all electrical work meets local codes",
        duration: "3:07",
        thumbnail: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=225&fit=crop",
        videoId: "demo-electrical-compliance"
      },
      {
        title: "Safety Inspection Workflows",
        description: "Streamlined safety inspections and documentation",
        duration: "2:52",
        thumbnail: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=225&fit=crop",
        videoId: "demo-electrical-safety"
      }
    ]
  },
  {
    id: "landscaping",
    name: "Landscaping",
    icon: Home,
    color: "bg-green-500",
    demos: [
      {
        title: "Seasonal Service Planning",
        description: "Plan and schedule seasonal landscaping services",
        duration: "3:41",
        thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=225&fit=crop",
        videoId: "demo-landscaping-seasonal"
      },
      {
        title: "Before/After Photo Documentation",
        description: "Showcase your work with integrated photo tools",
        duration: "2:28",
        thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=225&fit=crop",
        videoId: "demo-landscaping-photos"
      }
    ]
  }
];

const beforeAfterComparisons = [
  {
    title: "Quote Generation Time",
    before: {
      title: "Manual Process",
      time: "2-3 hours per quote",
      description: "Calculating materials, labor, and markup manually with spreadsheets",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
    },
    after: {
      title: "AI-Powered Quotes",
      time: "5-10 minutes per quote",
      description: "Automated calculations with smart material suggestions and pricing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  },
  {
    title: "Customer Communication",
    before: {
      title: "Phone Tag & Emails",
      time: "Multiple touchpoints",
      description: "Back-and-forth communication causing delays and confusion",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    after: {
      title: "Unified Portal",
      time: "Real-time updates",
      description: "Customer portal with live project updates and direct messaging",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  },
  {
    title: "Schedule Management",
    before: {
      title: "Paper Calendars",
      time: "Frequent conflicts",
      description: "Manual scheduling leading to double-bookings and missed appointments",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    after: {
      title: "Smart Scheduling",
      time: "Zero conflicts",
      description: "AI-optimized scheduling with automatic conflict detection and routing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    }
  }
];

const downloadableResources = [
  {
    title: "Complete Platform Overview",
    description: "Comprehensive slide deck covering all CONSTRUKTR™ features and benefits",
    pages: 24,
    type: "PDF Presentation",
    size: "4.2 MB",
    downloadUrl: "#"
  },
  {
    title: "ROI Calculator Spreadsheet",
    description: "Calculate potential time and cost savings for your specific business",
    pages: 1,
    type: "Excel Workbook",
    size: "156 KB",
    downloadUrl: "#"
  },
  {
    title: "Implementation Checklist",
    description: "Step-by-step guide to get your team up and running in 24 hours",
    pages: 8,
    type: "PDF Guide",
    size: "1.8 MB",
    downloadUrl: "#"
  },
  {
    title: "Industry Best Practices",
    description: "Proven strategies from successful service businesses using CONSTRUKTR™",
    pages: 16,
    type: "PDF Report",
    size: "2.9 MB",
    downloadUrl: "#"
  }
];

export default function Demos() {
  const [selectedIndustry, setSelectedIndustry] = useState("contractor");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [comparisonSlider, setComparisonSlider] = useState(50);

  const currentIndustry = industries.find(ind => ind.id === selectedIndustry);

  return (
    <div className="min-h-screen bg-[var(--clr-surface)]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            See CONSTRUKTR™
            <span className="text-electric-blue"> In Action</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Watch real demonstrations of how service professionals transform their businesses with our platform
          </motion.p>
        </div>
      </section>

      {/* Industry Demos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Demos by Industry
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              See how CONSTRUKTR™ works for your specific trade
            </p>
          </motion.div>

          {/* Industry Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.button
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    selectedIndustry === industry.id
                      ? 'bg-electric-blue text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    selectedIndustry === industry.id ? 'bg-[var(--clr-surface)]/20' : industry.color
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      selectedIndustry === industry.id ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <span>{industry.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Demo Videos */}
          {currentIndustry && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentIndustry.demos.map((demo, index) => (
                <motion.div
                  key={demo.videoId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[var(--clr-surface)] rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={demo.thumbnail}
                      alt={demo.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        onClick={() => setActiveVideo(demo.videoId)}
                        className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {demo.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {demo.title}
                    </h3>
                    <p className="text-[var(--clr-text-2)] mb-4">
                      {demo.description}
                    </p>
                    <Button 
                      onClick={() => setActiveVideo(demo.videoId)}
                      className="w-full bg-electric-blue text-white hover:bg-blue-700"
                    >
                      Watch Demo
                      <Play className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Before vs After Comparisons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Before vs. After CONSTRUKTR™
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              See the dramatic improvements our customers experience
            </p>
          </motion.div>

          <div className="space-y-16">
            {beforeAfterComparisons.map((comparison, index) => (
              <motion.div
                key={comparison.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    {comparison.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Before */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                          <span className="text-red-600 font-bold text-lg">Before</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {comparison.before.title}
                          </h4>
                          <p className="text-red-600 font-semibold">
                            {comparison.before.time}
                          </p>
                        </div>
                      </div>
                      <img
                        src={comparison.before.image}
                        alt={comparison.before.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <p className="text-[var(--clr-text-2)]">
                        {comparison.before.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center">
                        <ArrowRight className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                          <span className="text-green-600 font-bold text-lg">After</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {comparison.after.title}
                          </h4>
                          <p className="text-green-600 font-semibold">
                            {comparison.after.time}
                          </p>
                        </div>
                      </div>
                      <img
                        src={comparison.after.image}
                        alt={comparison.after.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <p className="text-[var(--clr-text-2)]">
                        {comparison.after.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Download Demo Materials
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              Take detailed information with you to share with your team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadableResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center">
                    <Download className="w-8 h-8 text-electric-blue" />
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div>{resource.type}</div>
                    <div>{resource.size}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-[var(--clr-text-2)] mb-6">
                  {resource.description}
                </p>
                
                <Button className="w-full bg-electric-blue text-white hover:bg-blue-700">
                  Download Now
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-electric text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to See Your Business Transform?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a personalized demo tailored to your specific business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[var(--clr-surface)] text-electric-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
                Schedule Personal Demo
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--clr-surface)] hover:text-electric-blue transition-colors duration-200"
              >
                Start Free Trial
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              See results in your first week • No credit card required
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--clr-surface)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Demo Video</h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-white text-center">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video Player Placeholder</p>
                <p className="text-sm opacity-75">Video ID: {activeVideo}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}