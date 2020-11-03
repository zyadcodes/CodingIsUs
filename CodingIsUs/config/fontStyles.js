// This will export all of the font styles to be used in this app
import {StyleSheet} from 'react-native';
import colors from './colors';
import {RFPercentage} from 'react-native-responsive-fontsize';

// Gets the correct font that will be used
const font = 'Dosis';

export default StyleSheet.create({
  bigTitleTextStyle: {
    fontFamily: font,
    fontSize: RFPercentage(7),
  },

  longTitleTextStyle: {
    fontFamily: font,
    fontSize: RFPercentage(5),
  },

  biggerTextStyle: {
    fontFamily: font,
    fontSize: RFPercentage(4),
  },

  // The style for all big text style
  bigTextStyle: {
    fontFamily: font,
    fontSize: RFPercentage(3),
  },

  // The style for all small text style
  smallTextStyle: {
    fontFamily: font,
    fontSize: RFPercentage(1.5),
  },

  // The style for all sub text style
  subTextStyle: {
    fontFamily: font,
    fontSize: RFPercentage(2),
  },

  // The style for all the main text style
  mainTextStyle: {
    fontFamily: font,
    fontSize: RFPercentage(2.5),
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
    fontWeight: 'bold',
  },
});
