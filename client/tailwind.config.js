module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: (theme) => theme('colors'),
    placeholderColor: {
      primary: '#498EF6',
      secondary: '#FFF',
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
        inputblue: '#498EF6',
        red: '#FF4B4B',
        lime: 'rgba(131, 205, 160, 0.38)',
        darklime: '#53B460',
        postgrey: '#8E8E8E',
        inputpurple: 'rgba(255, 255, 255, 0.1)',
        reports: 'rgba(73, 142, 247, 0.1);',
        myposts: '#EEFDF3',
        patient: '#FFF6F6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
