import { motion } from "framer-motion";
import { 
  Camera, Clock, Brain, Sparkles, Scan,
  ArrowRight, CheckCircle2
} from "lucide-react";

/**
 * AI Capabilities Section
 * Source of truth: construktr-mobile README.md
 * 
 * Only 3 features are explicitly AI-enhanced per the README:
 * 1. Photo Estimator – AI-enhanced annotations
 * 2. OCR / Document Scan – AI text extraction
 * 3. AI Time Tracking – GPS-based automatic clock in/out
 */

const aiFeatures = [
  {
    icon: Camera,
    title: "Photo Estimator",
    subtitle: "AI-Enhanced Annotations",
    description: "Take job photos, apply AI-enhanced annotations, and convert to line-item estimates. The AI identifies materials, measures dimensions, and calculates quantities automatically.",
    capabilities: [
      "AI identifies materials in photos",
      "Automatic dimension measurement",
      "Converts annotations to line-item estimates",
      "Works with job site photos and blueprints"
    ],
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Scan,
    title: "OCR / Document Scan",
    subtitle: "AI Text Extraction",
    description: "Scan receipts and documents into searchable PDFs. AI extracts text, organizes data, and matches receipts to jobs automatically.",
    capabilities: [
      "Scan receipts into searchable PDFs",
      "AI extracts text from images",
      "Automatic expense categorization",
      "Matches receipts to quoted materials"
    ],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Clock,
    title: "AI Time Tracking",
    subtitle: "GPS-Based Automation",
    description: "GPS-based automatic clock in/out with geofencing. No more timesheet disputes or manual entry—the AI handles it all based on job site locations.",
    capabilities: [
      "GPS geofencing for job sites",
      "Automatic clock in/out",
      "Accurate timesheets without manual entry",
      "Overtime calculations included"
    ],
    color: "from-green-500 to-emerald-600"
  }
];

export default function AICapabilities() {
  return (
    <section id="ai-capabilities" className="py-20 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            3 Core AI-Enhanced Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Real AI, Not Buzzwords
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            These aren't marketing terms—these are the specific features that use AI 
            to save you hours every week.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => {
            const FeatureIcon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <FeatureIcon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* AI Badge */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-bold rounded-full mb-4">
                    <Sparkles className="w-3 h-3" />
                    AI-ENHANCED
                  </span>
                  
                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-primary)] font-medium mb-4">
                    {feature.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Capabilities List */}
                  <ul className="space-y-3">
                    {feature.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--color-text-secondary)]">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center p-8 bg-white rounded-2xl border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]">
            <Brain className="w-12 h-12 text-[var(--color-primary)] mb-4" />
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
              All 28 Features, 3 AI-Enhanced
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl">
              Complete feature set with AI enhancements. Photo estimating, scheduling, 
              payments, CRM, offline work, and more—all in one mobile app.
            </p>
            <a
              href="#pricing"
              className="btn-primary inline-flex items-center gap-2"
              data-testid="button-ai-capabilities-cta"
            >
              See Pricing Plans
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
