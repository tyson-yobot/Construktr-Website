import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Calendar } from "lucide-react";
import { Link } from "wouter";

interface MicroCTAProps {
  variant: "quote" | "schedule" | "payment" | "demo" | "general";
  className?: string;
}

const ctaContent = {
  quote: {
    text: "Start quoting faster",
    action: "Get Started Free",
    icon: ArrowRight,
    gradient: "from-blue-500 to-blue-600"
  },
  schedule: {
    text: "Never double-book again",
    action: "Get Started Free",
    icon: Calendar,
    gradient: "from-purple-500 to-purple-600"
  },
  payment: {
    text: "Get paid same-day",
    action: "Get Started Free",
    icon: ArrowRight,
    gradient: "from-green-500 to-green-600"
  },
  demo: {
    text: "See it in action",
    action: "Book a Demo",
    icon: Smartphone,
    gradient: "from-orange-500 to-orange-600"
  },
  general: {
    text: "Ready to transform your business?",
    action: "Get Started Free",
    icon: ArrowRight,
    gradient: "from-yellow-500 to-orange-500"
  }
};

export default function MicroCTA({ variant, className = "" }: MicroCTAProps) {
  const content = ctaContent[variant];
  const Icon = content.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center ${className}`}
    >
      <div className="inline-flex items-center bg-[var(--clr-surface)] rounded-full p-2 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
        <span className="text-gray-700 font-medium px-4 py-2">
          {content.text}
        </span>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/get">
            <button className="btn btn-primary btn-sm flex items-center space-x-2">
              <span>{content.action}</span>
              <Icon className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}