/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#000000",
        "gray-30": "#030e1eed", // Background color home page
        "gray-50": "#EFE6E6",
        "gray-100": "#EEEEEE",
        "gray-500": "#FCFCFC",
        "primary-100": "#FFE1E0", // Pink navbar
        "primary-300": "#aee8d8", // hover navbar
        "primary-500": "#5cd0b0",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomeRageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
// #030E1E - Dark blue
// #FCFCFC - White
// #2AFFBD - Green (hover)
// #38F4C3 - Green FLUOR
