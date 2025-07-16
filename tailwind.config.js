/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'Amiri', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'Cairo', 'sans-serif']
      }
    },
  },
  plugins: [],
}