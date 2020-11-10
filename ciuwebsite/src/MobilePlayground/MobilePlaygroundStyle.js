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
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: screenHeight * 0.05,
    alignSelf: "center",
    width: screenWidth,
    paddingHorizontal: screenWidth * 0.05,
    height: screenHeight * 0.21,
    backgroundColor: colors.blue,
  },
  dropdownContainer: {
    marginTop: screenHeight * 0.025,
    marginLeft: screenWidth * 0.05,
    zIndex: 1,
  },
  typeCodeBelowTextContainer: {
    zIndex: 0,
    marginTop: screenHeight * 0.015,
    marginLeft: screenWidth * 0.05,
  },
  codeEditorContainer: {
    zIndex: 0,
    marginTop: screenHeight * 0.015,
  },
  outputStyle: {
    outline: 'none',
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.025,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    marginTop: screenHeight * 0.01,
    width: screenWidth,
    height: screenHeight * 0.1,
    backgroundColor: colors.white
  },
  runCodeButton: {
    width: screenWidth * 0.45,
    borderRadius: screenHeight * 0.05,
    height: screenHeight * 0.085,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: screenHeight * 0.02,
    marginRight: screenWidth * 0.05
  }
});
