// This is going to contain the StyleSheet for the GuideIcon component
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenHeight, screenWidth} from '../../../config/dimensions';

export default StyleSheet.create({
  container: {
    width: screenWidth * 0.425,
    height: screenHeight * 0.185,
    paddingVertical: screenHeight * 0.01,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
  image: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.085,
  },
});
