/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        '15px': '.938rem',
      },
      lineHeight: {
        '3.75': '.9375rem', // 15px @ 16px
        '4.75': '1.1875rem', // 19px @ 16px 
        '5.75': '1.4375rem', // 23px @ 16px
        '7.5': '1.875rem', // 30px @ 16px
      },
      letterSpacing: {
        '2.4px': '0.15rem', // 2.4px @ 16px
      },
    },
    plugins: [],
  }
}