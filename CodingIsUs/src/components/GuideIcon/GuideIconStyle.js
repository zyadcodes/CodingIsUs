// This is going to contain the StyleSheet for the GuideIcon component
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenHeight, screenWidth} from '../../../config/dimensions';

export default StyleSheet.create({
  container: {
    width: screenWidth * 0.425,
    paddingVertical: screenHeight * 0.01,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    marginLeft: screenWidth * 0.05,
    marginBottom: screenHeight * 0.05,
    paddingHorizontal: screenWidth * 0.01,
    shadowColor: colors.black,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.175,
    minHeight: screenHeight * 0.15,
  },
  middleSpacer: {
    height: screenHeight * 0.01,
  },
  image: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.075,
  },
});
