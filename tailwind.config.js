/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],

  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        title: ["Manjari", "sans-serif", "Jost", "sans-serif"],
      },
    },
  },
};
