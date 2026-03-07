import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import UnifiedFooter from "@/components/unified-footer";

export default function Terms() {
  const effectiveDate = "February 27, 2026";

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Helmet>
        <title>Terms of Service — Construktr</title>
        <meta name="description" content="Terms and conditions for using the Construktr contractor management platform." />
        <link rel="canonical" href="https://construktr.ai/terms" />
      </Helmet>

      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">Terms of Service</h1>
          <p className="text-[var(--color-text-secondary)] mb-2">Effective Date: {effectiveDate}</p>
          <p className="text-[var(--color-text-secondary)] mb-10">Last Updated: {effectiveDate}</p>

          <div className="prose prose-gray max-w-none space-y-10 text-[var(--color-text-secondary)] leading-relaxed">

            <section>
              <p>These Terms of Service ("Terms") govern your use of the Construktr mobile application and website (collectively, "Services") provided by Automate AI LLC ("Construktr," "we," "our," or "us"). By accessing or using our Services, you agree to be bound by these Terms.</p>
              <p className="mt-3">Company: Automate AI LLC, Scottsdale, AZ<br />Legal contact: <a href="mailto:legal@construktr.ai" className="text-[var(--color-primary)]">legal@construktr.ai</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">1. Acceptance of Terms</h2>
              <p>By downloading, installing, or using Construktr, you confirm that you are at least 18 years old, have read and understood these Terms, and agree to be legally bound by them. If you do not agree, do not use the Services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">2. Eligibility</h2>
              <p>You must be at least 18 years old to use Construktr. By using the Services, you represent and warrant that you meet this requirement. The Services are intended for business use by contractors, field service professionals, and their authorized employees.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">3. Account Responsibilities</h2>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activity that occurs under your account</li>
                <li>Providing accurate and complete account information</li>
                <li>Notifying us immediately of any unauthorized use of your account at <a href="mailto:support@construktr.ai" className="text-[var(--color-primary)]">support@construktr.ai</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">4. Subscription Terms</h2>
              <p>Construktr offers four subscription tiers:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Free:</strong> $0/month, 1 user, limited features — free forever</li>
                <li><strong>Starter:</strong> $49/month (or $39/month billed annually), up to 5 users</li>
                <li><strong>Pro:</strong> $89/month (or $69/month billed annually), up to 15 users</li>
                <li><strong>Business:</strong> $199/month (or $159/month billed annually), unlimited users</li>
              </ul>
              <p className="mt-3">Pricing is subject to change with 30 days' notice. You will always retain access to your paid tier through the end of the billing period if you choose not to accept a price change.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">5. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All payments are processed by <strong>Stripe</strong>, a third-party payment processor. By providing payment information, you agree to Stripe's terms of service.</li>
                <li>Subscriptions are billed in advance on a monthly or annual basis, depending on your selection.</li>
                <li>Subscriptions automatically renew unless canceled before the renewal date.</li>
                <li>You may cancel your subscription at any time. Access continues until the end of the current billing period — no prorated refunds.</li>
                <li>Payment processing fees for contractor payment features vary by tier (2.5%–2.9% + $0.20–$0.30 per transaction).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">6. Acceptable Use</h2>
              <p>You agree not to use Construktr to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Violate any applicable laws or regulations</li>
                <li>Fraudulently misrepresent your identity or business</li>
                <li>Abuse, misuse, or overload AI features (including automated scraping or mass generation)</li>
                <li>Gain unauthorized access to other accounts or systems</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Resell or sublicense the Services without written permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">7. Intellectual Property</h2>
              <p>Automate AI LLC owns all rights to the Construktr platform, including its code, design, brand, AI models, and documentation. These Terms do not transfer any intellectual property rights to you.</p>
              <p className="mt-3"><strong>Your data is yours.</strong> You retain full ownership of all job data, customer information, photos, estimates, and other content you create or upload in Construktr. We do not claim ownership of your data and do not sell it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">8. User Data</h2>
              <p>You retain ownership of all data you input into Construktr, including job records, customer information, photos, and documents. We process your data only to provide the Services. We do not sell your data. See our <Link href="/privacy" className="text-[var(--color-primary)] underline">Privacy Policy</Link> for full details.</p>
              <p className="mt-3">Upon termination, your data remains available for export for 30 days, after which it will be permanently deleted upon written request.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">9. Limitation of Liability</h2>
              <p>The Services are provided "as is" without warranties of any kind, express or implied. Automate AI LLC does not guarantee uninterrupted access, error-free operation, or specific business outcomes from use of the Services.</p>
              <p className="mt-3">To the maximum extent permitted by law, Automate AI LLC's total liability for any claim arising from these Terms or your use of the Services is limited to the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits or business opportunities.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">10. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless Automate AI LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from your use of the Services, violation of these Terms, or misrepresentation of your identity or business.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">11. Termination</h2>
              <p>Either party may terminate the account at any time. We reserve the right to suspend or terminate accounts that violate these Terms without notice. Upon termination:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Access to the Services ends immediately (or at the end of the paid billing period for voluntary cancellations)</li>
                <li>Your data remains available for export for 30 days</li>
                <li>Data is permanently deleted upon written request after the 30-day window</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">12. Dispute Resolution</h2>
              <p>These Terms are governed by the laws of the State of Arizona, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Services shall be resolved in the state or federal courts located in Maricopa County, Arizona. You consent to the personal jurisdiction of such courts.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">13. Modifications to Terms</h2>
              <p>Automate AI LLC may modify these Terms at any time. We will provide at least 30 days' notice of material changes via email or in-app notification. Your continued use of the Services after the effective date of changes constitutes acceptance of the updated Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">14. Contact</h2>
              <p>
                Automate AI LLC<br />
                Scottsdale, AZ<br />
                Legal: <a href="mailto:legal@construktr.ai" className="text-[var(--color-primary)]">legal@construktr.ai</a><br />
                Support: <a href="mailto:support@construktr.ai" className="text-[var(--color-primary)]">support@construktr.ai</a>
              </p>
              <p className="mt-4">
                <Link href="/privacy" className="text-[var(--color-primary)] underline">Privacy Policy</Link>
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
