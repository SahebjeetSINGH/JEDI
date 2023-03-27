/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgb(0, 0, 0,0.55)',
        '4xl': [
            '0 0 56px rgb(0, 0, 0,0.55)',
            '0 0 56px rgb(0, 0, 0,0.55)'
        ]
      },
      fontFamily: {
        'Kanit':['Kanit'],
        'Montserrat':['Montserrat']
      }
    },
  },
  plugins: [],
}