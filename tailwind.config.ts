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
    },
  },
  plugins: [],
};
export default config;
