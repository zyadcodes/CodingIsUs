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
  cardsContainer: {
    marginBottom: screenHeight * 0.05,
    justifyContent: 'space-evenly',
    height: screenHeight * 0.3,
  },
  socialMediaContainer: {
    marginTop: screenHeight * 0.05,
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
    backgroundColor: colors.blue,
  },
});
