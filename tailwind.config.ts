import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#0a0a12",
        midnight: "#0f111c",
        neon: "#7c5cff",
        neonBlue: "#57c9ff",
        neonPink: "#ff4fd8",
        glow: "#9d7bff",
      },
      boxShadow: {
        neon: "0 0 30px rgba(124, 92, 255, 0.5)",
        glass: "0 30px 60px rgba(3, 7, 20, 0.45)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(124, 92, 255, 0.35), transparent 55%), radial-gradient(circle at 80% 10%, rgba(87, 201, 255, 0.25), transparent 50%), radial-gradient(circle at 50% 90%, rgba(255, 79, 216, 0.2), transparent 60%)",
        "grid": "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
