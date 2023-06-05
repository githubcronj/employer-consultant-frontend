/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./pages/**/*.{html,js}', './Components/**/*.{html,js}'],
  content: ['./pages/**/*.{html,js}', './Components/**/*.{html,js}'],
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
