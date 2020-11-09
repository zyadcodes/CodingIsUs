// This will export all of the font styles to be used in this app
import { StyleSheet } from "react-native-web";
import colors from "./colors";

// Gets the correct font that will be used
const font = "Dosis";

export default {
  bigTitleTextStyle: {
    fontFamily: font,
    fontSize: "7vw",
  },

  longTitleTextStyle: {
    fontFamily: font,
    fontSize: '5vw',
  },

  biggerTextStyle: {
    fontFamily: font,
    fontSize: "4vw",
  },

  // The style for all big text style
  bigTextStyle: {
    fontFamily: font,
    fontSize: "3vw",
  },

  // The style for all small text style
  smallTextStyle: {
    fontFamily: font,
    fontSize: "1.5vw",
  },

  // The style for all sub text style
  subTextStyle: {
    fontFamily: font,
    fontSize: "2vw",
  },

  // The style for all the main text style
  mainTextStyle: {
    fontFamily: font,
    fontSize: "2.5vw",
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
