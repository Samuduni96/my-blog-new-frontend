import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      heading: ['Lora', 'serif'],
      main: ['Manrope', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#121212',
        blue: '#312e81',
        white: '#fff',
        primary: {
          darker: '#062B43',
          darkgray:'#3A3C40',
          purple:'#B3A9D4',
          dark: '#09507D',
          blue:'#00305D',
          base: '#0A78BE',
          light: '#77CAFF',
          lighter: '#C9EAFF',
          darkblue: '#1D007F',
          lightgrey: '#616161',
          black: '#000000',
          navblue: '#1D007F',
          bordercolor: ' #1D007F 1.38%, #FFAD01 94.42%)',
        },
        error: '#EF4444',
        success: '#34A853',
        grey: {
          darker: '#333333',
          dark: '#454545',
          light: '#DDDDDD',
          lighter: '#ECECEC',
        },
        pink: '#DC7593',
        label: {
          darker: '#333333',

          lable: {
            black: '#3A3C40',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
