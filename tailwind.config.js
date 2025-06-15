/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          500: "#0e1011",
          300: "#17191a",
          200: "#232323"
        },
      }
    },
  },
  plugins: [],
}

