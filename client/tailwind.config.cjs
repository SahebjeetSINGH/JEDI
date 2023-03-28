/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '2xl':'0 0 15px rgb(32,33,36,1)',
        '3xl': '0 35px 35px rgb(32,33,36)',
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
  plugins: [require('tailwind-scrollbar')],
}