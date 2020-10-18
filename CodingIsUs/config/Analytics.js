// This will export the functions used to interact with both Facebook Analytics and Google Analytics to be used
// throughout the apps
import firebaseAnalytics from '@react-native-firebase/analytics';
import {AppEventsLogger} from 'react-native-fbsdk';

// This single function is going to log analytics events and parameters to both Facebook and Analytics
const logEvent = (events, parameters) => {
  firebaseAnalytics().logEvent(events, parameters);
  AppEventsLogger.logEvent(events, parameters);
};

export {logEvent};
