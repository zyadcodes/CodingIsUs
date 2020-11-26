// This is going to be the StyleSheet for the Authentication flow style
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenHeight, screenWidth} from '../../../config/dimensions';

export default StyleSheet.create({
  buttonStyle: {
    width: screenWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputViewContainer: {
    width: screenWidth * 0.7,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spacer: {
    height: screenHeight * 0.015,
  },
  inputContainerStyle: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: screenWidth * 0.015,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 0.5,
    borderRadius: screenHeight * 0.015,
  },
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
