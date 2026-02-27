import { motion } from "framer-motion";
import { Wrench, Droplets, Trees, Zap, Hammer, PaintBucket, Snowflake, Car } from "lucide-react";

const industries = [
  { icon: Wrench, name: "HVAC", color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: Droplets, name: "Plumbing", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Trees, name: "Landscaping", color: "text-green-400", bg: "bg-green-400/10" },
  { icon: Zap, name: "Electrical", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: Hammer, name: "General", color: "text-gray-400", bg: "bg-gray-400/10" },
  { icon: PaintBucket, name: "Painting", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: Snowflake, name: "Roofing", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { icon: Car, name: "Auto", color: "text-red-400", bg: "bg-red-400/10" }
];

interface IndustryTargetingProps {
  variant?: "hero" | "pricing";
  className?: string;
}

export default function IndustryTargeting({ variant = "hero", className = "" }: IndustryTargetingProps) {
  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`flex flex-wrap items-center justify-center gap-3 ${className}`}
      >
        <span className="text-gray-400 text-sm font-medium mr-2">Trusted by:</span>
        {industries.slice(0, 6).map((industry, index) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-full ${industry.bg} border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              <Icon className={`w-4 h-4 ${industry.color}`} />
              <span className="text-white text-sm font-medium">{industry.name}</span>
            </motion.div>
          );
        })}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-400 text-sm"
        >
          +12 more
        </motion.div>
      </motion.div>
    );
  }

  // Pricing variant - more compact
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`text-center ${className}`}
    >
      <div className="text-gray-400 text-sm mb-3">Perfect for all service industries:</div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-full ${industry.bg} border border-gray-600/20 text-xs`}
            >
              <Icon className={`w-3 h-3 ${industry.color}`} />
              <span className="text-gray-300 font-medium">{industry.name}</span>
            </motion.div>
          );
        })}
      </div>
      <div className="text-gray-500 text-xs mt-2">
        🏆 #1 rated app for service professionals
      </div>
    </motion.div>
  );
}