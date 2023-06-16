/** @type {import('tailwindcss').Config} */
module.exports = {
  // watch html & js files
  content: ["./src/*.html", "./dist/**/*.js"],
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
