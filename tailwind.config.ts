import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#03050A", bg2: "#080D16", card: "#0C1422", brand: "#087BFF", bright: "#006AFF",
        neon: "#00D9FF", ice: "#8FEAFF", muted: "#8898B0", line: "#1B2B42",
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], display: ["var(--font-display)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
