import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";

const faqCategories = [
  {
    id: "getting-started",
    name: "Getting Started",
    questions: [
      {
        q: "How long does it take to set up CONSTRUKTR?",
        a: "Most contractors are up and running in under an hour. The onboarding wizard walks you through adding your company, crew, and price book. Connecting Stripe and QuickBooks takes just a few clicks with OAuth. You can import existing clients and jobs from spreadsheets or start fresh."
      },
      {
        q: "Do my field technicians need training?",
        a: "CONSTRUKTR is designed for field crews, not IT departments. The mobile app uses familiar patterns—if your techs can use a smartphone, they can use CONSTRUKTR. Most teams are productive on day one, and our optional mini-tours introduce advanced features gradually. Voice commands work great for techs with gloves on."
      },
      {
        q: "Can I import data from my current system?",
        a: "Yes. We support CSV imports for clients, jobs, and price books. Our support team can also help with migrations from popular platforms like ServiceTitan, Jobber, or Housecall Pro. Your historical data stays intact."
      }
    ]
  },
  {
    id: "offline",
    name: "Offline & Field Use",
    questions: [
      {
        q: "Does CONSTRUKTR work without internet?",
        a: "Absolutely. CONSTRUKTR is built offline-first using WatermelonDB and Supabase sync. Your techs can view jobs, complete checklists, capture photos, and track time in basements, barns, or any dead zone. Everything syncs safely in the background when signal returns—no duplicates, no conflicts."
      },
      {
        q: "How does geofenced time tracking work?",
        a: "When you assign a tech to a job, CONSTRUKTR creates a geofence around the job site. Techs automatically clock in when they arrive and clock out when they leave. GPS-verified timesheets eliminate disputes and ensure accurate payroll. You can adjust radius and override if needed."
      },
      {
        q: "Can I use voice commands in the field?",
        a: "Yes. CONSTRUKTR supports hands-free voice commands for adding notes, updating job status, capturing photos, and more. This is especially useful for techs wearing gloves or working in tight spaces. We support 5 languages with speech-to-text."
      }
    ]
  },
  {
    id: "integrations",
    name: "Integrations & Data",
    questions: [
      {
        q: "Does CONSTRUKTR integrate with QuickBooks?",
        a: "Yes. One-click OAuth connects your QuickBooks Online account. Customers, invoices, payments, and expenses sync automatically in real-time. Your books stay current without manual data entry. We also support QuickBooks Desktop via our sync utility."
      },
      {
        q: "How do payments work?",
        a: "CONSTRUKTR uses Stripe for payment processing. Accept cards on-site, send magic-link invoices for remote payment, and set up recurring billing for maintenance contracts. Same-day deposits are available. Payments auto-sync to QuickBooks."
      },
      {
        q: "Can I connect CONSTRUKTR to my other tools?",
        a: "Yes. We provide webhooks for 20+ event types (job created, invoice paid, tech checked in, etc.) with signed payloads and retry logic. Connect to Zapier, your internal tools, or build custom integrations. Enterprise plans include dedicated API support."
      }
    ]
  },
  {
    id: "security",
    name: "Security & Compliance",
    questions: [
      {
        q: "Is my data secure?",
        a: "Yes. Construktr is built on Supabase (hosted on AWS), which provides bank-grade infrastructure. All data is encrypted in transit (TLS) and at rest. We use role-based access control (RBAC) so everyone sees exactly what they should—nothing more."
      },
      {
        q: "Do you store my credit card information?",
        a: "No. All payment processing goes through Stripe, which is PCI DSS Level 1 certified. CONSTRUKTR never sees or stores full credit card numbers. Your customers' payment data is handled by Stripe's secure infrastructure."
      },
      {
        q: "Can I control what my employees can access?",
        a: "Yes. Construktr includes role-based access control (RBAC) with Owner, Dispatcher, and Technician roles. Owners see everything, dispatchers manage scheduling and dispatch, and technicians see only their assigned jobs. Business plan adds field-level data masking and a full audit log."
      }
    ]
  },
  {
    id: "pricing",
    name: "Pricing & Billing",
    questions: [
      {
        q: "Is there a free trial?",
        a: "Yes. Construktr has a free plan that's free forever with no credit card required. You can start using core features immediately and upgrade when you're ready for AI quoting, payments, and team management."
      },
      {
        q: "What happens if I cancel?",
        a: "You can cancel anytime—no contracts, no cancellation fees. Your data remains accessible for export for 30 days after cancellation. We don't believe in locking customers in with artificial barriers."
      },
      {
        q: "Do you offer discounts for annual billing?",
        a: "Yes. Annual billing saves approximately 20% compared to monthly. Contact support@construktr.ai for Business plan pricing questions."
      }
    ]
  },
  {
    id: "ai",
    name: "AI Features",
    questions: [
      {
        q: "How accurate is the AI photo estimating?",
        a: "Our AI photo estimating achieves 90%+ accuracy on common surfaces (roofs, walls, floors) when photos are taken correctly. The system improves over time as it learns your specific materials and pricing. You always review and can adjust before sending quotes."
      },
      {
        q: "What do the margin guardrails do?",
        a: "Margin guardrails prevent quotes from going out below your target profit margin. You set the minimum acceptable margin, and CONSTRUKTR flags any quote that doesn't meet it. This protects you from accidentally underpricing jobs, especially for less experienced estimators."
      },
      {
        q: "How does the AI learn my business?",
        a: "Every quote, job, and payment trains the system to be smarter for your specific operation. The AI learns your territory, customer preferences, seasonal patterns, and crew performance. After 30-60 days of use, recommendations become highly personalized."
      }
    ]
  }
];

export default function ComprehensiveFAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    const newOpen = new Set(openQuestions);
    if (newOpen.has(questionId)) {
      newOpen.delete(questionId);
    } else {
      newOpen.add(questionId);
    }
    setOpenQuestions(newOpen);
  };

  const activeQuestions = faqCategories.find(c => c.id === activeCategory)?.questions || [];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Everything you need to know about switching to CONSTRUKTR.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
              }`}
              data-testid={`faq-category-${category.id}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {activeQuestions.map((faq, index) => {
            const questionId = `${activeCategory}-${index}`;
            const isOpen = openQuestions.has(questionId);
            
            return (
              <motion.div
                key={questionId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border-light)] overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(questionId)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/50 transition-colors"
                  data-testid={`faq-question-${questionId}`}
                >
                  <span className="font-semibold text-[var(--color-text-primary)] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[var(--color-text-secondary)] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border-light)]"
        >
          <MessageCircle className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            Still have questions?
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Our team is here to help. Chat with a real human who understands field service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@construktr.ai"
              className="btn-secondary inline-flex items-center justify-center gap-2"
              data-testid="button-faq-contact"
            >
              Contact Support
            </a>
            <a
              href="/get"
              className="btn-primary inline-flex items-center justify-center gap-2"
              data-testid="button-faq-trial"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
