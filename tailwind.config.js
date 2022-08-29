/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    minWidth: {
      '1/2': '50%',
      '1/4': '25%',
      '10' : '10rem',
      '20' : '20rem',
      
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  
  plugins: [],
}
