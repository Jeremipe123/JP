/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primarys: {
          100: '#000000',
          900: '#ffffff'
        },
        grays: {
          300: '#e1e1e1',
          500: '#808080',
          800: '#333333'
        }
      }
    }
  },
  plugins: []
}
