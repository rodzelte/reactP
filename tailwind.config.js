// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on the 'dark' class
  theme: {
    extend: {
      colors: {
        // Dark Mode Colors
        bgdark: 'rgb(7, 15, 43)',
        cardDark: 'rgb(190, 49, 68)',
        primarydark: 'rgb(7, 15, 43)',
        secondarydark: 'rgb(27, 26, 85)',
        tertiarydark: 'rgb(83, 92, 145)',
        quaternarydark: 'rgb(146, 144, 195)',
        // Light Mode Colors
        bglight: 'rgb(205, 250, 219)',
        primarylight: 'rgb(205, 250, 219)',
        secondarylight: 'rgb(246, 253, 195)',
        tertiarylight: 'rgb(255, 207, 150)',
        quaternarylight: 'rgb(255, 128, 128)',
      },
      fontWeights: {
        300: 'light',
        400: 'normal',
        500: 'medium',
        700: 'semibold',
        800: 'bold',
        900: 'extrabold',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
