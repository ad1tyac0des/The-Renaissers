/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.js",
    "./css/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'ren-black': '#191919',
        'ren-white': '#F5F3EF',
        'ren-orange': '#FF6B00',
      }
    },
  },
  plugins: [],
}

