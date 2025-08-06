/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryMint: "#D9F8F0",
        primaryIvory: "#F8F4E3",
        secondaryPink: "#F3B8C8",
        secondaryLeaf: "#A2B089",
        secondarySand: "#EFD6AC",
        secondarySage: "#74B288",
        accentForest: "#2A4D3A",
        accentUmber: "#2A4D3A",
        accentCharcoal: "#2A4D3A",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
