import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        "primary-light-text": "#f2f3f4",
        "secondary-light-text": "#D3D3D3",
        "tertiary-light-text": "#ADADAD",
        "primary-dark-text": "",
        "secondary-dark-text": "",
        "tertiary-dark-text": "",
        "primary-light-bg": "",
        "secondary-light-bg": "",
        "tertiary-light-bg": "",
        "primary-dark-bg": "#121212",
        "secondary-dark-bg": "#030712",
        "tertiary-dark-bg": "",
        attention: "#CC0000",
        links: "#FFbF00",
        "hover-links": "#FDE047",
      },
    },
  },
  plugins: [],
} satisfies Config;
