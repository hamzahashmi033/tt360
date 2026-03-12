module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/_components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C7B29B",
        primaryDark: "#91775C",
        light: "#EEECE8"
      },
      fontFamily: {
        lufga: ["Lufga", "sans-serif"],
        sfpro: ["SF Pro", "sans-serif"]
      },
      backgroundImage: {
        primaryGradient:
          "linear-gradient(90deg, #C7B29B 0%, #91775C 100%)"
      }
    }
  },
  plugins: []
}