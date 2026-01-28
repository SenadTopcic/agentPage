/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefbf3',
          100: '#fdf6e3',
          200: '#faecc4',
          300: '#f6dc9b',
          400: '#f2c766',
          500: '#d4a54a',
          600: '#b8883d',
          700: '#8f6a2f',
          800: '#6b4f23',
          900: '#4a3618',
        },
        accent: {
          50: '#fefbf3',
          100: '#fef7e8',
          200: '#fdedc7',
          300: '#fbd88f',
          400: '#f9c456',
          500: '#e6a93d',
          600: '#c98d2e',
          700: '#9d6b23',
          800: '#75501a',
          900: '#523813',
        },
        gold: {
          light: '#f6dc9b',
          DEFAULT: '#d4a54a',
          dark: '#8f6a2f',
        },
        bronze: {
          light: '#b8883d',
          DEFAULT: '#8f6a2f',
          dark: '#6b4f23',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
