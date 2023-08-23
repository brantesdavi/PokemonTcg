/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        inputGrey: "#EAEAEA",
        primaryRed: "#EE2121",
        borderPrimaryRed: "#FF7474"
      },
      padding:{
        '5': '5px'
      }
    },
  },
  plugins: [],
}

