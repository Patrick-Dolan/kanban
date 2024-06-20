/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#635FC7',
        'primary-light': '#A8A4FF',
        'secondary': '#EA5555',
        'secondary-light': '#FF9898',
        'black-1': '#000112',
        'black-2': '#20212C',
        'black-3': '#2B2C37',
        'black-4': '#3E3F4E',
        'gray': '#828FA3',
        'light-gray': '#E4EBFA',
        'off-white': '#F4F7FD',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        '13px': '.8125rem', // 13px @ 16px
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
      spacing: {
        '3.5': '0.875rem', // 14px @ 16px
      }
    },
    plugins: [],
  }
}