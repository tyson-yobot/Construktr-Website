import { motion } from "framer-motion";
import { Star, Users, Shield } from "lucide-react";

export default function TrustSnippet() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="card-default bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-sm mx-auto max-w-4xl">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl text-white font-medium mb-6 leading-relaxed">
              "Saved me 15 hours a week, I run my whole business from CONSTRUKTR."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Mike R.</div>
                <div className="text-gray-400 text-sm">HVAC Professional, Phoenix AZ</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-2xl font-bold text-white">2,500+</span>
            </div>
            <p className="text-gray-400">Active Contractors</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold text-white">4.9/5</span>
            </div>
            <p className="text-gray-400">Average Rating</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-2xl font-bold text-white">$2.1M+</span>
            </div>
            <p className="text-gray-400">Revenue Managed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}