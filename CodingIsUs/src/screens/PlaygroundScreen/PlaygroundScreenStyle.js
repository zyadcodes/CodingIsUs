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
