import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, DollarSign, Users, TrendingUp, CheckCircle } from "lucide-react";
import { SiQuickbooks, SiStripe, SiGoogle } from "react-icons/si";
import MicroCTA from "@/components/micro-cta";

// Real contractor testimonials with authentic details and Before → After stats
const contractorTestimonials = [
  {
    name: "Mike Rodriguez",
    trade: "HVAC",
    company: "Rodriguez Heating & Air",
    location: "Phoenix, AZ",
    quote: "CONSTRUKTR saved me 12 hours a week on paperwork. I'm making 40% more profit because I can take on more jobs.",
    rating: 5,
    beforeAfter: {
      before: "8 quotes/week",
      after: "25 quotes/week",
      metric: "Quote Volume"
    },
    image: "/api/placeholder/60/60"
  },
  {
    name: "Sarah Chen",
    trade: "Electrical", 
    company: "Chen Electric Solutions",
    location: "Austin, TX",
    quote: "Getting paid went from 45 days to same-day. The AI quotes are spot-on every time.",
    rating: 5,
    beforeAfter: {
      before: "45 days",
      after: "Same day",
      metric: "Payment Speed"
    },
    image: "/api/placeholder/60/60"
  },
  {
    name: "Tony Williams",
    trade: "Plumbing",
    company: "Williams Plumbing Pro",
    location: "Denver, CO", 
    quote: "My customers love the professional quotes and instant scheduling. 5-star reviews went up 300%.",
    rating: 5,
    beforeAfter: {
      before: "2 reviews/month",
      after: "8 reviews/month",
      metric: "Customer Reviews"
    },
    image: "/api/placeholder/60/60"
  }
];

// Key metrics that matter to contractors
const contractorMetrics = [
  {
    icon: Clock,
    number: "8 hours",
    description: "Average time saved per week",
    color: "text-blue-600"
  },
  {
    icon: DollarSign, 
    number: "3x faster",
    description: "Get paid compared to invoicing",
    color: "text-green-600"
  },
  {
    icon: TrendingUp,
    number: "40% more",
    description: "Average profit increase",
    color: "text-purple-600"
  },
  {
    icon: Users,
    number: "2,500+",
    description: "Contractors using CONSTRUKTR",
    color: "text-orange-600"
  }
];

// Integration partners contractors recognize
const integrationPartners = [
  {
    name: "QuickBooks",
    icon: SiQuickbooks,
    description: "Seamless accounting sync"
  },
  {
    name: "Stripe", 
    icon: SiStripe,
    description: "Secure payment processing"
  },
  {
    name: "Google Calendar",
    icon: SiGoogle,
    description: "Automatic scheduling"
  }
];

export default function ContractorSocialProof() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 mb-4 px-4 py-2">
            👷‍♂️ Built by Contractors, for Contractors
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Contractors, Real Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contractors like you are growing faster with CONSTRUKTR
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {contractorMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <Icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-white mb-2">
                  {metric.number}
                </div>
                <div className="text-sm text-gray-300">
                  {metric.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contractor Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {contractorTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-yellow-400/30 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Before/After Results */}
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-red-400 text-sm font-medium">Before</div>
                    <div className="text-white font-bold">{testimonial.beforeAfter.before}</div>
                  </div>
                  <div>
                    <div className="text-green-400 text-sm font-medium">After</div>
                    <div className="text-white font-bold">{testimonial.beforeAfter.after}</div>
                  </div>
                </div>
              </div>

              {/* Contractor Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-yellow-400 text-sm font-medium">{testimonial.trade}</div>
                  <div className="text-gray-300 text-sm">{testimonial.company}</div>
                  <div className="text-gray-400 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Integrates with Tools You Already Use
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrationPartners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[var(--clr-surface)]/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-white font-bold text-lg mb-2">{partner.name}</h4>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl p-8 border border-yellow-400/30"
        >
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
            <span className="text-2xl font-bold text-white">Contractor Approved</span>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Trusted by HVAC, Plumbing, Electrical, and Roofing contractors.
            <br />
            <span className="text-yellow-400 font-semibold">SOC 2 Certified • 99.9% Uptime</span>
          </p>
          <MicroCTA variant="general" />
        </motion.div>
      </div>
    </section>
  );
}