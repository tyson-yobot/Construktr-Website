import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, TrendingUp, Clock, Shield, DollarSign, Zap, Users, Award, Quote } from "lucide-react";
import { useState } from "react";

const reasons = [
  {
    icon: TrendingUp,
    title: "More Jobs Accepted",
    description: "AI-powered estimates win more business with accurate, professional pricing that customers trust. No more underbidding or losing jobs to competitors.",
    metric: "40%",
    metricLabel: "More Jobs Accepted",
    testimonial: "CONSTRUKTR completely changed how we run our plumbing business. The AI quotes are incredibly accurate, and we've increased our job acceptance rate by 40%.",
    author: "Michael Rodriguez, Rodriguez Plumbing Services"
  },
  {
    icon: Clock,
    title: "Time Saved Weekly",
    description: "Automated scheduling, routing, and customer communication lets you focus on actual work instead of paperwork.",
    metric: "15hrs",
    metricLabel: "Time Saved Weekly",
    testimonial: "The scheduling features save us hours every week. Route optimization alone has cut our fuel costs by 25%. It's like having a business manager in your pocket.",
    author: "Sarah Johnson, Lightning Electric Co."
  },
  {
    icon: DollarSign,
    title: "Faster Payments",
    description: "Generate professional invoices instantly and get paid faster with integrated payment processing.",
    metric: "3x",
    metricLabel: "Faster Payments",
    testimonial: "We went from paper invoices to getting paid in 24 hours. The payment integration is seamless, and our cash flow has never been better.",
    author: "David Chen, Chen HVAC Solutions"
  },
  {
    icon: Shield,
    title: "Contractors Trust Us",
    description: "Designed specifically for contractors, builders, and trade professionals by industry experts who understand your challenges.",
    metric: "2500+",
    metricLabel: "Contractors Trust Us",
    testimonial: "As a general contractor, I needed something that could handle multiple trades and complex projects. CONSTRUKTR does it all.",
    author: "Maria Santos, Santos Construction Group"
  },
  {
    icon: Zap,
    title: "Lower Operating Costs",
    description: "Route optimization, automated workflows, and smart scheduling reduce fuel costs, overtime, and administrative overhead.",
    metric: "25%",
    metricLabel: "Lower Operating Costs",
    testimonial: "Route optimization and automated workflows have cut our operating costs by 25%. More profit on every job.",
    author: "Tom Wilson, Wilson Electrical Services"
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Professional quotes, real-time updates, and seamless communication create happier customers who refer more business.",
    metric: "95%",
    metricLabel: "Customer Satisfaction",
    testimonial: "Our customers love the professional invoices and real-time updates. We get more referrals than ever before.",
    author: "Lisa Martinez, Martinez Home Services"
  }
];

export default function WhyConstruktr() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center section-content-spacing"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Contractors Choose CONSTRUKTR
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
            Join thousands of contractors who've transformed their businesses with increased efficiency, time savings, and improved profitability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="card cursor-pointer overflow-hidden p-6"
              >
                {/* Vertical Stat Layout */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-blue/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-electric-blue" />
                  </div>
                  
                  {/* Large Metric */}
                  <div className="text-4xl font-bold text-electric-blue mb-2">
                    {reason.metric}
                  </div>
                  
                  {/* Metric Label */}
                  <h3 className="text-lg font-bold text-white mb-4">
                    {reason.metricLabel}
                  </h3>
                </div>
                
                {/* Description or Testimonial */}
                <AnimatePresence mode="wait">
                  {hoveredIndex === index ? (
                    // Testimonial on hover
                    <motion.div
                      key="testimonial"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-electric-blue/5 p-4 rounded-lg border border-electric-blue/20"
                    >
                      <Quote className="w-6 h-6 text-electric-blue mb-3" />
                      <p className="text-gray-700 italic leading-relaxed mb-3">
                        "{reason.testimonial}"
                      </p>
                      <p className="text-sm font-semibold text-electric-blue">
                        {reason.author}
                      </p>
                    </motion.div>
                  ) : (
                    // Default description
                    <motion.p
                      key="description"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[var(--clr-text-2)] leading-relaxed text-center"
                    >
                      {reason.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-blue/20 to-transparent rounded-b-2xl"></div>
                
                {/* Hover hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                  className="absolute top-4 right-4 text-xs text-gray-400 font-medium"
                >
                  Hover for testimonial
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}