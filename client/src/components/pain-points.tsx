import { motion } from "framer-motion";
import { CreditCard, CalendarX, Clock } from "lucide-react";

const painPoints = [
  {
    icon: CreditCard,
    pain: "Still chasing payments?",
    solution: "AI invoicing with a client portal that lets your customers approve and pay from their phone. No more phone tag.",
    hook: "That $8,000 invoice you sent three weeks ago? Your client approved and paid it from their phone in their car.",
  },
  {
    icon: CalendarX,
    pain: "Double-booked again?",
    solution: "AI dispatch assigns the right crew to the right job based on skills, location, and availability. Zero conflicts.",
    hook: "Three crews, twelve jobs, zero double-bookings. Every single day. That's not luck — that's AI dispatch.",
  },
  {
    icon: Clock,
    pain: "Estimates taking hours?",
    solution: "Snap a photo of the job site. AI writes your estimate in 30 seconds with materials, labor, and your margin baked in.",
    hook: "Lost a $15,000 job because your quote took three days? AI estimates in 30 seconds.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Sound familiar?
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            These problems cost contractors thousands every month. Here's how you solve them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                  {item.pain}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-5 leading-relaxed">
                  {item.solution}
                </p>
                <blockquote className="border-l-2 border-[var(--color-primary)] pl-4 italic text-sm text-[var(--color-text-secondary)]">
                  {item.hook}
                </blockquote>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
