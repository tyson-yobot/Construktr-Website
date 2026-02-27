import { motion } from "framer-motion";
import { Award, Shield, Users, Star } from "lucide-react";

export default function FeaturedInLogos() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Featured On & Recognition
          </h3>
          <p className="text-[var(--clr-text-2)] mb-8">
            Trusted by industry leaders and recognized for excellence
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Award/Recognition Items */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-default flex flex-col items-center space-y-3"
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">Best Service App 2024</span>
              <span className="text-xs text-gray-500">Industry Awards</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-default flex flex-col items-center space-y-3"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">SOC 2 Certified</span>
              <span className="text-xs text-gray-500">Security Standard</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-default flex flex-col items-center space-y-3"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">2,500+ Businesses</span>
              <span className="text-xs text-gray-500">Active Users</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-default flex flex-col items-center space-y-3"
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">4.9/5 App Store Rating</span>
              <span className="text-xs text-gray-500">User Reviews</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}