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
import admob, {
  InterstitialAd,
  TestIds,
  MaxAdContentRating,
  AdsConsent,
  AdEventType,
  AdsConsentStatus,
} from '@react-native-firebase/admob';
import NetInfo from '@react-native-community/netinfo';
import strings from '../../../config/strings';
import colors from '../../../config/colors';
import Guides from '../../../config/Guides';
import GuideTitles from '../../../config/GuideTitles';
import {Icon} from 'react-native-elements';
import GuideIcon from '../../components/GuideIcon/GuideIcon';
import {useIsFocused} from '@react-navigation/native';
import ProgressBar from 'react-native-progress/Bar';
import {logEvent} from '../../../config/Analytics';
import {getGuideCompletionStatus} from '../../../config/StorageFunctions';
import {screenWidth, screenHeight} from '../../../config/dimensions';
import SectionCard from '../../components/SectionCard/SectionCard';
import {
  getAdShownStatus,
  updateAdShownStatus,
} from '../../../config/StorageFunctions';

// Declares the functional component
const GuideScreen = ({navigation, route}) => {
  // Fetches the props passed into this screen
  const {guideID} = route.params;

  const isFocused = useIsFocused();

  // The isLoading state and the other state variables on this screen
  const [adEEAStatus, setAdEEAStatus] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [guide, setGuide] = useState('');
  const [relatedGuides, setRelatedGuides] = useState('');
  const [completionData, setCompletionData] = useState('');
  const [progress, setProgress] = useState('');

  // The useEffect method is going to load  that need to be configured and check for
  // an active internet connection and then retrieve the data for which section has been completed
  useEffect(() => {
    checkInternetConnection();
  }, []);

  // Makes sure that the most recent completion data is displayed by setting it every time this screen is navigated to
  useEffect(() => {
    if (isFocused === true) {
      loadScreenData();
    }
  }, [isFocused]);

  // Sets up and shows the advertisements if it needs to
  const setupAds = async () => {
    const adShownStatus = await getAdShownStatus();
    if (adShownStatus === 'false') {
      // Requests consent from European Users to show Adverts
      const consentInfo = await AdsConsent.requestInfoUpdate([
        'pub-3956967028189707',
      ]);
      let formResult = '';
      if (
        consentInfo.isRequestLocationInEeaOrUnknown &&
        consentInfo.status === AdsConsentStatus.UNKNOWN
      ) {
        formResult = await AdsConsent.showForm({
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
      // Creates the Ad Request
      const adUnitId = __DEV__
        ? TestIds.INTERSTITIAL
        : Platform.OS === 'ios'
        ? 'ca-app-pub-3956967028189707/8619654687'
        : 'ca-app-pub-3956967028189707/9741164661';

      const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly:
          formResult.status === AdsConsentStatus.NON_PERSONALIZED,
        keywords: ['computer', 'coding', 'programming', 'computer science'],
      });
      const eventListener = interstitial.onAdEvent(async (type) => {
        if (type === AdEventType.LOADED) {
          interstitial.show();
          updateAdShownStatus('true');
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
    }
  };

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

  // Retrieves which sections in this guide have been marked as completed and which haven't as well as the actual
  // guide and related guides
  const loadScreenData = async () => {
    const specificGuide = Guides.find(
      (eachGuide) => guideID === eachGuide.guideID,
    );
    let relatedGuides = [];
    for (let relatedGuideID of specificGuide.relatedGuides) {
      const relatedGuide = GuideTitles.find((eachGuide) => {
        return eachGuide.guideID === relatedGuideID;
      });
      relatedGuides.push(relatedGuide);
    }
    setRelatedGuides(relatedGuides);
    setGuide(specificGuide);
    const data = await getGuideCompletionStatus(specificGuide);
    let numSectionsCompleted = 0.0;
    for (const section of data) {
      if (section === 'true') {
        numSectionsCompleted++;
      }
    }
    const progressNumber = parseFloat(
      (numSectionsCompleted / data.length).toFixed(2),
    );
    if (progressNumber === 1.0 && progress !== '') {
      logEvent('GuideCompleted', {
        guideID: guideID,
      });
    }
    setProgress(progressNumber);
    setCompletionData(data);
    setIsLoading(false);
    setupAds();
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
            <TouchableOpacity
              style={GuideScreenStyle.backButton}
              onPress={() => navigation.goBack()}>
              <Icon
                type="font-awesome"
                name="arrow-left"
                color={colors.blue}
                size={27}
              />
            </TouchableOpacity>
            <Image
              source={guide.cover}
              resizeMode={'cover'}
              style={GuideScreenStyle.coverImage}
            />
            <View style={GuideScreenStyle.guideInformation}>
              <View style={GuideScreenStyle.logoTitle}>
                <View style={GuideScreenStyle.logoContainer}>
                  <Image
                    source={guide.logo}
                    resizeMode={'contain'}
                    style={GuideScreenStyle.image}
                  />
                </View>
                <Text style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
                  {guide.title}
                </Text>
              </View>
              <View style={GuideScreenStyle.descriptionText}>
                <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
                  {guide.description}
                </Text>
              </View>
              <View>
                <Text style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
                  {strings.Length}
                  {guide.duration}
                </Text>
              </View>
              <View style={GuideScreenStyle.progressContainerStyle}>
                <ProgressBar
                  color={colors.blue}
                  unfilledColor={colors.white}
                  width={screenWidth * 0.8}
                  height={screenHeight * 0.035}
                  progress={progress}
                />
                <View style={GuideScreenStyle.progressPercentage}>
                  <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
                    {(progress * 100).toFixed(0)}%
                  </Text>
                </View>
              </View>
              {!completionData.includes('true') ? (
                <View>
                  <View style={GuideScreenStyle.titleText}>
                    <Text
                      style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
                      {strings.GetStarted}
                    </Text>
                  </View>
                  <SectionCard
                    isCompleted={false}
                    sectionTitle={guide.sections[0].name}
                    sectionDescription={guide.sections[0].description}
                    onPress={() => {
                      logEvent('SectionClicked', {
                        sectionID: guide.sections[0].ID,
                      });
                      navigation.push('SectionScreen', {
                        section: guide.sections[0],
                        completionStatus: completionData[0],
                        adEEAStatus,
                      });
                    }}
                  />
                  <View style={GuideScreenStyle.bottomSpacer} />
                </View>
              ) : completionData.lastIndexOf('true') ===
                guide.sections.length - 1 ? (
                <View />
              ) : (
                <View>
                  <View style={GuideScreenStyle.titleText}>
                    <Text
                      style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
                      {strings.UpNext}
                    </Text>
                  </View>
                  <SectionCard
                    isCompleted={false}
                    sectionTitle={
                      guide.sections[completionData.lastIndexOf('true') + 1]
                        .name
                    }
                    sectionDescription={
                      guide.sections[completionData.lastIndexOf('true') + 1]
                        .description
                    }
                    onPress={() => {
                      logEvent('SectionClicked', {
                        sectionID:
                          guide.sections[completionData.lastIndexOf('true') + 1]
                            .ID,
                      });
                      navigation.push('SectionScreen', {
                        section:
                          guide.sections[
                            completionData.lastIndexOf('true') + 1
                          ],
                        completionStatus:
                          completionData[
                            completionData.lastIndexOf('true') + 1
                          ],
                        adEEAStatus,
                      });
                    }}
                  />
                  <View style={GuideScreenStyle.bottomSpacer} />
                </View>
              )}
              <View style={GuideScreenStyle.titleText}>
                <Text style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
                  {strings.AllSections}
                </Text>
              </View>
            </View>
          </View>
        }
        data={guide.sections}
        keyExtractor={(item, index) => item.ID + ''}
        renderItem={({item, index}) => (
          <View style={GuideScreenStyle.sectionContainer}>
            <SectionCard
              isCompleted={completionData[index] === 'true'}
              sectionTitle={item.name}
              sectionDescription={item.description}
              onPress={() => {
                logEvent('SectionClicked', {
                  sectionID: item.ID,
                });
                navigation.push('SectionScreen', {
                  section: item,
                  completionStatus: completionData[index],
                  adEEAStatus,
                });
              }}
            />
          </View>
        )}
        ListFooterComponent={
          <View>
            <View style={GuideScreenStyle.sectionContainer}>
              <SectionCard
                isCompleted={true}
                sectionTitle={strings.AdditionalResources}
                sectionDescription={strings.SeeTheDocumentation}
                onPress={() => {
                  logEvent('ResourcesClicked', {
                    guideID: guideID,
                  });
                  navigation.push('ResourcesScreen', {
                    guide: guide,
                  });
                }}
              />
            </View>
            <View style={GuideScreenStyle.relatedGuidesStyle}>
              <View style={GuideScreenStyle.relatedTextStyle}>
                <Text style={[fontStyles.longTitleTextStyle, fontStyles.black]}>
                  {strings.Related}
                </Text>
              </View>
              <View style={GuideScreenStyle.relatedGuidesIcons}>
                <GuideIcon
                  title={relatedGuides[0].title}
                  image={relatedGuides[0].logo}
                  onPress={() => {
                    navigation.push('GuideScreen', {
                      adEEAStatus,
                      loadAd: false,
                      guideID: relatedGuides[0].guideID,
                    });
                    logEvent('RelatedGuideClicked', {
                      guideIDFrom: guideID,
                      guideIDTo: relatedGuides[0].guideID,
                      title: relatedGuides[0].guideID,
                    });
                  }}
                />
                <GuideIcon
                  title={relatedGuides[1].title}
                  image={relatedGuides[1].logo}
                  onPress={() => {
                    navigation.push('GuideScreen', {
                      adEEAStatus,
                      loadAd: false,
                      guideID: relatedGuides[1].guideID,
                    });
                    logEvent('RelatedGuideClicked', {
                      guideIDFrom: guideID,
                      guideIDTo: relatedGuides[1].guideID,
                      title: relatedGuides[1].guideID,
                    });
                  }}
                />
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

// Exports the module
export default GuideScreen;
