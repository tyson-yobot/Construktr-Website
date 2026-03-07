import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag } from "lucide-react";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";
import blogPosts from "@/data/blog-posts";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-primary text-white">
      <Helmet>
        <title>Contractor Business Blog - Expert Tips & Industry Insights | CONSTRUKTR</title>
        <meta name="description" content="Get expert contractor business tips, industry insights, and proven strategies to grow your contracting business. Free resources from CONSTRUKTR." />
        <meta name="keywords" content="contractor business tips, contractor blog, contracting industry news, business growth for contractors" />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              The CONSTRUKTR <span className="text-electric-blue">Business Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto mb-8"
            >
              Expert insights, proven strategies, and actionable tips to help contractors build more profitable businesses
            </motion.p>
            
            {/* Blue Accent Divider */}
            <div className="divider-blue max-w-xs mx-auto" />
          </div>
          
          <div className="grid gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-card rounded-2xl p-8 lg:p-12 border border-white/10 card-hover"
              >
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[var(--clr-text-2)]">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4 hover:text-electric-blue transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-lg text-[var(--clr-text-2)] mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    asChild
                    className="bg-electric-blue text-white hover:bg-blue-700 px-6 py-2 rounded-xl font-semibold"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read Full Article →
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-electric-blue/10 to-purple-600/5 border border-electric-blue/20 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-[var(--clr-text-2)] mb-6 max-w-2xl mx-auto">
                Get the latest contractor business tips, industry insights, and CONSTRUKTR updates delivered to your inbox weekly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-[var(--color-bg)] border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                />
                <Button className="bg-electric-blue text-white hover:bg-blue-700 px-8 py-3 font-semibold rounded-xl">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}