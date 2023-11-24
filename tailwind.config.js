module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
         'poppins': ['Poppins', 'sans'],
      },
    },
    screens: {
      "mobile": "426px",
      "laptop": "1025px"
    },
  },
  plugins: [],
};
