import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, Calendar, Wrench, Calculator, ArrowRight,
  BarChart3, Shield, DollarSign, TrendingUp, Clock,
  Route, CheckCircle2, Smartphone, WifiOff, Mic,
  FileText, CreditCard, Clipboard, Settings
} from "lucide-react";

const roles = [
  {
    id: "owners",
    title: "For Owners & GMs",
    subtitle: "See jobs, cash, and profit in one place",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    outcomes: [
      {
        icon: BarChart3,
        title: "Real-time business visibility",
        description: "See revenue, profit, pipeline, and team performance from your phone. AI-powered insights highlight what needs attention."
      },
      {
        icon: Shield,
        title: "Enforce margins without being the bottleneck",
        description: "Set minimum margins and let the system enforce them. Quotes can't go out below your target profit—automatically."
      },
      {
        icon: TrendingUp,
        title: "Know which crews and services are most profitable",
        description: "Est→Actual reconciliation shows you exactly where you're winning or leaking profit, job by job."
      }
    ],
    features: ["AI Operations Dashboard", "Margin Guardrails", "Est→Actual Reconciler", "RBAC Controls", "PDF Reports"]
  },
  {
    id: "dispatch",
    title: "For Dispatch & Office Staff",
    subtitle: "Manage the day without the chaos",
    icon: Calendar,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    outcomes: [
      {
        icon: Route,
        title: "Drag-and-drop schedule with AI-optimized routes",
        description: "Assign jobs and let AI optimize routes to minimize drive time. Conflict detection prevents double-bookings automatically."
      },
      {
        icon: Clock,
        title: "Automatic reminders, messaging, and review requests",
        description: "Two-way SMS/WhatsApp with clients and crew. Automated job reminders and 5-star review requests post-completion."
      },
      {
        icon: FileText,
        title: "Client portal handles approvals and payments",
        description: "Send magic-link quotes that clients can approve and pay in one tap. No chasing, no phone tag."
      }
    ],
    features: ["Smart Scheduling", "Route Optimization", "Two-Way Messaging", "Client Portal", "Review Automation"]
  },
  {
    id: "techs",
    title: "For Field Technicians",
    subtitle: "Simple tools that work anywhere",
    icon: Wrench,
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    outcomes: [
      {
        icon: Smartphone,
        title: "Simple job views, checklists, and photo capture",
        description: "Everything you need for the job in one place. Digital checklists, photo documentation, and time tracking in a clean mobile interface."
      },
      {
        icon: CheckCircle2,
        title: "Auto time tracking with geofencing",
        description: "Clock in/out automatically when you arrive at job sites. GPS-verified timesheets mean no disputes and accurate payroll."
      },
      {
        icon: WifiOff,
        title: "Works offline, with voice commands when hands are full",
        description: "Full functionality in basements, barns, and dead zones. Use voice to add notes, capture photos, or update status—hands-free."
      }
    ],
    features: ["Offline-First Sync", "Voice Commands", "Geofenced Time Tracking", "Digital Checklists", "Photo Documentation"]
  },
  {
    id: "finance",
    title: "For Finance & Compliance",
    subtitle: "Clean books and audit-ready records",
    icon: Calculator,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    outcomes: [
      {
        icon: CreditCard,
        title: "QuickBooks sync, Stripe payouts, PDF reports",
        description: "One-click OAuth connects invoices, payments, and expenses. Real-time sync means your books are always current."
      },
      {
        icon: Settings,
        title: "Audit trails, RBAC, and safety inspection history",
        description: "Every action logged with timestamps and user attribution. Role-based access ensures everyone sees exactly what they should."
      },
      {
        icon: Clipboard,
        title: "Permits, inspections, and compliance documentation",
        description: "Track permit status, schedule inspections, and maintain complete records for auditors, insurers, and regulators."
      }
    ],
    features: ["QuickBooks Sync", "Stripe Payments", "Audit Trails", "RBAC Permissions", "Permits & Inspections"]
  }
];

export default function RoleBasedSections() {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <section id="who-its-for" className="py-20 section-bg-band">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Built for Every Role in Your Operation
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            From the owner's dashboard to the tech's mobile app—everyone gets the tools they need without the complexity they don't.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <motion.button
                key={role.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveRole(role)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeRole.id === role.id
                    ? `bg-gradient-to-r ${role.color} text-white shadow-lg`
                    : 'bg-white text-[var(--color-text-secondary)] border border-[rgba(15,23,42,0.08)] shadow-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                }`}
                data-testid={`role-tab-${role.id}`}
              >
                <Icon className="w-5 h-5" />
                {role.title.replace('For ', '')}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={activeRole.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={`${activeRole.bgColor} rounded-2xl p-8 mb-8`}>
            <div className="flex items-center gap-4 mb-2">
              <div className={`w-14 h-14 bg-gradient-to-br ${activeRole.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <activeRole.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{activeRole.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{activeRole.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {activeRole.outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${activeRole.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${activeRole.iconColor}`} />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                    {outcome.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {outcome.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-white rounded-xl p-6 border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]">
            <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">
              Key features for {activeRole.title.toLowerCase()}:
            </p>
            <div className="flex flex-wrap gap-2">
              {activeRole.features.map((feature, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 ${activeRole.bgColor} ${activeRole.iconColor} text-sm font-medium rounded-full`}
                >
                  {feature}
                </span>
              ))}
            </div>
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
            data-testid="button-roles-cta"
          >
            See How It Works for Your Team
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
