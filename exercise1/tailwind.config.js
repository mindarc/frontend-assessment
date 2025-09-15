/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {     
      screens: {
      'xs': '480px', // or any value you prefer
    },},
  },
  plugins: [],
}
