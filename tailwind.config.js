/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        primary: "#F3F4F6"
      },
      fontFamily: {
        sans: "Montserrat"
      }
    },
  },
  plugins: [],
}
