module.exports = {
  purge: ["./index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-violet": "hsl(256, 26%, 20%)",
        "gray-blue": "hsl(216, 30%, 68%)",
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      zIndex: {
        "-10": "-10",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      body: ["Karla", "sans-serif"],
      heading: ["DM Serif Display", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
