/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,css}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#312E81',      // Deeper Indigo for seriousness
        'primary-dark': '#1E1B4B',
        secondary: '#6D28D9',    // Vibrant Purple for creativity
        accent: '#FACC15',       // Warm Amber for accents
        'accent-dark': '#B45309',
        'base-100': '#F3F4F6',   // Light Gray for modern clean look
        'base-content': '#1F2937', // Deep Gray for text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-left': 'fade-in-left 0.8s ease-out',
        'fade-in-right': 'fade-in-right 0.8s ease-out',
        'subtle-reveal': 'subtle-reveal 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'subtle-reveal': {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};