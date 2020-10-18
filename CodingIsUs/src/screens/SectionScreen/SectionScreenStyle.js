// This is going to contain the StyleSheet for SectionStyle component
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenWidth, screenHeight} from '../../../config/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  titleContainer: {
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    marginBottom: screenHeight * 0.025,
  },
  contentContainer: {
    marginBottom: screenHeight * 0.025,
  },
  descriptionText: {
    textAlign: 'center',
    marginBottom: screenHeight * 0.025,
    paddingHorizontal: screenWidth * 0.025,
    alignItems: 'center',
  },
  markAsDone: {
    marginVertical: screenHeight * 0.025,
    alignItems: 'center',
  },
  youtubeContainer: {
    height: screenHeight * 0.33,
    width: screenWidth,
  },
  practiceStyle: {
    paddingHorizontal: screenWidth * 0.05,
  },
  mediumSpacer: {
    height: screenHeight * 0.025,
  },
  smallSpacer: {
    height: screenHeight * 0.0125,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.1,
  },
});
