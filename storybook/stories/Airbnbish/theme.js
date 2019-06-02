const theme = {
  spaces: [4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  breakPoints: [375, 414, 768],
  fontWeights: ["400", "600", "bold"],
  borders: [
    {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.12)"
    },
    {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.24)"
    },
    {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.36)"
    }
  ],
  borderRadii: [4, 8, 16, 32, 999999],
  shadows: [
    {
      elevation: 1,
      shadowColor: "black",
      shadowOpacity: 0.15,
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: 3
      }
    },
    {
      elevation: 5,
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 2
      }
    }
  ],
  colors: {
    orange: "blue",
    green: "#46BB7C",
    gray0: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "white"
  }
};

export default theme;
