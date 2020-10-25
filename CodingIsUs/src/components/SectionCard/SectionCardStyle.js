// This is going to be the StyleSheet that is used to style the SectionCard
import {StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '../../../config/dimensions';
import colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.2,
    borderTopColor: colors.lightGray,
    borderRightWidth: 0.2,
    borderRightColor: colors.lightGray,
    backgroundColor: colors.white,
    height: screenHeight * 0.1,
    width: screenWidth * 0.95,
  },
  completedIndicator: {
    width: screenWidth * 0.05,
    height: screenHeight * 0.1,
  },
  greenBackground: {
    backgroundColor: colors.green,
  },
  redBackground: {
    backgroundColor: colors.red,
  },
  textContainer: {
    height: screenHeight * 0.1,
    width: screenWidth * 0.8,
    marginLeft: screenWidth * 0.015,
    justifyContent: 'space-evenly',
  },
});
