import { motion } from "framer-motion";
import { 
  Download, Settings, Zap, BarChart3, ArrowRight, 
  CheckCircle2, Clock, Smartphone
} from "lucide-react";
// Screenshots matched to step descriptions
const settingsScreenshot = "/screens/Screenshot_1773335057.png"; // Step 01: Setup/Settings
const aiToolsScreenshot = "/screens/Screenshot_1773335046.png";   // Step 02: AI Tools/Automations  
const dashboardScreenshot = "/screens/Screenshot_1773334996.png"; // Step 03: Home/Dashboard
const analyticsScreenshot = "/screens/Screenshot_1773335198.png"; // Step 04: Analytics/Reports

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Set up in a single afternoon",
    description: "Walk through the onboarding wizard to add your company, crew, and price book. Connect Stripe and QuickBooks with a few clicks.",
    details: [
      "Import existing clients and jobs",
      "Set up team members with roles",
      "Connect payment processing",
      "Sync your accounting software"
    ],
    time: "~30 minutes",
    image: settingsScreenshot
  },
  {
    number: "02",
    icon: Settings,
    title: "Turn on the automations that match your workflow",
    description: "Enable AI photo estimating, smart scheduling, review requests, and margin guardrails. Start with one or two, expand as your team gets comfortable.",
    details: [
      "AI quoting with your pricing rules",
      "Route optimization for your territory",
      "Automated client communications",
      "Profit protection guardrails"
    ],
    time: "~15 minutes",
    image: aiToolsScreenshot
  },
  {
    number: "03",
    icon: Zap,
    title: "Run your week from Home, Jobs, and Schedule",
    description: "Owners see KPIs, dispatchers work from Schedule, techs live in Jobs and Checklists, and finance lives in Payments and the AI dashboard.",
    details: [
      "Home tab: Business overview at a glance",
      "Jobs tab: Active work and job details",
      "Schedule tab: Calendar and dispatch",
      "AI Tools: Advanced features and analytics"
    ],
    time: "Daily workflow",
    image: dashboardScreenshot
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Measure profit, not just busywork",
    description: "Use the AI Operations Dashboard and Est→Actual Reconciler to see exactly where you're winning or leaking profit. Make data-driven decisions.",
    details: [
      "Real-time revenue and profit tracking",
      "Job-by-job margin analysis",
      "Crew and service performance",
      "Cash flow projections"
    ],
    time: "Weekly review",
    image: analyticsScreenshot
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 section-bg-band">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            Up and running in under an hour
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            How CONSTRUKTR Works
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            From download to profit insights in four simple steps. No IT department required.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[var(--color-primary)]">STEP {step.number}</span>
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-surface)] rounded-full text-sm">
                    <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                    <span className="text-[var(--color-text-secondary)]">{step.time}</span>
                  </div>
                </div>
                
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative flex justify-center">
                    {step.image ? (
                      <>
                        <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-3xl blur-xl"></div>
                        <div className="relative">
                          <div className="absolute top-6 left-4 right-4 bottom-2 bg-black/15 rounded-[28px] blur-2xl transform scale-95"></div>
                          <div
                            className="relative bg-slate-800 rounded-[32px] p-3 shadow-2xl"
                            style={{
                              width: 260,
                              height: 528,
                              filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.35)) drop-shadow(0 0 40px rgba(36,99,255,0.25))"
                            }}
                          >
                            <div className="w-full h-full bg-black rounded-[28px] overflow-hidden relative">
                              <img
                                src={step.image}
                                alt={`CONSTRUKTR app — ${step.title}`}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full"></div>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/40 rounded-full"></div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-2xl blur-xl"></div>
                        <div className="relative bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border-light)] w-full">
                          <div className="flex items-center justify-center">
                            <div className="w-48 h-48 bg-gradient-to-br from-[var(--color-primary)]/20 to-blue-100 rounded-full flex items-center justify-center">
                              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                                <span className="text-5xl font-black text-[var(--color-primary)]">{step.number}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -bottom-4 transform -translate-x-1/2">
                    <div className="w-px h-8 bg-gradient-to-b from-[var(--color-primary)] to-transparent"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-[var(--color-primary)]/10 to-blue-50 rounded-2xl"
        >
          <Smartphone className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Ready to put your field business on autopilot?
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
            Take back your time. Construktr handles the quoting, scheduling, and payments so you can focus on the work.
          </p>
          <a
            href="/get"
            className="btn-primary inline-flex items-center gap-2"
            data-testid="button-how-it-works-cta"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
