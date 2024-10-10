/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "linear-gradient-1": "#79FAF3",
        "linear-gradient-2": "#3C92F9",
        "linear-gradient-3": "#0F3CAE",
        "custom-dark-blue": "#000F33",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
