import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#000B19",
          800: "#0A1628",
          600: "#1F2937",
          400: "#6B7785",
          200: "#D1D5DB",
          100: "#E5E7EB",
          50: "#F4F5F7",
        },
        neo: {
          DEFAULT: "#018BFF",
          dark: "#0066CC",
          light: "#E6F4FF",
        },
        accent: {
          coral: "#FF6B6B",
          amber: "#F59E0B",
          green: "#10B981",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
