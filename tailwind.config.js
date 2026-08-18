/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FDF6F6',
          100: '#FAEBEC',
          200: '#F3D6D8',
          300: '#E8C5C8',
          400: '#DDA9AE',
          500: '#CC848B',
          600: '#B4626A',
          700: '#8F4A51',
          800: '#6B383D',
          900: '#472529',
        },
        gold: {
          50: '#FBF6E7',
          100: '#F5EAC4',
          200: '#EBD68C',
          300: '#E0C15E',
          400: '#D4AF37',
          500: '#B8952B',
          600: '#967722',
          700: '#745C1A',
          800: '#524111',
          900: '#332809',
        },
        ink: {
          50: '#F7F7F7',
          100: '#EDEDED',
          200: '#D9D9D9',
          300: '#BFBFBF',
          400: '#999999',
          500: '#737373',
          600: '#545454',
          700: '#3D3D3D',
          800: '#2D2D2D',
          900: '#222222',
        },
        cream: {
          50: '#FFFEFC',
          100: '#FDF9F4',
          200: '#FAF1E7',
          300: '#F6E8D8',
          400: '#EFD9BE',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-ring': 'pulseRing 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.55)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
};
