module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "2/3": "66.666667%",
      },
    },
    colors: {
      carafe: "#523A28", // darkest
      brown: {
        200: "#886144",
        DEFAULT: "#A47551",
      },
      tan: "#D0B49F",
      sand_dollar: "#E4D4C8", // lightest
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
