// This is going to be the file that is launched when the app is first launched by the user. Will navigate directly to the
// MainStackNavigator
import 'react-native-gesture-handler';
import React, {useRef, useEffect} from 'react';
import MainStackNavigator from './src/MainStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import firebaseAnalytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';
import codePush from 'react-native-code-push';
import {logEvent} from './config/Analytics';

// Declares the functional component
let App = () => {
  // Initializes references for Firebase Analytics
  const routeNameRef = useRef();
  const navigationRef = useRef();

  // Double checks that there is an active Internet Connection
  // Requests Notification permissions for Firebase Cloud Messaging
  useEffect(() => {
    logEvent('AppOpen', {});
    useEffectHelper();
  }, []);

  // Helper method for UseEffect
  const useEffectHelper = async () => {
    await messaging().requestPermission();
  };

  // Renders the UI. Wrapped by React-Navigation container
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={async (state) => {
        // Sets up Screen Analytics in Firebase
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          await firebaseAnalytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
      }}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

App = codePush(App);
export default App;
