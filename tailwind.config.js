/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#546AFC',
        'secondary': '#12385E',
        'secondary-light': '#ECEFF2',
        'contrast': '#EE4B3B',
        'snow': '#FDFEFE',
        'black': '#121212'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

