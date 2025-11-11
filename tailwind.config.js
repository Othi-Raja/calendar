/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // App router
    "./pages/**/*.{js,ts,jsx,tsx}",   // Pages router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),       // optional
    require('@tailwindcss/typography'), // optional
  ],
  darkMode: 'class', // or 'media' if you prefer
};
