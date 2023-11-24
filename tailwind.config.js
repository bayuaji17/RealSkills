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
      "mobile": "426",
      "laptop": "1025"
    },
  },
  plugins: [],
};
