const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'header': '#292b2f',
     'title': '#2f3136',
     'content': '#36393f',
     'primary': '#6366F1',
     'primary-light': '#7F82F2',
     'white': '#FFFFFF'
    }),
    textColor: theme => theme('colors'),
     textColor: {
       'primary': '#FFFFFF',
       'primary-light': '#8D8F91',
     },
     placeholderColor: {
      'primary': '#36393f',
    },
    divideColor: {
      'primary': '#2f3136'
    }
  },
  variants: {
    extend: {
      // ...
      backgroundColor: ['active'],
      textColor: ['active']
    }
  },
  plugins: [],
}
