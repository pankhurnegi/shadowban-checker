/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f8',
          500: '#ec4899',
          700: '#be185d',
        },
      },
    },
  },
  plugins: [],
};

