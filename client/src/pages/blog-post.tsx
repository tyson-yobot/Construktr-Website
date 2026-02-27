import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User, Calendar, Tag } from 'lucide-react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/footer';
import blogPosts from '@/data/blog-posts';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const [match, params] = useRoute('/blog/:slug');
  
  if (!match || !params?.slug) {
    return <div>Post not found</div>;
  }

  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-[var(--clr-text-2)] mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <meta name="keywords" content={post.keywords} />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <Button variant="outline" className="mb-6 border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <div className="mb-8">
              <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full">
                {post.category}
              </span>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-6 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-[var(--clr-text-2)] mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full"
                  >
                    <Tag className="w-3 h-3 inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <article className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold text-white mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-[var(--clr-text-2)] mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-[var(--clr-text-2)]">{children}</li>,
                  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-electric-blue pl-6 my-6 italic text-white">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Ready to transform your business?</h3>
                <p className="text-[var(--clr-text-2)] mb-6">
                  See how CONSTRUKTR can help you implement these strategies
                </p>
                <Button 
                  asChild
                  className="bg-electric-blue text-white hover:bg-blue-700 px-8 py-3 text-lg font-semibold rounded-xl"
                >
                  <Link href="/pricing">
                    Start Free Trial →
                  </Link>
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