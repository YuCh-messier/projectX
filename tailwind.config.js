module.exports = {
  content: [
    './src/pages/*.html',
    './src/scripts/*.js',
    './src/components/*/*.vue',
    './src/components/*.vue'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    },
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