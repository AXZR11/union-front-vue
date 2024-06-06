/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: ({ theme }) => ({
      gray: theme('colors.gray')
    }),
    colors:{
      primary: 'var(--color-primary)',
      'black': '#000000',
      'green': '#3E9936',
      'dark-green': '#0B8400',
      'gray': '#D9D9D9',
      'white': '#FFFFFF',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'xs': '0.750rem',
      DEFAULT: '0.25rem',
      DEFAULT: '0.25rem',
      'md': '0.625rem',
      'lg': '0.9375rem',
      'full': '9999px',
      'large': '0.75rem',
      'xlargee': '2.5rem',
    },
    fontFamily:{
      'display': ['Montserrat Alternates'],
    },
    extend: {
      inset: {
        'top-80': '80%',
      },
      width: {
        '86' :'21.25rem',
      },
    },
    screens: {
      'xxs': '350px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

