// This component will be the Icon component for each Guide & will be in the HomeScreen
import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import fontStyles from '../../../config/fontStyles';
import GuideIconStyle from './GuideIconStyle';
import {RFPercentage} from 'react-native-responsive-fontsize';

// Creates the functional component
const GuideIcon = (props) => {
  // Fetches the props passed into this component
  const {title, image, onPress, iconName, iconColor} = props;

  // Renders the UI of the component
  return (
    <TouchableOpacity
      style={GuideIconStyle.container}
      onPress={() => onPress()}>
      {image ? (
        <Image
          resizeMode={'contain'}
          style={GuideIconStyle.image}
          source={image}
        />
      ) : (
        <Icon
          type="font-awesome-5"
          size={RFPercentage(7)}
          name={iconName}
          color={iconColor}
        />
      )}
      <View style={GuideIconStyle.middleSpacer} />
      <Text
        style={[
          fontStyles.bigTextStyle,
          fontStyles.black,
          {textAlign: 'center'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// Exports the module
export default GuideIcon;
