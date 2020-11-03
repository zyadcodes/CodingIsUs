// This is going to contain the StyleSheet for Guide Screen
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenWidth, screenHeight} from '../../../config/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    height: screenHeight * 0.05,
    width: screenHeight * 0.05,
    borderRadius: screenHeight * 0.025,
    marginLeft: screenWidth * 0.05,
    marginTop: screenHeight * 0.05,
    zIndex: 1,
  },
  coverImage: {
    width: screenWidth * 1,
    height: screenHeight * 0.3,
    flex: 1,
  },
  guideInformation: {
    paddingHorizontal: screenWidth * 0.025,
    alignItems: 'flex-start',
    marginTop: screenHeight * 0.015,
  },
  logoTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: screenHeight * 0.025,
    width: screenWidth * 0.6,
  },
  descriptionText: {
    marginBottom: screenHeight * 0.025,
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
  titleText: {
    marginBottom: screenHeight * 0.035,
  },
  sectionContainer: {
    marginLeft: screenWidth * 0.025,
    marginBottom: screenHeight * 0.015,
  },
  logoContainer: {
    borderWidth: 0.5,
    borderColor: colors.lightGray,
    borderRadius: screenWidth * 0.03,
    paddingHorizontal: screenWidth * 0.025,
    paddingVertical: screenWidth * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: screenWidth * 0.25,
    height: screenHeight * 0.125,
    marginRight: screenWidth * 0.05,
  },
  image: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  relatedGuidesStyle: {
    marginVertical: screenHeight * 0.05,
  },
  relatedTextStyle: {
    marginLeft: screenWidth * 0.025,
    marginBottom: screenHeight * 0.015,
  },
  relatedGuidesIcons: {
    flexDirection: 'row',
    marginLeft: screenWidth * -0.05,
    alignSelf: 'center',
  },
  bottomSpacer: {
    marginBottom: screenHeight * 0.035,
  },
  shareAlert: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: screenHeight * 0.45
  },
});
