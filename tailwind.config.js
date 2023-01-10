/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#E8C589',
      primaryLight: '#EFD6AC',
      background: '#16171A',
      backgroundLight: '#2A2C30',
      secondary: '#AE89CE',
      secondaryLight: '#AE89CE',
      white: '#FFF',
      black: 'black',
    },
    fontFamily: {
      caviar: ['Caviar Dreams'],
      inter: ['Inter', 'sans-serif'],
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundSize: {
        16: '36rem',
      },
      backgroundImage: {
        'footer-texture': "url('/img/pattern4.png')",
      },
    },
  },
  plugins: [],
}
