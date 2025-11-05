/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',   // black
        secondary: '#ffffff', // white
        gray: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#d9d9d9',
          500: '#6b6b6b',
          700: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
