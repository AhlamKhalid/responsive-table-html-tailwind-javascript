/** @type {import('tailwindcss').Config} */
module.exports = {
  // watch html files
  content: ["./src/*.html"],
  theme: {
    extend: {
      // add new font families in addition to existing ones
      fontFamily: {
        "open-sans": "Open Sans, sans-serif"
      }
    }
  },
  plugins: []
};
