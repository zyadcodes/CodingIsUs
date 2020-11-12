// This will export all of the font styles to be used in this app
import colors from "./colors";

// Gets the correct font that will be used
const font = "Dosis";

export default {
  bigTitleTextStyle: {
    fontFamily: font,
    fontSize: "7vh",
  },

  longTitleTextStyle: {
    fontFamily: font,
    fontSize: '5vh',
  },

  biggerTextStyle: {
    fontFamily: font,
    fontSize: "4vh",
  },

  // The style for all big text style
  bigTextStyle: {
    fontFamily: font,
    fontSize: "3vh",
  },

  // The style for all small text style
  smallTextStyle: {
    fontFamily: font,
    fontSize: "1.5vh",
  },

  // The style for all sub text style
  subTextStyle: {
    fontFamily: font,
    fontSize: "2vh",
  },

  // The style for all the main text style
  mainTextStyle: {
    fontFamily: font,
    fontSize: "2.5vh",
  },

  blue: {
    color: colors.blue,
  },
  green: {
    color: colors.green,
  },
  gray: {
    color: colors.gray,
  },
  lightGray: {
    color: colors.lightGray,
  },
  red: {
    color: colors.red,
  },
  orange: {
    color: colors.orange,
  },
  white: {
    color: colors.white,
  },
  black: {
    color: colors.black,
  },

  bold: {
    fontWeight: "bold",
  },
};
