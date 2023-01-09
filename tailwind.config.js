/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1A1A1A",
        white: "#F3F4F6",
        gold: "#FFDD03"
      },
      fontFamily: {
        sans: "Montserrat",
        display: "GetaiGrotesk"
      },
      gridTemplateColumns: {
        timeline: '.5rem 1fr',
      },
      spacing: {
        'half-text': '.55em'
      },
    },
  },
  plugins: [],
}
