// This screen will present a layout of all of the categories that are currently presented in the app
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import AllCategoriesScreenStyle from './AllCategoriesScreenStyle';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import colors from '../../../config/colors';
import GuideIcon from '../../components/GuideIcon/GuideIcon';
import CIULogo from '../../../assets/images/CIULogo.png';
import Categories from '../../../config/Categories';
import NetInfo from '@react-native-community/netinfo';
import {logEvent} from '../../../config/Analytics';
import Svg, {Path} from 'react-native-svg';

// Declares the functional component
const AllCategoriesScreen = ({navigation}) => {
  // Stores the status of the user's ad preference and the loading status of the screen
  const [isLoading, setIsLoading] = useState(true);

  // The useEffect method is going to check for
  // an active internet connection
  useEffect(() => {
    checkInternetConnection();
  }, []);

  // Checks the internet connection
  const checkInternetConnection = async () => {
    const networkState = await NetInfo.fetch();
    if (networkState.isConnected) {
      setIsLoading(false);
    } else {
      Alert.alert(strings.Whoops, strings.CodingIsUsRequiresInternet, [
        {
          text: strings.TryAgain,
          onPress: () => checkInternetConnection(),
        },
      ]);
    }
  };

  // Handles the loading state of the screen
  if (isLoading === true) {
    return (
      <View style={AllCategoriesScreenStyle.container}>
        <View style={AllCategoriesScreenStyle.loadingContainer}>
          <Image
            source={CIULogo}
            resizeMode={'contain'}
            style={AllCategoriesScreenStyle.logoStyle}
          />
          <View style={AllCategoriesScreenStyle.mediumSpacer} />
          <ActivityIndicator size={25} color={colors.blue} animating={true} />
        </View>
      </View>
    );
  }
  return (
    <View style={AllCategoriesScreenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Categories}
        numColumns={2}
        keyExtractor={(item, index) => item.title}
        ListHeaderComponent={
          <View>
            <View style={AllCategoriesScreenStyle.svgOuterContainer}>
              <View style={AllCategoriesScreenStyle.svgInnerContainer}>
                <Svg
                  height={'60%'}
                  width={'100%'}
                  viewBox="0 0 1440 320"
                  style={AllCategoriesScreenStyle.svgStyle}>
                  <Path
                    fill={colors.blue}
                    d="M0,160L40,154.7C80,149,160,139,240,128C320,117,400,107,480,117.3C560,128,640,160,720,176C800,192,880,192,960,160C1040,128,1120,64,1200,64C1280,64,1360,128,1400,160L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                  />
                </Svg>
              </View>
            </View>
            <View style={AllCategoriesScreenStyle.headerStyle}>
              <Text style={[fontStyles.longTitleTextStyle, fontStyles.white]}>
                {strings.CodingIsUs}
              </Text>
              <View style={AllCategoriesScreenStyle.smallSpacer} />
              <Text style={[fontStyles.bigTextStyle, fontStyles.white]}>
                {strings.WhatDoYouWantToLearnAbout}
              </Text>
            </View>
          </View>
        }
        renderItem={({item}) => (
          <GuideIcon
            title={item.title}
            iconName={item.iconName}
            iconColor={item.iconColor}
            onPress={() => {
              navigation.push('GuidesListScreen', {
                category: item,
              });
              logEvent('CategoryClicked', {title: item.title});
            }}
          />
        )}
      />
    </View>
  );
};

// Exports the module
export default AllCategoriesScreen;
