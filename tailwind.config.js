/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  extend: {},
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      titule: [
        "22px",
        {
          lineHeight: "normal",
          fontWeight: "600",
        },
      ],
      body1: [
        "14px",
        {
          lineHeight: "normal",
          fontWeight: "500",
        },
      ],
      body2: [
        "12px",
        {
          lineHeight: "normal",
          fontWeight: "400",
        },
      ],
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
