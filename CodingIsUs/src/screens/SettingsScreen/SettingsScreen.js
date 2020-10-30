// This screen is going to have all of the settings that will be accessible by the user along with any terms
// and policies
import React from 'react';
import SetingsScreenStyle from './SettingsScreenStyle';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import SettingsScreenStyle from './SettingsScreenStyle';
import {Icon} from 'react-native-elements';
import colors from '../../../config/colors';
import {logEvent} from '../../../config/Analytics';

// Declares the functional component
const SettingsScreen = ({navigation}) => {
  // Creates a component to represent each SettingsCard in order to save code
  const SettingsCard = (title, url) => (
    <TouchableOpacity
      style={SetingsScreenStyle.settingsCard}
      onPress={() => {
        logEvent('PolicyClicked', {});
        Linking.openURL(url);
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
      <View style={SettingsScreenStyle.cardsContainer}>
        {SettingsCard(strings.AboutUs, 'https://codingisus.com/')}
        {SettingsCard(strings.Facebook, 'https://facebook.com/codingisus')}
        {SettingsCard(strings.Instagram, 'https://instagram.com/codingisus')}
        {SettingsCard(
          strings.PrivacyPolicy,
          'https://www.codingisus.com/privacy-policy',
        )}
        {SettingsCard(
          strings.TermsOfService,
          'https://www.codingisus.com/terms-of-service',
        )}
      </View>
      <View>
        <Text style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
          {strings.FollowUsOnSocialMedia}
        </Text>
        <View style={SetingsScreenStyle.socialMediaContainer}>
          <TouchableOpacity
            onPress={() => {
              logEvent('FacebookClicked', {});
              Linking.openURL('https://www.facebook.com/codingisus');
            }}>
            <SocialIcon type="facebook" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              logEvent('InstagramClicked', {});
              Linking.openURL('https://www.instagram.com/codingisus/');
            }}>
            <SocialIcon type="instagram" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Exports the module
export default SettingsScreen;
