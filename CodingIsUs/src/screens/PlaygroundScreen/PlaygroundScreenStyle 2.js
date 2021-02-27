// This is the StyleSheet for the PlaygroundScreen
import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../../config/dimensions';
import colors from '../../../config/colors';

export default StyleSheet.create({
  webviewContainer: {
    flex: 1,
    height: screenHeight * 1,
    width: screenWidth * 1,
  },
  codeInTheAppContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },
  codeInTheAppButton: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 0.125,
    width: screenWidth * 0.75,
    borderRadius: screenHeight * 0.05,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.175,
  },
  container: {
    height: screenHeight * 1,
    zIndex: 1,
    width: screenWidth * 1,
    backgroundColor: colors.lightBlue,
  },
  loadingContainer: {
    height: screenHeight * 1,
    width: screenWidth * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
