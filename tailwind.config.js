/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#051f20',
        light: '#9eb69b',
        accent: '#8eb69b',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
