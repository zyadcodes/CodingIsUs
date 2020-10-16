// This is going to be the StyleSheet for the guides list screen
import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../../config/dimensions';
import colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  logoStyle: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.1,
  },
  textContainer: {
    width: screenWidth * 0.95,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: screenHeight * 0.05,
    marginBottom: screenHeight * 0.05,
  },
  mediumSpacer: {
    height: screenHeight * 0.05,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: screenWidth,
    height: screenHeight * 0.2,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 0.125,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: screenHeight * 0.05,
    alignSelf: 'center',
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.05,
    height: screenHeight * 0.21,
    marginBottom: screenHeight * 0.025,
    backgroundColor: colors.blue,
  },
  headerStyleBackButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: screenHeight * 0.05,
    alignSelf: 'center',
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.05,
    height: screenHeight * 0.21,
    marginBottom: screenHeight * 0.025,
    backgroundColor: colors.blue,
  }
});
