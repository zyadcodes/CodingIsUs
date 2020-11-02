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
      <View style={SetingsScreenStyle.headerStyle}>
        <Text style={[fontStyles.longTitleTextStyle, fontStyles.white]}>
          {strings.Settings}
        </Text>
      </View>
      <View style={SettingsScreenStyle.cardsContainer}>
        {SettingsCard(strings.AboutUs, strings.AboutUsText)}
        {SettingsCard(strings.PrivacyPolicy, strings.PrivacyPolicyText)}
        {SettingsCard(strings.TermsOfService, strings.TermsOfServiceText)}
      </View>
      <View>
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
