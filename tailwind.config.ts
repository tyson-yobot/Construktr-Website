import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'xl': 'var(--radius-xl)',
        'lg': 'var(--radius-lg)',
        md: "calc(var(--radius-lg) - 4px)",
        sm: "calc(var(--radius-lg) - 8px)",
      },
      boxShadow: {
        'device': 'var(--shadow-device)',
        'card': 'var(--shadow-card)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // CONSTRUKTR Design System Colors (v2 - Design Tokens)
        'brand': {
          50: 'var(--color-brand-50)',
          100: 'var(--color-brand-100)',
          200: 'var(--color-brand-200)',
          300: 'var(--color-brand-300)',
          400: 'var(--color-brand-400)',
          500: 'var(--color-brand-500)',
          600: 'var(--color-brand-600)',
          700: 'var(--color-brand-700)',
          800: 'var(--color-brand-800)',
          900: 'var(--color-brand-900)',
          950: 'var(--color-brand-950)',
          // Legacy compatibility
          blue: 'var(--color-brand-500)',
          'blue-700': 'var(--color-brand-600)',
          yellow: 'var(--color-primary)',
        },
        'construktr': {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          elevated: 'var(--color-elevated)',
          border: 'var(--color-border)',
          'border-light': 'var(--color-border-light)',
          'text-primary': 'var(--color-text-primary)',
          'text-secondary': 'var(--color-text-secondary)',
          'text-tertiary': 'var(--color-text-tertiary)',
          primary: 'var(--color-primary)',
          'primary-dark': 'var(--color-primary-dark)',
          'primary-light': 'var(--color-primary-light)',
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)',
        },
        'bg': {
          ink: 'var(--bg-ink)',
          'ink-2': 'var(--bg-ink-2)',
          surface: 'var(--bg-surface)',
        },
        'text': {
          strong: 'var(--text-strong)',
          content: 'var(--text)',
          'ink-700': 'var(--ink-700)',
          muted: 'var(--muted)',
        },
        'success': 'var(--ok-green)',
        'danger': 'var(--danger)',
        // Legacy compatibility
        'electric-blue': 'var(--brand-blue)',
        'accent-silver': 'var(--muted)',
        // Remove hardcoded charcoal colors - use design tokens instead
        // 'charcoal': {
        //   'dark': 'var(--color-bg)',
        //   'medium': 'var(--color-surface)',
        //   'light': 'var(--color-elevated)',
        // },
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
