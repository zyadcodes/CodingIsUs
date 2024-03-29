// This is going to contain the StyleSheet that will be used by the SettingsScreen
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenHeight, screenWidth} from '../../../config/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },
  settingsCard: {
    flexDirection: 'row',
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.05,
    height: screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderTopColor: colors.lightGray,
    borderTopWidth: 0.2,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.2,
    marginTop: screenHeight * 0.05,
  },
  signOutCard: {
    flexDirection: 'row',
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.05,
    height: screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.red,
    borderTopColor: colors.lightGray,
    borderTopWidth: 0.2,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.2,
    marginTop: screenHeight * 0.05,
  },
  cardsContainer: {
    marginBottom: screenHeight * 0.05,
    justifyContent: 'space-evenly',
    height: screenHeight * 0.4,
  },
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
  socialMediaContainer: {
    marginTop: screenHeight * 0.05,
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
});
