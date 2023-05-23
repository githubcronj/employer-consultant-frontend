/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Conthrax: ['Conthrax'],
        Helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        ProductSans: ['Product Sans'],
      },
    },
  },
  plugins: [],
};
