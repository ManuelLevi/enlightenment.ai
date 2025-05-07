/** @type {import('tailwindcss').Config} */
module.exports = {
  // Hugo specific content paths
  content: [
    "../../layouts/**/*.html",
    "../../content/**/*.{html,md}",
    "../layouts/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'], // if you want to use it as a specific class
      },
    },
  },
  plugins: [],
};
