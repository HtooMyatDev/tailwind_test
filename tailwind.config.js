/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./public/index.html",
    "./src/input.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",

        secondary: {
          100: "#E2E2D5",
          200: "#88883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
