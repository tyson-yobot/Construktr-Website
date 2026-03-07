import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Mail, MapPin, Bug } from "lucide-react";
import UnifiedFooter from "@/components/unified-footer";

const faqs = [
  {
    q: "How do I reset my password?",
    a: "Open the Construktr app and tap 'Forgot Password' on the login screen. Enter your email address and we'll send you a reset link. If you don't receive the email within a few minutes, check your spam folder or contact support@construktr.ai.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel your subscription at any time. On iOS: go to Settings → [Your Name] → Subscriptions → Construktr → Cancel. On Android: go to Google Play Store → Profile → Payments & subscriptions → Subscriptions → Construktr → Cancel. Your access continues until the end of the current billing period.",
  },
  {
    q: "How do I export my data?",
    a: "Go to Settings → Account → Export Data in the app. You can export your jobs, customers, estimates, and invoices as CSV or PDF files. Exported data is emailed to your account email address within a few minutes.",
  },
  {
    q: "Does the app work offline?",
    a: "Yes. Construktr is built offline-first. You can capture job notes, photos, estimates, and time entries without a signal. All data syncs automatically when your connection is restored. This is designed for job sites in basements, remote areas, and buildings with poor cell coverage.",
  },
  {
    q: "How does AI photo estimation work?",
    a: "Take a photo of the job site or work area in the app. The AI analyzes the image to identify scope of work, materials, and complexity, then suggests a price range based on current material costs and labor rates in your area. You review and adjust the estimate before sending it to the customer. Photos are processed server-side for analysis and are not permanently stored by the AI provider.",
  },
  {
    q: "How do I connect QuickBooks?",
    a: "Go to Settings → Integrations → QuickBooks in the app. Tap 'Connect' and log in to your Intuit account. Once authorized, Construktr syncs invoices, payments, customers, and expenses bidirectionally with QuickBooks. You can disconnect at any time from the same settings screen.",
  },
  {
    q: "What devices are supported?",
    a: "Construktr is available on iOS (iPhone and iPad running iOS 15 or later) and Android (running Android 9 or later). A mobile device is required — there is no web-based version of the app.",
  },
  {
    q: "How do I add team members?",
    a: "Go to Settings → Team → Invite Member. Enter the email address of the person you want to add. They will receive an email invitation to download the app and join your account. The number of team members you can add depends on your subscription plan.",
  },
  {
    q: "What payment methods can my customers use?",
    a: "Customers can pay via credit card, debit card, Apple Pay, and Google Pay. Payments are processed securely through Stripe. Funds are deposited to your bank account, with timing depending on your Stripe payout settings.",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Helmet>
        <title>Support — Construktr</title>
        <meta name="description" content="Get help with Construktr. Contact support, browse FAQs, and find answers." />
        <link rel="canonical" href="https://construktr.ai/support" />
      </Helmet>

      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Support Center</h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We respond within 24 hours on business days.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08)] p-6 text-center">
              <Mail className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
              <h3 className="font-bold text-[var(--color-text-primary)] mb-2">Email Support</h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-3">We respond within 24 hours on business days.</p>
              <a href="mailto:support@construktr.ai" className="text-[var(--color-primary)] font-semibold text-sm hover:underline">
                support@construktr.ai
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08)] p-6 text-center">
              <MapPin className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
              <h3 className="font-bold text-[var(--color-text-primary)] mb-2">Company</h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                Automate AI LLC<br />
                Scottsdale, AZ
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[rgba(15,23,42,0.08)] shadow-[0_10px_25px_rgba(15,23,42,0.08)] p-6 text-center">
              <Bug className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
              <h3 className="font-bold text-[var(--color-text-primary)] mb-2">Report a Bug</h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-3">Found something broken? Send us a screenshot and description.</p>
              <a href="mailto:support@construktr.ai?subject=Bug%20Report" className="text-[var(--color-primary)] font-semibold text-sm hover:underline">
                support@construktr.ai
              </a>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border border-[rgba(15,23,42,0.08)] shadow-[0_4px_12px_rgba(15,23,42,0.06)] overflow-hidden group"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors list-none">
                    {faq.q}
                    <span className="ml-4 text-[var(--color-text-secondary)] text-lg flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-2xl p-6 text-center">
            <p className="text-[var(--color-text-secondary)] text-sm">
              For legal questions:{" "}
              <a href="mailto:legal@construktr.ai" className="text-[var(--color-primary)] font-medium hover:underline">legal@construktr.ai</a>
              {" · "}
              For privacy requests:{" "}
              <a href="mailto:privacy@construktr.ai" className="text-[var(--color-primary)] font-medium hover:underline">privacy@construktr.ai</a>
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm mt-3">
              <Link href="/privacy" className="text-[var(--color-primary)] hover:underline">Privacy Policy</Link>
              {" · "}
              <Link href="/terms" className="text-[var(--color-primary)] hover:underline">Terms of Service</Link>
            </p>
          </div>
        </div>
      </main>

      <UnifiedFooter />
    </div>
  );
}
