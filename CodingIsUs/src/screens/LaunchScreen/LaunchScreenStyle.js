// This is going to be the StyleSheet for the LaunchScreen
import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../../config/dimensions';
import colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightBlue,
  },
  spacer: {
    height: screenHeight * 0.05,
  },
  logoStyle: {
    height: screenHeight * 0.2,
    width: screenWidth * 0.5,
  },
});
