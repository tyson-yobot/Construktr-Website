import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Play, ArrowRight } from "lucide-react";

// Component to showcase all button variants for testing
export default function ButtonShowcase() {
  return (
    <div className="p-8 space-y-8 bg-bg-surface">
      <h2 className="text-2xl font-bold text-ink-700">CONSTRUKTR Button System</h2>
      
      {/* Primary Buttons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-ink-700">Primary Buttons (Brand Blue Gradient)</h3>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">
            <Download className="w-4 h-4" />
            Download App
          </button>
          <button className="btn-primary btn-sm">
            <ArrowRight className="w-4 h-4" />
            Get Started
          </button>
          <button className="btn-primary btn-lg">
            <Play className="w-5 h-5" />
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-ink-700">Secondary Buttons (White/Outline)</h3>
        <div className="flex flex-wrap gap-4">
          <button className="btn-secondary">
            <Play className="w-4 h-4" />
            Book a Demo
          </button>
          <button className="btn-secondary btn-sm">
            Learn More
          </button>
          <button className="btn-secondary btn-lg">
            <ExternalLink className="w-5 h-5" />
            View Details
          </button>
        </div>
      </section>

      {/* Accent Buttons */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-ink-700">Accent Buttons (Yellow Pill)</h3>
        <div className="flex flex-wrap gap-4">
          <button className="btn-accent">
            <ExternalLink className="w-4 h-4" />
            Learn More
          </button>
          <button className="btn-accent btn-sm">
            Quick Info
          </button>
          <button className="btn-accent btn-lg">
            <ArrowRight className="w-5 h-5" />
            Explore Features
          </button>
        </div>
      </section>

      {/* Specifications */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-ink-700">Button Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-[var(--clr-surface)] rounded-lg border">
            <h4 className="font-semibold mb-2">Primary (.btn-primary)</h4>
            <ul className="space-y-1 text-muted">
              <li>• Min height: 44px</li>
              <li>• Font size: 16px</li>
              <li>• Padding: 12px 16px</li>
              <li>• Icon spacing: 8px</li>
              <li>• Full radius (9999px)</li>
              <li>• Brand blue gradient</li>
            </ul>
          </div>
          
          <div className="p-4 bg-[var(--clr-surface)] rounded-lg border">
            <h4 className="font-semibold mb-2">Secondary (.btn-secondary)</h4>
            <ul className="space-y-1 text-muted">
              <li>• Min height: 44px</li>
              <li>• Font size: 16px</li>
              <li>• Padding: 12px 16px</li>
              <li>• Icon spacing: 8px</li>
              <li>• Full radius (9999px)</li>
              <li>• White/outline style</li>
            </ul>
          </div>
          
          <div className="p-4 bg-[var(--clr-surface)] rounded-lg border">
            <h4 className="font-semibold mb-2">Accent (.btn-accent)</h4>
            <ul className="space-y-1 text-muted">
              <li>• Min height: 44px</li>
              <li>• Font size: 16px</li>
              <li>• Padding: 12px 16px</li>
              <li>• Icon spacing: 8px</li>
              <li>• Full radius (9999px)</li>
              <li>• Yellow pill style</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}