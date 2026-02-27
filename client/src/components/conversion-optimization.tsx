import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConversionMetric {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
}

const metrics: ConversionMetric[] = [
  {
    icon: TrendingUp,
    value: "247%",
    label: "Average Revenue Increase",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Clock,
    value: "12hrs",
    label: "Time Saved Per Week",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: DollarSign,
    value: "$24K",
    label: "Additional Annual Revenue",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Users,
    value: "89%",
    label: "Customer Retention Rate",
    color: "from-orange-500 to-orange-600"
  }
];

export default function ConversionOptimization() {
  const [currentMetric, setCurrentMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-spacing bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Real Results from Real Contractors
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of contractors who've transformed their businesses with CONSTRUKTR
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isActive = index === currentMetric;
            
            return (
              <motion.div
                key={index}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${metric.color} ${
                  isActive ? 'scale-105 shadow-2xl' : 'scale-100 shadow-lg'
                } transition-all duration-500`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-4 text-white" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white/90 text-sm font-medium">
                    {metric.label}
                  </div>
                </div>
                
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-[var(--clr-surface)]/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-[var(--clr-surface)] text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Your Transformation Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}