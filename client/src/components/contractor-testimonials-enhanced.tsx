import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Mike Rodriguez",
    title: "HVAC Contractor",
    business: "Rodriguez Climate Control",
    location: "Phoenix, AZ",
    rating: 5,
    quote: "CONSTRUKTR increased my quote-to-close rate by 40%. The AI pricing knows my local market better than I do.",
    results: {
      metric: "Revenue Growth",
      value: "+$180K annually"
    },
    trade: "HVAC"
  },
  {
    name: "Sarah Johnson", 
    title: "Licensed Electrician",
    business: "Johnson Electric Solutions",
    location: "Austin, TX",
    rating: 5,
    quote: "The scheduling feature saves me 3 hours daily. I can serve 40% more customers without working longer.",
    results: {
      metric: "Time Saved",
      value: "15+ hours/week"
    },
    trade: "Electrical"
  },
  {
    name: "Tom Chen",
    title: "Master Plumber", 
    business: "Chen Plumbing & Repair",
    location: "Seattle, WA",
    rating: 5,
    quote: "Same-day payments eliminated my cash flow problems. No more chasing invoices for weeks.",
    results: {
      metric: "Payment Speed",
      value: "Same day deposits"
    },
    trade: "Plumbing"
  },
  {
    name: "Marcus Williams",
    title: "Roofing Contractor",
    business: "Williams Roofing Co.",
    location: "Denver, CO",
    rating: 5,
    quote: "I used to spend Sunday nights doing paperwork. Now the app handles everything and I'm home with my family.",
    results: {
      metric: "Admin Work",
      value: "90% reduced"
    },
    trade: "Roofing"
  },
  {
    name: "Jessica Park",
    title: "Landscape Designer",
    business: "Park Landscapes",
    location: "Portland, OR",
    rating: 5,
    quote: "My clients love getting instant quotes with photos. Professionalism sells, and CONSTRUKTR delivers it.",
    results: {
      metric: "Quote Speed",
      value: "30 seconds"
    },
    trade: "Landscaping"
  },
  {
    name: "David Martinez",
    title: "General Contractor",
    business: "Martinez Construction",
    location: "Miami, FL",
    rating: 5,
    quote: "Grew from 2 employees to 12 in one year. CONSTRUKTR made scaling actually possible.",
    results: {
      metric: "Team Growth",
      value: "6× in 1 year"
    },
    trade: "General"
  }
];

const integrations = [
  { name: "QuickBooks", logo: "📊" },
  { name: "Stripe", logo: "💳" },
  { name: "Google Calendar", logo: "📅" },
  { name: "Zapier", logo: "⚡" },
  { name: "Mailchimp", logo: "📧" },
  { name: "Square", logo: "⬜" }
];

export default function ContractorTestimonialsEnhanced() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 384;
      const gap = 32;
      const scrollPosition = activeIndex * (cardWidth + gap);
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden section-bg-band" ref={ref}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
            See What 10,000+ Contractors Are Achieving
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-8">
            Real contractors sharing how CONSTRUKTR helped them grow their business
          </p>
          <div className="w-24 h-1 bg-[var(--color-primary)] rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center -ml-4"
            aria-label="Previous testimonial"
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="w-6 h-6 text-[var(--color-text-primary)]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center -mr-4"
            aria-label="Next testimonial"
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="w-6 h-6 text-[var(--color-text-primary)]" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="testimonial-card flex-shrink-0 w-96 bg-white p-8 rounded-xl border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-300 relative snap-center"
                data-testid={`testimonial-card-${index}`}
              >
                <Quote className="w-8 h-8 text-[var(--color-primary)]/30 mb-4" aria-hidden="true" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" aria-hidden="true" />
                  ))}
                </div>
                
                <blockquote className="text-[var(--color-text-primary)] text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-xl p-4 mb-6">
                  <div className="text-[var(--color-primary)] font-medium text-sm">{testimonial.results.metric}</div>
                  <div className="text-[var(--color-text-primary)] font-bold text-xl">{testimonial.results.value}</div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                    <span className="text-[var(--color-primary)] font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-[var(--color-text-primary)] font-bold">{testimonial.name}</div>
                    <div className="text-[var(--color-text-secondary)] text-sm">{testimonial.title}</div>
                    <div className="text-[var(--color-primary)] text-sm">{testimonial.business}</div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium rounded-full">
                    {testimonial.trade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[var(--color-primary)] w-8' 
                    : 'bg-[var(--color-border-light)] hover:bg-[var(--color-primary)]/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-selected={index === activeIndex}
                role="tab"
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
            Seamlessly Integrates With Your Existing Tools
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white border border-[rgba(15,23,42,0.08)] rounded-xl p-4 shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.12),0_4px_12px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 transition-all w-full aspect-square flex flex-col items-center justify-center"
              >
                <div className="text-3xl mb-2">{integration.logo}</div>
                <div className="text-[var(--color-text-secondary)] text-xs font-medium text-center">{integration.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 pt-12 border-t border-[var(--color-border-light)] text-center"
        >
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-8">
            Enterprise-Grade Security & Compliance
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white border border-[rgba(15,23,42,0.08)] rounded-xl p-4 flex items-center gap-3 shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                🔒
              </div>
              <div className="text-left">
                <div className="text-[var(--color-text-primary)] font-bold text-sm">SOC 2</div>
                <div className="text-[var(--color-text-secondary)] text-xs">Type II Certified</div>
              </div>
            </div>
            
            <div className="bg-white border border-[rgba(15,23,42,0.08)] rounded-xl p-4 flex items-center gap-3 shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                💳
              </div>
              <div className="text-left">
                <div className="text-[var(--color-text-primary)] font-bold text-sm">PCI DSS</div>
                <div className="text-[var(--color-text-secondary)] text-xs">Level 1 Compliant</div>
              </div>
            </div>
            
            <div className="bg-white border border-[rgba(15,23,42,0.08)] rounded-xl p-4 flex items-center gap-3 shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                🛡️
              </div>
              <div className="text-left">
                <div className="text-[var(--color-text-primary)] font-bold text-sm">GDPR</div>
                <div className="text-[var(--color-text-secondary)] text-xs">Privacy Ready</div>
              </div>
            </div>
            
            <div className="bg-white border border-[rgba(15,23,42,0.08)] rounded-xl p-4 flex items-center gap-3 shadow-[0_10px_25px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)]">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                ⚡
              </div>
              <div className="text-left">
                <div className="text-[var(--color-text-primary)] font-bold text-sm">Stripe</div>
                <div className="text-[var(--color-text-secondary)] text-xs">Secure Payments</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
