module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {  
        'around-element': '2px 2px 2px rgba(0, 0, 0, 0.1)',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))'
      },
      colors: {
          'dark-body-custom-gray': '#212a33',
          'body-custom-gray' : '#FAFAFA'
      },
    },
  },
  darkMode: 'class',
  plugins: [],  
}