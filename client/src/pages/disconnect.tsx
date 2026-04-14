import { Helmet } from "react-helmet-async";
import { Unlink, XCircle, CheckCircle } from "lucide-react";
import UnifiedFooter from "@/components/unified-footer";

export default function Disconnect() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Helmet>
        <title>Disconnect QuickBooks — Construktr</title>
        <meta name="description" content="Disconnect your QuickBooks integration from Construktr. Your data is preserved in both systems." />
        <link rel="canonical" href="https://construktr.ai/disconnect" />
      </Helmet>

      <main className="pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border p-8 sm:p-12"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border-light)",
            }}
          >
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
              >
                <Unlink className="w-8 h-8 text-red-400" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-4">
              Disconnect QuickBooks Integration
            </h1>

            <p className="text-[var(--color-text-secondary)] text-center leading-relaxed mb-8">
              Your QuickBooks sync will stop immediately. All previously synced data is preserved in both Construktr and QuickBooks — nothing is deleted.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">What Stops</h2>
                </div>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    Real-time invoice sync
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    Automatic expense tracking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    Payment reconciliation
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">What's Preserved</h2>
                </div>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    All existing invoices remain in both systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    Historical data stays intact
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    You can reconnect anytime
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://app.construktr.ai/settings/integrations"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-colors"
                style={{ backgroundColor: "#dc2626" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
              >
                Confirm Disconnect
              </a>
              <a
                href="https://app.construktr.ai/settings/integrations"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors"
                style={{
                  color: "var(--color-text-primary)",
                  border: "1px solid var(--color-border-light)",
                  backgroundColor: "transparent",
                }}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </main>

      <UnifiedFooter />
    </div>
  );
}
