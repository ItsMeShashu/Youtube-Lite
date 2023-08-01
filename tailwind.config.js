/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx,html}",
    "./public/index.html",
    "./src/App.js",
    "./src/context/ContextApi.jsx",
    "./src/shared/Loader.jsx",
    "./src/utils/Constants.jsx",
    "./src/utils/Api.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
