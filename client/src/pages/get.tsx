import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Star,
  QrCode,
  CheckCircle2,
  Users,
  DollarSign,
  Clock,
  Bot,
  Camera,
  Smartphone,
  Zap,
  Shield,
  Apple,
  Monitor,
} from "lucide-react";
import UnifiedFooter from "@/components/unified-footer";

const appStats = [
  { icon: Users, label: "Active Users", value: "1,000+" },
  { icon: Star, label: "App Rating", value: "4.9/5" },
  { icon: DollarSign, label: "Monthly Processing", value: "$2.5M+" },
  { icon: Clock, label: "Time Saved", value: "25+ hrs/week" },
];

const keyFeatures = [
  { icon: Bot, title: "AI-Powered Quoting", description: "Generate accurate quotes in seconds using AI analysis of project photos", highlight: "30-second estimates" },
  { icon: Camera, title: "Business Card Scanner", description: "Instantly scan and digitize business cards with OCR technology", highlight: "No manual entry" },
  { icon: Smartphone, title: "Mobile-First Design", description: "Every tool optimized for mobile with offline sync capabilities", highlight: "Works without internet" },
  { icon: DollarSign, title: "Payment Processing", description: "Accept payments on-site with integrated Stripe and digital receipts", highlight: "Get paid 40% faster" },
  { icon: Clock, title: "Smart Scheduling", description: "AI optimizes your schedule considering weather, crew, and travel time", highlight: "Save 2+ hours daily" },
  { icon: Shield, title: "Enterprise Security", description: "Bank-level security with 256-bit encryption and data at rest protection", highlight: "Your data is protected" },
];

const sellingPoints = [
  { icon: CheckCircle2, text: "Free to start, no credit card" },
  { icon: Zap, text: "Set up in under 5 minutes" },
  { icon: Bot, text: "Your first AI estimate in 30 seconds" },
];

const downloadOptions = [
  { platform: "iOS", icon: Apple, title: "Download for iPhone", subtitle: "iOS 14.0 or later", url: "https://apps.apple.com/app/construktr" },
  { platform: "Android", icon: Monitor, title: "Download for Android", subtitle: "Android 8.0 or later", url: "https://play.google.com/store/apps/details?id=com.construktr.app" },
];

declare function gtag(...args: unknown[]): void;

export default function GetApp() {
  const [showQR, setShowQR] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<"ios" | "android" | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) setSelectedPlatform("ios");
    else if (/android/.test(ua)) setSelectedPlatform("android");
  }, []);

  const handleDownload = (platform: string, url: string) => {
    if (typeof gtag !== "undefined") {
      gtag("event", "app_download_click", { event_category: "conversion", event_label: platform, value: 1 });
    }
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Helmet>
        <title>Get the App — Construktr</title>
        <meta name="description" content="Download Construktr for iOS or Android. Free to start, no credit card. AI-powered quoting, scheduling, and invoicing for contractors." />
        <link rel="canonical" href="https://construktr.ai/get" />
        <meta property="og:title" content="Get the Construktr App — Free Download" />
        <meta property="og:description" content="AI-powered business management for contractors. Free to start. iOS and Android." />
        <meta property="og:url" content="https://construktr.ai/get" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get the Construktr App" />
        <meta name="twitter:description" content="Free AI business manager for contractors. iOS and Android." />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
              <div>
                <Badge className="bg-white/10 text-white border-white/20 mb-4">
                  <Download className="h-4 w-4 mr-2" />
                  Free Mobile App
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Run Your Business <span className="block text-yellow-400">From Anywhere</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  The complete CONSTRUKTR experience in your pocket. AI-powered quoting, smart scheduling, and instant invoicing — all with offline sync.
                </p>
              </div>

              {/* Selling points */}
              <div className="space-y-3">
                {sellingPoints.map((pt, i) => {
                  const Icon = pt.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-lg">{pt.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Download buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {downloadOptions.map((opt) => {
                    const Ico = opt.icon;
                    const isPrimary = selectedPlatform === opt.platform.toLowerCase();
                    return (
                      <Button key={opt.platform} onClick={() => handleDownload(opt.platform, opt.url)} size="lg"
                        className={`${isPrimary ? "bg-white text-[#0243D5] hover:bg-gray-100" : "bg-black/50 text-white hover:bg-black/70"} px-6 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3 flex-1`}
                      >
                        <Ico className="h-6 w-6" />
                        <div className="text-left">
                          <div className="text-sm opacity-80">{opt.subtitle}</div>
                          <div className="font-bold">{opt.platform}</div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
                <Button onClick={() => setShowQR(showQR ? null : "both")} variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                  <QrCode className="h-4 w-4 mr-2" />
                  {showQR ? "Hide QR Codes" : "Show QR Codes"}
                </Button>
              </div>

              <div className="flex items-center gap-6 text-blue-200 text-sm flex-wrap">
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400" />Free download</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400" />Works offline</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-400" />Instant sync</span>
              </div>
            </motion.div>

            {/* Phone mockup */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
              <div className="relative mx-auto w-80 h-96">
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl transform rotate-6 opacity-60" />
                <div className="absolute inset-0 bg-gray-800 rounded-[3rem] shadow-2xl transform rotate-3 opacity-80" />
                <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-[#0243D5] to-blue-600 p-6 text-white relative">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-medium">9:41 AM</span>
                        <div className="flex items-center gap-1"><div className="w-4 h-2 bg-white/60 rounded-sm" /><div className="w-6 h-3 bg-white rounded-sm" /></div>
                      </div>
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-3 flex items-center justify-center"><span className="text-2xl font-bold">C</span></div>
                        <h3 className="font-bold text-xl">CONSTRUKTR</h3>
                        <p className="text-sm opacity-80">Mobile Dashboard</p>
                      </div>
                      <div className="space-y-3">
                        {[["Today's Revenue", "$4,850"], ["Active Projects", "12"], ["Pending Quotes", "8"]].map(([label, val]) => (
                          <div key={label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4"><div className="flex justify-between items-center"><span className="text-sm">{label}</span><span className="font-bold text-lg">{val}</span></div></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {showQR && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {downloadOptions.map((opt) => (
                <Card key={opt.platform} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-white mb-4">{opt.title}</h4>
                    <div className="w-32 h-32 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center"><QrCode className="w-16 h-16 text-gray-400" /></div>
                    <p className="text-blue-200 text-sm">Scan to download for {opt.platform}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {appStats.map((stat, i) => {
              const Ico = stat.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
                  <Ico className="h-8 w-8 mx-auto mb-2 text-[var(--color-primary)]" />
                  <div className="text-2xl font-black text-[var(--color-text-primary)]">{stat.value}</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Everything You Need in One App</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">All CONSTRUKTR tools optimized for mobile with exclusive mobile-only capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((f, i) => {
              const Ico = f.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}>
                  <Card className="border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-4"><Ico className="h-7 w-7 text-[var(--color-primary)]" /></div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{f.title}</h3>
                      <Badge className="bg-green-100 text-green-800 border-green-200 mb-3">{f.highlight}</Badge>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">{f.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ background: "var(--gradient-cta)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Download Now, Start Saving Time Today</h2>
          <p className="text-xl text-blue-100 mb-8">Join 1,000+ contractors who've transformed their business with CONSTRUKTR</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            {downloadOptions.map((opt) => (
              <Button key={opt.platform} onClick={() => handleDownload(opt.platform, opt.url)} size="lg" className="bg-white text-[#0243D5] hover:bg-gray-100 px-12 py-6 rounded-2xl font-semibold text-xl flex items-center justify-center gap-4 shadow-2xl">
                <Download className="h-6 w-6" />
                <div className="text-left"><div className="text-sm">Get it on</div><div className="font-bold">{opt.platform}</div></div>
              </Button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-8 text-blue-200 text-sm flex-wrap">
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" />Bank-level security</span>
            <span className="flex items-center gap-2"><Zap className="h-4 w-4" />Instant setup</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />Free forever plan</span>
          </div>
        </div>
      </section>

      <UnifiedFooter />
    </div>
  );
}
