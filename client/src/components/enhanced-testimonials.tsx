import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, CheckCircle, Shield, Play, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Owner, Johnson Plumbing",
    location: "Austin, TX",
    rating: 5,
    content: "CONSTRUKTR transformed my business. I'm booking 40% more jobs and getting paid 3x faster. The AI quotes are incredibly accurate and save me hours every week.",
    avatar: "SJ",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format",
    verified: true,
    category: "Small Business",
    metrics: {
      increase: "40%",
      metric: "more bookings"
    }
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    title: "Rodriguez HVAC Services",
    location: "Phoenix, AZ",
    rating: 5,
    content: "The scheduling feature is a game-changer. Route optimization alone saves me 2 hours of driving daily. My customers love the real-time updates.",
    avatar: "MR",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    verified: true,
    category: "Field Workers",
    metrics: {
      increase: "2hrs",
      metric: "saved daily"
    }
  },
  {
    id: 3,
    name: "Jennifer Chen",
    title: "Elite Cleaning Solutions",
    location: "Seattle, WA",
    rating: 5,
    content: "From struggling with paper invoices to fully automated billing. CONSTRUKTR helped me scale from 50 to 200+ recurring clients in just 8 months.",
    avatar: "JC",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format",
    verified: true,
    category: "Teams",
    metrics: {
      increase: "300%",
      metric: "client growth"
    }
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Thompson Landscaping",
    location: "Denver, CO",
    rating: 5,
    content: "The mobile app keeps my entire crew connected. Weather alerts, job updates, photo documentation - everything we need in the field. Revenue up 60%.",
    avatar: "DT",
    category: "Teams",
    metrics: {
      increase: "60%",
      metric: "revenue growth"
    }
  },
  {
    id: 5,
    name: "Lisa Martinez",
    title: "Martinez Electrical",
    location: "Miami, FL",
    rating: 5,
    content: "Professional quotes in under 2 minutes, automatic follow-ups, and instant payments. My conversion rate went from 30% to 75%. Absolutely incredible.",
    avatar: "LM",
    category: "Small Business",
    metrics: {
      increase: "75%",
      metric: "conversion rate"
    }
  },
  {
    id: 6,
    name: "Robert Kim",
    title: "Kim's Home Repairs",
    location: "San Francisco, CA",
    rating: 5,
    content: "The customer management system is phenomenal. I never miss a follow-up, and the automated reviews feature boosted my online reputation significantly.",
    avatar: "RK",
    category: "Field Workers",
    metrics: {
      increase: "4.9★",
      metric: "customer rating"
    }
  },
  {
    id: 7,
    name: "Carlos Mendez",
    title: "Mendez Construction Team",
    location: "Los Angeles, CA",
    rating: 5,
    content: "Managing 12 crew members across multiple job sites was a nightmare. Now everything is coordinated through CONSTRUKTR. Productivity is up 45%.",
    avatar: "CM",
    category: "Teams",
    metrics: {
      increase: "45%",
      metric: "productivity boost"
    }
  },
  {
    id: 8,
    name: "Rachel Smith",
    title: "Smith Pressure Washing",
    location: "Nashville, TN",
    rating: 5,
    content: "Started using CONSTRUKTR as a solo operation. The app helped me organize so well that I hired 3 employees and doubled my income.",
    avatar: "RS",
    category: "Small Business",
    metrics: {
      increase: "2x",
      metric: "income growth"
    }
  }
];

const filterCategories = ["All", "Small Business", "Teams", "Field Workers"];

export default function EnhancedTestimonials() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showVideoModal, setShowVideoModal] = useState(false);

  const filteredTestimonials = activeFilter === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  return (
    <section className="py-32 bg-[var(--clr-surface)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-500/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-white font-semibold text-lg">4.9/5</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Loved by <span className="text-electric-blue">2,500+</span> Businesses
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
            See how service businesses are transforming their operations and growing revenue with CONSTRUKTR
          </p>
        </motion.div>

        {/* Filter Toggles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-electric-blue text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-electric-blue/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Video Testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-4">
            <Button
              onClick={() => setShowVideoModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>Watch Video Testimonials</span>
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-blue-500/50 px-6 py-3 rounded-xl font-semibold flex items-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>See All Testimonials</span>
            </Button>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-brand-500)]/50 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />
                  
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-white/85 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Metrics */}
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-3 mb-6 border border-blue-500/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {testimonial.metrics.increase}
                      </div>
                      <div className="text-sm text-white/80">
                        {testimonial.metrics.metric}
                      </div>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="ring-2 ring-blue-400/20">
                        <AvatarFallback className="bg-blue-600 text-white font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <div className="font-semibold text-white">
                            {testimonial.name}
                          </div>
                          {testimonial.verified && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                        <div className="text-sm text-white/80">
                          {testimonial.title}
                        </div>
                        <div className="text-xs text-white/70">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">
                      {testimonial.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </motion.div>
        </AnimatePresence>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-slate-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">2,500+</div>
              <div className="text-slate-400">Active Businesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">$2.1M+</div>
              <div className="text-slate-400">Revenue Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">250K+</div>
              <div className="text-slate-400">Jobs Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
              <div className="text-slate-400">Customer Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}