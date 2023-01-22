/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {

  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        productsans: "productsans",
      }
    },
    colors: {
      teal: colors.teal,
      white: colors.white,
      cyan: colors.cyan,
      gray: colors.gray,
      'my-text-light': '#0b57d0',
      'my-text-dark': '#a8c7fa',
      'card-light': '#f3f6fc',
      'card-dark': '#2d2f31',
      'hover-bg-light': '#c2e7ff',
      'hover-bg-dark': '#004a77',
    },
  },
  plugins: [],
}