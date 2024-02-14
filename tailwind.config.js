/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#00c3c7",
        // primary: "#0287a8",
        primary: "#ef8636",
        // secondary: "#00c3c7",
        secondary: "#ffff",
        dark: "#ffcf22",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}
