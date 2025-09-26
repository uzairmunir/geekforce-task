module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      screens: {
        xs: '400px',
        lg: '1024px',
        xl: '1450px',
        '2xl': '1536px',
        '3xl': '1800px',
        '4xl': '2000px'
      }
    }
  },
  plugins: []
};
