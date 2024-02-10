/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textGrey: "#696b79",
        textBlack: "#282c3f",
      },
    },
  },
  plugins: [],
};
