import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const newsOutlets = [
  { name: "TechCrunch", initial: "TC", bgColor: "bg-green-900", textColor: "text-green-100" },
  { name: "Forbes", initial: "F", bgColor: "bg-gray-900", textColor: "text-gray-100" },
  { name: "BuiltIn", initial: "BI", bgColor: "bg-blue-900", textColor: "text-blue-100" },
  { name: "Construction Dive", initial: "CD", bgColor: "bg-orange-900", textColor: "text-orange-100" },
  { name: "Angi", initial: "AG", bgColor: "bg-red-900", textColor: "text-red-100" },
  { name: "Inc.", initial: "Inc", bgColor: "bg-black", textColor: "text-white" },
];

export default function InTheNews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section 
      ref={ref}
      className="py-12 bg-white border-t border-b border-[rgba(15,23,42,0.06)]"
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p id="news-heading" className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
            As Featured In
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 items-center justify-center flex-wrap md:flex-nowrap"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {newsOutlets.map((outlet, index) => (
              <motion.div
                key={outlet.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
                data-testid={`news-logo-${outlet.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`${outlet.bgColor} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  <span className={`${outlet.textColor} font-bold text-sm`}>{outlet.initial}</span>
                </div>
                <span className="text-[var(--color-text-primary)] font-semibold text-lg hidden sm:block">
                  {outlet.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
