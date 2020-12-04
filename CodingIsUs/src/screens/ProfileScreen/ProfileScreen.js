// This is going to be the screen where the user will be able to view their progress in the app as well as access
// any necessary settings
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';
import fontStyles from '../../../config/fontStyles';
import ProfileScreenStyle from './ProfileScreenStyle';
import strings from '../../../config/strings';
import AuthFlow from '../../components/AuthFlow/AuthFlow';
import {
  getUserData,
  getUserProgress,
  retrieveFirestoreData,
} from '../../../config/StorageFunctions';
import colors from '../../../config/colors';
import CIULogo from '../../../assets/images/CIULogo.png';
import ProgressBar from 'react-native-progress/Bar';
import {screenHeight, screenWidth} from '../../../config/dimensions';
import {useIsFocused} from '@react-navigation/native';
import AwesomeAlert from '../../components/AwesomeAlert/AwesomeAlert';
import { logEvent } from '../../../config/Analytics';

// Creates the functional component
const ProfileScreen = ({route, navigation}) => {
  // Will fetch all the necessary props used to determine if a user is logged in or not
  const [userID, setUserID] = useState(route.params.userID);
  const [isEmailVerified, setIsEmailVerified] = useState(
    route.params.isEmailVerified,
  );
  const [isAuthFlowVisible, setIsAuthFlowVisible] = useState(
    route.params.userID === '' ? true : false,
  );
  const [user, setUser] = useState(route.params.user);
  const [userProgress, setUserProgress] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [accountVerifiedVisible, setAccountVerifiedVisible] = useState(false);

  const isFocused = useIsFocused();

  // useEffect method is going to subscribe to the onAuthStateChanged to monitor whether a user has been created or not
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    if (userID !== '') {
      loadScreenData();
    }
    return subscriber;
  }, [isFocused]);

  // This is a helper method that will sleep for a parameterized amount of seconds
  const sleep = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  // This is going to be the helper method to the useEffect state which is going to handle any additional
  // authentication
  const onAuthStateChanged = async (user) => {
    if (user) {
      setIsLoading(true);
      await sleep(350);
      setUserID(user.uid);
      setIsEmailVerified(user.emailVerified);
      const userObject = await getUserData(user.uid);
      await retrieveFirestoreData(user.uid);
      setUser(userObject);
      loadScreenData(user.uid);
    } else {
      setUserID('');
      setUserProgress('');
      setIsEmailVerified('');
    }
  };

  // Loads the screen data
  const loadScreenData = async (userID) => {
    const userProgressResult = await getUserProgress(userID);
    setUserProgress(userProgressResult);
    setIsLoading(false);
  };

  // Returns the UI of the screen that will force the user to log in
  // in order to access this screen
  if (userID === '') {
    return (
      <View style={ProfileScreenStyle.codeInTheAppContainer}>
        <TouchableOpacity
          style={ProfileScreenStyle.codeInTheAppButton}
          onPress={() => {
            setIsAuthFlowVisible(false);
            setTimeout(() => {
              setIsAuthFlowVisible(true);
            }, 50);
          }}>
          <Text style={[fontStyles.white, fontStyles.biggerTextStyle]}>
            {strings.CreateAnAccount}
          </Text>
        </TouchableOpacity>
        {isAuthFlowVisible === true ? (
          <AuthFlow isVisible={isAuthFlowVisible} showSuccess={false} />
        ) : (
          <View />
        )}
      </View>
    );
  }

  // Returns a loading state UI
  if (isLoading === true) {
    return (
      <View style={ProfileScreenStyle.container}>
        <View style={ProfileScreenStyle.loadingContainer}>
          <ActivityIndicator size={25} color={colors.blue} animating={true} />
        </View>
      </View>
    );
  }

  // Returns the normal UI of the screen assuming the user is logged in
  return (
    <View style={ProfileScreenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        initialNumToRender={8}
        maxToRenderPerBatch={6}
        windowSize={6}
        ListHeaderComponent={
          <View>
            <View style={ProfileScreenStyle.headerStyle}>
              <View style={ProfileScreenStyle.headerSection}>
                <Text style={[fontStyles.white, fontStyles.biggerTextStyle]}>
                  {strings.Hi}
                </Text>
                {user.name.length > 15 ? (
                  <Text style={[fontStyles.white, fontStyles.biggerTextStyle]}>
                    {user.name.substring(0, 14)}
                  </Text>
                ) : (
                  <Text style={[fontStyles.white, fontStyles.biggerTextStyle]}>
                    {user.name}
                  </Text>
                )}
              </View>
              <View style={ProfileScreenStyle.headerSection}>
                <Image
                  source={CIULogo}
                  resizeMode={'cover'}
                  borderRadius={screenHeight * 0.05}
                  style={ProfileScreenStyle.logoStyle}
                />
              </View>
            </View>
            {isEmailVerified === false ? (
              <View>
                <AwesomeAlert
                  show={accountVerifiedVisible}
                  title={strings.VerifyEmail}
                  titleStyle={[
                    fontStyles.black,
                    fontStyles.biggerTextStyle,
                    {textAlign: 'center'},
                  ]}
                  message={strings.PleaseVerifyYourEmailAddress}
                  messageStyle={[
                    fontStyles.black,
                    fontStyles.bigTextStyle,
                    {textAlign: 'center'},
                  ]}
                  closeOnTouchOutside={false}
                  closeOnHardwareBackPress={false}
                  onDismiss={() => {
                    setAccountVerifiedVisible(false);
                  }}
                  showConfirmButton={true}
                  confirmText={strings.Ok}
                  confirmButtonStyle={ProfileScreenStyle.buttonStyle}
                  confirmButtonTextStyle={[
                    fontStyles.white,
                    fontStyles.biggerTextStyle,
                    {textAlign: 'center'},
                  ]}
                  confirmButtonColor={colors.blue}
                  onConfirmPressed={() => {
                    setAccountVerifiedVisible(false);
                  }}
                />
                <TouchableOpacity
                  style={ProfileScreenStyle.accountNotVerifiedBanner}
                  onPress={() => setAccountVerifiedVisible(true)}>
                  <Text
                    style={[
                      fontStyles.white,
                      fontStyles.biggerTextStyle,
                      {textAlign: 'center'},
                    ]}>
                    {strings.AccountNotVerified}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View />
            )}
          </View>
        }
        data={userProgress.inProgressguides.concat(
          userProgress.completedGuides,
        )}
        keyExtractor={(item, index) => item.title}
        renderItem={({item, index}) => (
          <View>
            {
              // Handles the titles of the guides
              userProgress.inProgressguides.length > 0 && index === 0 ? (
                <View style={ProfileScreenStyle.progressTitle}>
                  <Text style={[fontStyles.black, fontStyles.biggerTextStyle]}>
                    {strings.ContinueLearning}
                  </Text>
                </View>
              ) : userProgress.completedGuides.length > 0 &&
                index === userProgress.inProgressguides.length ? (
                <View style={ProfileScreenStyle.progressTitle}>
                  <Text style={[fontStyles.black, fontStyles.biggerTextStyle]}>
                    {strings.Completed}
                  </Text>
                </View>
              ) : (
                <View />
              )
            }
            <TouchableOpacity
              style={ProfileScreenStyle.guideContainer}
              onPress={() => {
                logEvent('GuideClicked', {});
                navigation.push('GuideScreen', {
                  userID: userID,
                  guideID: item.guideID,
                });
              }}>
              <View style={ProfileScreenStyle.guideLogoContainer}>
                <Image
                  source={item.logo}
                  style={ProfileScreenStyle.guideLogo}
                  resizeMode={'contain'}
                />
              </View>
              <View style={ProfileScreenStyle.guideLogoContainerRight}>
                <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
                  {item.title}
                </Text>
                <View style={ProfileScreenStyle.progressContainerStyle}>
                  <ProgressBar
                    color={colors.blue}
                    unfilledColor={colors.white}
                    width={screenWidth * 0.55}
                    height={screenHeight * 0.025}
                    progress={item.guideCompletionPercentage}
                  />
                  <View style={ProfileScreenStyle.progressPercentage}>
                    <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
                      {(item.guideCompletionPercentage * 100).toFixed(0)}%
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={ProfileScreenStyle.settingsCard}
            onPress={() =>
              navigation.push('SettingsScreen', {
                userID: userID,
                user: user
              })
            }>
            <Text
              style={[
                fontStyles.white,
                fontStyles.biggerTextStyle,
                {textAlign: 'center'},
              ]}>
              {strings.Settings}
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

// Exports the screen
export default ProfileScreen;
