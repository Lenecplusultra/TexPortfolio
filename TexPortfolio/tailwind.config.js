/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", sm: "375px", sml: "500px", md: "667px",
        mdl: "768px", lg: "960px", lgl: "1024px", xl: "1280px",
      },
      fontFamily: {
        bodyFont:  ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        mono:      ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        bodyColor:   "#0d0f14",
        bodyAlt:     "#0a0c10",
        lightText:   "#c4cfde",
        designColor: "#ff014f",
        dimText:     "#6b7280",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #09090c, -10px -10px 19px #141720",
        glow:      "0 0 30px rgba(255,1,79,0.15)",
        glowSm:    "0 0 12px rgba(255,1,79,0.2)",
      },
    },
  },
  plugins: [],
};
