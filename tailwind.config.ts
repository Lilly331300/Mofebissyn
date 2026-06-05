import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: { DEFAULT: "#0c3c23", dark: "#082b19", light: "#145c36" },
        pine: "#00311F",
        lime: { glow: "#AFE607", dark: "#8ab805" },
        ivory: { DEFAULT: "#FAFFF2", muted: "#DDE8D2" },
      },
      fontFamily: {
        heading: ["var(--font-bricolage)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 28px 90px rgba(0,0,0,.42)",
        lime: "0 0 55px rgba(175,230,7,.28)",
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at 50% 0%, rgba(175,230,7,.24), transparent 34%), radial-gradient(circle at 15% 30%, rgba(255,255,255,.08), transparent 28%), linear-gradient(135deg, #00311F, #0c3c23)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        drift: {
          "0%": { transform: "translateX(-8%)" },
          "100%": { transform: "translateX(8%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        drift: "drift 11s ease-in-out infinite alternate",
        shimmer: "shimmer 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;