import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Play, Download, Phone, Clock, Shield } from 'lucide-react';

export default function MultipleCTAsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-purple-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[var(--clr-text-2)] max-w-3xl mx-auto mb-10">
            Join 2,500+ active contractors who've increased revenue by 40% with CONSTRUKTR
          </p>
          
          {/* Primary CTA Group */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              asChild
              size="lg"
              className="button-primary px-10 py-4 text-xl transform hover:scale-105 transition-all"
            >
              <Link href="/pricing">
                <Clock className="w-6 h-6 mr-3" />
                Get Started Free
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch 2-Minute Demo
            </Button>
          </div>
          
          <p className="text-sm text-[var(--clr-text-2)] flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            No credit card required · Cancel anytime · Free forever plan
          </p>
        </motion.div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Option 1: Free Trial */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-card p-8 rounded-3xl border border-electric-blue/30 card-hover text-center glow-blue"
          >
            <div className="w-16 h-16 bg-electric-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-electric-blue" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Start Free Trial</h3>
            <p className="text-[var(--clr-text-2)] mb-6">
              Full access to all features for 15 days. No commitments, no hidden fees.
            </p>
            
            <ul className="text-sm text-[var(--clr-text-2)] space-y-2 mb-6">
              <li>✅ Unlimited quotes & scheduling</li>
              <li>✅ Payment processing included</li>
              <li>✅ Mobile app access</li>
              <li>✅ 24/7 support</li>
            </ul>
            
            <Button
              asChild
              className="w-full button-primary py-3"
            >
              <Link href="/pricing">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <p className="text-xs text-[var(--clr-text-2)] mt-3">
              Setup takes less than 5 minutes
            </p>
          </motion.div>

          {/* Option 2: Schedule Demo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-card p-8 rounded-3xl border border-white/10 card-hover text-center"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-green-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Book Personal Demo</h3>
            <p className="text-[var(--clr-text-2)] mb-6">
              See exactly how CONSTRUKTR will work for your specific business needs.
            </p>
            
            <ul className="text-sm text-[var(--clr-text-2)] space-y-2 mb-6">
              <li>📞 15-minute personalized demo</li>
              <li>🎯 Custom setup recommendations</li>
              <li>💡 Industry-specific tips</li>
              <li>🎁 Free business audit</li>
            </ul>
            
            <Button
              asChild
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10 py-3 font-bold rounded-xl"
            >
              <Link href="/demo">
                Schedule Demo Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <p className="text-xs text-[var(--clr-text-2)] mt-3">
              Available Mon-Fri, 9 AM - 6 PM EST
            </p>
          </motion.div>

          {/* Option 3: Download App */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-card p-8 rounded-3xl border border-white/10 card-hover text-center"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-purple-400" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Get Mobile App</h3>
            <p className="text-[var(--clr-text-2)] mb-6">
              Download the CONSTRUKTR mobile app and start exploring features today.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between">
                <span className="text-white text-sm">🍎 App Store</span>
                <span className="text-green-400 text-xs font-medium">4.8★</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between">
                <span className="text-white text-sm">🤖 Google Play</span>
                <span className="text-green-400 text-xs font-medium">4.9★</span>
              </div>
            </div>
            
            <Button
              asChild
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10 py-3 font-bold rounded-xl"
            >
              <Link href="/download">
                Download Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <p className="text-xs text-[var(--clr-text-2)] mt-3">
              Free to download • Premium features available
            </p>
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[var(--clr-text-2)]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Bank-Level Security</span>
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full hidden sm:block" />
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Trusted by 2,500+ Active Contractors</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}