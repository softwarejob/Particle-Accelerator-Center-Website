/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#3b82f6",
        dark: {
          light: "#5A7184",
          hard: "#0D2436",
          soft: "#183B56",

        },
      },
      fontFamily:{
        opensans:["Open Sans", "sans-serif"],
        roboto:["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

