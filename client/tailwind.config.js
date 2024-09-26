/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#0e0c16',
        'custom-text': '#ececec',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Open Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      keyframes: {
        rotateOrbital: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(60deg)' },
        },
        botAnimate: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1.1) rotate(-5deg)' },
        },
        slideBg: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        rotateOrbital: 'rotateOrbital 100s linear infinite',
        botAnimate: 'botAnimate 3s ease-in-out infinite',
        slideBg: 'slideBg 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
