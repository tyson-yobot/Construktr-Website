import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ExternalLink, Wrench, Zap, Hammer, Home, Droplets, Brush, Sun, Snowflake, TreePine, Truck } from 'lucide-react';

const tradeData = [
  {
    trade: 'HVAC',
    slug: 'hvac',
    icon: Snowflake,
    description: 'Smart scheduling and maintenance tracking for heating, ventilation, and air conditioning professionals.',
    specialization: 'Specialized for seasonal demand management',
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600'
  },
  {
    trade: 'Plumbing',
    slug: 'plumbing',
    icon: Droplets,
    description: 'Emergency response coordination and customer communication tools built for plumbing contractors.',
    specialization: 'Specialized for emergency service calls',
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    trade: 'Electrical',
    slug: 'electrical',
    icon: Zap,
    description: 'Safety compliance tracking and project management designed for electrical contractors.',
    specialization: 'Specialized for code compliance tracking',
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600'
  },
  {
    trade: 'Roofing',
    slug: 'roofing',
    icon: Home,
    description: 'Weather-dependent scheduling and insurance claim management for roofing professionals.',
    specialization: 'Specialized for weather tracking integration',
    color: 'from-red-500 to-red-700',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    trade: 'General Contracting',
    slug: 'general-contracting',
    icon: Hammer,
    description: 'Multi-project coordination and subcontractor management for general construction contractors.',
    specialization: 'Specialized for multi-trade coordination',
    color: 'from-gray-600 to-gray-800',
    bgColor: 'bg-gray-50',
    iconColor: 'text-[var(--clr-text-2)]'
  },
  {
    trade: 'Handyman Services',
    slug: 'handyman',
    icon: Wrench,
    description: 'Quick job booking and multi-service pricing tools for handyman professionals.',
    specialization: 'Specialized for quick turnaround jobs',
    color: 'from-green-500 to-green-700',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    trade: 'Painting',
    slug: 'painting',
    icon: Brush,
    description: 'Color matching tools and surface preparation tracking for painting contractors.',
    specialization: 'Specialized for material estimation',
    color: 'from-purple-500 to-purple-700',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    trade: 'Solar Installation',
    slug: 'solar',
    icon: Sun,
    description: 'Permit tracking and energy assessment tools designed for solar installation professionals.',
    specialization: 'Specialized for permit management',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600'
  },
  {
    trade: 'Landscaping',
    slug: 'landscaping',
    icon: TreePine,
    description: 'Seasonal planning and maintenance scheduling for landscaping and lawn care professionals.',
    specialization: 'Specialized for seasonal service cycles',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    trade: 'Moving Services',
    slug: 'moving',
    icon: Truck,
    description: 'Logistics optimization and inventory tracking for professional moving companies.',
    specialization: 'Specialized for logistics coordination',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  }
];

export default function TradeGridShowcase() {
  return (
    <section className="section-spacing bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Contractor Job Management by Trade
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
            CONSTRUKTR™ is built with trade-specific features that understand the unique 
            challenges and workflows of your specific contracting business.
          </p>
        </motion.div>

        {/* Trade Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {tradeData.map((trade, index) => {
            const Icon = trade.icon;
            
            return (
              <motion.div
                key={trade.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-[var(--clr-surface)] border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-electric-blue transition-all duration-300 h-full flex flex-col">
                  {/* Trade Icon & Title */}
                  <div className="text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${trade.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${trade.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {trade.trade}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--clr-text-2)] text-sm leading-relaxed mb-4 flex-1">
                    {trade.description}
                  </p>

                  {/* Specialized Feature */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${trade.color} text-white`}>
                      {trade.specialization}
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-auto">
                    <Link 
                      href={`/trade/${trade.slug}`}
                      className="w-full"
                    >
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full text-electric-blue border-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 group-hover:bg-electric-blue group-hover:text-white"
                      >
                        Learn More
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-blue-600 to-electric-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Don't See Your Trade?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto text-blue-100">
              CONSTRUKTR™ works for all construction and service trades. Our flexible platform 
              adapts to your specific business needs and workflows.
            </p>
            <Link href="#demo-form">
              <Button className="bg-[var(--clr-surface)] text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                See How It Works for Your Trade
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}