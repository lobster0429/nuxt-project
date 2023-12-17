/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './composables/**/*.js',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './stores/**/*.js',
    './app.{js,ts,vue}'
  ],
  theme: {
    screens: {
      'xs': {max: '420px'}
    },
    fontSize: {
      'xxs': '0.65rem'
    },
    extend: {
      colors: {
        'dirty-100': '#0066bf'
      }
    },
    configViewer: {
      themeReplacements: {
         
      } 
    }
  },
  plugins: [],
}

