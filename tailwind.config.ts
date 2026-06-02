import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#faf8ff",
        surface: "#faf8ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f3ff",
        "surface-container": "#eaedff",
        "surface-container-high": "#e2e7ff",
        "surface-container-highest": "#dae2fd",
        "on-surface": "#131b2e",
        "on-surface-variant": "#434655",
        "outline-variant": "#c3c6d7",
        outline: "#737686",
        primary: "#004ac6",
        "primary-container": "#2563eb",
        "on-primary": "#ffffff",
        "primary-fixed": "#dbe1ff",
        "on-primary-fixed": "#00174b",
        secondary: "#006c49",
        "secondary-container": "#6cf8bb",
        "on-secondary-container": "#00714d",
        tertiary: "#784b00",
        "tertiary-container": "#996100",
        "on-tertiary-container": "#ffeedd",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "inverse-surface": "#283044",
        "inverse-on-surface": "#eef0ff",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans Devanagari", "Noto Sans Bengali", "Noto Sans Tamil", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(19, 27, 46, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
