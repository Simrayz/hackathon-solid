/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        font: {
          default: "#172B2E",
          pink: "#EF888C"
        },
        ui: {
          title: "#418E92",
          
          active: "#187176",
          button: {
            default: "#A8D6D2",
            orange: "#F2B06B",
            pink: "#F0A8AB"
          },
          date: "#CEE6E5",
          border: "#EA8F5E"
        }
      }
    }
  },
  plugins: []
};
