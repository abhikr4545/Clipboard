module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkBlue: "hsl(210, 10%, 33%)",
        blue: "hsl(201, 11%, 66%)"
      },
      fontFamily: {
        bai: "'Bai Jamjuree', sans-serif"
      },
      backgroundImage: {
        "desktop-header": "url(./images/bg-header-desktop.png)",
        "desktop-mobile": "url(./images/bg-header-mobile.png)"
      },
      minHeight: {
        "logo": "40vh",
        "info": "50vh"
      }
    },
  },
  plugins: [],
}