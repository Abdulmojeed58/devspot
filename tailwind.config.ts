import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
//   darkMode: ["class"],
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
        fontFamily: {
            inter: ["var(--font-inter)"],
            roboto: ["var(--font-roboto)"],
            raleway: ["var(--font-raleway)"],
        },
        backgroundImage: {
            'color-gradient-purple-blue': 'linear-gradient(270deg, #9667FA 0%, #4075FF 100%)',
            banner: "url('/images/banner.png')",
        },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "background-gradient": "(var(--background-gradient))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom DevSpot colors
        dev: {
          bg: "hsl(var(--dev-bg))",
          card: "hsl(var(--dev-card))",
          "card-hover": "hsl(var(--dev-card-hover))",
          text: "hsl(var(--dev-text))",
          "text-muted": "hsl(var(--dev-text-muted))",
          border: "hsl(var(--dev-border))",
          primary: "hsl(var(--dev-primary))",
          success: "hsl(var(--dev-success))",
          warning: "hsl(var(--dev-warning))",
          danger: "hsl(var(--dev-danger))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [animate],
} satisfies Config;
