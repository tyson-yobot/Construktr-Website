import { motion } from "framer-motion";

interface ToggleProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
}

export default function Toggle({ isAnnual, onToggle }: ToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <span className={`text-lg font-medium transition-colors duration-200 ${!isAnnual ? 'text-white' : 'text-[var(--clr-text-2)]'}`}>
        Monthly
      </span>
      
      <button
        onClick={() => onToggle(!isAnnual)}
        className="relative w-14 h-7 bg-[var(--clr-surface-2)] rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--clr-brand-500)] transition-colors duration-200"
      >
        <motion.div
          animate={{ x: isAnnual ? 28 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-1 w-5 h-5 bg-[var(--clr-brand-500)] rounded-full shadow-lg"
        />
      </button>
      
      <span className={`text-lg font-medium transition-colors duration-200 ${isAnnual ? 'text-white' : 'text-[var(--clr-text-2)]'}`}>
        Annual
        <span className="ml-1 text-sm bg-green-500 text-white px-2 py-0.5 rounded-full">
          Save 15%
        </span>
      </span>
    </div>
  );
}