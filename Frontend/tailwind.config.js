/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "mealmatch-teal": "#4DB6AC", // Primary teal from Image 0
        "mealmatch-light-teal": "#A3D8D6", // Light teal from Image 1
        "mealmatch-offwhite": "#F5F5F5", // Background color
        "mealmatch-dark": "#1A2525", // Map section background
        "mealmatch-footer": "#2D2D2D", // Footer background
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Using Roboto as specified
      },
    },
  },
  plugins: [],
};