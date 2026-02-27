// CONSTRUKTR Design System - Single Source of Truth
// Ensures visual consistency between website and mobile app

export const designSystem = {
  // Core Brand Colors - Match Mobile App Exactly
  colors: {
    primary: {
      blue: '#0243fd',        // Electric Blue - Primary CTA
      navy: '#1a1f36',        // Dark Navy - Headers/Text
      yellow: '#fbbf24',      // Warning/Accent Yellow
      success: '#10b981',     // Success States
      error: '#ef4444',       // Error States
    },
    neutral: {
      white: '#ffffff',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      }
    },
    background: {
      light: '#ffffff',
      subtle: '#f9fafb',
      muted: '#f3f4f6',
    }
  },

  // Typography - Match Mobile App
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, sans-serif',
      display: 'Satoshi, Inter, system-ui, sans-serif',
    },
    fontSize: {
      // Mobile-first sizing
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900',
    }
  },

  // Component Sizing - Standardized
  components: {
    button: {
      height: {
        sm: '32px',     // Small buttons
        md: '40px',     // Default buttons
        lg: '48px',     // Primary CTAs
        xl: '52px',     // Hero CTAs
      },
      padding: {
        sm: '8px 12px',
        md: '10px 16px',
        lg: '12px 24px',
        xl: '14px 32px',
      },
      radius: {
        sm: '6px',
        md: '8px',
        lg: '10px',
        full: '9999px',
      }
    },
    chip: {
      height: {
        sm: '28px',
        md: '32px',
      },
      padding: '6px 12px',
      radius: '9999px', // Always pill-shaped
    },
    card: {
      radius: '20px',   // Consistent card radius
      padding: {
        sm: '16px',
        md: '24px',
        lg: '32px',
      },
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    phone: {
      minHeight: '420px', // Minimum phone mockup height
      radius: '28px',     // Phone device radius
      innerRadius: '24px', // Screen radius
    }
  },

  // Spacing Scale - 8px Grid
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
  },

  // Animation & Transitions
  motion: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }
  },

  // Breakpoints - Mobile First
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
};

// CSS Custom Properties Generator
export const generateCSSVariables = () => {
  return `
    :root {
      /* Brand Colors */
      --color-primary-blue: ${designSystem.colors.primary.blue};
      --color-primary-navy: ${designSystem.colors.primary.navy};
      --color-primary-yellow: ${designSystem.colors.primary.yellow};
      --color-success: ${designSystem.colors.primary.success};
      --color-error: ${designSystem.colors.primary.error};
      
      /* Neutral Colors */
      --color-white: ${designSystem.colors.neutral.white};
      --color-gray-50: ${designSystem.colors.neutral.gray[50]};
      --color-gray-100: ${designSystem.colors.neutral.gray[100]};
      --color-gray-200: ${designSystem.colors.neutral.gray[200]};
      --color-gray-300: ${designSystem.colors.neutral.gray[300]};
      --color-gray-400: ${designSystem.colors.neutral.gray[400]};
      --color-gray-500: ${designSystem.colors.neutral.gray[500]};
      --color-gray-600: ${designSystem.colors.neutral.gray[600]};
      --color-gray-700: ${designSystem.colors.neutral.gray[700]};
      --color-gray-800: ${designSystem.colors.neutral.gray[800]};
      --color-gray-900: ${designSystem.colors.neutral.gray[900]};
      
      /* Component Sizing */
      --button-height-sm: ${designSystem.components.button.height.sm};
      --button-height-md: ${designSystem.components.button.height.md};
      --button-height-lg: ${designSystem.components.button.height.lg};
      --button-height-xl: ${designSystem.components.button.height.xl};
      
      --chip-height-sm: ${designSystem.components.chip.height.sm};
      --chip-height-md: ${designSystem.components.chip.height.md};
      
      --card-radius: ${designSystem.components.card.radius};
      --phone-radius: ${designSystem.components.phone.radius};
      --phone-inner-radius: ${designSystem.components.phone.innerRadius};
      
      /* Typography */
      --font-primary: ${designSystem.typography.fontFamily.primary};
      --font-display: ${designSystem.typography.fontFamily.display};
      
      /* Motion */
      --duration-fast: ${designSystem.motion.duration.fast};
      --duration-normal: ${designSystem.motion.duration.normal};
      --duration-slow: ${designSystem.motion.duration.slow};
      --easing-default: ${designSystem.motion.easing.default};
    }
  `;
};

// Utility classes for consistent styling
export const utilityClasses = {
  // Standardized button classes
  button: {
    primary: 'bg-primary-blue hover:bg-blue-600 text-white font-semibold transition-all duration-300',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold transition-all duration-300',
    outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-semibold transition-all duration-300',
    ghost: 'text-primary-blue hover:bg-blue-50 font-semibold transition-all duration-300',
  },
  
  // Standardized chip classes
  chip: {
    default: 'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200',
    active: 'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary-blue text-white hover:bg-blue-600 transition-colors duration-200',
  },
  
  // Standardized card classes
  card: {
    default: 'bg-white rounded-[20px] shadow-sm border border-gray-200 p-6',
    elevated: 'bg-white rounded-[20px] shadow-lg border border-gray-200 p-6',
    interactive: 'bg-white rounded-[20px] shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300',
  }
};