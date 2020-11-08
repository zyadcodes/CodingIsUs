// This is going to contain the StyleSheet for SectionStyle component
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenWidth, screenHeight} from '../../../config/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  titleContainer: {
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    marginBottom: screenHeight * 0.025,
  },
  descriptionText: {
    textAlign: 'center',
    marginTop: screenHeight * 0.05,
    marginBottom: screenHeight * 0.02,
    paddingHorizontal: screenWidth * 0.025,
    alignItems: 'center',
  },
  markAsDone: {
    marginVertical: screenHeight * 0.01,
    alignItems: 'center',
  },
  youtubeContainer: {
    height: screenHeight * 0.25,
    width: screenWidth * 0.9,
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 1
  },
  smallSpacer: {
    height: screenHeight * 0.0125,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgStyle: {
    position: 'absolute',
    top: screenHeight * 0.25,
  },
  svgOuterContainer: {
    width: screenWidth,
    position: 'absolute',
  },
  svgInnerContainer: {
    backgroundColor: colors.blue,
    height: screenHeight * 0.3,
  },
  headerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: screenWidth * 0.05,
    marginTop: screenHeight * 0.1,
    marginBottom: screenHeight * 0.05,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: screenHeight * 0.05,
    width: screenHeight * 0.05,
    borderRadius: screenHeight * 0.025,
    marginRight: screenWidth * 0.025,
    zIndex: 1,
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    height: screenHeight * 0.075,
    width: screenHeight * 0.075,
    borderRadius: screenHeight * 0.0375,
    
  },
  nextSection: {
    marginRight: screenWidth * 0.05,
    marginTop: screenHeight * 0.025,
    marginBottom: screenHeight * 0.05,
    alignSelf: 'flex-end',
  },
  countdownSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth * 0.75
  }
});
