/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        CustomDarkBlue: 'hsl(233, 26%, 24%)',
        CustomDarkBlueTrans: 'hsl(233, 26%, 24%,.8)',
        CustomLimeGreen: 'hsl(136, 65%, 51%)',
        CustomBrightCyan: 'hsl(192, 70%, 51%)',
        CustomGrayishBlue: 'hsl(233, 8%, 62%)',
        CustomLightGrayishBlue: 'hsl(220, 16%, 96%)',
        CustomVeryLightGray: 'hsl(0, 0%, 98%)',
        CustomWhite: 'hsl(0, 0%, 100%)',
        CustomWhiteTrans: 'hsl(0, 0%, 100%,.5)',
      },
      backgroundImage: {
        gradient:
          'linear-gradient(to right,hsl(136, 65%, 51%),hsl(192, 70%, 51%) )',
      },
      fontFamily: {
        sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
