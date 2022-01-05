module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#eaeaea",
      secondary: "#eaeaea",
      borderColor: "#363A3D"
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
