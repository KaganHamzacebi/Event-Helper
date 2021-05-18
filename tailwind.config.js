const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'home': '#1b1b1b',
        'header': '#292b2f',
        'title': '#2f3136',
        'content': '#36393f',
        'primary': '#6366F1',
        'primary-light': '#7F82F2',
        'white': '#FFFFFF',
        'danger': '#e3342f'
      },
      textColor: {
        'primary': '#FFFFFF',
        'primary-light': '#8D8F91',
        'danger': '#e3342f',
        'title': '#2f3136',
      },
      placeholderColor: {
        'primary': '#ffffff',
      },
      divideColor: {
        'primary': '#2f3136'
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
        'spacing': 'margin, padding',
      },
      maxHeight: {
        'bigboi': '9999rem'
      }
    }
  },
  variants: {
    extend: {
      // ...
      backgroundColor: ['active', 'checked'],
      borderColor: ['checked'],
      textColor: ['active'],
      animation: ['hover', 'focus'],
    }
  },
  plugins: [],
}
