/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '350px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'GradientO1': 'linear-gradient(120deg,#89F7FE 0%,#66A6FF 100%)',
        'GradientO2': 'linear-gradient(to left,#0061FF 0%,#60EFFF 100%)',
      },
      colors: {
        'Primary': '#395B64',
        'MainBlue': '#395B64',
        'LightBlue': '#9CBBFC',
        'DarkBlue': '#4741A6',

        'BlackCool': '#2C3333',
        'Black75': '#959898',
        'Black50': '#959898',
        'Black25': '#cacbcb',
        'Black10': '#e9eaea',
        'Black5': '#f4f4f4',

        'ErrorColor': '#e85353',
        'WarningColor': '#F9CE69',
        'ActiveColor': '#A7D129'
      }
    },
  },
  plugins: [],
}
