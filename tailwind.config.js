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
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

