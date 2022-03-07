module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto Condensed', 'ui-sans-serif'],
      'serif': ['PT Serif', 'ui-serif'],
    },
    screens: {
      'sm': '576px',
      'md': '769px',
      'lg': '992px',
    },
  },
  plugins: [],
}
