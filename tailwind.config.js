module.exports = {
  content: [
    './src/pages/*.html',
    './src/scripts/*.js',
    './src/components/*/*.vue',
    './src/components/*.vue'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '100%': '100%',
        '-50%':'-50%'
      }
    },
  },
  variants: {},
  plugins: [],
};