import { ReactNode } from "react";

interface MockupCaptionPairProps {
  mockupId: string;
  mockup: ReactNode;
  caption: string;
  className?: string;
}

/**
 * Enforces mockup-caption alignment system
 * Every caption must be tied to a specific screenshot/loop by ID
 */
export function MockupCaptionPair({ mockupId, mockup, caption, className = "" }: MockupCaptionPairProps) {
  return (
    <div 
      className={`mockup-caption-pair ${className}`}
      data-mockup-id={mockupId}
      data-testid={`mockup-${mockupId}`}
    >
      <div className="mockup">
        {mockup}
      </div>
      <div className="caption">
        {caption}
      </div>
    </div>
  );
}

/**
 * Registry of approved mockup-caption pairs
 * Prevents random screens - hard fail protection
 */
export const MOCKUP_REGISTRY = {
  // Quote Demo
  "quote-home": "Main dashboard with quote generation interface",
  "quote-30sec": "30-second quote generation in progress",
  "quote-complete": "Completed quote with pricing breakdown",
  
  // Schedule Demo  
  "schedule-calendar": "Smart scheduling calendar with AI optimization",
  "schedule-route": "Route optimization showing 2.5 hour daily savings",
  "schedule-sync": "Real-time calendar sync preventing double-bookings",
  
  // Payment Demo
  "payment-flow": "Instant payment processing interface",
  "payment-same-day": "Same-day deposit confirmation screen",
  "payment-dashboard": "Payment analytics and transaction history",
  
  // General App
  "app-home": "CONSTRUKTR main dashboard overview",
  "app-blue-ui": "Blue UI theme matching brand standards",
} as const;

export type MockupId = keyof typeof MOCKUP_REGISTRY;

/**
 * Validates mockup ID against registry
 * Throws error for unregistered mockups
 */
export function validateMockupId(id: string): asserts id is MockupId {
  if (!(id in MOCKUP_REGISTRY)) {
    throw new Error(`Mockup ID "${id}" not found in registry. Random screens are not allowed.`);
  }
}

/**
 * Safe wrapper for mockup-caption pairs with validation
 */
export function SafeMockupCaptionPair({ mockupId, mockup, className }: Omit<MockupCaptionPairProps, 'caption'>) {
  validateMockupId(mockupId);
  const caption = MOCKUP_REGISTRY[mockupId];
  
  return (
    <MockupCaptionPair 
      mockupId={mockupId}
      mockup={mockup}
      caption={caption}
      className={className}
    />
  );
}