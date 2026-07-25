/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#102033",
        cobalt: "#2647ff",
        ember: "#ff7a18",
        mint: "#dff9ef",
        violetInk: "#140829",
      },
      boxShadow: {
        glow: "0 18px 45px rgba(38, 71, 255, 0.24)",
        portrait: "0 24px 55px rgba(16, 32, 51, 0.18)",
      },
    },
  },
  plugins: [],
};
