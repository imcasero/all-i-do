export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "60rem",
      },
      colors: {
        mainBackground: "#2C2C2C",
        primaryColor: "#AFC8AD",
        green_text: "#CCCCCC",
        textColorLight: "#F5F5F5",
        textColorDark: "#404040",
      },
    },

    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [],
};
