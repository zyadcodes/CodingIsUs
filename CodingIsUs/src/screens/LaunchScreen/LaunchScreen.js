// This is going to be the screen that handles the logging in of the user if they have an account
// and passing in the correct parameters if they do have an account registered with Coding is Us
import React, {useEffect} from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
import CIULogo from '../../../assets/images/CIULogo.png';
import LaunchScreenStyle from './LaunchScreenStyle';
import auth from '@react-native-firebase/auth';
import colors from '../../../config/colors';
import {setupFBMatching} from '../../../config/Analytics';
import {getUserData} from '../../../config/StorageFunctions';

// Creates the functional component
const LaunchScreen = ({navigation, route}) => {
  // The useEffect method is going to handle the authentication state and pass on the correct
  // params and props to the next screens
  useEffect(() => {
    let alreadyCalled = false;
    auth().onAuthStateChanged(async (user) => {
      if (alreadyCalled === false) {
        alreadyCalled = true;
        if (user) {
          const userObject = await getUserData(user.uid);
          setupFBMatching(user.email);
          navigation.replace('BottomTabs', {
            userID: user.uid,
            user: userObject,
          });
          return;
        } else {
          navigation.replace('BottomTabs', {userID: '', user: ''});
          return;
        }
      }
    });
  }, []);

  // Renders the activity indicator to show the loading state of the app
  return (
    <View style={LaunchScreenStyle.container}>
      <Image
        style={LaunchScreenStyle.logoStyle}
        source={CIULogo}
        resizeMode={'contain'}
      />
      <View style={LaunchScreenStyle.spacer} />
      <ActivityIndicator animating={true} size={'large'} color={colors.blue} />
    </View>
  );
};

// Exports the component
export default LaunchScreen;
