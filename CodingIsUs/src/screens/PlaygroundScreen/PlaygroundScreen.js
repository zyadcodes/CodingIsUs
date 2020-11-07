// This is the screen that represents the Playground in the app where the users will be able to run basic code and
// practice what they've learned in the rest of the app
import React, {useState} from 'react';
import PlaygroundScreenStyle from './PlaygroundScreenStyle';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import {WebView} from 'react-native-webview';
import {screenHeight, screenWidth} from '../../../config/dimensions';

// Creates the functional component
const PlaygroundScreen = ({route, navigation}) => {
  // The state of the screen
  const [language, setLanguage] = useState('c');

  return (
    <WebView
      source={{uri: 'https://codingisus.com'}}
      style={{
        height: screenHeight * 1,
        width: screenWidth * 1,
        marginTop: screenHeight * 0.1
      }}
    />
  );

  // Renders the UI of the screen
  return (
    <View>
      <View style={PlaygroundScreenStyle.headerStyle}>
        <Text style={[fontStyles.longTitleTextStyle, fontStyles.white]}>
          {strings.Playground}
        </Text>
      </View>
      <View style={PlaygroundScreenStyle.dropDownContainerView}>
        <DropDownPicker
          items={[
            {
              label: 'C',
              value: 'c',
            },
            {
              label: 'C++',
              value: 'cpp',
            },
            {
              label: 'JavaScript',
              value: 'js',
            },
            {
              label: 'Python',
              value: 'python',
            },
            {
              label: 'Java',
              value: 'java',
            },
          ]}
          defaultValue={language}
          containerStyle={PlaygroundScreenStyle.dropDownStyle}
          style={PlaygroundScreenStyle.dropDownContainerStyle}
          dropDownStyle={PlaygroundScreenStyle.dropdownDropdownStyle}
          itemStyle={PlaygroundScreenStyle.dropdownItemStyle}
          labelStyle={[fontStyles.mainTextStyle, fontStyles.black]}
          onChangeItem={(item) => setLanguage(item.value)}
        />
      </View>
      <View style={PlaygroundScreenStyle.codeContainer}>
        <View style={PlaygroundScreenStyle.typeYourCode}>
          <Text style={[fontStyles.bigTextStyle, fontStyles.black]}>
            {strings.TypeYourCodeBelow}
          </Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

// Exports the screen
export default PlaygroundScreen;
