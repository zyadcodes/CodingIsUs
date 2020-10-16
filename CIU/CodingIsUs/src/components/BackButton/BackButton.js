// This component will be the floating back button that will be positioned in the top left corner of screens & will
// navigate backwards in the stack
import React from 'react';
import BackButtonStyle from './BackButtonStyle';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../../../config/colors';

// Declares the functional component
const BackButton = (props) => {
  // Fetches the props for the component
  const {onPress} = props;
  // Returns the UI
  return (
    <TouchableOpacity
      style={BackButtonStyle.buttonStyle}
      onPress={() => onPress()}>
      <Icon type="font-awesome" name="arrow-left" color={colors.white} />
    </TouchableOpacity>
  );
};

// Exports the button
export default BackButton;
