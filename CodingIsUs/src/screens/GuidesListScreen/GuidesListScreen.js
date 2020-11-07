// This screen will present a layout of all of the guides that are currently presented in the app or a specific category's
// guides
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import {Icon} from 'react-native-elements';
import colors from '../../../config/colors';
import GuideIcon from '../../components/GuideIcon/GuideIcon';
import CIULogo from '../../../assets/images/CIULogo.png';
import GuideTitles from '../../../config/GuideTitles';
import NetInfo from '@react-native-community/netinfo';
import {logEvent} from '../../../config/Analytics';
import GuidesListScreenStyle from './GuidesListScreenStyle';

// Declares the functional component
const GuidesListScreen = ({route, navigation}) => {
  // Stores the status of the user's ad preference and the loading status of the screen
  const [isLoading, setIsLoading] = useState(true);
  const [guides, setGuides] = useState('');

  // The useEffect method is going to check for
  // an active internet connection
  useEffect(() => {
    loadScreenData();
  }, []);

  // Helper method for useEffect
  const loadScreenData = async () => {
    const {category} = route.params;
    const specificGuides = GuideTitles.filter((eachGuide) =>
      category.guideIDs.includes(eachGuide.guideID),
    );
    setGuides(specificGuides);
    setIsLoading(false);
  };

  // Handles the loading state of the screen
  if (isLoading === true) {
    return (
      <View style={GuidesListScreenStyle.container}>
        <View style={GuidesListScreenStyle.loadingContainer}>
          <Image
            source={CIULogo}
            resizeMode={'contain'}
            style={GuidesListScreenStyle.logoStyle}
          />
          <View style={GuidesListScreenStyle.mediumSpacer} />
          <ActivityIndicator size={25} color={colors.blue} animating={true} />
        </View>
      </View>
    );
  }

  return (
    <View style={GuidesListScreenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        ListHeaderComponent={
          <View>
            <View style={GuidesListScreenStyle.headerStyleBackButton}>
              <TouchableOpacity
                style={GuidesListScreenStyle.backButton}
                onPress={() => navigation.goBack()}>
                <Icon
                  type="font-awesome"
                  name="arrow-left"
                  color={colors.white}
                />
              </TouchableOpacity>
              <Text
                style={[
                  fontStyles.bigTextStyle,
                  fontStyles.white,
                  GuidesListScreenStyle.headerTextStyle,
                ]}>
                {route.params.category.title}
              </Text>
              <View />
            </View>
          </View>
        }
        data={guides}
        numColumns={2}
        keyExtractor={(item, index) => item.title}
        renderItem={({item}) => (
          <GuideIcon
            title={item.title}
            image={item.logo}
            onPress={() => {
              navigation.push('GuideScreen', {
                guideID: item.guideID,
              });
              logEvent('GuideClicked', {
                guideID: item.guideID,
                title: item.title,
                category: route.params.category.title,
              });
            }}
          />
        )}
      />
    </View>
  );
};

// Exports the module
export default GuidesListScreen;
