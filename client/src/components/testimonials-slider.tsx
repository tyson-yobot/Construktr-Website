import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote: "This app saves me 2+ hours a day, no joke.",
    author: "Mike Rodriguez",
    role: "Electrical Contractor",
    location: "Phoenix, AZ",
    rating: 5
  },
  {
    quote: "Used it to send a quote while walking into the jobsite.",
    author: "Sarah Chen",
    role: "Plumbing Contractor", 
    location: "Seattle, WA",
    rating: 5
  },
  {
    quote: "My invoices get paid 40% faster now. Game changer.",
    author: "Tommy Williams",
    role: "HVAC Contractor",
    location: "Dallas, TX", 
    rating: 5
  },
  {
    quote: "Finally, an app built BY contractors FOR contractors.",
    author: "Lisa Martinez",
    role: "General Contractor",
    location: "Miami, FL",
    rating: 5
  },
  {
    quote: "Smart scheduling saved my business. No more double bookings.",
    author: "David Johnson",
    role: "Roofing Contractor",
    location: "Denver, CO",
    rating: 5
  },
  {
    quote: "AI quotes are spot-on. My customers love the fast turnaround.",
    author: "Amanda Foster",
    role: "Landscaping Contractor",
    location: "Austin, TX",
    rating: 5
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-green-600/20 text-green-300 border-green-600/30 mb-4">
            ⭐ Real Contractor Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Contractors Nationwide
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join thousands of contractors who've transformed their business with CONSTRUKTR™
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex justify-between items-center absolute top-1/2 transform -translate-y-1/2 w-full z-20 pointer-events-none">
            <button
              onClick={prevTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-all duration-200 backdrop-blur-sm pointer-events-auto -translate-x-4"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-all duration-200 backdrop-blur-sm pointer-events-auto translate-x-4"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
                >
                  <Quote className="w-8 h-8 text-white" />
                </motion.div>

                {/* Quote Text */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed"
                >
                  "{testimonials[currentIndex].quote}"
                </motion.blockquote>

                {/* Rating Stars */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center items-center gap-1 mb-6"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </motion.div>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xl font-semibold text-white">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-blue-300 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-slate-400">
                    {testimonials[currentIndex].location}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-1 mt-4">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-slate-400 text-sm">App Store Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">15K+</div>
            <div className="text-slate-400 text-sm">Active Contractors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">$2M+</div>
            <div className="text-slate-400 text-sm">Jobs Quoted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">45%</div>
            <div className="text-slate-400 text-sm">Faster Payments</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}