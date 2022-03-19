const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      white: '#FFFFFF',
      'darker-gray': '#0E0E0F',
      'dark-gray': '#131517',
      'medium-gray': '#26292D',
      'gray': '#626262',
      'blue': '#018ABE',
      'dark-blue': '#001254'
    }
  },
  plugins: [],
}
