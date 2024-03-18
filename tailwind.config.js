/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat'],
      eco: ['ui-sans-serif', 'Impact']
    },
    extend: {
      colors: {
        primary: {
          100: '#000000',
          300: '#e1e1e1',
          500: '#808080',
          800: '#333333',
          900: '#ffffff'
        },
        custom: {
          100: 'rgba(255, 255, 255, 0.9)' // Aquí defines el color rgba
        }
      }
    }
  },
  plugins: []
}
