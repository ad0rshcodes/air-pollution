const { registerables } = require("chart.js");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'darkblue' : '#1a374d',
      'light' : '#b1d0e0',
      'blue' : '#6998ab',
      'red' : '#de3c3c',
      'green': '#74c468'
    },
    extend: {},
  },
  plugins: [],
};
