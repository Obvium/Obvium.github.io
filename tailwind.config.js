/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'base-bg': "#18181b",
        'button-bg': "#0e7490",
        'invalid-button-bg' : "#9B1C1C",
        'button-hover': "#0891b2",
        'widged-bg': "#27272a",
        'medium': "#52525b",
        'bright': "#71717a",
        'slightly-brighter': "#868691",
        'dark': "#27272a",
        'green': "#009933",
        
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

