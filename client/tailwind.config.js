module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lightpurple: '#F5F7FF',
      black: '#000000',
      white: '#FFFFFF',
      grey: '#9D9D9D',
      novelblue: '#0B1539',
      darkpurple: '#5163C8',
      faintpurple: '#232C4C',
      textmain: '#C4C4C4',
      inputblue: '#498EF6',
      red: '#FF4B4B',
    },
    textColor: (theme) => theme('colors'),
    placeholderColor: {
      primary: '#498EF6',
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      width: {
        102: '28rem',
      },

      colors: {
        lightpurple: '#F5F7FF',
        black: '#000000',
        white: '#FFFFFF',
        grey: '#9D9D9D',
        novelblue: '#0B1539',
        darkpurple: '#5163C8',
        faintpurple: '#232C4C',
        textmain: '#C4C4C4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
