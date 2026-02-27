import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Star } from 'lucide-react';
import StandardizedPhoneMockup from './standardized-phone-mockup';
import { Badge } from '@/components/ui/badge';
import smartSchedulingScreen from '@assets/image_1754832756730.png';
import instantQuotesScreen from '@assets/image_1754832756730.png';
import smartDashboardScreen from '@assets/image_1754832756730.png';

const appFeatures = [
  {
    id: 'smart-scheduling',
    title: 'Smart Scheduling',
    description: 'AI-powered route optimization saves 2.5 hours daily',
    screenshot: smartSchedulingScreen,
    alt: 'CONSTRUKTR Smart Scheduling interface with route optimization',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'instant-quotes',
    title: 'Instant Quotes',
    description: 'Generate professional quotes in 30 seconds with AI',
    screenshot: instantQuotesScreen,
    alt: 'CONSTRUKTR Instant Quotes generation interface',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'smart-dashboard',
    title: 'Smart Dashboard',
    description: 'Real-time business insights and payment tracking',
    screenshot: smartDashboardScreen,
    alt: 'CONSTRUKTR Smart Dashboard with business analytics',
    color: 'from-green-500 to-green-600'
  }
];

export default function ThreePhoneShowcase() {
  const handleiOSDownload = () => {
    // Track iOS download with UTM parameters
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'ios_download_click', {
        event_category: 'app_download',
        event_label: 'three_phone_showcase',
        utm_source: 'website',
        utm_medium: 'three_phone_section',
        utm_campaign: 'ios_download'
      });
    }
    // iOS App Store link with UTM tracking
    window.open('https://apps.apple.com/app/construktr?utm_source=website&utm_medium=three_phone_section&utm_campaign=ios_download', '_blank');
  };

  const handleAndroidDownload = () => {
    // Track Android download with UTM parameters
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'android_download_click', {
        event_category: 'app_download',
        event_label: 'three_phone_showcase',
        utm_source: 'website',
        utm_medium: 'three_phone_section',
        utm_campaign: 'android_download'
      });
    }
    // Google Play Store link with UTM tracking
    window.open('https://play.google.com/store/apps/details?id=com.construktr.app&utm_source=website&utm_medium=three_phone_section&utm_campaign=android_download', '_blank');
  };

  return (
    <section className="section-spacing section--light bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            See CONSTRUKTR™ in Action
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Experience the three core features that are transforming how contractors 
            run their businesses and increasing revenue by 247% on average.
          </p>
        </motion.div>

        {/* Three Phone Layout */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {appFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Feature Card with Equal Heights */}
              <div className="bg-[var(--clr-surface)] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${feature.color} text-white text-sm font-semibold mb-4`}>
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--clr-text-2)] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Phone Mockup - Centered and Consistent */}
                <div className="flex-1 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-[240px] w-full"
                  >
                    {/* 4.9 Rating Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="absolute -top-3 -right-3 z-10"
                    >
                      <Badge className="bg-green-500 text-white px-3 py-1 text-sm font-bold flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3 fill-current" />
                        4.9
                      </Badge>
                    </motion.div>

                    <StandardizedPhoneMockup
                      src={feature.screenshot}
                      alt={feature.alt}
                      className="shadow-device"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Download CONSTRUKTR™ Today
            </h3>
            <p className="text-[var(--clr-text-2)] max-w-2xl mx-auto">
              Join thousands of contractors who've transformed their businesses. 
              Available on iOS and Android with 4.9-star ratings.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button
              onClick={handleiOSDownload}
              size="lg"
              className="btn-primary btn-lg w-full sm:w-auto min-w-[200px] bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3"
            >
              <Download className="w-5 h-5 mr-3" />
              Download iOS
            </Button>

            <Button
              onClick={handleAndroidDownload}
              size="lg"
              className="btn-primary btn-lg w-full sm:w-auto min-w-[200px] bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3"
            >
              <Download className="w-5 h-5 mr-3" />
              Download Android
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--clr-text-2)]"
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>4.9/5 rating on both stores</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-green-500" />
              <span>2,500+ contractors using CONSTRUKTR</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}