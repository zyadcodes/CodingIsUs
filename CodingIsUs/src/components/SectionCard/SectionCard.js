// This is going to represet the component that will display a section in the GuideScreen. It will give
// the section's title, a description, and a completion status.
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import fontStyles from '../../../config/fontStyles';
import SectionCardStyle from './SectionCardStyle';

// Creates the functional component
const SectionCard = (props) => {
  // Fetches the props for the component
  const {isCompleted, sectionTitle, sectionDescription, onPress} = props;

  // Renders the UI
  return (
    <TouchableOpacity
      style={SectionCardStyle.container}
      onPress={() => onPress()}>
      <View
        style={
          isCompleted
            ? [
                SectionCardStyle.completedIndicator,
                SectionCardStyle.greenBackground,
              ]
            : [
                SectionCardStyle.completedIndicator,
                SectionCardStyle.redBackground,
              ]
        }
      />
      <View style={SectionCardStyle.textContainer}>
        <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
          {sectionTitle}
        </Text>
        <Text style={[fontStyles.black, fontStyles.subTextStyle]}>
          {sectionDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Exports the compenents
export default SectionCard;
