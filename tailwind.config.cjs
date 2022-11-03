/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      // primary colors
      primaryRed: "#f65351",
      primaryBlue: " #0a317b",

      // neutral colors
      nWhite: "#ffffff",
      nGrayishBlue100: "#f7fafd",
      nGrayishBlue200: "#e5effa",
      nGrayishBlue300: "#dde7ee",
      nGrayishBlue400: "#939dae",
      nGrayishBlue500: "#5e6778",
      nVeryDarkBlue: "#1c202b",
    },
    extend: {
      fontFamily: {
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      width: {
        vw: "90vw",

        fixed: "450px",

        mFixed: "1440px",
      },
      height: {
        vh: "70vw",
      },
    },
  },
  plugins: [],
};
