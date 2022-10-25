/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6600',
        secondary: '#18193c',
        textcolor: '#18193c',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
        },
      },

      fontFamily: {
        poppins: 'Poppins, Arial, sans-serif',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1230px',
          },
          '@screen xl': {
            maxWidth: '1230px',
          },
        },
      })
    },
  ],
}
