// This screen is going to have all of the settings that will be accessible by the user along with any terms
// and policies
import React, {useState, useEffect} from 'react';
import SetingsScreenStyle from './SettingsScreenStyle';
import {View, Text, Linking, TouchableOpacity, Alert} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import SettingsScreenStyle from './SettingsScreenStyle';
import {Icon} from 'react-native-elements';
import colors from '../../../config/colors';
import {logEvent} from '../../../config/Analytics';
import auth from '@react-native-firebase/auth';
import AwesomeAlert from '../../components/AwesomeAlert/AwesomeAlert';

// Declares the functional component
const SettingsScreen = ({navigation, route}) => {
  // Fetches the userID from the route params
  const [userID, setUserID] = useState(route.params.userID);
  const [isLoading, setIsLoading] = useState(false);

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
      setUserID(user.uid);
    } else {
      await sleep(250);
      setUserID('');
      setIsLoading(false);
    }
  };

  // Creates a component to represent each SettingsCard in order to save code
  const SettingsCard = (title, text) => (
    <TouchableOpacity
      style={SetingsScreenStyle.settingsCard}
      onPress={() => {
        logEvent('PolicyClicked', {});
        navigation.push('PolicyScreen', {
          title,
          text,
        });
      }}>
      <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>{title}</Text>
      <Icon
        name="angle-right"
        type="font-awesome"
        color={colors.blue}
        size={35}
      />
    </TouchableOpacity>
  );

  return (
    <View style={SetingsScreenStyle.container}>
      <View>
        <View style={SetingsScreenStyle.headerStyleBackButton}>
          <TouchableOpacity
            style={SetingsScreenStyle.backButton}
            onPress={() => navigation.goBack()}>
            <Icon type="font-awesome" name="arrow-left" color={colors.white} />
          </TouchableOpacity>
          <Text
            style={[
              fontStyles.bigTextStyle,
              fontStyles.white,
              SetingsScreenStyle.headerTextStyle,
            ]}>
            {strings.Settings}
          </Text>
          <View />
        </View>
      </View>
      <View style={SettingsScreenStyle.cardsContainer}>
        {SettingsCard(strings.AboutUs, strings.AboutUsText)}
        {SettingsCard(strings.PrivacyPolicy, strings.PrivacyPolicyText)}
        {SettingsCard(strings.TermsOfService, strings.TermsOfServiceText)}
        {userID !== '' ? (
          <TouchableOpacity
            style={SetingsScreenStyle.settingsCard}
            onPress={() => {
              setIsLoading(true);
              auth().signOut();
            }}>
            <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
              {strings.SignOut}
            </Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <View>
        <View style={SetingsScreenStyle.socialMediaContainer}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(strings.SwitchingApps, strings.SwitchingAppsText, [
                {
                  text: strings.Ok,
                  onPress: () => {
                    logEvent('FacebookClicked', {});
                    Linking.openURL('https://www.facebook.com/codingisus');
                  },
                },
                {
                  text: strings.Cancel,
                  style: 'cancel',
                },
              ]);
            }}>
            <SocialIcon type="facebook" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(strings.SwitchingApps, strings.SwitchingAppsText, [
                {
                  text: strings.Ok,
                  onPress: () => {
                    logEvent('InstagramClicked', {});
                    Linking.openURL('https://www.instagram.com/codingisus/');
                  },
                },
                {
                  text: strings.Cancel,
                  style: 'cancel',
                },
              ]);
            }}>
            <SocialIcon type="instagram" />
          </TouchableOpacity>
        </View>
      </View>
      {isLoading === true ? (
        <AwesomeAlert
          show={true}
          showProgress={true}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={false}
          progressSize={'large'}
          progressColor={colors.blue}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

// Exports the module
export default SettingsScreen;
