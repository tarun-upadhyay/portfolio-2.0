/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#52DEE5",
        text: "#C7D3FF",
        textDark: "#A1ABBF",
        bgblue: "#030B2E",
        darkerBlue: "#0A192F",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        fira: ["Fira Code", "monospace"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
    screens: {
      xsm: "320px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
