/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brutal: {
          bg: "#f6f1dd",
          surface: "#ffffff",
          text: "#000000",
          muted: "rgba(0, 0, 0, 0.8)",
          border: "#000000",
          accent: "#4f46e5",
          "accent-soft": "#c7d2fe",
          badge: "#facc15",
        },
      },
    },
  },
  plugins: [],
};
