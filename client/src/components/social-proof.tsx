import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike R.",
    trade: "HVAC Contractor",
    location: "Phoenix, AZ",
    quote: "Saved us 12 hours a week on scheduling alone. My dispatcher used to spend half her day on the phone rearranging crews. Now AI handles it.",
    stat: "12 hrs/week saved",
  },
  {
    name: "Sarah T.",
    trade: "General Contractor",
    location: "Denver, CO",
    quote: "Sent my first AI estimate from a jobsite parking lot. Client approved it before I got home. That's never happened in 15 years of contracting.",
    stat: "30-second estimates",
  },
  {
    name: "David L.",
    trade: "Plumber",
    location: "Austin, TX",
    quote: "QuickBooks sync alone was worth switching. Everything just updates automatically. No more Sunday afternoons doing data entry.",
    stat: "Zero manual entry",
  },
  {
    name: "Maria G.",
    trade: "Electrical Contractor",
    location: "Miami, FL",
    quote: "We grew from 3 crews to 8 without hiring an office manager. The AI dispatch board handles what used to take a full-time person.",
    stat: "3x team growth",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Contractors who ditched the paperwork
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-lg font-semibold text-[var(--color-text-primary)]">4.9/5 rating</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-[var(--color-text-primary)] leading-relaxed mb-6 text-base">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">{t.name}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{t.trade} &middot; {t.location}</p>
                </div>
                <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {t.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
