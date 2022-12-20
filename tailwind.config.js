module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  presets: [require('./utils/tailwind-preset')],
  theme: {
    extend: {
      colors: {
        'fern': {
          DEFAULT: '#56BC61',
          '50': '#D9F0DC',
          '100': '#CBEACE',
          '200': '#AEDFB3',
          '300': '#90D398',
          '400': '#73C87C',
          '500': '#56BC61',
          '600': '#3E9C48',
          '700': '#2E7435',
          '800': '#1E4C23',
          '900': '#0E2410'
        },
        'ebony': {
          DEFAULT: '#23293F',
          '50': '#BBC1D9',
          '100': '#AEB5D2',
          '200': '#949EC3',
          '300': '#7986B5',
          '400': '#5F6EA6',
          '500': '#4F5C8E',
          '600': '#404B73',
          '700': '#323A59',
          '800': '#23293F',
          '900': '#0F121B'
        },
        'violet': {
          DEFAULT: '#9F48EA',
          '50': '#F5EDFD',
          '100': '#ECDAFB',
          '200': '#D9B6F7',
          '300': '#C591F2',
          '400': '#B26DEE',
          '500': '#9F48EA',
          '600': '#841AE0',
          '700': '#6714AE',
          '800': '#490E7C',
          '900': '#2B0849'
        },
      }
    }
  }
};
