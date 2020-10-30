// This is going to contain all of the styles for the ResourcesScreen
import {StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '../../../config/dimensions';

export default StyleSheet.create({
  titleContainer: {
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    marginBottom: screenHeight * 0.025,
  },
  resourceStyle: {
    marginBottom: screenHeight * 0.025,
    marginLeft: screenWidth * 0.05,
  },
});
