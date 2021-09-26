module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          moderate: '#303F60',
          dark: '#1A253C',
          lightBlue: '#43AFFF',
          lighter: '#43AFFF33',
          extraLight: '#EDF6FF',
          borderBlue: '#4D618E',
        },
        grey: {
          custom: 'hsl(0, 0%, 48%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
