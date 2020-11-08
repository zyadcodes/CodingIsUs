// This is going to be the screen in the mobile app which will contain the coding playground. It will utilize React Native
// web in order to contain all of the code that is used in the app
import React, { useState } from "react";
import { View, Text } from "react-native-web";
import MobilePlaygroundStyle from "./MobilePlaygroundStyle";

// Creates the functional component
const MobilePlayground = () => {
  // The state of the code being entered and the language selected. Also the loading state
  const [isCompiling, setIsCompiling] = useState(false);
  const [languageSelected, setLanguageSelected] = useState("java");
  const [code, setCode] = useState("");

  // Returns the UI of the screen
  return (
    <View style={MobilePlaygroundStyle.container}>
      <Text>Hello</Text>
    </View>
  );
};

/* 
 <div>
      <AceEditor mode="python" value={code} theme="monokai" />
    </div>
    */

// Exports the playground
export default MobilePlayground;
