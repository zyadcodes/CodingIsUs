// This is going to export the height and the width of the screen to the rest of the app's files as named exports
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export {screenHeight, screenWidth};
