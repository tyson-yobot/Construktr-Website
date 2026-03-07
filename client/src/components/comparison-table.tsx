import { Fragment } from "react";
import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight, Sparkles } from "lucide-react";

const comparisonData = {
  categories: [
    {
      name: "Estimating & Quoting",
      features: [
        { name: "AI photo estimating", construktr: true, generic: false, paper: false },
        { name: "AR measuring", construktr: true, generic: false, paper: false },
        { name: "Pricing recommendations", construktr: true, generic: false, paper: false },
        { name: "Professional PDF quotes", construktr: true, generic: true, paper: false },
        { name: "Quote-to-invoice conversion", construktr: true, generic: "partial", paper: false },
      ]
    },
    {
      name: "Scheduling & Dispatch",
      features: [
        { name: "AI route optimization", construktr: true, generic: false, paper: false },
        { name: "Conflict detection", construktr: true, generic: "partial", paper: false },
        { name: "Weather-aware planning", construktr: true, generic: false, paper: false },
        { name: "Crew load balancing", construktr: true, generic: "partial", paper: false },
        { name: "Geofenced time tracking", construktr: true, generic: false, paper: false },
      ]
    },
    {
      name: "Payments & Accounting",
      features: [
        { name: "On-site card payments", construktr: true, generic: "partial", paper: false },
        { name: "Same-day deposits", construktr: true, generic: false, paper: false },
        { name: "QuickBooks sync", construktr: true, generic: "partial", paper: false },
        { name: "Automated reminders", construktr: true, generic: true, paper: false },
        { name: "Client magic-link portal", construktr: true, generic: false, paper: false },
      ]
    },
    {
      name: "Field Operations",
      features: [
        { name: "Offline-first sync", construktr: true, generic: false, paper: false },
        { name: "Voice commands", construktr: true, generic: false, paper: false },
        { name: "Digital checklists", construktr: true, generic: "partial", paper: false },
        { name: "Equipment tracking (BLE/NFC)", construktr: true, generic: false, paper: false },
        { name: "Two-way messaging", construktr: true, generic: true, paper: false },
      ]
    },
    {
      name: "Compliance & Security",
      features: [
        { name: "Permits & inspections", construktr: true, generic: false, paper: false },
        { name: "Audit trails", construktr: true, generic: "partial", paper: false },
        { name: "Role-based access (RBAC)", construktr: true, generic: "partial", paper: false },
        { name: "PPE tracking", construktr: true, generic: false, paper: false },
        { name: "SOC 2 / PCI compliance", construktr: true, generic: "partial", paper: false },
      ]
    },
    {
      name: "Profitability",
      features: [
        { name: "Margin guardrails", construktr: true, generic: false, paper: false },
        { name: "Est→Actual reconciliation", construktr: true, generic: false, paper: false },
        { name: "AI operations dashboard", construktr: true, generic: false, paper: false },
        { name: "Cash flow forecasting", construktr: true, generic: false, paper: false },
        { name: "Crew performance analytics", construktr: true, generic: "partial", paper: false },
      ]
    }
  ]
};

const FeatureIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-500" />;
  } else if (value === "partial") {
    return <Minus className="w-5 h-5 text-yellow-500" />;
  }
  return <X className="w-5 h-5 text-red-400" />;
};

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            How CONSTRUKTR Compares
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            See why contractors switch from Jobber, ServiceTitan, and other platforms to an AI-powered operating system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-[var(--color-border-light)]">
                <th className="py-4 px-4 text-left text-sm font-bold text-[var(--color-text-primary)]">
                  Feature
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-primary)] to-blue-600 rounded-lg text-white font-bold">
                      <Sparkles className="w-4 h-4" />
                      CONSTRUKTR
                    </div>
                    <span className="text-xs text-[var(--color-text-secondary)] mt-1">AI-Powered</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <div className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 font-bold">
                      Jobber
                    </div>
                    <span className="text-xs text-[var(--color-text-secondary)] mt-1">Field Service</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-500 font-bold">
                      ServiceTitan
                    </div>
                    <span className="text-xs text-[var(--color-text-secondary)] mt-1">Enterprise</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.categories.map((category, catIndex) => (
                <Fragment key={`cat-${catIndex}`}>
                  <tr className="bg-[var(--color-surface)]">
                    <td colSpan={4} className="py-3 px-4 text-sm font-bold text-[var(--color-primary)] uppercase tracking-wide">
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature, featIndex) => (
                    <motion.tr
                      key={`feat-${catIndex}-${featIndex}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: featIndex * 0.02 }}
                      viewport={{ once: true }}
                      className="border-b border-[var(--color-border-light)] hover:bg-[var(--color-surface)] transition-colors"
                    >
                      <td className="py-3 px-4 text-sm text-[var(--color-text-primary)]">
                        {feature.name}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon value={feature.construktr} />
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon value={feature.generic} />
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon value={feature.paper} />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[var(--color-text-secondary)]"
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Full support</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="w-4 h-4 text-yellow-500" />
            <span>Partial / Add-on</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-red-400" />
            <span>Not available</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center gap-2"
            data-testid="button-comparison-cta"
          >
            See CONSTRUKTR Pricing
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
