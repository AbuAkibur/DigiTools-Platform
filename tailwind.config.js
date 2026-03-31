/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#7c3aed",
          mid: "#8b5cf6",
          light: "#ede9fe",
          dark: "#5b21b6",
        },
      },
    },
  },
  plugins: [],
};
