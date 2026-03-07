import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface Lead {
  id: string;
  email: string;
  name?: string;
  company?: string;
  source: string;
  message?: string;
  createdAt: Date;
  processed: boolean;
}

interface Payment {
  id: string;
  email: string;
  amount: string;
  status: string;
  plan?: string;
  stripePaymentId?: string;
  createdAt: Date;
}

interface Analytics {
  leads: {
    total: number;
    bySource: Record<string, number>;
    processed: number;
    recent: number;
  };
  payments: {
    total: number;
    revenue: number;
    byPlan: Record<string, number>;
    recentRevenue: number;
  };
}

export default function Admin() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [testLead, setTestLead] = useState({
    email: "",
    name: "",
    company: "",
    message: "",
    source: "admin-test"
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const [leadsRes, paymentsRes] = await Promise.all([
        apiRequest("GET", "/api/analytics/leads"),
        apiRequest("GET", "/api/analytics/payments")
      ]);

      setAnalytics({
        leads: await leadsRes.json(),
        payments: await paymentsRes.json()
      });
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
    }
  };

  const testLeadCreation = async () => {
    if (!testLead.email) {
      toast({
        title: "Error",
        description: "Email is required",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const response = await apiRequest("POST", "/api/leads", testLead);
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Success",
          description: "Test lead created! Check your Slack for notification.",
        });
        setTestLead({ email: "", name: "", company: "", message: "", source: "admin-test" });
        fetchAnalytics();
      } else {
        throw new Error(result.error || "Failed to create lead");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create test lead",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const testStripeCheckout = async () => {
    try {
      const response = await apiRequest("POST", "/api/create-checkout", {
        plan: "pro",
        email: testLead.email || "test@example.com"
      });
      const result = await response.json();

      if (result.url) {
        window.open(result.url, '_blank');
        toast({
          title: "Success",
          description: "Stripe checkout session created! Opening in new tab.",
        });
      } else {
        throw new Error(result.error || "Failed to create checkout session");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create checkout session",
        variant: "destructive"
      });
    }
  };

  const testPDFGeneration = async () => {
    try {
      const quoteData = {
        customerName: testLead.name || "Test Customer",
        customerEmail: testLead.email || "test@example.com",
        customerCompany: testLead.company || "Test Company",
        items: [
          { description: "CONSTRUKTR Pro Plan", quantity: 1, rate: 49, amount: 49 }
        ],
        total: 49,
        quoteNumber: "Q-" + Date.now(),
        date: new Date().toLocaleDateString()
      };

      const response = await fetch("/api/generate-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quoteData)
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'construktr-quote.pdf';
        a.click();
        window.URL.revokeObjectURL(url);

        toast({
          title: "Success",
          description: "Quote PDF generated and downloaded!",
        });
      } else {
        throw new Error("Failed to generate PDF");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate PDF",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            CONSTRUKTR Admin Dashboard
          </h1>
          <p className="text-slate-300">
            Backend automation system with Stripe, Slack, webhooks, and analytics
          </p>
        </div>

        {/* Analytics Cards */}
        {analytics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-200">Total Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-400">
                  {analytics.leads.total}
                </div>
                <p className="text-sm text-slate-400">
                  {analytics.leads.recent} this week
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-200">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400">
                  ${analytics.payments.revenue.toFixed(2)}
                </div>
                <p className="text-sm text-slate-400">
                  ${analytics.payments.recentRevenue.toFixed(2)} this month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-200">Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-400">
                  {analytics.payments.total}
                </div>
                <p className="text-sm text-slate-400">
                  Total transactions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-200">Processed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-400">
                  {analytics.leads.processed}
                </div>
                <p className="text-sm text-slate-400">
                  Leads processed
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Test Controls */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-200">Test Backend Automation</CardTitle>
            <CardDescription className="text-slate-400">
              Test the complete automation workflow including Slack notifications, webhooks, and PDF generation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={testLead.email}
                  onChange={(e) => setTestLead({ ...testLead, email: e.target.value })}
                  placeholder="test@example.com"
                  className="bg-slate-700 border-slate-600 text-slate-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-200">Name</Label>
                <Input
                  id="name"
                  value={testLead.name}
                  onChange={(e) => setTestLead({ ...testLead, name: e.target.value })}
                  placeholder="John Doe"
                  className="bg-slate-700 border-slate-600 text-slate-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-slate-200">Company</Label>
                <Input
                  id="company"
                  value={testLead.company}
                  onChange={(e) => setTestLead({ ...testLead, company: e.target.value })}
                  placeholder="Acme Corp"
                  className="bg-slate-700 border-slate-600 text-slate-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-200">Message</Label>
                <Textarea
                  id="message"
                  value={testLead.message}
                  onChange={(e) => setTestLead({ ...testLead, message: e.target.value })}
                  placeholder="Test message from admin dashboard"
                  className="bg-slate-700 border-slate-600 text-slate-200"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={testLeadCreation}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {loading ? "Creating..." : "Test Lead Creation"}
              </Button>

              <Button
                onClick={testStripeCheckout}
                variant="outline"
                className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
              >
                Test Stripe Checkout
              </Button>

              <Button
                onClick={testPDFGeneration}
                variant="outline"
                className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
              >
                Generate Test PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Lead Sources */}
        {analytics && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Lead Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(analytics.leads.bySource).map(([source, count]) => (
                    <div key={source} className="flex justify-between items-center">
                      <span className="text-slate-300 capitalize">{source}</span>
                      <span className="text-blue-400 font-semibold">{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200">Plans Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(analytics.payments.byPlan).map(([plan, count]) => (
                    <div key={plan} className="flex justify-between items-center">
                      <span className="text-slate-300 capitalize">{plan}</span>
                      <span className="text-green-400 font-semibold">{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* System Status */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-200">System Features</CardTitle>
            <CardDescription className="text-slate-400">
              Backend automation capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-300">Stripe Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-300">Slack Notifications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-300">PDF Generation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-300">Webhook Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-300">Analytics Tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-300">Lead Management</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}