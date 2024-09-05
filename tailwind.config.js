const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
    './src/.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-custom': 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
});

