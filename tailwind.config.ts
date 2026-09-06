import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#06101E",
          900: "#0B1C33",
          800: "#132D52",
          700: "#1D4275",
          600: "#2B5E9E",
          100: "#EAF1F9",
          50: "#F5F8FC",
        },
        teal: {
          900: "#134E48",
          700: "#0F766E",
          600: "#0D9488",
          500: "#14B8A6",
          400: "#2DD4BF",
          100: "#CCFBF1",
          50: "#F0FDFA",
        },
        gold: {
          700: "#9E7620",
          600: "#B88A28",
          500: "#C99A36",
          400: "#DBAF53",
          100: "#F8F2E2",
          50: "#FCFAF4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-merriweather)", "Georgia", "serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        "radar-ping": {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out 2s infinite",
        shimmer: "shimmer 2.5s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "radar-ping": "radar-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
