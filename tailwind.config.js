/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
        'points': {
          1: '#E73737',
          2: '#D54838',
          3: '#C25838', 
          4: '#B06939', 
          5: '#9E793A', 
          6: '#8B8A3A', 
          7: '#799A3B', 
          8: '#67AB3C', 
          9: '#54BB3C', 
          10: '#42CC3D',
        }
        
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

