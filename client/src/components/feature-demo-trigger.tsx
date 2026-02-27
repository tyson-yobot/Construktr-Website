import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import DemoOverlay from "@/components/demo-overlay";

interface FeatureDemoTriggerProps {
  title: string;
  description: string;
  steps: Array<{
    title: string;
    description: string;
    highlight?: string;
  }>;
  storageKey: string;
  buttonText?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
}

export default function FeatureDemoTrigger({
  title,
  description,
  steps,
  storageKey,
  buttonText = "Try This Feature",
  variant = "outline",
  size = "default",
  className = ""
}: FeatureDemoTriggerProps) {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowDemo(true)}
        variant={variant}
        size={size}
        className={`${className} inline-flex items-center gap-2`}
      >
        <HelpCircle className="w-4 h-4" />
        {buttonText}
      </Button>

      <DemoOverlay
        isOpen={showDemo}
        onClose={() => setShowDemo(false)}
        title={title}
        description={description}
        steps={steps}
        storageKey={storageKey}
      />
    </>
  );
}