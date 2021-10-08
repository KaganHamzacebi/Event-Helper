const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                'home': '#1b1b1b',
                'home-light': '#272727',
                'header': '#292b2f',
                'title': '#2f3136',
                'content': '#36393f',
                'primary': '#6366F1',
                'primary-light': '#7F82F2',
                'white': '#FFFFFF',
                'danger': '#e3342f',
                'dc_blue': '#5865F2',
                'dc_green': '#57F287',
                'dc_yellow': '#FEE75C',
                'dc_fuchsia': '#EB459E',
                'dc_red': '#ED4245',
                'dc_white': '#FFFFFF',
                'dc_black': '#000000'
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
            borderRadius: ['first', 'last'],
        }
    },
    plugins: [],
}
