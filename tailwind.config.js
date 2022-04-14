const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  // content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
})
