module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'screen-75': '75vh',
        'screen-50': '50vh',
        'screen-25': '25vh',
      },
      width: {
        'screen-25': '25vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
