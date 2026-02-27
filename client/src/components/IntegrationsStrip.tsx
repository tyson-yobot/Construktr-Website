import { motion } from "framer-motion";

const integrations = [
  {
    name: "QuickBooks",
    description: "Sync invoices & expenses",
    logo: "📊",
    verified: true
  },
  {
    name: "Stripe", 
    description: "Process payments instantly",
    logo: "💳",
    verified: true
  },
  {
    name: "Square",
    description: "Accept cards anywhere",
    logo: "⚡",
    verified: true
  },
  {
    name: "Google Calendar",
    description: "Smart scheduling sync",
    logo: "📅",
    verified: true
  },
  {
    name: "Slack",
    description: "Team notifications", 
    logo: "💬",
    verified: true
  },
  {
    name: "Mailchimp",
    description: "Customer marketing",
    logo: "📧",
    verified: true
  }
];

export default function IntegrationsStrip() {
  return (
    <section id="integrations" className="py-20 section-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-text-primary)] mb-4">
            Works With the Tools You Already Love
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            No switching software. CONSTRUKTR connects seamlessly with QuickBooks, Stripe, Google Calendar, and more.
          </p>
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-[0_16px_32px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 border border-[rgba(15,23,42,0.08)] hover:border-[var(--color-primary)]/30 shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]">
                
                {/* Logo */}
                <div className="text-4xl mb-3">
                  {integration.logo}
                </div>
                
                {/* Name */}
                <h3 className="font-semibold text-[var(--color-text-primary)] text-sm mb-1">
                  {integration.name}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {integration.description}
                </p>
                
                {/* Verified Badge */}
                {integration.verified && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-[var(--clr-text-2)]">
            Secure API connections • SOC 2 compliant • 99.9% uptime
          </p>
        </motion.div>
      </div>
    </section>
  );
}