import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/competitor-data";
import { useLocation } from "wouter";

export default function CompetitorComparison() {
  const [, navigate] = useLocation();

  return (
    <section className="py-20 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Why pay more for less?
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Real pricing from real competitors. No guesswork.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="hidden md:block bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-lg"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left px-6 py-4 text-[var(--color-text-secondary)] font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center">
                    <span className="text-[var(--color-primary)] font-bold text-base">CONSTRUKTR</span>
                  </th>
                  <th className="px-6 py-4 text-center text-[var(--color-text-secondary)] font-semibold">Jobber</th>
                  <th className="px-6 py-4 text-center text-[var(--color-text-secondary)] font-semibold">Housecall Pro</th>
                  <th className="px-6 py-4 text-center text-[var(--color-text-secondary)] font-semibold">ServiceTitan</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "" : "bg-[var(--color-surface-alt,#f9fafb)]"}>
                    <td className="px-6 py-3.5 text-[var(--color-text-primary)] font-medium">{row.feature}</td>
                    <td className="px-6 py-3.5 text-center">
                      <CellValue value={row.construktr} isHighlight />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <CellValue value={row.jobber} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <CellValue value={row.housecallpro} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <CellValue value={row.servicetitan} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {COMPARISON_ROWS.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-4"
            >
              <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">{row.feature}</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[var(--color-primary)]/5 rounded-lg p-2">
                  <span className="font-bold text-[var(--color-primary)]">CONSTRUKTR</span>
                  <p className="text-[var(--color-primary)] mt-0.5">{row.construktr}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <span className="font-semibold text-[var(--color-text-secondary)]">Jobber</span>
                  <p className="text-[var(--color-text-secondary)] mt-0.5">{row.jobber}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <span className="font-semibold text-[var(--color-text-secondary)]">Housecall Pro</span>
                  <p className="text-[var(--color-text-secondary)] mt-0.5">{row.housecallpro}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <span className="font-semibold text-[var(--color-text-secondary)]">ServiceTitan</span>
                  <p className="text-[var(--color-text-secondary)] mt-0.5">{row.servicetitan}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/get")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] text-white font-bold text-lg rounded-xl hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg shadow-[var(--color-primary)]/25"
          >
            Start Free Today
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[var(--color-text-secondary)] mt-3">No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
}

function CellValue({ value, isHighlight }: { value: string; isHighlight?: boolean }) {
  const lower = value.toLowerCase();
  if (lower === "no" || lower === "not available") {
    return (
      <span className="inline-flex items-center gap-1 text-red-400">
        <X className="w-4 h-4" />
        <span className="text-xs">{value}</span>
      </span>
    );
  }

  if (lower === "hidden" || lower.includes("hidden") || lower.includes("sales call")) {
    return <span className="text-xs text-[var(--color-text-secondary)]">{value}</span>;
  }

  return (
    <span className={`text-xs font-medium ${isHighlight ? "text-[var(--color-primary)] font-semibold" : "text-[var(--color-text-primary)]"}`}>
      {isHighlight && <Check className="w-4 h-4 text-green-600 inline mr-1 -mt-0.5" />}
      {value}
    </span>
  );
}
