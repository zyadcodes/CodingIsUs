// This is the screen that represents the Playground in the app where the users will be able to run basic code and
// practice what they've learned in the rest of the app
import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View, ActivityIndicator} from 'react-native';
import PlaygroundScreenStyle from './PlaygroundScreenStyle';
import colors from '../../../config/colors';
import {logEvent} from '../../../config/Analytics';

// Creates the functional component
const PlaygroundScreen = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    logEvent('PlaygroundAccessed', {});
  }, []);

  return (
    <View style={PlaygroundScreenStyle.webviewContainer}>
      {isLoading === true ? (
        <View style={PlaygroundScreenStyle.container}>
          <View style={PlaygroundScreenStyle.loadingContainer}>
            <ActivityIndicator size={25} color={colors.blue} animating={true} />
          </View>
        </View>
      ) : (
        <View style={{height: 0, width: 0}} />
      )}
      <View style={PlaygroundScreenStyle.webviewContainer}>
        <View style={{flex: 1}}>
          <WebView
            source={{uri: 'https://coding-is-us.web.app'}}
            incognito={true}
            scrollEnabled={false}
            onLoadEnd={() => {
              setIsLoading(false);
            }}
          />
        </View>
      </View>
    </View>
  );
};

// Exports the screen
export default PlaygroundScreen;
