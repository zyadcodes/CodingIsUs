// This will contain the StyleSheet for the MobilePlayground Screen
import { StyleSheet, Dimensions } from "react-native-web";
import colors from "../config/colors";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: colors.lightBlue,
  },
});
