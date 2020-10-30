// This is going to be the StyleSheet that is used to style the SectionCard
import {StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '../../../config/dimensions';
import colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
    width: screenWidth * 0.95,
  },
  completedIndicator: {
    width: screenWidth * 0.05,
    height: '100%',
  },
  greenBackground: {
    backgroundColor: colors.green,
  },
  redBackground: {
    backgroundColor: colors.red,
  },
  textContainer: {
    width: screenWidth * 0.8,
    paddingVertical: screenHeight * 0.015,
    marginLeft: screenWidth * 0.015,
    justifyContent: 'space-evenly',
  },
});
