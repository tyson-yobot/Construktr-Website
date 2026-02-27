import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Clock, TrendingUp, DollarSign } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Mike Rodriguez",
    business: "Rodriguez HVAC Services",
    location: "Phoenix, AZ",
    avatar: "MR",
    photo: "/attached_assets/IMG_4330_1754274611770.jpeg",
    quote: "CONSTRUKTR saved me 2+ hours daily with route optimization. My customers love the real-time updates and professional invoices.",
    rating: 5,
    businessType: "HVAC",
    beforeAfter: {
      before: "Manual scheduling, missed appointments",
      after: "Zero double-bookings, 2+ hours saved daily"
    }
  },
  {
    name: "Sarah Johnson", 
    business: "Johnson Plumbing Co.",
    location: "Austin, TX",
    avatar: "SJ",
    photo: "/attached_assets/IMG_4332_1754274611770.jpeg",
    quote: "The AI quotes are incredibly accurate. I'm booking 40% more jobs and getting paid 3x faster than before.",
    rating: 5,
    businessType: "Plumbing",
    beforeAfter: {
      before: "Paper quotes taking hours to prepare",
      after: "Professional quotes sent in minutes"
    }
  }
];

export default function ContractorTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-spacing bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center section-content-spacing"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Real Contractors, Real Results
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            See how contractors across all trades are growing their businesses with CONSTRUKTR™
          </p>
        </motion.div>

        {/* Before/After Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Before CONSTRUKTR™ vs After CONSTRUKTR™
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <div className="space-y-2">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full font-semibold text-sm">BEFORE</div>
                  <div className="text-white/80">Quotes sent in hours</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center my-6">
                <div className="w-full h-px bg-gradient-to-r from-red-200 to-green-200"></div>
                <div className="mx-4 text-2xl">→</div>
                <div className="w-full h-px bg-gradient-to-r from-red-200 to-green-200"></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full font-semibold text-sm">AFTER</div>
                  <div className="text-white/85 font-bold">Quotes sent in minutes</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <div className="space-y-2">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full font-semibold text-sm">BEFORE</div>
                  <div className="text-white/80">Low job conversion</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center my-6">
                <div className="w-full h-px bg-gradient-to-r from-red-200 to-green-200"></div>
                <div className="mx-4 text-2xl">→</div>
                <div className="w-full h-px bg-gradient-to-r from-red-200 to-green-200"></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full font-semibold text-sm">AFTER</div>
                  <div className="text-white/85 font-bold">30% more booked jobs</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
                <div className="space-y-2">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full font-semibold text-sm">BEFORE</div>
                  <div className="text-white/80">Hours on paperwork</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center my-6">
                <div className="w-full h-px bg-gradient-to-r from-red-200 to-green-200"></div>
                <div className="mx-4 text-2xl">→</div>
                <div className="w-full h-px bg-gradient-to-r from-red-200 to-green-200"></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full font-semibold text-sm">AFTER</div>
                  <div className="text-white/85 font-bold">2 hours/day saved on admin</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rotating Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-8 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Contractor Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Avatar className="w-24 h-24 ring-4 ring-blue-100">
                      <AvatarImage src={testimonials[currentTestimonial].photo} alt={testimonials[currentTestimonial].name} />
                      <AvatarFallback className="bg-blue-500 text-white font-bold text-2xl">
                        {testimonials[currentTestimonial].avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                      VERIFIED
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  <Quote className="w-8 h-8 text-blue-200 mb-4 mx-auto lg:mx-0" />
                  
                  <p className="text-xl lg:text-2xl text-white/85 leading-relaxed mb-6 font-medium">
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="space-y-1 mb-6">
                    <h4 className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-blue-400 font-semibold">{testimonials[currentTestimonial].business}</p>
                    <p className="text-white/70">{testimonials[currentTestimonial].location}</p>
                  </div>

                  {/* Before/After for this contractor */}
                  <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="bg-red-600 text-white px-2 py-1 rounded-full font-semibold text-xs mb-2 inline-block">BEFORE</div>
                        <div className="text-white/80">{testimonials[currentTestimonial].beforeAfter.before}</div>
                      </div>
                      <div>
                        <div className="bg-green-500 text-white px-2 py-1 rounded-full font-semibold text-xs mb-2 inline-block">AFTER</div>
                        <div className="text-white/85 font-medium">{testimonials[currentTestimonial].beforeAfter.after}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-blue-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}