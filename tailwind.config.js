const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    extend: {
      fontFamily: {
        stratos: ['stratos', 'cursive'],
        'stratos-light': ['stratos-light', 'cursive'],
        'stratos-extrabold': ['stratos-extrabold', 'cursive'],
      },
      screens: {
        '3xl': '2000px',
      },
      colors: {
        primary: {
          light: '#00c7b6',
          DEFAULT: '#20B2AA',
          accent: '#009488',
          900: '#1ca099',
          800: '#198e88',
          700: '#167c76',
          600: '#136a66',
          500: '#20b2aa',
          400: '#36b9b2',
          300: '#4cc1bb',
          200: '#62c9c3',
          100: '#d2efee',
          50: '#e8f7f6',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
