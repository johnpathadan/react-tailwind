/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // vuejs: "#3af736",
        vuejs: {
          100: "#3af736",
          932: "#434252",
        },
      },
    },
  },
  plugins: [],
};
