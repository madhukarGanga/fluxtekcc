/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        appHeader: "48px",
        appContent: "calc(100vh - 48px)",
      },
    },
  },
  plugins: [],
};
