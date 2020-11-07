// This is going to be the React Native Screen that will connect to the WebView that will render the
// Code Editor
import React from 'react';
import {WebView} from 'react-native-webview';

// Creates the functional component
const RNPlaygroundScreen = ({route, navigation}) => {
  // Renders the UI
  return (
    <WebView source={{uri: 'https://coding-is-us--test-j90vzeqe.web.app'}} />
  );
};

// Exports the module
export default RNPlaygroundScreen;
