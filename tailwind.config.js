/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        dark: {
          bg: '#050505',
          card: '#0c0c0c',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      }
    },
  },
  plugins: [],
}
