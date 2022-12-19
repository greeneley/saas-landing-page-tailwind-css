/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        custom: "92rem",
        intro: "384px"
      },
      height: {
        intro: "700px"
      }
    }
  },
  plugins: []
};
