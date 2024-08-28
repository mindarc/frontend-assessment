/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Libre Franklin"', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '3.5': '3.5px',
      },
      colors: {
        'neutral-450': 'rgb(139, 139, 139)',
      }
    },
  },
plugins: [],
}