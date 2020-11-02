// This screen is going to be the one that contains the resources for each guide like documentation and other
// external links
import React from 'react';
import {View, Text, FlatList, Linking, Alert} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import BackButton from '../../components/BackButton/BackButton';
import fontStyles from '../../../config/fontStyles';
import strings from '../../../config/strings';
import ResourcesScreenStyle from './ResourcesScreenStyle';

// Declares the functional component
const ResourcesScreen = ({route, navigation}) => {
  // Fetches the parameter from the previous screen
  const {guide} = route.params;

  // Renders the UI of the screen
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={guide.additionalResources}
      ListHeaderComponent={
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <View style={ResourcesScreenStyle.titleContainer}>
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTitleTextStyle,
                fontStyles.bold,
              ]}>
              {strings.AdditionalResources}
            </Text>
          </View>
        </View>
      }
      keyExtractor={(item, index) => index + ''}
      renderItem={({item, index}) => (
        <View style={ResourcesScreenStyle.resourceStyle}>
          <Hyperlink
            linkDefault={true}
            linkStyle={[fontStyles.bigTextStyle, fontStyles.blue]}>
            <Text style={[fontStyles.bigTextStyle, fontStyles.black]}>
              {item.title}: {item.link}
            </Text>
          </Hyperlink>
        </View>
      )}
    />
  );
};

// Exports the module
export default ResourcesScreen;
