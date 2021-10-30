module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lightpurple: "#F5F7FF",
      black: "#000000",
      white: "#FFFFFF",
      grey: "#9D9D9D",
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      width: {
        102: "28rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
