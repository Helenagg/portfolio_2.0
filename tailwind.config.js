module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'color-change': 'color-change 2s infinite',
        'color-change-outside': 'color-change 2s infinite',
      },
      fontFamily: {
        'moirai': ['Moirai One', 'system-ui']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
