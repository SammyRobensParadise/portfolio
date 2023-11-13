/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'prussian-blue': '#273958',
      ruby: '#C6365C',
      canary: '#FFFCA5',
      'ocrean-green': '#77C6A7',
      turquoise: '#C1E1C8'
    },
    fontFamily: {
      sans: ['Hevetica', 'sans-serif']
    },
    extend: {}
  },
  plugins: [require('tailwindcss-animated')]
}
