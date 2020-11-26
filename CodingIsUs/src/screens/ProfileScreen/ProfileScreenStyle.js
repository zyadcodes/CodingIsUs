// This is going to be the StyleSheet for the ProfileScreen
import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../../config/dimensions';
import colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  headerSection: {
    justifyContent: 'space-between',
  },
  logoStyle: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 0.1,
    width: screenHeight * 0.1,
  },
  progressContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: screenHeight * 0.025,
    width: screenWidth * 0.9,
  },
  progressPercentage: {
    marginLeft: screenWidth * 0.025,
  },
  guideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.025,
    height: screenHeight * 0.135,
  },
  guideLogoContainer: {
    borderWidth: 0.5,
    borderColor: colors.lightGray,
    borderRadius: screenWidth * 0.03,
    paddingHorizontal: screenWidth * 0.025,
    paddingVertical: screenWidth * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: screenWidth * 0.2,
    height: screenHeight * 0.1,
  },
  guideLogo: {
    width: screenWidth * 0.175,
    height: screenHeight * 0.075,
  },
  guideLogoContainerRight: {
    height: screenHeight * 0.1,
    marginLeft: screenWidth * 0.025,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  progressTitle: {
    marginVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.025
  },
  settingsCard: {
    backgroundColor: colors.blue,
    width: screenWidth,
    height: screenHeight * 0.075,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
