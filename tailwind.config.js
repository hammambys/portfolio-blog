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
      keyframes: {
        bounceDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        'bounce-down': 'bounceDown 1s infinite',
        'shake': 'shake 0.5s ease-in-out infinite 3s', // shakes for 0.5s, repeats every 3s

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
