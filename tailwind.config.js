/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        first: ["Telegraf", "sans-serif"],
        second: ["TelegrafLight", "sans-serif"],
      }
    },
  },
  plugins: [],
};
