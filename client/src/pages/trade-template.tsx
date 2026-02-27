import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Wrench, Zap, Hammer, Home, Droplets, Brush, Sun, Snowflake, TreePine, Truck, ArrowLeft, CheckCircle, Star, TrendingUp, Clock } from 'lucide-react';
import BookDemoForm from '@/components/book-demo-form';
import ThreePhoneShowcase from '@/components/three-phone-showcase';

const tradeData: { [key: string]: any } = {
  'hvac': {
    name: 'HVAC',
    icon: Snowflake,
    description: 'Smart scheduling and maintenance tracking for heating, ventilation, and air conditioning professionals.',
    color: 'from-cyan-500 to-blue-600',
    features: [
      'Seasonal demand forecasting and crew allocation',
      'Maintenance contract tracking and renewal alerts',
      'Emergency service call prioritization system',
      'Equipment warranty and service history tracking',
      'Temperature-based scheduling optimization'
    ],
    benefits: [
      { title: 'Reduce Emergency Response Time', description: '40% faster emergency service dispatch', icon: Clock },
      { title: 'Increase Maintenance Revenue', description: '60% improvement in contract renewals', icon: TrendingUp },
      { title: 'Optimize Seasonal Scheduling', description: 'Smart crew allocation for peak seasons', icon: CheckCircle }
    ],
    testimonial: {
      name: 'Mike Rodriguez',
      company: 'Rodriguez Heating & Air',
      location: 'Phoenix, AZ',
      quote: 'CONSTRUKTR helps us manage 200+ maintenance contracts seamlessly. The seasonal scheduling feature increased our revenue by 45% during peak summer months.',
      revenue: '45% increase'
    },
    stats: {
      contractors: '1,200+',
      avgIncrease: '165%',
      timesSaved: '8 hrs/week',
      efficiency: '89%'
    }
  },
  'plumbing': {
    name: 'Plumbing',
    icon: Droplets,
    description: 'Emergency response coordination and customer communication tools built for plumbing contractors.',
    color: 'from-blue-500 to-blue-700',
    features: [
      'Emergency call routing and technician dispatch',
      'Pipe and fixture inventory management',
      'Leak detection equipment tracking',
      'Water damage documentation and photos',
      'Insurance claim coordination tools'
    ],
    benefits: [
      { title: 'Faster Emergency Response', description: '50% quicker emergency service arrival', icon: Clock },
      { title: 'Higher Customer Satisfaction', description: '4.8/5 average customer rating', icon: Star },
      { title: 'Streamlined Insurance Claims', description: 'Faster claim processing with photo documentation', icon: CheckCircle }
    ],
    testimonial: {
      name: 'Sarah Johnson',
      company: 'Johnson Plumbing Services',
      location: 'Denver, CO',
      quote: 'The emergency dispatch feature has transformed our business. We can respond 50% faster to urgent calls, and customers love the real-time updates.',
      revenue: '72% increase'
    },
    stats: {
      contractors: '950+',
      avgIncrease: '142%',
      timesSaved: '6 hrs/week',
      efficiency: '91%'
    }
  },
  'electrical': {
    name: 'Electrical',
    icon: Zap,
    description: 'Safety compliance tracking and project management designed for electrical contractors.',
    color: 'from-yellow-500 to-orange-600',
    features: [
      'Code compliance verification and tracking',
      'Electrical permit management system',
      'Safety inspection scheduling and documentation',
      'Wire and component inventory optimization',
      'Load calculation and circuit planning tools'
    ],
    benefits: [
      { title: 'Ensure Code Compliance', description: '100% permit approval rate with documentation', icon: CheckCircle },
      { title: 'Reduce Safety Incidents', description: '75% fewer workplace safety issues', icon: Star },
      { title: 'Streamline Inspections', description: 'Automated inspection scheduling and tracking', icon: Clock }
    ],
    testimonial: {
      name: 'David Chen',
      company: 'Chen Electric Solutions',
      location: 'Austin, TX',
      quote: 'CONSTRUKTR\'s code compliance tracking saved us from costly violations. Our permit approval rate is now 100%, and inspections are always on schedule.',
      revenue: '38% increase'
    },
    stats: {
      contractors: '800+',
      avgIncrease: '128%',
      timesSaved: '7 hrs/week',
      efficiency: '94%'
    }
  }
  // Add more trades as needed
};

export default function TradeTemplate() {
  const [match, params] = useRoute('/trade/:trade');
  const tradeSlug = params?.trade || '';
  const trade = tradeData[tradeSlug];

  if (!trade) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Trade Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = trade.icon;

  return (
    <div className="min-h-screen">
      {/* Trade-Specific Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[var(--clr-surface)]/10 rounded-xl p-4 mr-4">
                  <Icon className="w-12 h-12 text-blue-400" />
                </div>
                <Badge className="bg-blue-600 text-white">
                  {trade.name} Contractors
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {trade.name} Job Management Software
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {trade.description} Built specifically for the unique challenges and workflows of {trade.name.toLowerCase()} professionals.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{trade.stats.contractors}</div>
                  <div className="text-sm text-gray-400">{trade.name} Contractors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{trade.stats.avgIncrease}</div>
                  <div className="text-sm text-gray-400">Avg Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{trade.stats.timesSaved}</div>
                  <div className="text-sm text-gray-400">Time Saved Weekly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{trade.stats.efficiency}%</div>
                  <div className="text-sm text-gray-400">Job Efficiency</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trade-Specific Features */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Features Built for {trade.name} Professionals
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              Every feature in CONSTRUKTR™ is designed with {trade.name.toLowerCase()} contractors in mind, 
              helping you manage the specific challenges of your trade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trade.features.map((feature: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{feature}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-spacing bg-[var(--clr-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Why {trade.name} Contractors Choose CONSTRUKTR™
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {trade.benefits.map((benefit: any, index: number) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/10 rounded-xl mb-6">
                    <BenefitIcon className="w-8 h-8 text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-[var(--clr-text-2)]">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trade Testimonial */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[var(--clr-surface)] rounded-2xl p-8 lg:p-12 shadow-lg"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-white font-medium mb-8 italic">
              "{trade.testimonial.quote}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="text-center">
                <div className="font-bold text-white text-lg">{trade.testimonial.name}</div>
                <div className="text-electric-blue font-medium">{trade.testimonial.company}</div>
                <div className="text-gray-500 text-sm">{trade.testimonial.location}</div>
              </div>
              
              <div className="mt-4">
                <Badge className="bg-green-600 text-white">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {trade.testimonial.revenue}
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Showcase */}
      <ThreePhoneShowcase />

      {/* Demo Form */}
      <section className="section-spacing bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookDemoForm />
        </div>
      </section>
    </div>
  );
}