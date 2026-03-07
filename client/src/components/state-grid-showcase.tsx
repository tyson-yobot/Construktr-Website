import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ExternalLink, MapPin } from 'lucide-react';

const stateData = [
  {
    state: 'California',
    slug: 'california',
    description: 'Leading the nation in construction innovation, California contractors using CONSTRUKTR report 40% higher profits and streamlined operations across diverse projects.',
    cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento']
  },
  {
    state: 'Texas',
    slug: 'texas',
    description: 'Texas contractors trust CONSTRUKTR for managing large-scale projects efficiently. From Houston to Dallas, our platform drives business growth statewide.',
    cities: ['Houston', 'Dallas', 'Austin', 'San Antonio']
  },
  {
    state: 'Florida',
    slug: 'florida',
    description: 'Florida\'s booming construction market relies on CONSTRUKTR for quick quotes and payment processing. Perfect for hurricane restoration and new development.',
    cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville']
  },
  {
    state: 'New York',
    slug: 'new-york',
    description: 'From NYC high-rises to upstate renovations, New York contractors use CONSTRUKTR to manage complex projects and accelerate payment cycles.',
    cities: ['New York City', 'Buffalo', 'Rochester', 'Syracuse']
  },
  {
    state: 'Illinois',
    slug: 'illinois',
    description: 'Illinois contractors leverage CONSTRUKTR\'s smart scheduling to handle Chicago\'s demanding construction timeline and weather challenges efficiently.',
    cities: ['Chicago', 'Aurora', 'Rockford', 'Joliet']
  },
  {
    state: 'Pennsylvania',
    slug: 'pennsylvania',
    description: 'Pennsylvania\'s diverse construction needs from Philadelphia commercial to rural residential projects are streamlined with CONSTRUKTR\'s comprehensive platform.',
    cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie']
  },
  {
    state: 'Ohio',
    slug: 'ohio',
    description: 'Ohio contractors choose CONSTRUKTR for reliable project management across industrial, commercial, and residential sectors throughout the state.',
    cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo']
  },
  {
    state: 'Georgia',
    slug: 'georgia',
    description: 'Georgia\'s growing construction market benefits from CONSTRUKTR\'s AI-powered tools, helping contractors from Atlanta to Savannah increase efficiency.',
    cities: ['Atlanta', 'Augusta', 'Columbus', 'Savannah']
  },
  {
    state: 'North Carolina',
    slug: 'north-carolina',
    description: 'North Carolina contractors rely on CONSTRUKTR for managing everything from coastal restoration to mountain construction projects with precision.',
    cities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham']
  },
  {
    state: 'Michigan',
    slug: 'michigan',
    description: 'Michigan\'s construction industry trusts CONSTRUKTR for efficient project management across automotive, industrial, and residential sectors statewide.',
    cities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights']
  },
  {
    state: 'New Jersey',
    slug: 'new-jersey',
    description: 'New Jersey contractors use CONSTRUKTR to navigate complex regulations and tight schedules, from Newark commercial projects to shore renovations.',
    cities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth']
  },
  {
    state: 'Virginia',
    slug: 'virginia',
    description: 'Virginia contractors leverage CONSTRUKTR for government projects, commercial development, and residential construction from Richmond to Virginia Beach.',
    cities: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond']
  }
];

export default function StateGridShowcase() {
  return (
    <section className="section-spacing bg-[var(--clr-surface)]">
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
            Best Contractor Business App in Your State
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
            Thousands of contractors across America trust CONSTRUKTR to manage their 
            businesses more efficiently. Find contractors in your state and see why they choose us.
          </p>
        </motion.div>

        {/* State Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {stateData.map((stateInfo, index) => (
            <motion.div
              key={stateInfo.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-[var(--clr-surface)] border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-electric-blue transition-all duration-300 h-full flex flex-col">
                {/* State Header */}
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-electric-blue" />
                  <h3 className="text-xl font-bold text-white">
                    {stateInfo.state}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[var(--clr-text-2)] text-sm leading-relaxed mb-6 flex-1">
                  {stateInfo.description}
                </p>

                {/* City Links */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Popular Cities:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stateInfo.cities.map((city, cityIndex) => (
                      <Link 
                        key={cityIndex}
                        href={`/state/${stateInfo.slug}#${city.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-xs text-electric-blue hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-md transition-colors duration-200 inline-block"
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="mt-auto">
                  <Link 
                    href={`/state/${stateInfo.slug}`}
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
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't See Your State?
            </h3>
            <p className="text-[var(--clr-text-2)] mb-6 max-w-2xl mx-auto">
              CONSTRUKTR serves contractors nationwide. Contact us to learn how 
              contractors in your area are using our platform to grow their businesses.
            </p>
            <Link href="#demo-form">
              <Button className="btn-primary btn-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}