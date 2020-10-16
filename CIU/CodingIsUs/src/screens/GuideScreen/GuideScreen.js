// This is going to be the base component for all guide screens. It will have a back icon, position all the content
// correctly, and act as a layout setter for the guides offered in the app.
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import fontStyles from '../../../config/fontStyles';
import GuideScreenStyle from './GuideScreenStyle';
import {
  InterstitialAd,
  TestIds,
  AdEventType,
  AdsConsentStatus,
} from '@react-native-firebase/admob';
import NetInfo from '@react-native-community/netinfo';
import strings from '../../../config/strings';
import colors from '../../../config/colors';
import Guides from '../../../config/Guides';
import {Icon} from 'react-native-elements';
import BackButton from '../../components/BackButton/BackButton';
import CIULogo from '../../../assets/images/CIULogo.png';
import {useIsFocused} from '@react-navigation/native';
import {logEvent} from '../../../config/Analytics';
import {getGuideCompletionStatus} from '../../../config/StorageFunctions';

// Declares the functional component
const GuideScreen = ({navigation, route}) => {
  // Fetches the props passed into this screen
  const {guideID, adEEAStatus, loadAd} = route.params;

  const isFocused = useIsFocused();

  // The isLoading state
  const [isLoading, setIsLoading] = useState(true);
  const [guide, setGuide] = useState('');
  const [completionData, setCompletionData] = useState('');

  // The useEffect method is going to load  that need to be configured and check for
  // an active internet connection and then retrieve the data for which section has been completed
  useEffect(() => {
    setIsLoading(true);
    if (loadAd) {
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
            screen: 'GuideScreen',
          });
        } else if (type === AdEventType.ERROR) {
          logEvent('AdError', {screen: 'GuideScreen'});
        }
      });

      // Start loading the interstitial straight away
      interstitial.load();

      checkInternetConnection();
      // Unsubscribe from events on unmount
      return () => eventListener();
    } else {
      checkInternetConnection();
    }
  }, []);

  // Makes sure that the most recent completion data is displayed by setting it every time this screen is navigated to
  useEffect(() => {
    if (isFocused === true) {
      loadSectionCompletionData();
    }
  }, [isFocused]);

  // Checks for an active internet connection
  const checkInternetConnection = async () => {
    const networkState = await NetInfo.fetch();
    if (!networkState.isConnected) {
      Alert.alert(strings.Whoops, strings.CodingIsUsRequiresInternet, [
        {
          text: strings.TryAgain,
          onPress: () => checkInternetConnection(),
        },
      ]);
    }
  };

  // Retrieves which sections in this guide have been marked as completed and which haven't
  const loadSectionCompletionData = async () => {
    const specificGuide = Guides.find(
      (eachGuide) => guideID === eachGuide.guideID,
    );
    setGuide(specificGuide);
    const data = await getGuideCompletionStatus(specificGuide);
    setCompletionData(data);
    setIsLoading(false);
  };

  if (isLoading === true) {
    return (
      <View style={GuideScreenStyle.container}>
        <View style={GuideScreenStyle.loadingContainer}>
          <ActivityIndicator size={25} color={colors.blue} animating={true} />
        </View>
      </View>
    );
  }

  // Returns the UI of the screen
  return (
    <View
      style={GuideScreenStyle.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={GuideScreenStyle.titleContainer}>
              <Text
                style={[
                  fontStyles.black,
                  fontStyles.bigTitleTextStyle,
                  fontStyles.bold,
                ]}>
                {guide.title}
              </Text>
              <Image
                source={guide.logo}
                resizeMode={'contain'}
                style={GuideScreenStyle.image}
              />
            </View>
          </View>
        }
        data={guide.sections}
        keyExtractor={(item, index) => item.ID + ''}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={
              completionData[index] === 'true'
                ? GuideScreenStyle.textCardGreen
                : GuideScreenStyle.textCard
            }
            onPress={() => {
              logEvent('SectionClicked', {
                sectionID: item.ID,
              });
              navigation.push('SectionScreen', {
                section: item,
                completionStatus: completionData[index],
                adEEAStatus,
              });
            }}>
            <Text style={[fontStyles.black, fontStyles.mainTextStyle]}>
              {item.name}
            </Text>
            <Icon
              name="angle-right"
              type="font-awesome"
              color={
                completionData[index] === 'true' ? colors.black : colors.blue
              }
              size={30}
            />
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View style={GuideScreenStyle.bottomTextContainer}>
            <View style={GuideScreenStyle.mediumSpacer} />
            <Text
              style={[
                fontStyles.longTitleTextStyle,
                fontStyles.black,
                {textAlign: 'center'},
              ]}>
              {strings.WantToLearnMore}
            </Text>
            <View style={GuideScreenStyle.smallSpacer} />
            <Text
              style={[
                fontStyles.bigTextStyle,
                fontStyles.black,
                {textAlign: 'center'},
              ]}>
              {strings.ReachOutToUs}
            </Text>
            <View style={GuideScreenStyle.mediumSpacer} />
            <Image
              source={CIULogo}
              resizeMode={'contain'}
              style={GuideScreenStyle.logoStyle}
            />
            <View style={GuideScreenStyle.mediumSpacer} />
          </View>
        }
      />
    </View>
  );
};

// Exports the module
export default GuideScreen;
