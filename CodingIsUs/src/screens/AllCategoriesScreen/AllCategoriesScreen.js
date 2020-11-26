// This screen will present a layout of all of the categories that are currently presented in the app
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import AllCategoriesScreenStyle from './AllCategoriesScreenStyle';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import colors from '../../../config/colors';
import GuideIcon from '../../components/GuideIcon/GuideIcon';
import Categories from '../../../config/Categories';
import {logEvent} from '../../../config/Analytics';
import Svg, {Path} from 'react-native-svg';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import AuthFlow from '../../components/AuthFlow/AuthFlow';
import AwesomeAlert from '../../components/AwesomeAlert/AwesomeAlert';

// Declares the functional component
const AllCategoriesScreen = ({route, navigation}) => {
  // Fetches the initial userID from the route params and sets the other state variables
  const [userID, setUserID] = useState(route.params.userID);
  const [isAuthFlowVisible, setIsAuthFlowVisible] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  // useEffect method is going to subscribe to the onAuthStateChanged to monitor whether a user has been created or not
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    testIsFirstLaunch();
    return subscriber;
  }, []);

  // this method is going to see if this is the first time the app is launched. if it is, it will show a screen
  // that will allow the user to log into the app for the first time or sign up
  const testIsFirstLaunch = async () => {
    const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
    if (isFirstLaunch === null && isFirstLaunch !== 'false') {
      logEvent('FirstLaunch', {});
      setIsFirstLaunch(true);
    }
  };

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
      setUserID(user.uid);
    } else {
      setUserID('');
    }
  };
  return (
    <View style={AllCategoriesScreenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Categories}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={4}
        numColumns={2}
        keyExtractor={(item, index) => item.title}
        ListHeaderComponent={
          <View>
            {isAuthFlowVisible ? (
              <AuthFlow isVisible={isAuthFlowVisible} showSuccess={true} />
            ) : (
              <View />
            )}
            <AwesomeAlert
              show={isFirstLaunch}
              title={strings.SignUp}
              titleStyle={[
                fontStyles.black,
                fontStyles.biggerTextStyle,
                {textAlign: 'center'},
              ]}
              message={strings.LogInSignUpToSaveYourProgress}
              messageStyle={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {textAlign: 'center'},
              ]}
              closeOnTouchOutside={false}
              closeOnHardwareBackPress={false}
              onDismiss={async () => {
                setIsFirstLaunch(false);
              }}
              showConfirmButton={true}
              showCancelButton={true}
              confirmText={strings.SignUp}
              cancelText={strings.NotNow}
              confirmButtonStyle={AllCategoriesScreenStyle.buttonStyle}
              cancelButtonStyle={AllCategoriesScreenStyle.buttonStyle}
              confirmButtonTextStyle={[
                fontStyles.white,
                fontStyles.bigTextStyle,
                {textAlign: 'center'},
              ]}
              cancelButtonTextStyle={[
                fontStyles.white,
                fontStyles.bigTextStyle,
                {textAlign: 'center'},
              ]}
              confirmButtonColor={colors.blue}
              cancelButtonColor={colors.lightGray}
              onConfirmPressed={async () => {
                logEvent('FirstLaunchSignUp', {});
                setIsFirstLaunch(false);
                await sleep(250);
                setIsAuthFlowVisible(true);
                await AsyncStorage.setItem('isFirstLaunch', 'false');
              }}
              onCancelPressed={async () => {
                logEvent('FirstLaunchContinueOffline', {});
                setIsFirstLaunch(false);
                await AsyncStorage.setItem('isFirstLaunch', 'false');
              }}
            />
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
                userID,
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
