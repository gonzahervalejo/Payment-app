/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#231656",
        secondary: "#625FFB",
      },
      backgroundImage: {
        banner: "url(./assets/img/background.jpg)",
      },
    },
  },
  plugins: [],
};
