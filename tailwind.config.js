/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/homepage.html',
  './public/product.html',
  './public/mycart.html',
  './public/profile.html'],
  theme: {
    extend: {
      colors: {
        'nav' : '#0C134F',
        'body' : '#1D267D',
        'drop' : '#1D387D',
        'btn' : '#2F58CD',
        'btn2': '#2f33cd',
        'star' : '#FFD95A',
      }
    },
  },
  plugins: [],
}

