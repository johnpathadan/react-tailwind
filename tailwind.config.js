/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        4: "20px",
        default: "40px",
      },
    },
  },
  plugins: [],
};
