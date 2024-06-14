const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "480px",
      "md": "768px",
      "lg": "960px",
      "xl": "1200px",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};