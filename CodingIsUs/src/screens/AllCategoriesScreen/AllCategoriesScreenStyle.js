// This is going to be the StyleSheet for the categories screen
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
  mediumSpacer: {
    height: screenHeight * 0.05,
  },
  smallSpacer: {
    height: screenHeight * 0.025,
  },
  buttonStyle: {
    width: screenWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgStyle: {
    position: 'absolute',
    top: screenHeight * 0.25,
  },
  svgOuterContainer: {
    width: screenWidth,
    position: 'absolute',
  },
  svgInnerContainer: {
    backgroundColor: colors.blue,
    height: screenHeight * 0.3,
  },
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.025,
    marginTop: screenHeight * 0.1,
    marginBottom: screenHeight * 0.05,
  },
});
