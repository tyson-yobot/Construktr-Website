import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Star, Building } from "lucide-react";

const majorCities = [
  "Los Angeles, CA", "New York, NY", "Chicago, IL", "Houston, TX", 
  "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX", "San Diego, CA",
  "Dallas, TX", "San Jose, CA", "Austin, TX", "Jacksonville, FL",
  "Fort Worth, TX", "Columbus, OH", "Charlotte, NC", "San Francisco, CA",
  "Indianapolis, IN", "Seattle, WA", "Denver, CO", "Boston, MA",
  "Nashville, TN", "Oklahoma City, OK", "Las Vegas, NV", "Portland, OR",
  "Memphis, TN", "Louisville, KY", "Baltimore, MD", "Milwaukee, WI",
  "Albuquerque, NM", "Tucson, AZ", "Fresno, CA", "Mesa, AZ"
];

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"
];

export default function LocalSEOSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
            <MapPin className="w-4 h-4 mr-2" />
            Nationwide Coverage
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Serving Contractors Across the U.S.
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto mb-8">
            From California to New York, CONSTRUKTR helps contractors in every state 
            streamline their business operations with AI-powered tools.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-sm text-[var(--clr-text-2)] mb-8">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span>2,500+ Active Contractors</span>
            </div>
            <div className="flex items-center">
              <Building className="w-5 h-5 text-green-600 mr-2" />
              <span>All 50 States</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Major Cities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Major Cities We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {majorCities.slice(0, 24).map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-sm font-medium text-gray-700">{city}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* States Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[var(--clr-surface)] rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Available in All States
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-2 text-sm">
            {states.map((state, index) => (
              <motion.div
                key={state}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="text-center py-2 px-1 rounded bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
              >
                <span className="text-gray-700 font-medium">{state}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Areas Call-out */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Local Support, National Reach
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you're a plumber in Miami, an electrician in Seattle, or an HVAC tech in Denver, 
              CONSTRUKTR adapts to your local market needs while providing enterprise-grade tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-[var(--clr-surface)]/20 rounded-full px-4 py-2">Local Permits & Codes</span>
              <span className="bg-[var(--clr-surface)]/20 rounded-full px-4 py-2">Regional Pricing</span>
              <span className="bg-[var(--clr-surface)]/20 rounded-full px-4 py-2">State Compliance</span>
              <span className="bg-[var(--clr-surface)]/20 rounded-full px-4 py-2">Local Networks</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}