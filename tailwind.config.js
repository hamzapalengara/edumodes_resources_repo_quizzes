/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      animation: {
        'celebration': 'celebration 0.5s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'train': 'train 18s linear',
        'smoke-1': 'smoke-1 3s infinite',
        'smoke-2': 'smoke-2 3s infinite 0.5s',
        'smoke-3': 'smoke-3 3s infinite 1s'
      },
      keyframes: {
        celebration: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8) translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        train: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-120%)' }
        },
        'smoke-1': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.8' },
          '100%': { transform: 'translateY(-40px) scale(2)', opacity: '0' }
        },
        'smoke-2': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '100%': { transform: 'translateY(-30px) scale(1.8)', opacity: '0' }
        },
        'smoke-3': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.4' },
          '100%': { transform: 'translateY(-20px) scale(1.5)', opacity: '0' }
        }
      },
    },
  },
  plugins: [],
}

