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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: screenWidth * 0.025,
    top: screenHeight * 0.05,
    zIndex: 1,
  },
  coverImage: {
    width: screenWidth * 1,
    height: screenHeight * 0.3,
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
    width: screenWidth * 0.6
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
  sectionsText: {
    marginBottom: screenHeight * 0.035,
  },
  sectionContainer: {
    marginLeft: screenWidth * 0.025,
  },
  titleContainer: {
    marginLeft: screenWidth * 0.05,
    marginBottom: screenHeight * 0.025,
    width: screenWidth * 0.75,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    marginBottom: screenHeight * 0.025,
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
  mediumSpacer: {
    height: screenHeight * 0.025,
  },
  smallSpacer: {
    height: screenHeight * 0.01,
  },
  leftSpacer: {
    width: screenWidth * 0.05,
  },
  bottomTextContainer: {
    width: screenWidth * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.2,
  },
  textCard: {
    flexDirection: 'row',
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.05,
    height: screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderTopColor: colors.lightGray,
    borderTopWidth: 0.5,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.5,
    marginBottom: screenHeight * 0.05,
  },
  textCardGreen: {
    flexDirection: 'row',
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.05,
    height: screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.green,
    borderTopColor: colors.lightGray,
    borderTopWidth: 0.5,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.5,
    marginBottom: screenHeight * 0.05,
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
});
