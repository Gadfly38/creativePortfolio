/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        diagonalFill: {
          "0%": { transform: "translateX(-100%) translateY(100%)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        fillDiagonal: "diagonalFill 0.3s ease-out forwards",
        scroll: "scroll 60s linear infinite",
      },
    },
  },
  plugins: [],
};
