/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-lime": "hsl(61, 70%, 52%)",
        "primary-red": "hsl(4, 69%, 50%)",
        "slate-10": "hsl(202, 86%, 94%)",
        "slate-30": "hsl(203, 41%, 72%)",
        "slate-50": "hsl(200, 26%, 54%)",
        "slate-70": "hsl(200, 24%, 40%)",
        "slate-90": "hsl(202, 55%, 16%)",
      },
    },
  },
  plugins: [],
};
