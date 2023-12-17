export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        custom: "60rem",
      },
    },
    colors: {
      mainBackground: "#2C2C2C",
      primaryColor: "#AFC8AD",
      textColorLight: "#F5F5F5",
      textColorDark: "#404040",
      // lightThemeColors: {
      //   mainBackground: "#F5F5F5",
      //   primaryColor: "#AFC8AD",
      //   textColor: "#404040",
      // },
      // darkThemeColors: {
      //   mainBackground: "#404040",
      //   primaryColor: "#AFC8AD",
      //   textColor: "#F5F5F5",
      // },
    },
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [],
};
