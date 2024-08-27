/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: { 
    screens: {
      xs: "320px",
      sm: "430px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    // Type scale based on Minor/Third, 16px base 
    fontSize: {
      xs: "0.694rem",
      sm: "0.833rem",
      base: "1rem",
      lg: "1.2rem",
      xl: "1.44rem",
      "2xl": "1.728rem",
      "3xl": "2.074rem",
      "4xl": "2.488rem",
      "5xl": "3.052rem",
    },

    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'] 
      }
      },
}, 
  plugins: [],
}

