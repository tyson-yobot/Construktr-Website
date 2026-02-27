import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    title: "10 Ways to Speed Up Your Quoting Process",
    excerpt: "Learn how AI-powered quoting can reduce your estimate time from hours to minutes. Essential tips for HVAC, plumbing, and electrical contractors.",
    category: "Productivity",
    readTime: "5 min read",
    date: "Jan 15, 2025",
    keywords: "contractor quoting software, HVAC estimates, plumbing quotes",
    slug: "speed-up-quoting-process"
  },
  {
    title: "Construction Scheduling: Avoid Double-Booking Forever",
    excerpt: "Master smart scheduling techniques that eliminate conflicts. Route optimization tips that save time and fuel costs for contractors.",
    category: "Scheduling",
    readTime: "7 min read", 
    date: "Jan 12, 2025",
    keywords: "construction scheduling app, contractor calendar, job management",
    slug: "avoid-double-booking"
  },
  {
    title: "Get Paid Faster: Payment Best Practices for Contractors",
    excerpt: "Proven strategies to reduce payment delays from 45 days to same-day. Payment processing tips for small contractor businesses.",
    category: "Business",
    readTime: "6 min read",
    date: "Jan 10, 2025", 
    keywords: "contractor payments, invoice management, business cash flow",
    slug: "get-paid-faster"
  },
  {
    title: "HVAC Contractor Business Management in 2025",
    excerpt: "Complete guide to managing your HVAC business efficiently. From lead generation to job completion and customer follow-up.",
    category: "HVAC",
    readTime: "8 min read",
    date: "Jan 8, 2025",
    keywords: "HVAC contractor software, heating cooling business, HVAC job management",
    slug: "hvac-business-management"
  },
  {
    title: "Plumber Marketing: How to Get More Service Calls",
    excerpt: "Digital marketing strategies that work for plumbing contractors. SEO tips and customer acquisition tactics that increase bookings.",
    category: "Marketing",
    readTime: "6 min read", 
    date: "Jan 5, 2025",
    keywords: "plumber marketing, plumbing business growth, contractor SEO",
    slug: "plumber-marketing-tips"
  },
  {
    title: "Electrical Contractor License Requirements by State",
    excerpt: "Complete state-by-state guide to electrical contractor licensing. Requirements, fees, and renewal processes across all 50 states.",
    category: "Legal",
    readTime: "10 min read",
    date: "Jan 3, 2025",
    keywords: "electrical contractor license, electrician business, contractor requirements",
    slug: "electrical-contractor-licensing"
  }
];

const categories = [
  { name: "All Posts", count: 24 },
  { name: "Productivity", count: 8 },
  { name: "Business", count: 6 },
  { name: "HVAC", count: 4 },
  { name: "Plumbing", count: 3 },
  { name: "Electrical", count: 3 }
];

export default function ContractorBlogSection() {
  return (
    <section className="py-32 bg-[var(--clr-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-green-600/20 text-green-700 border-green-600/30 mb-4 px-4 py-2">
            📚 Contractor Resources
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contractor Business Tips & Guides
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto">
            Expert advice on contractor job management, construction scheduling, and growing your trade business. 
            Written by contractors, for contractors.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-[var(--clr-text-2)] hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--clr-surface)] rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Article Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-[var(--clr-text-2)] text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog Stats & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <BookOpen className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-blue-100">Expert Articles</div>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-blue-100">Monthly Readers</div>
            </div>
            <div>
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-blue-100">Found It Helpful</div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">
            Get Weekly Contractor Business Tips
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join 2,500+ active contractors getting our weekly newsletter with business tips, 
            industry insights, and CONSTRUKTR™ feature updates.
          </p>
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            Subscribe to Newsletter
          </Button>
        </motion.div>
      </div>
    </section>
  );
}