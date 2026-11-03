import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "#F8F8F6",
          darkBg: "#0F1011",
          card: "#FFFFFF",
          darkCard: "#16181A",
          text: "#171717",
          darkText: "#EAEAEA",
          muted: "#777777",
          darkMuted: "#9CA3AF",
          accent: "#526B83",
          accentHover: "#415568",
          accentLight: "#EBF0F5",
          border: "#E5E5E5",
          darkBorder: "#272A2E",
          tagBg: "#EFEFEB",
          darkTagBg: "#1F2327",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        editorial: "-0.02em",
        tighter: "-0.035em",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
