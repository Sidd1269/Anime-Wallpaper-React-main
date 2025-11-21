import lineClamp from '@tailwindcss/line-clamp';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        night: "#030712",
        "night-2": "#0f172a",
        "neon-pink": "#f472b6",
        "neon-purple": "#c084fc",
        "neon-cyan": "#22d3ee",
        "light-bg": "#cbd5e1",
        "light-bg-2": "#94a3b8",
      },
      boxShadow: {
        glow: "0 0 25px rgba(129, 140, 248, 0.45)",
      },
      backgroundImage: {
        "anime-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0)",
        "anime-grid-light":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.2) 1px, transparent 0)",
      },
    },
  },
  plugins: [
    lineClamp,
  ],
};
