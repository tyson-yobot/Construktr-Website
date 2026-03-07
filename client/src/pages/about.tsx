import { motion } from "framer-motion";
import { Award, Calendar, Users, Target, Download, ExternalLink, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const teamMembers = [
  {
    name: "Tyson Mitchell",
    role: "Co-Founder & CEO",
    bio: "Former construction project manager with 15+ years in the field. Led teams on $50M+ commercial projects before founding CONSTRUKTR to solve the industry's biggest pain points.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Austin, TX"
  },
  {
    name: "Daniel Rodriguez",
    role: "Co-Founder & CTO", 
    bio: "Ex-Salesforce engineering lead and MIT graduate. Built enterprise software for 12+ years before applying his expertise to transform service business operations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "San Francisco, CA"
  },
  {
    name: "Sarah Chen",
    role: "VP of Product",
    bio: "Former product manager at Square with deep expertise in payments and small business solutions. Harvard MBA with a passion for user-centered design.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332e9a3?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Austin, TX"
  },
  {
    name: "Marcus Thompson",
    role: "VP of Engineering",
    bio: "Ex-Uber senior engineer who scaled mobile apps to millions of users. Stanford CS degree with expertise in AI/ML and mobile architecture.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    location: "Denver, CO"
  }
];

const milestones = [
  {
    year: "2021",
    quarter: "Q4",
    title: "Company Founded",
    description: "Tyson and Daniel launch CONSTRUKTR with seed funding from leading VCs"
  },
  {
    year: "2022",
    quarter: "Q2",
    title: "Beta Launch",
    description: "100 early adopters test the platform, achieving 85% satisfaction rate"
  },
  {
    year: "2022",
    quarter: "Q4", 
    title: "Series A Funding",
    description: "$12M Series A led by Andreessen Horowitz to accelerate growth"
  },
  {
    year: "2023",
    quarter: "Q1",
    title: "Mobile App Launch",
    description: "iOS and Android apps launch with AI-powered quote generation"
  },
  {
    year: "2023",
    quarter: "Q3",
    title: "10K Users Milestone",
    description: "Reached 10,000 active users processing $100M+ in transactions"
  },
  {
    year: "2024",
    quarter: "Q1",
    title: "Enterprise Features",
    description: "Launched team management and advanced analytics for larger businesses"
  },
  {
    year: "2024",
    quarter: "Q3",
    title: "50K Users & Profitability",
    description: "Crossed 50,000 users and achieved positive unit economics"
  },
  {
    year: "2025",
    quarter: "Q1",
    title: "Series B Planning",
    description: "Preparing Series B to expand internationally and enhance AI capabilities"
  }
];

const awards = [
  {
    title: "Forbes 30 Under 30",
    organization: "Forbes",
    year: "2024",
    recipient: "Daniel Rodriguez",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Forbes-Logo.png"
  },
  {
    title: "Best Construction Tech Startup",
    organization: "TechCrunch Disrupt",
    year: "2024",
    recipient: "CONSTRUKTR",
    logo: "https://techcrunch.com/wp-content/uploads/2022/05/tc-logo.png"
  },
  {
    title: "Small Business Innovation Award",
    organization: "U.S. Chamber of Commerce",
    year: "2023",
    recipient: "CONSTRUKTR",
    logo: "https://www.uschamber.com/assets/images/logo.png"
  }
];

const partnerships = [
  {
    name: "Square",
    description: "Official payment processing partner",
    logo: "https://images.ctfassets.net/2d54j7gdy31e/7J8g3Jb4qQJH8YLXnrk1C8/c8c2e7d7d8df8dea6eb9b1e1b8b4b8b8/square-logo.png"
  },
  {
    name: "QuickBooks",
    description: "Accounting integration partner", 
    logo: "https://plugin.intuitcdn.net/designsystem/assets/2019/07/01113814/QuickBooks_Desktop_logo_Blue_01.svg"
  },
  {
    name: "Home Depot Pro",
    description: "Preferred contractor platform",
    logo: "https://corporate.homedepot.com/sites/default/files/image_gallery/THD_logo.jpg"
  }
];

const mediaFeatures = [
  {
    publication: "TechCrunch",
    headline: "CONSTRUKTR Raises $12M to Digitize Service Businesses",
    date: "March 2024",
    url: "#"
  },
  {
    publication: "Forbes",
    headline: "How This Startup is Transforming the $2T Service Industry",
    date: "January 2024", 
    url: "#"
  },
  {
    publication: "Wall Street Journal",
    headline: "Small Businesses Embrace AI for Growth",
    date: "November 2023",
    url: "#"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--clr-surface)]">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero text-white">
        <div className="absolute inset-0 dot-pattern opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About
            <span className="text-electric-blue"> CONSTRUKTR</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We're on a mission to empower every service professional to run their business like a Fortune 500 company
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-electric-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-electric-blue" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-[var(--clr-text-2)] leading-relaxed mb-6">
                The service industry employs over 130 million Americans and generates $2 trillion annually, yet most businesses still operate with outdated tools and manual processes.
              </p>
              <p className="text-lg text-[var(--clr-text-2)] leading-relaxed">
                We believe every plumber, electrician, contractor, and service professional deserves enterprise-grade tools to quote accurately, schedule efficiently, and get paid faster. That's why we built CONSTRUKTR.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-[var(--clr-text-2)] leading-relaxed mb-6">
                To become the operating system for service businesses worldwide, enabling millions of professionals to:
              </p>
              <ul className="space-y-3 text-[var(--clr-text-2)]">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3"></div>
                  Win more jobs with professional, AI-powered quotes
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3"></div>
                  Optimize operations with smart scheduling and routing
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3"></div>
                  Scale confidently with data-driven insights
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3"></div>
                  Build sustainable, profitable businesses
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              Industry veterans and tech experts united by a common mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] p-8 rounded-3xl shadow-lg"
              >
                <div className="flex items-start space-x-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <div className="text-electric-blue font-semibold mb-2">
                      {member.role}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {member.location}
                    </div>
                    <p className="text-[var(--clr-text-2)] leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-electric-blue hover:text-blue-700 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              Key milestones in building the future of service businesses
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-electric-blue/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={`${milestone.year}-${milestone.quarter}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  <div className="absolute left-6 w-4 h-4 bg-electric-blue rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16 bg-[var(--clr-surface)] p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="text-2xl font-bold text-electric-blue">
                        {milestone.year}
                      </div>
                      <div className="bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-sm font-semibold">
                        {milestone.quarter}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[var(--clr-text-2)]">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              Industry recognition for innovation and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] p-8 rounded-3xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-[var(--clr-text-2)] mb-2">
                  {award.organization}
                </p>
                <div className="text-sm text-gray-500">
                  {award.year} • {award.recipient}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Strategic Partners
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerships.map((partner, index) => (
                <div
                  key={partner.name}
                  className="bg-[var(--clr-surface)] p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="text-xl font-bold text-[var(--clr-text-2)]">
                      {partner.name}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              In The News
            </h2>
            <p className="text-xl text-[var(--clr-text-2)]">
              Media coverage and industry recognition
            </p>
          </motion.div>

          <div className="space-y-6">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={feature.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--clr-surface)] p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-electric-blue font-bold">
                        {feature.publication}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {feature.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.headline}
                    </h3>
                  </div>
                  <a
                    href={feature.url}
                    className="ml-4 text-electric-blue hover:text-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-electric text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Interested in investment opportunities, partnerships, or press inquiries?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[var(--clr-surface)] text-electric-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Press Kit
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--clr-surface)] hover:text-electric-blue transition-colors duration-200"
              >
                Investor Login
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              Contact: press@construktr.com • investors@construktr.com
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}