import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import UnifiedFooter from "@/components/unified-footer";

export default function EULA() {
  const effectiveDate = "April 5, 2026";

  const sections = [
    { id: "agreement", title: "1. Agreement to Terms" },
    { id: "license-grant", title: "2. License Grant" },
    { id: "license-restrictions", title: "3. License Restrictions" },
    { id: "intellectual-property", title: "4. Intellectual Property" },
    { id: "user-data", title: "5. User Data" },
    { id: "ai-content", title: "6. AI-Generated Content" },
    { id: "third-party", title: "7. Third-Party Services" },
    { id: "subscriptions", title: "8. In-App Purchases and Subscriptions" },
    { id: "apple", title: "9. Apple App Store Terms" },
    { id: "google", title: "10. Google Play Terms" },
    { id: "termination", title: "11. Termination" },
    { id: "warranties", title: "12. Disclaimer of Warranties" },
    { id: "liability", title: "13. Limitation of Liability" },
    { id: "governing-law", title: "14. Governing Law" },
    { id: "contact", title: "15. Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Helmet>
        <title>End User License Agreement — Construktr</title>
        <meta name="description" content="End User License Agreement (EULA) for the Construktr contractor management platform by Automate AI LLC." />
        <link rel="canonical" href="https://construktr.ai/eula" />
      </Helmet>

      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">End User License Agreement</h1>
          <p className="text-[var(--color-text-secondary)] mb-2">Effective Date: {effectiveDate}</p>
          <p className="text-[var(--color-text-secondary)] mb-10">Last Updated: {effectiveDate}</p>

          <div className="prose prose-gray max-w-none space-y-10 text-[var(--color-text-secondary)] leading-relaxed">

            {/* Table of Contents */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Table of Contents</h2>
              <nav>
                <ol className="list-decimal pl-6 space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-[var(--color-primary)] underline">{s.title}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </section>

            <section>
              <p>This End User License Agreement ("EULA" or "Agreement") is a binding legal contract between you ("User," "you," or "your") and Automate AI LLC ("Automate AI," "Construktr," "we," "our," or "us"), governing your use of the Construktr mobile application, web application, and all related services (collectively, the "Application"). By downloading, installing, accessing, or using the Application, you agree to be bound by this Agreement.</p>
            </section>

            <section id="agreement">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">1. Agreement to Terms</h2>
              <p>By downloading, installing, creating an account, or otherwise accessing or using the Construktr Application, you acknowledge that you have read, understood, and agree to be bound by this EULA. If you do not agree to these terms, you must not download, install, or use the Application.</p>
              <p className="mt-3">You represent and warrant that you are at least 18 years of age and have the legal capacity to enter into this Agreement. If you are accepting this Agreement on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these terms.</p>
              <p className="mt-3">This EULA is supplemented by our <Link href="/terms" className="text-[var(--color-primary)] underline">Terms of Service</Link> and <Link href="/privacy" className="text-[var(--color-primary)] underline">Privacy Policy</Link>, which are incorporated by reference.</p>
            </section>

            <section id="license-grant">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">2. License Grant</h2>
              <p>Subject to your compliance with this Agreement, Automate AI LLC grants you a limited, non-exclusive, non-transferable, revocable license to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Download and install the Application on devices you own or control</li>
                <li>Access and use the Application for your personal or internal business purposes</li>
                <li>Use the features and functionality available under your subscription tier</li>
              </ul>
              <p className="mt-3">This license does not grant you any ownership interest in the Application. The license is effective until terminated by you or Automate AI LLC in accordance with this Agreement.</p>
            </section>

            <section id="license-restrictions">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">3. License Restrictions</h2>
              <p>You shall not, and shall not permit any third party to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Copy, modify, adapt, translate, or create derivative works based on the Application</li>
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, algorithms, or underlying structure of the Application</li>
                <li>Redistribute, sublicense, lease, rent, loan, or otherwise transfer the Application or any rights therein to any third party</li>
                <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices in the Application</li>
                <li>Use automated scripts, bots, scrapers, or other automated means to access, scrape, or extract data from the Application, including AI-generated features, estimates, or business intelligence outputs</li>
                <li>Use the Application to build a competing product or service</li>
                <li>Circumvent, disable, or interfere with any security, authentication, or access-control features of the Application</li>
                <li>Use the Application in any manner that violates applicable laws or regulations</li>
                <li>Share, publish, or distribute API keys, access tokens, or credentials associated with your account</li>
              </ul>
            </section>

            <section id="intellectual-property">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">4. Intellectual Property</h2>
              <p>The Application, including all software, code, design, graphics, user interface, trademarks, logos, AI models, algorithms, documentation, and all other components, is the exclusive property of Automate AI LLC and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
              <p className="mt-3">The Construktr name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Automate AI LLC. You are not granted any right or license to use these marks without prior written consent.</p>
              <p className="mt-3">All rights not expressly granted to you in this Agreement are reserved by Automate AI LLC.</p>
            </section>

            <section id="user-data">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">5. User Data</h2>
              <p><strong>You retain full ownership of all data you create, upload, or input into the Application</strong>, including but not limited to job records, customer information, project photos, documents, estimates, invoices, and financial records ("User Data").</p>
              <p className="mt-3">By using the Application, you grant Automate AI LLC a limited, non-exclusive license to process, store, and transmit your User Data solely for the purpose of providing, maintaining, and improving the Services. We do not sell, rent, or share your User Data with third parties for their marketing purposes.</p>
              <p className="mt-3">We process User Data in accordance with our <Link href="/privacy" className="text-[var(--color-primary)] underline">Privacy Policy</Link>. You are responsible for ensuring that you have the necessary rights and consents to input data into the Application, including any personal information of your customers or employees.</p>
            </section>

            <section id="ai-content">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">6. AI-Generated Content</h2>
              <p>The Application includes artificial intelligence and machine learning features that generate content including, but not limited to, cost estimates, project timelines, optimized routes, material recommendations, and business intelligence insights ("AI-Generated Content").</p>
              <p className="mt-3"><strong>AI-Generated Content is provided as a tool to assist your decision-making and is not a substitute for professional judgment.</strong> You acknowledge and agree that:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>AI-Generated Content may contain inaccuracies, errors, or omissions</li>
                <li>You are solely responsible for reviewing, verifying, and validating all AI-Generated Content before relying on it or presenting it to clients</li>
                <li>Automate AI LLC makes no representations or warranties regarding the accuracy, completeness, or reliability of AI-Generated Content</li>
                <li>AI-Generated Content does not constitute professional advice (financial, legal, engineering, or otherwise)</li>
                <li>You bear full responsibility for any decisions made based on AI-Generated Content</li>
              </ul>
            </section>

            <section id="third-party">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">7. Third-Party Services</h2>
              <p>The Application integrates with the following third-party services to provide its functionality:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Stripe</strong> — Payment processing for subscriptions and in-app transactions. Subject to <a href="https://stripe.com/legal" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline">Stripe's Terms of Service</a>.</li>
                <li><strong>Intuit QuickBooks</strong> — Accounting integration for invoice syncing, expense tracking, and financial reconciliation. Subject to Intuit's terms of service.</li>
                <li><strong>Supabase</strong> — Authentication services and secure data storage infrastructure.</li>
                <li><strong>OpenAI</strong> — Artificial intelligence services powering smart estimates, business intelligence, and AI-assisted features.</li>
                <li><strong>Twilio</strong> — SMS messaging for notifications, appointment reminders, and two-factor authentication.</li>
                <li><strong>SendGrid</strong> — Email delivery for transactional emails, notifications, and account communications.</li>
              </ul>
              <p className="mt-3">Your use of the Application may be subject to the terms and policies of these third-party providers. Automate AI LLC is not responsible for the practices or availability of third-party services.</p>
            </section>

            <section id="subscriptions">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">8. In-App Purchases and Subscriptions</h2>
              <p>Construktr offers five subscription tiers:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Free:</strong> $0/month — Limited features, 1 user, free forever</li>
                <li><strong>Starter:</strong> $49/month — Essential tools for solo contractors, up to 3 users</li>
                <li><strong>Core:</strong> $99/month — Full-featured plan for growing businesses, up to 10 users</li>
                <li><strong>Pro:</strong> $199/month — Advanced features with AI-powered tools, up to 25 users</li>
                <li><strong>Business:</strong> $349/month — Enterprise-grade features, unlimited users, priority support</li>
              </ul>
              <p className="mt-3"><strong>Auto-Renewal:</strong> Paid subscriptions automatically renew at the end of each billing period (monthly or annual) unless canceled before the renewal date. You will be charged the applicable subscription fee at the beginning of each renewal period.</p>
              <p className="mt-3"><strong>Cancellation:</strong> You may cancel your subscription at any time through your account settings or by contacting <a href="mailto:support@construktr.ai" className="text-[var(--color-primary)]">support@construktr.ai</a>. Upon cancellation, you retain access to paid features through the end of the current billing period. No prorated refunds are issued for partial billing periods.</p>
              <p className="mt-3"><strong>Price Changes:</strong> We reserve the right to modify subscription pricing with at least 30 days' advance notice. You will be notified via email and in-app notification before any price change takes effect.</p>
            </section>

            <section id="apple">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">9. Apple App Store Terms</h2>
              <p>If you downloaded the Application from the Apple App Store, the following additional terms apply:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>This EULA is between you and Automate AI LLC only, and not with Apple Inc. ("Apple"). Apple is not responsible for the Application or its content.</li>
                <li>Apple has no obligation to provide maintenance, support, or warranty services for the Application.</li>
                <li>In the event of a failure of the Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) to you. To the maximum extent permitted by applicable law, Apple has no other warranty obligation with respect to the Application.</li>
                <li>Apple is not responsible for addressing any claims by you or any third party relating to the Application, including product liability claims, failure to meet legal or regulatory requirements, or consumer protection claims.</li>
                <li>In the event of any third-party claim that the Application infringes that third party's intellectual property rights, Automate AI LLC, not Apple, is solely responsible for the investigation, defense, settlement, and discharge of any such claim.</li>
                <li>Apple and its subsidiaries are third-party beneficiaries of this EULA. Upon your acceptance of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this EULA against you as a third-party beneficiary.</li>
                <li>You represent and warrant that (a) you are not located in a country subject to a U.S. Government embargo or designated as a "terrorist supporting" country, and (b) you are not listed on any U.S. Government list of prohibited or restricted parties.</li>
              </ul>
            </section>

            <section id="google">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">10. Google Play Terms</h2>
              <p>If you downloaded the Application from Google Play, the following additional terms apply:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>This EULA is between you and Automate AI LLC only. Google LLC ("Google") is not a party to this Agreement and is not responsible for the Application or its content.</li>
                <li>Your use of the Application must comply with Google Play's current terms of service.</li>
                <li>Google is not obligated to provide maintenance, support, or update services for the Application.</li>
                <li>Google is not responsible for addressing any claims related to the Application, including product liability, consumer protection, or intellectual property claims.</li>
                <li>Google is a third-party beneficiary of this EULA and may enforce this Agreement against you upon your acceptance.</li>
              </ul>
            </section>

            <section id="termination">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">11. Termination</h2>
              <p>This Agreement is effective until terminated. Your rights under this EULA will terminate automatically and without notice if you fail to comply with any of its terms.</p>
              <p className="mt-3">Automate AI LLC may terminate or suspend your access to the Application at any time, with or without cause, including but not limited to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Violation of this Agreement or our Terms of Service</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Non-payment of subscription fees</li>
                <li>Extended inactivity (12 months or more on a free account)</li>
              </ul>
              <p className="mt-3"><strong>Data Export:</strong> Upon termination, you will have 30 calendar days to export your User Data through the Application's export features or by contacting <a href="mailto:support@construktr.ai" className="text-[var(--color-primary)]">support@construktr.ai</a>. After the 30-day period, your data may be permanently deleted and is not recoverable.</p>
              <p className="mt-3">Sections 3, 4, 5, 6, 12, 13, and 14 of this Agreement shall survive termination.</p>
            </section>

            <section id="warranties">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">12. Disclaimer of Warranties</h2>
              <p><strong>THE APPLICATION IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong> To the fullest extent permitted by applicable law, Automate AI LLC disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</p>
              <p className="mt-3">Automate AI LLC does not warrant that the Application will be uninterrupted, error-free, secure, or free of viruses or other harmful components. We do not guarantee any specific results from use of the Application, including revenue generation, cost savings, or business growth.</p>
              <p className="mt-3">Some jurisdictions do not allow the exclusion of implied warranties. In such jurisdictions, the above exclusion may not apply to you, and you may have additional rights under local law.</p>
            </section>

            <section id="liability">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">13. Limitation of Liability</h2>
              <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AUTOMATE AI LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</strong>, including but not limited to loss of profits, revenue, data, business opportunities, goodwill, or other intangible losses, arising out of or in connection with your use of or inability to use the Application, regardless of the theory of liability (contract, tort, strict liability, or otherwise), even if Automate AI LLC has been advised of the possibility of such damages.</p>
              <p className="mt-3"><strong>Automate AI LLC's total aggregate liability for any and all claims arising out of or relating to this Agreement or the Application shall not exceed the total amount of fees you paid to Automate AI LLC during the twelve (12) months immediately preceding the event giving rise to the claim.</strong></p>
              <p className="mt-3">If you are on the Free tier and have paid no fees, our maximum liability shall not exceed fifty U.S. dollars ($50.00).</p>
            </section>

            <section id="governing-law">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">14. Governing Law</h2>
              <p>This Agreement shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions. Any legal action, suit, or proceeding arising out of or relating to this Agreement shall be brought exclusively in the state or federal courts located in Maricopa County, Arizona, and you consent to the personal jurisdiction and venue of such courts.</p>
              <p className="mt-3">If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The failure of Automate AI LLC to enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision.</p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">15. Contact Information</h2>
              <p>If you have any questions about this End User License Agreement, please contact us:</p>
              <p className="mt-3">
                Automate AI LLC<br />
                Scottsdale, AZ<br />
                Email: <a href="mailto:support@construktr.ai" className="text-[var(--color-primary)]">support@construktr.ai</a>
              </p>
              <p className="mt-6">
                <Link href="/privacy" className="text-[var(--color-primary)] underline">Privacy Policy</Link>
                {" · "}
                <Link href="/terms" className="text-[var(--color-primary)] underline">Terms of Service</Link>
              </p>
            </section>
          </div>
        </div>
      </main>

      <UnifiedFooter />
    </div>
  );
}
