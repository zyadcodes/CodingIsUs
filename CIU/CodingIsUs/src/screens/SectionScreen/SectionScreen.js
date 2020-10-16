// This component is going to be the one where each section of an individual guide will be displayed
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  LogBox,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Platform,
} from 'react-native';
import {
  InterstitialAd,
  TestIds,
  AdEventType,
  AdsConsentStatus,
} from '@react-native-firebase/admob';
import fontStyles from '../../../config/fontStyles';
import BackButton from '../../components/BackButton/BackButton';
import SectionScreenStyle from './SectionScreenStyle';
import YoutubePlayer from 'react-native-youtube-iframe';
import strings from '../../../config/strings';
import colors from '../../../config/colors';
import {Icon} from 'react-native-elements';
import firebaseAnalytics from '@react-native-firebase/analytics';
import {AppEventsLogger} from 'react-native-fbsdk';
import {
  updateSectionStatus,
  getSectionStatus,
} from '../../../config/StorageFunctions';
import CIULogo from '../../../assets/images/CIULogo.png';
import SoundPlayer from 'react-native-sound-player';
import {logEvent} from '../../../config/Analytics';

// Declares the functional component
const SectionScreen = ({route, navigation}) => {
  // Fetches the props passed into this screen
  const {section, completionStatus, adEEAStatus} = route.params;

  // Sets the state of the screen for the YouTube video, the isLoading for the screen and the ads, and the completion
  // status of the screen
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDone, setIsDone] = useState(
    completionStatus === 'false' ? false : true,
  );
  const [adLoaded, setAdLoaded] = useState(false);
  const [ad, setAd] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
        setAd(interstitial);
        setAdLoaded(true);
      } else if (type === AdEventType.LEFT_APPLICATION) {
        logEvent('AppClosedFromAd', {
          screen: 'SectionScreen',
        });
      } else if (type === AdEventType.ERROR) {
        logEvent('AdError', {screen: 'SectionScreen'});
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();
    setIsLoading(false);
    // Unsubscribe from events on unmount
    return () => eventListener();
  }, []);

  // This method is going to update the completion status of this section
  const updateStatus = async () => {
    if (!isDone) {
      logEvent('MarkedAsDone', {
        sectionID: section.ID,
      });
      SoundPlayer.playSoundFile('ding', 'mp3');
      setIsDone(true);
      updateSectionStatus(section.ID, 'true');
    } else {
      logEvent('MarkedAsNotDone', {
        sectionID: section.ID,
      });
      setIsDone(false);
      updateSectionStatus(section.ID, 'false');
    }
  };

  if (isLoading === true) {
    return (
      <View style={SectionScreenStyle.container}>
        <View style={SectionScreenStyle.loadingContainer}>
          <ActivityIndicator size={25} color={colors.blue} animating={true} />
        </View>
      </View>
    );
  }

  // Returns the UI of the screen
  return (
    <ScrollView
      style={SectionScreenStyle.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={SectionScreenStyle.titleContainer}>
        <Text
          style={[
            fontStyles.black,
            fontStyles.bigTitleTextStyle,
            fontStyles.bold,
          ]}>
          {section.name}
        </Text>
      </View>
      <View style={SectionScreenStyle.descriptionText}>
        <Text
          style={[
            fontStyles.black,
            fontStyles.bigTextStyle,
            {textAlign: 'center'},
          ]}>
          {section.description}
        </Text>
      </View>
      <View>
        <YoutubePlayer
          height={SectionScreenStyle.youtubeContainer.height}
          width={SectionScreenStyle.youtubeContainer.width}
          play={isPlaying}
          videoId={section.videoLink}
          onChangeState={(state) => {
            if (state === 'ended') {
              setIsPlaying(false);
              logEvent('VideoCompleted', {
                sectionID: section.ID,
              });
              if (adLoaded === true) {
                ad.show();
                setAdLoaded(false);
              }
            } else if (state === 'playing') {
              setIsPlaying(true);
              logEvent('VideoStarted', {
                sectionID: section.ID,
              });
            }
          }}
        />
      </View>
      <View style={SectionScreenStyle.markAsDone}>
        <Text style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
          {strings.MarkAsDone}
        </Text>
        <View style={SectionScreenStyle.smallSpacer} />
        <TouchableOpacity
          onPress={() => {
            updateStatus();
          }}>
          <Icon
            type={'font-awesome'}
            name={'check-circle'}
            size={100}
            color={isDone ? colors.green : colors.lightGray}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Exports the module
export default SectionScreen;
