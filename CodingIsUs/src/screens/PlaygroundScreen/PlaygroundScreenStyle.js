// This is the StyleSheet for the PlaygroundScreen
import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../../config/dimensions';
import colors from '../../../config/colors';
import fontStyles from '../../../config/fontStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
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
  dropDownContainerView: {

  },
  dropDownContainerStyle: {
    backgroundColor: colors.white,
    borderColor: colors.blue,
    marginLeft: screenHeight * 0.025,
    justifyContent: 'flex-start'
  },
  dropDownStyle: {
    ...fontStyles.black,
    ...fontStyles.longTitleTextStyle,
    width: screenWidth * 0.55,
    height: screenHeight * 0.05,
    shadowColor: colors.black,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.175,
  },
  dropdownDropdownStyle: {
    marginLeft: screenHeight * 0.025,
    width: screenWidth * 0.5,
    backgroundColor: colors.white,
    borderColor: colors.blue,
  },
  dropdownItemStyle: {
    ...fontStyles.mainTextStyle,
    ...fontStyles.black,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.5
  },
  codeContainer: {
    marginTop: screenHeight * 0.025
  },
  typeYourCode: {
    marginLeft: screenWidth * 0.05,
    marginBottom: screenHeight * 0.025
  }
});
