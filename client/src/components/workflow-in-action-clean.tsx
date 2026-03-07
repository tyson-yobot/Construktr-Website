import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Calendar, 
  CreditCard, 
  CheckCircle
} from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    title: "Quote (30 sec)",
    subtitle: "AI price + materials → send from phone",
    icon: FileText,
    description: "AI generates accurate quotes with real-time pricing",
    details: [
      "Add job details",
      "AI prices materials & labor",
      "Send branded PDF from phone"
    ],
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-700"
  },
  {
    id: 2,
    title: "Schedule (1 click)",
    subtitle: "Smart route + no double-booking",
    icon: Calendar,
    description: "Automatic scheduling with route optimization",
    details: [
      "Smart route optimization",
      "Prevent double-booking",
      "Auto client updates"
    ],
    color: "from-purple-500 to-purple-600",
    textColor: "text-purple-700"
  },
  {
    id: 3,
    title: "Get Paid (same day)",
    subtitle: "Card on-site or auto-invoice",
    icon: CreditCard,
    description: "Instant payment processing on job completion",
    details: [
      "Charge on‑site • Same‑day deposits",
      "Accept all payment types",
      "Auto‑invoice delivery"
    ],
    color: "from-green-500 to-green-600",
    textColor: "text-green-700"
  }
];

export default function WorkflowInAction() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-blue-600/20 text-blue-700 border-blue-600/30 mb-4 px-4 py-2">
            📱 How It Works
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How CONSTRUKTR Works
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
            Customer call to payment, complete jobs in minutes, not hours.
          </p>
        </motion.div>

        {/* Workflow Steps - Horizontal on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-[var(--clr-surface)] rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {step.id}
                  </div>
                </div>
                
                {/* Phone Demo Mockup */}
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-56 bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="w-28 h-52 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                      <Icon className={`w-8 h-8 ${step.textColor}`} />
                    </div>
                    {/* Tiny looping animation indicator */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--clr-text-2)] text-sm mb-4">
                    {step.subtitle}
                  </p>
                  
                  {/* Bullet Points */}
                  <ul className="text-left space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}