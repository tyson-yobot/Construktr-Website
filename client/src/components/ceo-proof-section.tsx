import { motion } from "framer-motion";
import { Star, Users, TrendingUp, Clock } from "lucide-react";

// CEO Directive: Proof section - mono trust icons, zero clutter
const proofMetrics = [
  {
    icon: Users,
    value: "2,500+",
    label: "Contractors",
    description: "Trust CONSTRUKTR daily"
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Revenue Increase",
    description: "Average customer growth"
  },
  {
    icon: Clock,
    value: "8+ Hours",
    label: "Saved Weekly",
    description: "More time for jobs"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "App Store Rating",
    description: "From real contractors"
  }
];

export default function CEOProofSection() {
  return (
    <section className="py-20 bg-[var(--clr-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="chip-brand mb-6 inline-block">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--clr-text)] mb-4">
            Contractors Choose CONSTRUKTR
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-2xl mx-auto">
            Join thousands who've transformed their business with measurable results.
          </p>
        </motion.div>

        {/* Proof Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-default text-center space-y-4"
            >
              {/* Mono Trust Icon */}
              <div className="w-12 h-12 mx-auto bg-[var(--clr-elev)] rounded-xl flex items-center justify-center">
                <metric.icon className="w-6 h-6 trust-icon" />
              </div>
              
              {/* Metric Value */}
              <div className="space-y-2">
                <div className="text-3xl font-black text-[var(--clr-primary)]">
                  {metric.value}
                </div>
                <div className="text-lg font-bold text-[var(--clr-text)]">
                  {metric.label}
                </div>
                <div className="text-sm text-[var(--clr-text-2)]">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card-default max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[var(--clr-primary)] fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-[var(--clr-text)] mb-4">
              "CONSTRUKTR paid for itself in the first week. I'm quoting 3× faster 
              and getting paid same-day. Game changer for my HVAC business."
            </blockquote>
            <cite className="text-[var(--clr-text-2)]">
              Mike Rodriguez, Rodriguez HVAC (Phoenix, AZ)
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}