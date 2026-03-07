import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Camera, Route, CreditCard, Users, 
  Smartphone, WifiOff, FileCheck, MessageSquare, 
  Search, Calculator, Scan, Package,
  Clock, Bell, BarChart3, FileText, 
  ArrowRight, CheckCircle2, Sparkles, Link2,
  MapPin, Receipt, UserCircle, Calendar,
  Mic, Star, Shield, Settings, Repeat,
  Activity
} from "lucide-react";

/**
 * Comprehensive Features Section
 * Source of truth: construktr-mobile README.md
 * 
 * 63+ features across core operations, AI capabilities, and team tools.
 */

const featureCategories = [
  {
    id: "core",
    name: "Core Features",
    tagline: "The essential tools every contractor needs",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    features: [
      {
        icon: Camera,
        title: "Photo Estimator",
        description: "Take job photos, apply AI-enhanced annotations, and convert to line-item estimates in seconds.",
        metric: "AI-powered",
        isAI: true
      },
      {
        icon: Calculator,
        title: "Job Quotes",
        description: "Create custom quotes with line items, costs, markup, and terms. Professional PDF exports.",
        metric: "Win more jobs",
        isAI: false
      },
      {
        icon: Calendar,
        title: "Smart Scheduling",
        description: "Calendar-based job tracking with auto-collision checks and weather integration.",
        metric: "Never double-book",
        isAI: false
      },
      {
        icon: CreditCard,
        title: "Invoicing + Payments",
        description: "Generate invoices and accept payments on-site via Stripe. Cards, ACH, Apple Pay, Google Pay.",
        metric: "Same-day deposits",
        isAI: false
      },
      {
        icon: Scan,
        title: "OCR / Document Scan",
        description: "Scan receipts and documents into searchable PDFs. AI extracts text and organizes data.",
        metric: "AI-powered",
        isAI: true
      },
      {
        icon: Receipt,
        title: "Parts Reconciler",
        description: "Match job receipts to quoted materials and parts. Track actual vs estimated costs.",
        metric: "Track every dollar",
        isAI: false
      }
    ]
  },
  {
    id: "customer",
    name: "Customer Management",
    tagline: "Keep clients happy and coming back",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    features: [
      {
        icon: UserCircle,
        title: "Customer CRM",
        description: "Track customers, notes, jobs, activity history, and service locations in one place.",
        metric: "Complete history",
        isAI: false
      },
      {
        icon: Bell,
        title: "Push Notifications",
        description: "Job status and schedule updates sent to field techs and clients automatically.",
        metric: "Real-time updates",
        isAI: false
      },
      {
        icon: MessageSquare,
        title: "Two-Way SMS",
        description: "Send appointment reminders, on-my-way alerts, and review requests via SMS.",
        metric: "Client communication",
        isAI: false
      },
      {
        icon: Link2,
        title: "Client Portal",
        description: "Magic link portal for viewing quotes, approving work, paying invoices, and tracking jobs.",
        metric: "Self-service",
        isAI: false
      },
      {
        icon: Star,
        title: "Review Automation",
        description: "Automated review requests after job completion. Track ratings across platforms.",
        metric: "5-star ratings",
        isAI: false
      }
    ]
  },
  {
    id: "field",
    name: "Field Operations",
    tagline: "Everything your techs need in the field",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    features: [
      {
        icon: Clock,
        title: "AI Time Tracking",
        description: "GPS-based automatic clock in/out with geofencing. No more timesheet disputes.",
        metric: "AI-powered",
        isAI: true
      },
      {
        icon: WifiOff,
        title: "Offline Work",
        description: "All job information cached offline and syncs when connected. Works in basements and barns.",
        metric: "100% uptime",
        isAI: false
      },
      {
        icon: Package,
        title: "Inventory Tracking",
        description: "Track parts and materials with barcode scanning. Set reorder alerts and track usage.",
        metric: "Never run out",
        isAI: false
      },
      {
        icon: FileCheck,
        title: "Field Checklists",
        description: "Digital safety and QA checklists with photo documentation and PPE tracking.",
        metric: "Stay compliant",
        isAI: false
      },
      {
        icon: Route,
        title: "Route Optimization",
        description: "Optimized routes save drive time between jobs. Real-time traffic and ETA updates.",
        metric: "Save 2+ hrs/day",
        isAI: false
      },
      {
        icon: Mic,
        title: "Voice Commands",
        description: "Hands-free control and note-taking for field techs. Works even in loud environments.",
        metric: "Hands-free",
        isAI: false
      },
      {
        icon: Search,
        title: "AR Part Finder",
        description: "Point your camera at any part to identify it. Get specs, pricing, and supplier info instantly.",
        metric: "1,000+ parts",
        isAI: false
      }
    ]
  },
  {
    id: "integrations",
    name: "Integrations & Payments",
    tagline: "Connect your tools and get paid faster",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    features: [
      {
        icon: BarChart3,
        title: "QuickBooks Integration",
        description: "Bi-directional sync for invoices and customers. Keep books accurate automatically.",
        metric: "Auto-sync",
        isAI: false
      },
      {
        icon: Repeat,
        title: "Stripe Subscriptions",
        description: "Manage recurring billing for maintenance plans and service agreements.",
        metric: "Recurring revenue",
        isAI: false
      },
      {
        icon: Search,
        title: "Universal Search",
        description: "Search across jobs, customers, invoices, and equipment with full-text search.",
        metric: "Find anything",
        isAI: false
      }
    ]
  },
  {
    id: "operations",
    name: "Operations & Security",
    tagline: "Run your business with confidence",
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-slate-50",
    iconColor: "text-slate-600",
    features: [
      {
        icon: Smartphone,
        title: "Mobile Dashboard",
        description: "Real-time business overview from your phone. Revenue, jobs, and team status at a glance.",
        metric: "Always informed",
        isAI: false
      },
      {
        icon: FileText,
        title: "Reports & Analytics",
        description: "Track revenue, job profitability, and team performance with 40+ analytics events.",
        metric: "Data-driven",
        isAI: false
      },
      {
        icon: Shield,
        title: "Role-Based Access",
        description: "Control who sees what with role-based permissions for owners, dispatchers, and techs.",
        metric: "Secure access",
        isAI: false
      },
      {
        icon: Settings,
        title: "Feature Flags",
        description: "25+ feature flags for rollouts and experiments. Test new features with select users.",
        metric: "Safe rollouts",
        isAI: false
      },
      {
        icon: Activity,
        title: "Performance Monitoring",
        description: "FPS, memory, and API metrics tracked automatically. Crash reporting included.",
        metric: "Always fast",
        isAI: false
      },
      {
        icon: MapPin,
        title: "Build Optimization",
        description: "Pre-build validation, bundle analysis, and asset optimization for fast app performance.",
        metric: "Optimized",
        isAI: false
      },
      {
        icon: Shield,
        title: "Error Boundary",
        description: "Enhanced error boundary and crash reporting. Issues are caught and reported automatically.",
        metric: "Auto-reported",
        isAI: false
      }
    ]
  }
];

export default function ComprehensiveFeatures() {
  const [activeCategory, setActiveCategory] = useState(featureCategories[0].id);
  const activeCat = featureCategories.find(c => c.id === activeCategory) || featureCategories[0];
  
  const totalFeatures = featureCategories.reduce((sum, cat) => sum + cat.features.length, 0);
  const aiFeatures = featureCategories.reduce((sum, cat) => sum + cat.features.filter(f => f.isAI).length, 0);

  return (
    <section id="all-features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            All {totalFeatures} features • {aiFeatures} AI-enhanced
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-4">
            Complete Feature Set
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Everything you need to run your contracting business from one mobile app.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {featureCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                ${activeCategory === cat.id 
                  ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/25' 
                  : 'bg-white text-[var(--color-text-secondary)] hover:bg-gray-50 border border-gray-200'
                }
              `}
              data-testid={`tab-${cat.id}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Category */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
              {activeCat.name}
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              {activeCat.tagline}
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCat.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`
                  p-6 rounded-2xl border h-full min-h-[200px]
                  bg-white border-gray-100
                  shadow-[0_4px_20px_rgba(15,23,42,0.06)]
                  hover:shadow-[0_8px_30px_rgba(15,23,42,0.12)]
                  hover:border-[var(--color-primary)]/30
                  transition-all duration-300
                `}>
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    ${activeCat.bgColor} ${activeCat.iconColor}
                  `}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Title with AI badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="font-bold text-[var(--color-text-primary)] text-base">
                      {feature.title}
                    </h4>
                    {feature.isAI && (
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full">
                        AI
                      </span>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Metric */}
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-primary)]">
                    <CheckCircle2 className="w-4 h-4" />
                    {feature.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg shadow-[var(--color-primary)]/25"
            data-testid="button-see-pricing"
          >
            See Pricing Plans
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
