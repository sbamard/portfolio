import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        heartbeat: "heartbeat 1s ease-in-out",
        "fade-in-out": "fadeInOut 4.1s ease-in-out",
        moveRight: "moveRight 2s linear infinite",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        moveRight: {
          "0%": { transform: "translateX(0)" },
          '100%': { transform: 'translateX(calc(100vw))' },
        },
      },
      colors: {
        pasTropBlanc: "#f6f7f5",
        bluePill: "#EBFAFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
