/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "bg-color": "#009294",
      "bg-hover": "#43adaf",
      white: "#ffffff",
      "light-paste": "#DEF1F1",
      gray: "#9B9B9B",
      "light-gray": "#E6E6E6",
      "gray-2": "#DADADA",
      black_1: "#4E4E4E",
      black_2: "#5B5B5B",
      black_3: "#4D5052",
      red: "#FF5151",
    },
    screens: {
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("daisyui")],
};
