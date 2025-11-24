/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Afacad', 'system-ui', 'sans-serif'],
        afacad: ['Afacad', 'sans-serif'],
        acorn: ['Acorn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
