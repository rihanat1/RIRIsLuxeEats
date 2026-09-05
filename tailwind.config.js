/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("/src/assets/HomeImages/heroImg.png")',
        heroNew:"url('/src/assets/HomeImages/newHeroImg.png')"
      },
      colors:{
        primary:"#f2ca50",
        secondary:"#c9c6c5"
      }
    },
  },
  plugins: [],
}