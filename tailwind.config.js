module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { mono: ['Ms\\ Sans'] },
      backgroundColor: {
        teal: 'teal'
      }
    },
    scale: { 200: '2', 150: '1.5', 125: '1.25' },
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
    fontFamily: { work: ['Work Sans', 'sans-serif'] },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      grow: '0px 0px 48px 14px rgba(43,43,43,0.4)'
    }
  },
  variants: {
    extend: {
      display: ['group-hover', 'group-focus'],
      transitionProperty: ['group-hover', 'group-focus'],
      transform: ['group-hover', 'hover', 'focus', 'group-focus'],
      translate: ['active', 'group-hover', 'group-focus'],
      opacity: ['group-hover', 'group-focus']
    }
  },
  plugins: []
}
