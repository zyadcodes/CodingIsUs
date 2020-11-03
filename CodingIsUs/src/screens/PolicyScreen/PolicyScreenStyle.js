// This is going to be the StyleSheet for the PolicyScreen
import {StyleSheet} from 'react-native';
import colors from '../../../config/colors';
import {screenHeight, screenWidth} from '../../../config/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
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
    width: screenWidth * 0.2
  },
  headerTextStyle: {
    textAlign: 'center',
    paddingRight: screenWidth * 0.2,
  },
  textContainer: {
    width: screenWidth * 0.9,
    alignSelf: 'center',
  },
});
