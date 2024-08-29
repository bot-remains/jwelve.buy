/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grayscale: {
          50: 'hsl(0, 0%, 97.30%)',
          100: 'hsl(0, 0%, 94.10%)',
          200: 'hsl(0, 0%, 88.20%)',
          300: 'hsl(0, 0%, 80.40%)',
          400: 'hsl(0, 0%, 68.20%)',
          500: 'hsl(0, 0%, 56.90%)',
          600: 'hsl(0, 0%, 46.30%)',
          700: 'hsl(0, 0%, 36.90%)',
          800: 'hsl(0, 0%, 29.40%)',
          900: 'hsl(0, 0%, 23.90%)',
          950: 'hsl(0, 0%, 13.30%)',
        },
        custom: '#ebf9fc',
        primary: '#49c3da',
        secondary: '#42b8cd',
        util: '#ACE2E1',
        general: '#F7EEDD',
        gold: {
          500: 'hsl(45, 93%, 47%)',
        },
        silver: {
          500: '#C0C0C0',
        },
        diamond: {
          500: '#B9F2FF',
        },
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
};
