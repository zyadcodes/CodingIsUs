// This is going to contain the StyleSheet for Guide Screen
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
    marginBottom: screenHeight * 0.025,
    width: screenWidth * 0.75,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    marginBottom: screenHeight * 0.025,
  },
  image: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.1,
    marginLeft: screenWidth * 0.05
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
});
