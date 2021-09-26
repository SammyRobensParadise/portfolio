module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { mono: ['Ms\\ Sans'] },
      backgroundColor: {
        teal: 'teal'
      }
    },
    scale: { 200: '2' },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'off-white': '#E5E5E5',
      highlight: '#3FF3B2',
      shadow: '#2B2B2B',
      cerulaen: '#3F46F3'
    }),
    colors: {
      'off-white': '#E5E5E5',
      highlight: '#3FF3B2',
      shadow: '#2B2B2B',
      cerulaen: '#3F46F3'
    },
    fontFamily: { work: ['Work Sans', 'sans-serif'] }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
