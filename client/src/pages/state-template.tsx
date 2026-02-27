import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { MapPin, Star, Users, TrendingUp, ArrowLeft } from 'lucide-react';
import EnhancedHero from '@/components/enhanced-hero';
import BookDemoForm from '@/components/book-demo-form';
import ThreePhoneShowcase from '@/components/three-phone-showcase';

const stateData: { [key: string]: any } = {
  'california': {
    name: 'California',
    description: 'Leading the nation in construction innovation, California contractors using CONSTRUKTR™ report 40% higher profits and streamlined operations across diverse projects.',
    cities: [
      { name: 'Los Angeles', contractors: '1,200+', avgSavings: '$18,500' },
      { name: 'San Francisco', contractors: '850+', avgSavings: '$22,000' },
      { name: 'San Diego', contractors: '650+', avgSavings: '$16,800' },
      { name: 'Sacramento', contractors: '420+', avgSavings: '$15,200' }
    ],
    testimonial: {
      name: 'Carlos Martinez',
      trade: 'Solar Installation Contractor',
      company: 'Martinez Solar Solutions',
      location: 'San Jose, CA',
      quote: 'CONSTRUKTR helped me scale from 3 to 15 employees in 18 months. The AI quotes and scheduling are game-changers for California\'s competitive solar market.',
      revenue: '300% increase'
    },
    stats: {
      contractors: '3,100+',
      avgIncrease: '247%',
      timesSaved: '12 hrs/week',
      paymentSpeed: '2.3 days'
    }
  },
  'texas': {
    name: 'Texas',
    description: 'Texas contractors trust CONSTRUKTR™ for managing large-scale projects efficiently. From Houston to Dallas, our platform drives business growth statewide.',
    cities: [
      { name: 'Houston', contractors: '980+', avgSavings: '$19,200' },
      { name: 'Dallas', contractors: '890+', avgSavings: '$17,500' },
      { name: 'Austin', contractors: '670+', avgSavings: '$20,100' },
      { name: 'San Antonio', contractors: '550+', avgSavings: '$16,200' }
    ],
    testimonial: {
      name: 'Mike Johnson',
      trade: 'Commercial Roofing Contractor',
      company: 'Lone Star Roofing',
      location: 'Dallas, TX',
      quote: 'Managing multiple commercial projects across Texas used to be overwhelming. CONSTRUKTR\'s scheduling and payment tools keep everything organized.',
      revenue: '185% increase'
    },
    stats: {
      contractors: '2,800+',
      avgIncrease: '198%',
      timesSaved: '10.5 hrs/week',
      paymentSpeed: '2.1 days'
    }
  }
  // Add more states as needed
};

export default function StateTemplate() {
  const [match, params] = useRoute('/state/:state');
  const stateSlug = params?.state || '';
  const state = stateData[stateSlug];

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">State Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* State-Specific Hero */}
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
              <Badge className="bg-blue-600 text-white mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                {state.name} Contractors
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Best Contractor App in {state.name}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {state.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{state.stats.contractors}</div>
                  <div className="text-sm text-gray-400">Active Contractors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{state.stats.avgIncrease}</div>
                  <div className="text-sm text-gray-400">Avg Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{state.stats.timesSaved}</div>
                  <div className="text-sm text-gray-400">Time Saved Weekly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{state.stats.paymentSpeed}</div>
                  <div className="text-sm text-gray-400">Avg Payment Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
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
              CONSTRUKTR™ Contractors by City
            </h2>
            <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
              See how contractors in major {state.name} cities are using CONSTRUKTR™ 
              to transform their businesses and increase profitability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {state.cities.map((city: any, index: number) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{city.name}</h3>
                  <div className="text-2xl font-bold text-electric-blue mb-1">{city.contractors}</div>
                  <div className="text-sm text-[var(--clr-text-2)] mb-4">Active Contractors</div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600">{city.avgSavings}</div>
                    <div className="text-xs text-green-700">Avg Annual Savings</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonial */}
      <section className="section-spacing bg-[var(--clr-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-white font-medium mb-8 italic">
              "{state.testimonial.quote}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="text-center">
                <div className="font-bold text-white text-lg">{state.testimonial.name}</div>
                <div className="text-electric-blue font-medium">{state.testimonial.trade}</div>
                <div className="text-[var(--clr-text-2)]">{state.testimonial.company}</div>
                <div className="text-gray-500 text-sm">{state.testimonial.location}</div>
              </div>
              
              <div className="mt-4">
                <Badge className="bg-green-600 text-white">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {state.testimonial.revenue}
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