// This is going to contain the StyleSheet for the BackButton component
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenWidth, screenHeight} from '../../../config/dimensions';

export default styles = StyleSheet.create({
  buttonStyle: {
    width: screenHeight * 0.08,
    height: screenHeight * 0.08,
    borderRadius: screenHeight * 0.04,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: screenWidth * 0.05,
    marginTop: screenHeight * 0.075,
  },
});
