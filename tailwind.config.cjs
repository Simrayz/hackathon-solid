/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ui: {
          text: "#418E9",
          button: "#A8D6D2",
          date: "#CEE6E5"
        }
      }
    }
  },
  plugins: []
};
