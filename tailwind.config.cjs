/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        font: {
          default: "#172B2E"
        },
        ui: {
          title: "#418E92",
          button: "#A8D6D2",
          date: "#CEE6E5",
          border: "#EA8F5E"
        }
      }
    }
  },
  plugins: []
};
