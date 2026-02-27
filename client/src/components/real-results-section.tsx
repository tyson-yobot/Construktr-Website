import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

// Real Results - 3 Cards with Trade Chips and Before → After Stats
const realResults = [
  {
    trade: "HVAC",
    icon: TrendingUp,
    beforeStat: "4 hours",
    afterStat: "45 minutes", 
    metric: "Quote Time",
    context: "Phoenix HVAC contractor reduced quote creation from site photos to under 1 hour.",
    improvement: "83% faster"
  },
  {
    trade: "Plumbing",
    icon: Clock,
    beforeStat: "2.5 hours",
    afterStat: "20 minutes",
    metric: "Daily Routing",
    context: "Seattle plumber optimized daily routes, eliminating backtracking and drive time.",
    improvement: "87% time saved"
  },
  {
    trade: "Electrical", 
    icon: DollarSign,
    beforeStat: "14 days",
    afterStat: "Same day",
    metric: "Payment Time",
    context: "Denver electrician now collects payment on-site with card reader integration.",
    improvement: "14× faster payment"
  }
];

export default function RealResultsSection() {
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
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--clr-text)] mb-4">
            Proven Impact
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-2xl mx-auto">
            Real contractors, real improvements, real numbers.
          </p>
        </motion.div>

        {/* Results Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {realResults.map((result, index) => (
            <motion.div
              key={result.trade}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-default space-y-6"
            >
              {/* Trade Chip */}
              <div className="flex items-center justify-between">
                <span className="chip-brand">
                  {result.trade}
                </span>
                <result.icon className="w-6 h-6 text-[var(--clr-brand-500)]" />
              </div>

              {/* Before → After Stats */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--clr-text)]">
                  {result.metric}
                </h3>
                
                <div className="flex items-center justify-between">
                  {/* Before */}
                  <div className="text-center">
                    <div className="text-lg text-[var(--clr-text-2)] mb-1">Before</div>
                    <div className="text-2xl font-bold text-red-400">
                      {result.beforeStat}
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-[var(--clr-text-2)] text-2xl">→</div>
                  
                  {/* After */}
                  <div className="text-center">
                    <div className="text-lg text-[var(--clr-text-2)] mb-1">After</div>
                    <div className="text-2xl font-bold text-[var(--clr-primary)]">
                      {result.afterStat}
                    </div>
                  </div>
                </div>

                {/* Improvement Badge */}
                <div className="text-center">
                  <span className="inline-block bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {result.improvement}
                  </span>
                </div>
              </div>

              {/* Context - One Sentence */}
              <p className="text-sm text-[var(--clr-text-2)] leading-relaxed">
                {result.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}