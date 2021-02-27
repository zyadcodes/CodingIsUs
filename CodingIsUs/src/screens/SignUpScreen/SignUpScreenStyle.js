// This is the StyleSheet for the SignUpScreen
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenHeight, screenWidth} from '../../../config/dimensions';

export default StyleSheet.create({
  backButton: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: screenHeight * 0.125,
    width: screenWidth * 0.2,
  },
  headerTextStyle: {
    textAlign: 'center',
    paddingRight: screenWidth * 0.2,
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
  },
  popUpButtonStyle: {
    width: screenWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.1,
    borderRadius: 15,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputViewContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightBlue,
    paddingBottom: screenHeight * 0.05
  },
  textInputTitleStyle: {
    marginLeft: screenWidth * 0.075,
    alignSelf: 'flex-start'
  },
  spacer: {
    height: screenHeight * 0.035,
  },
  inputContainerStyle: {
    width: screenWidth * 0.85,
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
