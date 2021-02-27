// This is the screen that represents the Playground in the app where the users will be able to run basic code and
// practice what they've learned in the rest of the app
import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View, ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import PlaygroundScreenStyle from './PlaygroundScreenStyle';
import colors from '../../../config/colors';
import {logEvent} from '../../../config/Analytics';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import AuthFlow from '../../components/AuthFlow/AuthFlow';
import auth from '@react-native-firebase/auth';
import {retrieveFirestoreData} from '../../../config/StorageFunctions';

// Creates the functional component
const PlaygroundScreen = ({route, navigation}) => {
  // The isLoading state for the screen along with the userID that is used
  // in the app for the logged in user
  const [isLoading, setIsLoading] = useState(true);
  const [userID, setUserID] = useState(route.params.userID);
  const [isAuthFlowVisible, setIsAuthFlowVisible] = useState(
    route.params.userID === '' ? true : false,
  );

  // useEffect method is going to subscribe to the onAuthStateChanged to monitor whether a user has been created or not
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  // This is a helper method that will sleep for a parameterized amount of seconds
  const sleep = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  // This is going to be the helper method to the useEffect state which is going to handle any additional
  // authentication
  const onAuthStateChanged = async (user) => {
    if (user) {
      await sleep(350);
      await retrieveFirestoreData(user.uid);
      setUserID(user.uid);
    } else {
      setUserID('');
    }
  };

  // Returns the UI of the screen that will force the user to log in
  // in order to use the Playground
  if (userID === '') {
    return (
      <View style={PlaygroundScreenStyle.codeInTheAppContainer}>
        <TouchableOpacity
          style={PlaygroundScreenStyle.codeInTheAppButton}
          onPress={() => {
            setIsAuthFlowVisible(false);
            setTimeout(() => {
              setIsAuthFlowVisible(true);
            }, 50);
          }}>
          <Text style={[fontStyles.white, fontStyles.biggerTextStyle]}>
            {strings.CodeInTheApp}
          </Text>
        </TouchableOpacity>
        {isAuthFlowVisible === true ? (
          <AuthFlow navigation={navigation} isVisible={isAuthFlowVisible} showSuccess={false} />
        ) : (
          <View />
        )}
      </View>
    );
  }

  // Returns the UI for the normal Playground screen
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
              // Logs the playground being accessed
              setIsLoading(false);
              logEvent('PlaygroundAccessed', {});
            }}
          />
        </View>
      </View>
    </View>
  );
};

// Exports the screen
export default PlaygroundScreen;
