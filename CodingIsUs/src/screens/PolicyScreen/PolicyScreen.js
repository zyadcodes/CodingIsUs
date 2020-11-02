// This is going to be the screen that represents the policies as well as the About Us screen.
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import PolicyScreenStyle from './PolicyScreenStyle';
import {Icon} from 'react-native-elements';
import fontStyles from '../../../config/fontStyles';
import colors from '../../../config/colors';
import {screenHeight} from '../../../config/dimensions';

// Declares the functional component
const PolicyScreen = ({route, navigation}) => {
  const {title, text} = route.params;

  // Returns the UI of the screen
  return (
    <ScrollView style={PolicyScreenStyle.container}>
      <View style={PolicyScreenStyle.headerStyleBackButton}>
        <TouchableOpacity
          style={PolicyScreenStyle.backButton}
          onPress={() => navigation.goBack()}>
          <Icon type="font-awesome" name="arrow-left" color={colors.white} />
        </TouchableOpacity>
        <Text
          style={[
            fontStyles.bigTextStyle,
            fontStyles.white,
            {textAlign: 'center'},
          ]}>
          {title}
        </Text>
        <View />
      </View>
      <View style={PolicyScreenStyle.textContainer}>
        <Text
          style={[
            fontStyles.bigTextStyle,
            fontStyles.black,
            {lineHeight: screenHeight * 0.045},
          ]}>
          {text}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PolicyScreen;
