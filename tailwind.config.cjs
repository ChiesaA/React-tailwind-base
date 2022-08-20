/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sanf-serif'],
      },
      colors:{
        primary: '#16405B'
      }
    },
  },
  plugins: [],
}