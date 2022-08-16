/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['Space Mono'],
    },
    extend: {
      colors: {
        dark_gray: {
          900: '#111111'
        }
      },
    },
  },
  plugins: [],
};
