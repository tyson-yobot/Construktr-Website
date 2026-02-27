import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy } from "react";
import Home from "@/pages/home";
import StateTemplate from "@/pages/state-template";
import TradeTemplate from "@/pages/trade-template";
import Features from "@/pages/features";
import Pricing from "@/pages/pricing";
import Demos from "@/pages/demos";
import GetApp from "@/pages/get";
import About from "@/pages/about";
import Support from "@/pages/support";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import Investors from "@/pages/investors";
import Admin from "@/pages/admin";
import BlogIndex from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import NotFound from "@/pages/not-found";
import PlumbingLanding from "@/pages/plumbing";
import HVACLanding from "@/pages/hvac";
import ElectricalLanding from "@/pages/electrical";
import HandymanLanding from "@/pages/handyman";
import RoofingLanding from "@/pages/roofing";
import RetargetingPixels from "@/components/retargeting-pixels";
import UnifiedHeader from "@/components/unified-header";
import DarkBrandEnforcer from "@/components/dark-brand-enforcer";
import PerformanceOptimizerEnhanced from "@/components/performance-optimizer-enhanced";
import AccessibilityEnhancements from "@/components/accessibility-enhancements";
import AccessibilityTest from "@/components/accessibility-test";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/state/:state" component={StateTemplate} />
      <Route path="/trade/:trade" component={TradeTemplate} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/demos" component={Demos} />
      <Route path="/get" component={GetApp} />
      <Route path="/about" component={About} />
      <Route path="/support" component={Support} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/investors" component={Investors} />
      <Route path="/admin" component={Admin} />
      
      {/* Trade-specific SEO landing pages */}
      <Route path="/plumbing" component={PlumbingLanding} />
      <Route path="/hvac" component={HVACLanding} />
      <Route path="/electrical" component={ElectricalLanding} />
      <Route path="/handyman" component={HandymanLanding} />
      <Route path="/roofing" component={RoofingLanding} />
      
      {/* Additional trade landing pages */}
      <Route path="/trades/plumber" component={lazy(() => import("./pages/trades/plumber"))} />
      <Route path="/trades/hvac" component={lazy(() => import("./pages/trades/hvac"))} />
      <Route path="/trades/electrical" component={lazy(() => import("./pages/trades/electrical"))} />
      <Route path="/trades/roofing" component={lazy(() => import("./pages/trades/roofing"))} />
      <Route path="/trades/landscaping" component={lazy(() => import("./pages/trades/landscaping"))} />
      
      {/* State and City SEO landing pages */}
      <Route path="/states/:state" component={lazy(() => import("./pages/states"))} />
      <Route path="/states/:state/:city" component={lazy(() => import("./pages/city"))} />
      <Route path="/locations" component={lazy(() => import("./pages/state-trade-hub"))} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
        <div className="flex min-h-screen flex-col" style={{ background: 'var(--gradient-page)' }}>
          <AccessibilityEnhancements />
          <DarkBrandEnforcer />
          <PerformanceOptimizerEnhanced />
          <UnifiedHeader />
          <main className="pt-[80px] flex-1">
            <Router />
          </main>
        </div>
        <Toaster />
        <RetargetingPixels />
        {process.env.NODE_ENV === 'development' && <AccessibilityTest />}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
