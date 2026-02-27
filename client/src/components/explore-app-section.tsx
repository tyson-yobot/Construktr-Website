import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { 
  Calculator, 
  Calendar, 
  CreditCard, 
  Users, 
  BarChart3, 
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const features = [
  {
    id: "quoting",
    icon: Calculator,
    title: "AI-Powered Quoting",
    description: "Generate accurate quotes in 30 seconds with AI that knows your local market pricing.",
    stat: "30 sec",
    statLabel: "average quote time"
  },
  {
    id: "scheduling",
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Optimize routes and prevent double-bookings with intelligent calendar management.",
    stat: "2.5 hrs",
    statLabel: "saved daily"
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Instant Payments",
    description: "Accept payments on-site and get same-day deposits directly to your bank.",
    stat: "Same day",
    statLabel: "deposits"
  },
  {
    id: "crm",
    icon: Users,
    title: "Customer Management",
    description: "Keep all client information, job history, and communications in one place.",
    stat: "100%",
    statLabel: "client retention"
  },
  {
    id: "reporting",
    icon: BarChart3,
    title: "Business Analytics",
    description: "Track revenue, job performance, and growth with real-time dashboards.",
    stat: "3×",
    statLabel: "faster insights"
  },
  {
    id: "invoicing",
    icon: FileText,
    title: "Auto Invoicing",
    description: "Send professional invoices automatically after every job completion.",
    stat: "Zero",
    statLabel: "manual work"
  }
];

export default function ExploreAppSection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollability);
      return () => scrollElement.removeEventListener('scroll', checkScrollability);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={ref}
      id="explore-app"
      className="py-20 bg-[var(--color-bg)] overflow-hidden"
      aria-labelledby="explore-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 id="explore-heading" className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
            Explore the App
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Every feature designed to help you quote, schedule, and get paid faster
          </p>
        </motion.div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center -ml-4"
              aria-label="Scroll left"
              data-testid="button-explore-prev"
            >
              <ChevronLeft className="w-6 h-6 text-[var(--color-text-primary)]" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center -mr-4"
              aria-label="Scroll right"
              data-testid="button-explore-next"
            >
              <ChevronRight className="w-6 h-6 text-[var(--color-text-primary)]" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="feature-card flex-shrink-0 w-80 bg-white rounded-2xl p-6 border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 snap-center"
                  data-testid={`explore-card-${feature.id}`}
                >
                  <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-[var(--color-primary)]" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="pt-4 border-t border-[var(--color-border-light)]">
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">
                      {feature.statLabel}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-primary"
            data-testid="button-explore-cta"
            aria-label="Start your free trial"
          >
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}
