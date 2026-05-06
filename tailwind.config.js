/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_site/*.html',
    './_site/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'admin-first': '#ac3f14',
        'admin-second': '#cf7954',
        'admin-third': '#f3d3c1',
        'business-first': '#0b5d66',
        'business-second': '#65999e',
        'business-third': '#e5eded',
        'ny-accent-first': '#f4a71c',
        'ny-accent-second': '#f3dd6d',
        'ny-links': '#007ac2',
        'ny-dark': '#62666a',
        'ny-mid': '#d0d0ce',
        'ny-light': '#ededed',
        'ny-gold': '#face00',
        'ny-blue': '#154973',
        'ny-blue-second': '#457AA5',
        'primary-core-blue': '#154973',
        'secondary-core-blue': '#457AA5',
        'link-blue': '#004DD1',
        'tertiary-core-blue': '#EFF6FB',
        'quaternary-blue': '#007AC2',
        'core-accent-yellow': '#FACE00',
        'yellow-alert': '#FFE396',
        'black': '#000000',
        'darkest-gray': '#242424',
        'dark-gray': '#62666A',
        'mid-gray': '#D0D0CE',
        'light-gray': '#EDEDED',
        'white': '#FFFFFF',
        'dark-red-alert': '#B32E31',
        'light-red-alert': '#FEC3C3',
        'success-green': '#329d08',
        'warning-orange': '#d4820c'
      }
    },
  },
  plugins: [],
}

