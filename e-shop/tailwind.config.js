/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "600px",
      desktop: "1080px",
      sectionSliderDesktop: "1200px",
    },
    extend: {
      colors: {
        ugo: "#878a77",
        ugoGreen: "#8aa431",
        priceBackground: "#f3f1eb",
        white: "#ffffff",
        black: "#000000",
        blogDetailHeader: '#868976',
        cartAmountBg: "#e3e5d1"
      },
      fontFamily: {
        Lexon: ["Lexon"],
        DraftE: ["DraftE"],
        DraftH: ["DraftH"],
      },
      boxShadow: {
        default: " 5px 5px 5px -2px rgb(0 0 0 / 11%)",
        hover: "5px 5px 9px -2px rgb(0 0 0 / 50%)",
        priceShadow: "-1px 5px 8px -9px #000",
      },
    },
  },
  plugins: [],
};
