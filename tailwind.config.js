/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      colors: {
        primary: "#d3222c ",
        second: "#0e0e4f",
        third: "#000000",
        four: "#888888",
        five: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
