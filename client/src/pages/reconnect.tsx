import { Helmet } from "react-helmet-async";
import { RefreshCw } from "lucide-react";
import UnifiedFooter from "@/components/unified-footer";

export default function Reconnect() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Helmet>
        <title>Reconnect QuickBooks — Construktr</title>
        <meta name="description" content="Reconnect your QuickBooks account to Construktr. Quick and easy — your existing data is not affected." />
        <link rel="canonical" href="https://construktr.ai/reconnect" />
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
                style={{ backgroundColor: "rgba(2, 67, 213, 0.1)" }}
              >
                <RefreshCw className="w-8 h-8" style={{ color: "#0243D5" }} />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-4">
              Reconnect Your QuickBooks Account
            </h1>

            <p className="text-[var(--color-text-secondary)] text-center leading-relaxed mb-8">
              Your QuickBooks connection has expired or needs to be refreshed. This takes about 10 seconds and won't affect your existing data.
            </p>

            <div className="mb-10">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                Common reasons for reconnection
              </h2>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#0243D5" }}
                  />
                  OAuth token expired
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#0243D5" }}
                  />
                  QuickBooks permissions were revoked
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#0243D5" }}
                  />
                  Company file was changed
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a
                href="https://app.construktr.ai/settings/integrations/quickbooks/connect"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-white transition-colors w-full sm:w-auto"
                style={{ backgroundColor: "#0243D5" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0235B0")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0243D5")}
              >
                Reconnect Now
              </a>
              <a
                href="https://app.construktr.ai"
                className="text-[var(--color-text-secondary)] underline transition-colors hover:text-[var(--color-text-primary)]"
              >
                Return to Dashboard
              </a>
            </div>
          </div>
        </div>
      </main>

      <UnifiedFooter />
    </div>
  );
}
