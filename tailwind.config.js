/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primaryLime: "hsl(61, 70%, 52%)",
        primaryRed: "hsl(4, 69%, 50%)",
        slate: {
          10: "hsl(202, 86%, 94%)",
          30: "hsl(203, 41%, 72%)",
          50: "hsl(200, 26%, 54%)",
          70: "hsl(200, 24%, 40%)",
          90: "hsl(202, 55%, 16%)",
        },
      },
    },
  },
  plugins: [],
};
