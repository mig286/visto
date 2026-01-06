/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Roboto"', '"Oxygen"', '"Ubuntu"', '"Cantarell"', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        lime: {
          50: '#f7fee7',
          100: '#ecfccf',
          200: '#d9f99d',
          300: '#bfef45',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
        },
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
      backgroundColor: {
        dark: '#050505',
        'dark-light': '#0a0a0a',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.1)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s infinite ease-in-out',
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

