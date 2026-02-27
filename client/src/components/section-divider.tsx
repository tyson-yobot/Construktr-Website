import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "default" | "gradient" | "dots" | "light-blue";
  className?: string;
}

export default function SectionDivider({ variant = "default", className = "" }: SectionDividerProps) {
  if (variant === "light-blue") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`w-full py-16 ${className}`}
        style={{
          background: 'linear-gradient(to bottom, #e6edf9, #eaf0ff)'
        }}
        aria-hidden="true"
      />
    );
  }
  
  if (variant === "gradient") {
    return (
      <div className={`relative py-16 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          />
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`relative py-16 ${className}`}>
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-2 h-2 bg-blue-400 rounded-full"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative py-12 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"
        />
      </div>
    </div>
  );
}