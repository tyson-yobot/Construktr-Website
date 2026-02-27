import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import UnifiedFooter from "@/components/unified-footer";

export default function Privacy() {
  const effectiveDate = "February 27, 2026";

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Helmet>
        <title>Privacy Policy — Construktr</title>
        <meta name="description" content="How Construktr collects, uses, and protects your data. CCPA compliant." />
        <link rel="canonical" href="https://construktr.ai/privacy" />
      </Helmet>

      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">Privacy Policy</h1>
          <p className="text-[var(--color-text-secondary)] mb-2">Effective Date: {effectiveDate}</p>
          <p className="text-[var(--color-text-secondary)] mb-10">Last Updated: {effectiveDate}</p>

          <div className="prose prose-gray max-w-none space-y-10 text-[var(--color-text-secondary)] leading-relaxed">

            <section>
              <p>This Privacy Policy describes how Automate AI LLC ("Construktr," "we," "our," or "us") collects, uses, and shares information about you when you use the Construktr mobile application ("App") and website at construktr.ai ("Site"). By using our services, you agree to this policy.</p>
              <p className="mt-3">Company: Automate AI LLC, Phoenix, AZ<br />Contact: <a href="mailto:privacy@construktr.ai" className="text-[var(--color-primary)]">privacy@construktr.ai</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">1. Device Permissions We Request</h2>
              <p>The Construktr app requests the following device permissions to provide its features:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Camera:</strong> Job site photos, document scanning, business card OCR, and AI photo estimation.</li>
                <li><strong>Photo Library:</strong> Attach existing photos to jobs and save generated documents.</li>
                <li><strong>Location (Foreground):</strong> Clock-in/out verification, route optimization, and nearby leads.</li>
                <li><strong>Location (Background):</strong> Continuous GPS tracking while clocked in to a job (only when time tracking is active).</li>
                <li><strong>Contacts:</strong> Import clients and crew members from device contacts (you control which contacts are imported).</li>
                <li><strong>Face ID / Touch ID:</strong> Biometric authentication to secure your account.</li>
                <li><strong>Push Notifications:</strong> Job reminders, schedule alerts, payment notifications, and crew updates.</li>
              </ul>
              <p className="mt-3">You may deny any permission; doing so will disable the associated features. You can revoke permissions at any time in your device settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account information: name, email address, phone number, company name</li>
                <li>Job data: job details, photos, estimates, schedules, time tracking records, materials</li>
                <li>Financial data: invoicing information, payment records (processed via Stripe)</li>
                <li>Customer data: client names, contact information, job history</li>
                <li>Documents: photos, scanned documents, business cards</li>
              </ul>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 mt-4">Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Location data: GPS coordinates during active time tracking and route optimization</li>
                <li>Device data: device model, operating system version, app version, crash logs</li>
                <li>Usage analytics: feature usage, screen views, session duration, error reports</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and improve the Construktr app and services</li>
                <li>Process payments and sync with QuickBooks</li>
                <li>Generate AI-powered estimates using photo analysis (photos are processed server-side and not retained after processing)</li>
                <li>Optimize routes and dispatch crew members</li>
                <li>Send push notifications for jobs, schedules, and payments</li>
                <li>Respond to support requests</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">4. Third-Party Services</h2>
              <p>We share data with these third-party providers to operate our services:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Supabase</strong> — Database, authentication, and file storage (hosted on AWS). Your data is stored in Supabase's secure infrastructure.</li>
                <li><strong>Stripe</strong> — Payment processing. Stripe is PCI-DSS Level 1 compliant. We do not store full card numbers.</li>
                <li><strong>Intuit / QuickBooks</strong> — Accounting sync (bidirectional, only when you connect your QuickBooks account).</li>
                <li><strong>AI/ML Services</strong> — Photo analysis for estimation. Photos are processed server-side for analysis purposes and are not permanently stored by the AI provider.</li>
                <li><strong>Sentry</strong> — Crash reporting and error tracking to help us fix bugs.</li>
                <li><strong>Expo / EAS</strong> — Push notification delivery (Apple APNs and Google FCM).</li>
                <li><strong>Twilio</strong> — SMS messaging for job reminders and crew communication.</li>
                <li><strong>Google Maps</strong> — Route optimization and mapping features.</li>
              </ul>
              <p className="mt-3">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">5. Data Retention</h2>
              <p>Data retention depends on your subscription tier:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Free:</strong> 7 days of job history</li>
                <li><strong>Starter:</strong> 1 year</li>
                <li><strong>Pro:</strong> 2 years</li>
                <li><strong>Business:</strong> Unlimited</li>
              </ul>
              <p className="mt-3">After account termination, your data is available for export for 30 days, after which it is permanently deleted upon request.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">6. Data Security</h2>
              <p>We protect your data using:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>256-bit SSL/TLS encryption for all data in transit</li>
                <li>Encryption at rest for all stored data</li>
                <li>Role-based access control (RBAC)</li>
                <li>Regular security reviews</li>
              </ul>
              <p className="mt-3">No system is 100% secure. If you believe your account has been compromised, contact <a href="mailto:support@construktr.ai" className="text-[var(--color-primary)]">support@construktr.ai</a> immediately.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update inaccurate information in your account settings</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data (Apple App Store requirement)</li>
                <li><strong>Portability:</strong> Export your job data in a standard format</li>
                <li><strong>Opt-out of marketing:</strong> Unsubscribe from marketing emails at any time</li>
              </ul>
              <p className="mt-3">To exercise these rights, email <a href="mailto:privacy@construktr.ai" className="text-[var(--color-primary)]">privacy@construktr.ai</a>. We will respond within 30 days.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">8. California Privacy Rights (CCPA)</h2>
              <p>California residents have additional rights under the California Consumer Privacy Act (CCPA):</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information, subject to certain exceptions.</li>
                <li><strong>Right to Opt-Out:</strong> We do not sell personal information, so there is nothing to opt out of.</li>
                <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
              </ul>
              <p className="mt-3">To submit a CCPA request, contact <a href="mailto:privacy@construktr.ai" className="text-[var(--color-primary)]">privacy@construktr.ai</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">9. Children's Privacy</h2>
              <p>Construktr is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will delete it promptly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of material changes via email or in-app notification at least 30 days before the changes take effect. Your continued use of the app after changes take effect constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">11. Contact Us</h2>
              <p>
                Automate AI LLC<br />
                Phoenix, AZ<br />
                Privacy inquiries: <a href="mailto:privacy@construktr.ai" className="text-[var(--color-primary)]">privacy@construktr.ai</a><br />
                General support: <a href="mailto:support@construktr.ai" className="text-[var(--color-primary)]">support@construktr.ai</a>
              </p>
              <p className="mt-4">
                <Link href="/terms" className="text-[var(--color-primary)] underline">Terms of Service</Link>
                {" · "}
                <Link href="/support" className="text-[var(--color-primary)] underline">Support</Link>
              </p>
            </section>
          </div>
        </div>
      </main>

      <UnifiedFooter />
    </div>
  );
}
