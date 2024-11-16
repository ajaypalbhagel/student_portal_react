/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",{
    theme: {
      extend: {
        colors: {
          customBlue: '#4c8df6ff', // Add your custom color here
        },
      },
    },
  }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

