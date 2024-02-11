const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts}", "index.html"],
  theme: {
    extend: {
      animation: {
        luv_appear: 'luv_appear 400ms ease-out forwards 0.5s',
        disappear: 'disappear 300ms forwards'
      },
      backgroundImage: {
        noise: "url('/images/noise.png')"
      },
      fontFamily: {
        'serif': ['"Dwight"', ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        disappear: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '40%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0',
            transform: 'scale(0.1)'
          },
        },
        luv_appear: {
          '0%': {
            transform: 'translateY(0)',
          },
          '60%': {
            transform: 'translateY(-135%)',
          },
          '100%': {
            transform: 'translateY(-120%)',
          }
        }
      },
      scale: {
        'backlight': 'calc(150vw / 496px)',
      },
      transitionProperty: {
        'rounded': 'transform, border-radius',
        'shadow-and-bg-color': 'box-shadow, background-color'
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
}

