module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.css"
  ],
  plugins: [
    require("@tailwindcss/forms")
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9B274F',
        'secondary': '#D57193',
        'neutral': '#FFF',
        'success': '#00C3A4',
        'danger': '#EA492B',
        'warning': '#FB2',
      },
      backgroundColor: {
        'primary': '#9B274F',
        'secondary': '#D57193',
        'neutral': '#FFF',
        'success': '#00C3A4',
        'danger': '#EA492B',
        'warning': '#FB2',
      }
    },
  },
};
