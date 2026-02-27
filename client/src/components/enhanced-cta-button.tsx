import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EnhancedCTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg" | "xl";
  className?: string;
  icon?: ReactNode;
}

export default function EnhancedCTAButton({ 
  href, 
  children, 
  variant = "primary", 
  size = "default",
  className = "",
  icon
}: EnhancedCTAButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105";
      case "secondary":
        return "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold shadow-xl hover:shadow-slate-500/25 transform hover:scale-105";
      case "outline":
        return "border-2 border-slate-600 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold backdrop-blur-sm hover:border-blue-500 transform hover:scale-105";
      default:
        return "";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "lg":
        return "px-8 py-4 text-lg";
      case "xl":
        return "px-10 py-5 text-xl";
      default:
        return "px-6 py-3";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button 
        asChild 
        className={`${getVariantStyles()} ${getSizeStyles()} ${className} rounded-xl transition-all duration-300 group relative overflow-hidden`}
      >
        <Link href={href}>
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          
          <span className="relative z-10 flex items-center space-x-2">
            {icon && (
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.div>
            )}
            <span>{children}</span>
          </span>
        </Link>
      </Button>
    </motion.div>
  );
}