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
import admob, {
  InterstitialAd,
  TestIds,
  MaxAdContentRating,
  AdsConsent,
  AdEventType,
  AdsConsentStatus,
} from '@react-native-firebase/admob';
import GuidesListScreenStyle from './GuidesListScreenStyle';

// Declares the functional component
const GuidesListScreen = ({route, navigation}) => {
  // Stores the status of the user's ad preference and the loading status of the screen
  const [isLoading, setIsLoading] = useState(true);
  const [adEEAStatus, setAdEEAStatus] = useState('');
  const [guides, setGuides] = useState('');

  // The useEffect method is going to handle any AdMob settings that need to be configured and check for
  // an active internet connection
  useEffect(() => {
    checkInternetConnection();
  }, []);

  // Checks the internet connection
  const checkInternetConnection = async () => {
    const networkState = await NetInfo.fetch();
    if (networkState.isConnected) {
      setupAds();
    } else {
      Alert.alert(strings.Whoops, strings.CodingIsUsRequiresInternet, [
        {
          text: strings.TryAgain,
          onPress: () => checkInternetConnection(),
        },
      ]);
    }
  };

  // Helper method for useEffect
  const setupAds = async () => {
    // Requests consent from European Users to show Adverts
    const consentInfo = await AdsConsent.requestInfoUpdate([
      'pub-3956967028189707',
    ]);
    if (
      consentInfo.isRequestLocationInEeaOrUnknown &&
      consentInfo.status === AdsConsentStatus.UNKNOWN
    ) {
      const formResult = await AdsConsent.showForm({
        privacyPolicy: 'https://codingisus.com/pages/privacy-policy',
        withPersonalizedAds: true,
        withNonPersonalizedAds: true,
        withAdFree: false,
      });
      setAdEEAStatus(formResult.status);
    }

    await admob().setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.T,

      // Indicates that you want your content treated as child-directed for purposes of COPPA.
      tagForChildDirectedTreatment: false,

      // Indicates that you want the ad request to be handled in a
      // manner suitable for users under the age of consent.
      tagForUnderAgeOfConsent: false,
    });
    if (!route.params) {
      setGuides(GuideTitles);
      setIsLoading(false);
    } else {
      const {category} = route.params;
      const specificGuides = GuideTitles.filter((eachGuide) =>
        category.guideIDs.includes(eachGuide.guideID),
      );
      setGuides(specificGuides);
      // Creates the Ad Request
      const adUnitId = __DEV__
        ? TestIds.INTERSTITIAL
        : Platform.OS === 'ios'
        ? 'ca-app-pub-3956967028189707/8619654687'
        : 'ca-app-pub-3956967028189707/9741164661';

      const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly:
          adEEAStatus === AdsConsentStatus.NON_PERSONALIZED,
        keywords: ['computer', 'coding', 'programming', 'computer science'],
      });
      const eventListener = interstitial.onAdEvent((type) => {
        if (type === AdEventType.LOADED) {
          interstitial.show();
        } else if (type === AdEventType.LEFT_APPLICATION) {
          logEvent('AppClosedFromAd', {
            screen: 'GuideListScreen',
          });
        } else if (type === AdEventType.ERROR) {
          logEvent('AdError', {screen: 'GuideListScreen'});
        }
      });

      // Start loading the interstitial straight away
      interstitial.load();
      setIsLoading(false);
      // Unsubscribe from events on unmount
      return () => eventListener();
    }
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
        ListHeaderComponent={
          route.params ? (
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
                <Text style={[fontStyles.bigTextStyle, fontStyles.white]}>
                  {route.params.category.title}
                </Text>
                <View />
              </View>
            </View>
          ) : (
            <View>
              <View style={GuidesListScreenStyle.headerStyle}>
                <Text style={[fontStyles.longTitleTextStyle, fontStyles.white]}>
                  {strings.AllGuides}
                </Text>
              </View>
            </View>
          )
        }
        data={guides}
        numColumns={2}
        keyExtractor={(item, index) => item.title}
        renderItem={({item}) => (
          <GuideIcon
            title={item.title}
            image={item.logo}
            onPress={() => {
              if (route.params) {
                navigation.push('GuideScreen', {
                  guideID: item.guideID,
                  adEEAStatus,
                });
                logEvent('GuideClickedFromCategory', {
                  guideID: item.guideID,
                  title: item.title,
                  category: route.params.category.title,
                });
              } else {
                navigation.push('GuideScreen', {
                  adEEAStatus,
                  loadAd: true,
                  guideID: item.guideID,
                });
                logEvent('GuideClicked', {
                  guideID: item.guideID,
                  title: item.title,
                });
              }
            }}
          />
        )}
      />
    </View>
  );
};

// Exports the module
export default GuidesListScreen;
