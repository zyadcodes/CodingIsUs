// This component is going to be the one where each section of an individual guide will be displayed
import React, {useState, useRef} from 'react';
import {ScrollView, Text, View, TouchableOpacity, Animated} from 'react-native';
import fontStyles from '../../../config/fontStyles';
import SectionScreenStyle from './SectionScreenStyle';
import YoutubePlayer from 'react-native-youtube-iframe';
import colors from '../../../config/colors';
import {Icon} from 'react-native-elements';
import SoundPlayer from 'react-native-sound-player';
import {logEvent} from '../../../config/Analytics';
import {
  updateSectionStatus,
  getGuideCompletionStatus,
} from '../../../config/StorageFunctions';
import Svg, {Path} from 'react-native-svg';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import strings from '../../../config/strings';
import messaging from '@react-native-firebase/messaging';
import {RFPercentage} from 'react-native-responsive-fontsize';

// Declares the functional component
const SectionScreen = ({route, navigation}) => {
  // Fetches the props passed into this screen
  const {
    guide,
    completionData,
    section,
    completionStatus,
    numVideo,
  } = route.params;

  // Sets the state of the screen for the YouTube video, the isLoading for the screen and the ads, and the completion
  // status of the screen
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDone, setIsDone] = useState(
    completionStatus === 'false' ? false : true,
  );
  const [didVideoComplete, setDidVideoComplete] = useState(false);

  // The ScrollView reference
  const scrollRef = useRef();

  // This method is going to update the completion status of this section
  const updateStatus = async () => {
    if (!isDone) {
      logEvent('MarkedAsDone', {
        sectionID: section.ID,
      });
      SoundPlayer.playSoundFile('ding', 'mp3');
      setIsDone(true);
      updateSectionStatus(section.ID, 'true');

      const newCompletionData = await getGuideCompletionStatus(guide);
      const numOfCompleted = newCompletionData.filter(
        (eachElement) => eachElement === 'true',
      );
      if (numOfCompleted === 1) {
        // This means this is the first section that has been started in this guide
        messaging().subscribeToTopic('GuideStarted');
        logEvent('GuideStarted', {
          guideID: guide.guideID,
        });
        messaging().subscribeToTopic('GuideStarted');
      }
      if (!newCompletionData.includes('false')) {
        // This means this is the last section completed in this guide
        logEvent('GuideCompleted', {
          guideID: guide.guideID,
        });
        messaging().unsubscribeFromTopic('GuideStarted');
      }
    } else {
      logEvent('MarkedAsNotDone', {
        sectionID: section.ID,
      });
      setIsDone(false);
      updateSectionStatus(section.ID, 'false');
    }
  };

  // This method is going to navigate to the next section
  const navigateToNextSection = () => {
    // Navigates to the next section
    const indexOfNextSection =
      guide.sections.findIndex((eachSection) => eachSection === section) + 1;
    if (indexOfNextSection === guide.sections.length) {
      navigation.replace('ResourcesScreen', {
        guide,
      });
    } else {
      const nextSection = guide.sections[indexOfNextSection];
      const completionStatusOfNextSection = completionData[indexOfNextSection];
      navigation.replace('SectionScreen', {
        numVideo: numVideo + 1,
        guide: guide,
        completionData: completionData,
        section: nextSection,
        completionStatus: completionStatusOfNextSection,
      });
    }
  };

  // Returns the UI of the screen
  return (
    <ScrollView
      style={SectionScreenStyle.container}
      ref={scrollRef}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View>
        <View style={SectionScreenStyle.svgOuterContainer}>
          <View style={SectionScreenStyle.svgInnerContainer}>
            <Svg
              height={'60%'}
              width={'100%'}
              viewBox="0 0 1440 320"
              style={SectionScreenStyle.svgStyle}>
              <Path
                fill={colors.blue}
                d="M0,160L40,154.7C80,149,160,139,240,128C320,117,400,107,480,117.3C560,128,640,160,720,176C800,192,880,192,960,160C1040,128,1120,64,1200,64C1280,64,1360,128,1400,160L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              />
            </Svg>
          </View>
        </View>
        <View style={SectionScreenStyle.headerStyle}>
          <TouchableOpacity
            style={SectionScreenStyle.backButton}
            onPress={() => navigation.goBack()}>
            <Icon
              type="font-awesome"
              name="arrow-left"
              color={colors.blue}
              size={RFPercentage(3)}
            />
          </TouchableOpacity>
          <View style={SectionScreenStyle.smallSpacer} />
          <Text style={[fontStyles.biggerTextStyle, fontStyles.white]}>
            {section.name}
          </Text>
        </View>
      </View>
      <View style={SectionScreenStyle.youtubeContainer}>
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
              logEvent('VideoCompleted' + numVideo);
              setIsDone(true);
              updateSectionStatus(section.ID, 'true');
              setDidVideoComplete(true);
              setTimeout(() => scrollRef.current.scrollToEnd(), 100);
            } else if (state === 'playing') {
              setIsPlaying(true);
              logEvent('VideoStarted', {
                sectionID: section.ID,
              });
              logEvent('VideoStarted' + numVideo);
            }
          }}
        />
      </View>
      <View style={SectionScreenStyle.descriptionText}>
        <Text
          style={[
            fontStyles.black,
            fontStyles.biggerTextStyle,
            {textAlign: 'center'},
          ]}>
          {section.description}
        </Text>
      </View>
      <View style={SectionScreenStyle.markAsDone}>
        <View style={SectionScreenStyle.smallSpacer} />
        <TouchableOpacity
          onPress={() => {
            updateStatus();
          }}>
          <Icon
            type={'font-awesome'}
            name={'check-circle'}
            size={RFPercentage(12)}
            color={isDone ? colors.green : colors.lightGray}
          />
        </TouchableOpacity>
      </View>
      <View style={SectionScreenStyle.nextSection}>
        {didVideoComplete === true ? (
          <View style={SectionScreenStyle.countdownSection}>
            <TouchableOpacity
              style={SectionScreenStyle.nextButton}
              onPress={() => {
                setDidVideoComplete(false);
              }}>
              <Icon
                type="font-awesome"
                name="times-circle"
                color={colors.white}
                size={RFPercentage(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                logEvent('ConsecutiveSection', {
                  sectionID: section.ID,
                });
                logEvent('ConsecutiveSection' + numVideo);
                navigateToNextSection();
                setDidVideoComplete(false);
              }}>
              <CountdownCircleTimer
                isPlaying
                size
                duration={10}
                size={RFPercentage(20)}
                onComplete={() => {
                  logEvent('ConsecutiveSection', {
                    sectionID: section.ID,
                  });
                  logEvent('ConsecutiveSection' + numVideo);
                  navigateToNextSection();
                }}
                colors={[
                  [colors.blue, 0.4],
                  [colors.green, 0.4],
                  [colors.yellow, 0.2],
                ]}>
                {({remainingTime, animatedColor}) => (
                  <Animated.Text
                    style={[
                      {color: animatedColor, textAlign: 'center'},
                      fontStyles.bigTextStyle,
                    ]}>
                    {strings.NextSection + '\n' + remainingTime}
                  </Animated.Text>
                )}
              </CountdownCircleTimer>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={SectionScreenStyle.nextButton}
            onPress={() => {
              logEvent('ConsecutiveSection', {
                sectionID: section.ID,
              });
              navigateToNextSection();
            }}>
            <Icon
              type="font-awesome"
              name="arrow-right"
              color={colors.white}
              size={RFPercentage(4)}
            />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

// Exports the module
export default SectionScreen;
