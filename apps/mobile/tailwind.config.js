// tailwind.config.js

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      lightOrange: '#EDEDED',
      blue: {
        100: '#009EDC',
        200: '#0256B9',
      },
      orange: {
        100: '#F78E20',
        200: '#FCB706',
      },
      red: {
        100: '#F72020',
      },
      green: {
        100: '#13C704',
        200: '#13C704',
        300: '#13C70426',
      },
      gray: {
        100: '#999999',
      },
    },
    fontFamily: {
      rthin: ['Roboto-Thin', 'sans-serif'],
      rlight: ['Roboto-Light', 'sans-serif'],
      rregular: ['Roboto-Regular', 'sans-serif'],
      rmedium: ['Roboto-Medium', 'sans-serif'],
      ritalic: ['Roboto-Italic', 'sans-serif'],
      rbold: ['Roboto-Bold', 'sans-serif'],
      rblack: ['Roboto-Black', 'sans-serif'],
    },
  },
  plugins: [],
}
