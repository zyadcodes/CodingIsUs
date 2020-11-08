// This is going to be the base component for all guide screens. It will have a back icon, position all the content
// correctly, and act as a layout setter for the guides offered in the app.
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import Share from 'react-native-share';
import fontStyles from '../../../config/fontStyles';
import GuideScreenStyle from './GuideScreenStyle';
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
import {
  getGuideCompletionStatus,
  getTimeReviewRequested,
  setTimeReviewRequested,
} from '../../../config/StorageFunctions';
import {screenWidth, screenHeight} from '../../../config/dimensions';
import SectionCard from '../../components/SectionCard/SectionCard';
import AnimatedHeader from '../../components/AnimatedHeader/AnimatedHeader';
import InAppReview from 'react-native-in-app-review';
import AwesomeAlert from 'react-native-awesome-alerts';
import {RFPercentage} from 'react-native-responsive-fontsize';

// Declares the functional component
const GuideScreen = ({navigation, route}) => {
  // Fetches the props passed into this screen
  const {guideID} = route.params;

  const isFocused = useIsFocused();

  // The isLoading state and the other state variables on this screen
  const [isLoading, setIsLoading] = useState(true);
  const [guide, setGuide] = useState('');
  const [relatedGuides, setRelatedGuides] = useState('');
  const [completionData, setCompletionData] = useState('');
  const [progress, setProgress] = useState('');
  const [guideCompletedAlert, setGuideCompletedAlert] = useState(false);

  // Makes sure that the most recent completion data is displayed by setting it every time this screen is navigated to
  useEffect(() => {
    if (isFocused === true) {
      loadScreenData();
    }
  }, [isFocused]);

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
    setRelatedGuides(relatedGuides);
    setGuide(specificGuide);
    setProgress(progressNumber);
    setCompletionData(data);
    setIsLoading(false);
    if (progressNumber > 0.0 && progress !== '' && progressNumber < 1.0) {
      // This means the user just navigated back from the guide but has not completed the guide yet.
      // A review input will pop up
      const timeReviewRequested = await getTimeReviewRequested();
      const currDate = new Date().getTime();
      if (timeReviewRequested === 0) {
        setTimeReviewRequested(currDate);
      } else if (currDate - timeReviewRequested > 345600000) {
        logEvent('ReviewRequested');
        InAppReview.RequestInAppReview();
        setTimeReviewRequested(currDate);
      }
    } else if (progressNumber === 1.0 && progress !== '') {
      setGuideCompletedAlert(true);
    }
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
      <AnimatedHeader
        style={GuideScreenStyle.coverImage}
        headerMaxHeight={screenHeight * 0.3}
        icon={guide.logo}
        renderLeft={() => (
          <TouchableOpacity
            style={GuideScreenStyle.backButton}
            onPress={() => navigation.goBack()}>
            <Icon
              type="font-awesome"
              name="arrow-left"
              color={colors.white}
              size={RFPercentage(3)}
            />
          </TouchableOpacity>
        )}
        imageSource={guide.cover}
        toolbarColor={colors.blue}
        noBorder={true}>
        <FlatList
          showsVerticalScrollIndicator={false}
          initialNumToRender={8}
          maxToRenderPerBatch={8}
          windowSize={8}
          ListHeaderComponent={
            <View>
              <View style={GuideScreenStyle.guideInformation}>
                <View style={GuideScreenStyle.logoTitle}>
                  <View style={GuideScreenStyle.logoContainer}>
                    <Image
                      source={guide.logo}
                      resizeMode={'contain'}
                      style={GuideScreenStyle.image}
                    />
                  </View>
                  <Text
                    style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
                    {guide.title}
                  </Text>
                </View>
                <View style={GuideScreenStyle.descriptionText}>
                  <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
                    {guide.description}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
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
                        style={[
                          fontStyles.black,
                          fontStyles.longTitleTextStyle,
                        ]}>
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
                          numVideo: 1,
                          guide: guide,
                          completionData: completionData,
                          section: guide.sections[0],
                          completionStatus: completionData[0],
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
                        style={[
                          fontStyles.black,
                          fontStyles.longTitleTextStyle,
                        ]}>
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
                            guide.sections[
                              completionData.lastIndexOf('true') + 1
                            ].ID,
                        });
                        navigation.push('SectionScreen', {
                          numVideo: 1,
                          guide: guide,
                          completionData: completionData,
                          section:
                            guide.sections[
                              completionData.lastIndexOf('true') + 1
                            ],
                          completionStatus:
                            completionData[
                              completionData.lastIndexOf('true') + 1
                            ],
                        });
                      }}
                    />
                    <View style={GuideScreenStyle.bottomSpacer} />
                  </View>
                )}
                <View style={GuideScreenStyle.titleText}>
                  <Text
                    style={[fontStyles.black, fontStyles.longTitleTextStyle]}>
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
                    numVideo: 1,
                    guide: guide,
                    completionData: completionData,
                    section: item,
                    completionStatus: completionData[index],
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
                  <Text
                    style={[fontStyles.longTitleTextStyle, fontStyles.black]}>
                    {strings.Related}
                  </Text>
                </View>
                <View style={GuideScreenStyle.relatedGuidesIcons}>
                  <GuideIcon
                    title={relatedGuides[0].title}
                    image={relatedGuides[0].logo}
                    onPress={() => {
                      navigation.replace('GuideScreen', {
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
                      navigation.replace('GuideScreen', {
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
              <AwesomeAlert
                show={guideCompletedAlert}
                title={strings.Congratulations}
                titleStyle={[fontStyles.black, fontStyles.biggerTextStyle]}
                customView={
                  <View style={GuideScreenStyle.shareAlert}>
                    <Text
                      style={[
                        fontStyles.black,
                        fontStyles.biggerTextStyle,
                        {textAlign: 'center'},
                      ]}>
                      {strings.YouHaveCompletedThe +
                        guide.title +
                        strings.Guide}
                    </Text>
                    <Image
                      source={guide.logo}
                      resizeMode={'contain'}
                      style={GuideScreenStyle.image}
                    />
                    <Text
                      style={[
                        fontStyles.black,
                        fontStyles.biggerTextStyle,
                        {textAlign: 'center'},
                      ]}>
                      {strings.ShareThisWithYourFriends}
                    </Text>
                  </View>
                }
                closeOnTouchOutside={true}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText={strings.Done}
                confirmText={strings.Share}
                confirmButtonColor={colors.green}
                cancelButtonColor={colors.blue}
                onCancelPressed={() => {
                  setGuideCompletedAlert(false);
                }}
                onConfirmPressed={() => {
                  logEvent('GuideCompletedShared');
                  Share.open({
                    title: strings.CheckItOut,
                    message:
                      strings.CheckItOut +
                      ' ' +
                      strings.IJustCompletedThe +
                      guide.title +
                      strings.CourseOnCodingIsUs,
                    url: 'https://linktr.ee/codingisus',
                  });
                }}
              />
            </View>
          }
        />
      </AnimatedHeader>
    </View>
  );
};

// Exports the module
export default GuideScreen;
