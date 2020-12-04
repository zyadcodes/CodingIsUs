// This screen is going to have all of the settings that will be accessible by the user along with any terms
// and policies
import React, {useState, useEffect} from 'react';
import SetingsScreenStyle from './SettingsScreenStyle';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import SettingsScreenStyle from './SettingsScreenStyle';
import {Icon} from 'react-native-elements';
import colors from '../../../config/colors';
import {logEvent} from '../../../config/Analytics';
import auth from '@react-native-firebase/auth';
import AwesomeAlert from '../../components/AwesomeAlert/AwesomeAlert';
import {signOut} from '../../../config/StorageFunctions';
import {
  getUserData,
  updateUserInEmailList,
} from '../../../config/StorageFunctions';
import firestore from '@react-native-firebase/firestore';

// Declares the functional component
const SettingsScreen = ({navigation, route}) => {
  // Fetches the userID from the route params
  const [userID, setUserID] = useState(route.params.userID);
  const [user, setUser] = useState(route.params.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [name, setName] = useState(
    route.params.user ? route.params.user.name : '',
  );
  const [email, setEmail] = useState(
    route.params.user ? route.params.user.email : '',
  );
  const [confirmEmail, setConfirmEmail] = useState(
    route.params.user ? route.params.user.email : '',
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [password, setPassword] = useState('');

  // useEffect method is going to subscribe to the onAuthStateChanged to monitor whether a user has been created or not
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

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
      const userObject = await getUserData(user.uid);
      setUser(userObject);
    } else {
      await sleep(250);
      setUserID('');
      setIsLoading(false);
    }
  };

  // This method is going to update the user in the database if the fields have been changed
  const updateProfile = async () => {
    // Trims all of the input
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedConfirmEmail = confirmEmail.trim();
    const trimmedPassword = password.trim();

    // If no fields have been changed, will simply close the input
    if (
      user.name === trimmedName &&
      user.email === trimmedEmail &&
      user.email === confirmEmail
    ) {
      setIsEditProfileVisible(false);
      return;
    }

    // Will test to make sure that all fields have been filled out
    setIsEditProfileVisible(false);
    await sleep(250);
    setIsLoading(true);
    await sleep(250);
    if (
      trimmedName.length === 0 ||
      trimmedEmail.length === 0 ||
      trimmedConfirmEmail === 0 ||
      trimmedPassword === 0
    ) {
      setErrorMessage(strings.PleaseFillOutAllFields);
      setIsLoading(false);
      await sleep(250);
      setIsErrorVisible(true);
      return;
    }

    // Will test to make sure that the emails are matching
    if (trimmedEmail !== trimmedConfirmEmail) {
      setErrorMessage(strings.EmailMatchError);
      setIsLoading(false);
      await sleep(250);
      setIsErrorVisible(true);
      return;
    }

    // If everything looks good, will proceed with updating

    // First it will attempt to log in to confirm that this is the correct user
    try {
      await auth().signInWithEmailAndPassword(user.email, trimmedPassword);
    } catch (error) {
      setErrorMessage(strings.IncorrectPassword);
      setIsLoading(false);
      await sleep(250);
      setIsErrorVisible(true);
      return;
    }

    // Will only update the fields that have been changed
    const promises = [];
    if (user.email !== trimmedEmail) {
      try {
        await auth().currentUser.updateEmail(trimmedEmail);

        // Signs the user back in
        await auth().signInWithEmailAndPassword(trimmedEmail, trimmedPassword);
        // Sends another email verification
        auth().currentUser.sendEmailVerification();

        // Updates the user's info in the email list
        updateUserInEmailList(user.email, trimmedName, trimmedEmail);
      } catch (error) {
        // Checks if the email format is valid
        if (error.code === 'auth/invalid-email') {
          setErrorMessage(strings.PleaseEnterValidEmail);
          setIsLoading(false);
          await sleep(250);
          setIsErrorVisible(true);
          return;
        } else if (error.code === 'auth/email-already-in-use') {
          setErrorMessage(strings.EmailInUse);
          setIsLoading(false);
          await sleep(250);
          setIsErrorVisible(true);
          return;
        }
      }
      promises.push(
        firestore()
          .collection('Users')
          .doc(userID)
          .update({email: trimmedEmail}),
      );
    }
    if (user.name !== trimmedName) {
      promises.push(
        firestore().collection('Users').doc(userID).update({name: trimmedName}),
      );
    }
    await Promise.all(promises);
    setIsLoading(false);
    await sleep(250);
    logEvent('ProfileEdited', {});
    setProfileUpdated(true);
    setUser({
      ...user,
      email: trimmedEmail,
      name: trimmedName,
    });
  };

  // Creates a component to represent each SettingsCard in order to save code
  const SettingsCard = (title, text) => (
    <TouchableOpacity
      style={SetingsScreenStyle.settingsCard}
      onPress={() => {
        logEvent('PolicyClicked', {});
        navigation.push('PolicyScreen', {
          title,
          text,
        });
      }}>
      <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>{title}</Text>
      <Icon
        name="angle-right"
        type="font-awesome"
        color={colors.blue}
        size={35}
      />
    </TouchableOpacity>
  );

  return (
    <View style={SetingsScreenStyle.container}>
      <View>
        <View style={SetingsScreenStyle.headerStyleBackButton}>
          <TouchableOpacity
            style={SetingsScreenStyle.backButton}
            onPress={() => navigation.goBack()}>
            <Icon type="font-awesome" name="arrow-left" color={colors.white} />
          </TouchableOpacity>
          <Text
            style={[
              fontStyles.bigTextStyle,
              fontStyles.white,
              SetingsScreenStyle.headerTextStyle,
            ]}>
            {strings.Settings}
          </Text>
          <View />
        </View>
      </View>
      <View style={SettingsScreenStyle.cardsContainer}>
        {userID !== '' ? (
          <TouchableOpacity
            style={SetingsScreenStyle.settingsCard}
            onPress={() => {
              setIsEditProfileVisible(true);
            }}>
            <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
              {strings.EditProfile}
            </Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {SettingsCard(strings.AboutUs, strings.AboutUsText)}
        {SettingsCard(strings.PrivacyPolicy, strings.PrivacyPolicyText)}
        {SettingsCard(strings.TermsOfService, strings.TermsOfServiceText)}
        {userID !== '' ? (
          <TouchableOpacity
            style={SetingsScreenStyle.settingsCard}
            onPress={async () => {
              setIsLoading(true);
              signOut();
            }}>
            <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
              {strings.SignOut}
            </Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
      <View>
        <View style={SetingsScreenStyle.socialMediaContainer}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(strings.SwitchingApps, strings.SwitchingAppsText, [
                {
                  text: strings.Ok,
                  onPress: () => {
                    logEvent('FacebookClicked', {});
                    Linking.openURL('https://www.facebook.com/codingisus');
                  },
                },
                {
                  text: strings.Cancel,
                  style: 'cancel',
                },
              ]);
            }}>
            <SocialIcon type="facebook" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(strings.SwitchingApps, strings.SwitchingAppsText, [
                {
                  text: strings.Ok,
                  onPress: () => {
                    logEvent('InstagramClicked', {});
                    Linking.openURL('https://www.instagram.com/codingisus/');
                  },
                },
                {
                  text: strings.Cancel,
                  style: 'cancel',
                },
              ]);
            }}>
            <SocialIcon type="instagram" />
          </TouchableOpacity>
        </View>
      </View>
      {isLoading === true ? (
        <AwesomeAlert
          show={true}
          showProgress={true}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={false}
          progressSize={'large'}
          progressColor={colors.blue}
        />
      ) : (
        <View />
      )}
      <AwesomeAlert
        show={isEditProfileVisible}
        title={strings.EditProfile}
        titleStyle={[
          fontStyles.black,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        customView={
          <View style={SetingsScreenStyle.inputViewContainer}>
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {alignSelf: 'flex-start'},
              ]}>
              {strings.Name}
            </Text>
            <View style={SetingsScreenStyle.spacer} />
            <TextInput
              style={SetingsScreenStyle.inputContainerStyle}
              autoCapitalize={'words'}
              autoCorrect={false}
              placeholder={strings.NameDotDotDot}
              onChangeText={(newText) => setName(newText)}
              autoCompleteType={'name'}
              value={name}
            />
            <View style={SetingsScreenStyle.spacer} />
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {alignSelf: 'flex-start'},
              ]}>
              {strings.Email}
            </Text>
            <View style={SetingsScreenStyle.spacer} />
            <TextInput
              style={SetingsScreenStyle.inputContainerStyle}
              keyboardType={'email-address'}
              autoCorrect={false}
              placeholder={strings.EmailDotDotDot}
              autoCapitalize={'none'}
              autoCompleteType={'email'}
              onChangeText={(newText) => setEmail(newText)}
              value={email}
            />
            <View style={SetingsScreenStyle.spacer} />
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {alignSelf: 'flex-start'},
              ]}>
              {strings.ConfirmEmail}
            </Text>
            <View style={SetingsScreenStyle.spacer} />
            <TextInput
              style={SetingsScreenStyle.inputContainerStyle}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCorrect={false}
              placeholder={strings.ConfirmEmailDotDotDot}
              autoCompleteType={'email'}
              onChangeText={(newText) => setConfirmEmail(newText)}
              value={confirmEmail}
            />
            <View style={SetingsScreenStyle.spacer} />
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {alignSelf: 'flex-start'},
              ]}>
              {strings.Password}
            </Text>
            <View style={SettingsScreenStyle.spacer} />
            <TextInput
              style={SettingsScreenStyle.inputContainerStyle}
              placeholder={strings.PasswordDotDotDot}
              autoCorrect={false}
              autoCapitalize={'none'}
              onChangeText={(newText) => setPassword(newText)}
              autoCompleteType={'password'}
              secureTextEntry={Platform.OS === 'ios' ? false : true}
              value={password}
            />
            <View style={SettingsScreenStyle.spacer} />
          </View>
        }
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        onDismiss={() => {
          setIsEditProfileVisible(false);
        }}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText={strings.Cancel}
        confirmText={strings.Save}
        cancelButtonStyle={SettingsScreenStyle.buttonStyle}
        confirmButtonStyle={SettingsScreenStyle.buttonStyle}
        cancelButtonTextStyle={[
          fontStyles.white,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        confirmButtonTextStyle={[
          fontStyles.white,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        confirmButtonColor={colors.blue}
        cancelButtonColor={colors.lightGray}
        onCancelPressed={async () => {
          setIsEditProfileVisible(false);
        }}
        onConfirmPressed={async () => {
          updateProfile();
        }}
      />
      <AwesomeAlert
        show={isErrorVisible}
        title={strings.Whoops}
        titleStyle={[
          fontStyles.black,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        message={errorMessage}
        messageStyle={[
          fontStyles.black,
          fontStyles.bigTextStyle,
          {textAlign: 'center'},
        ]}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        onDismiss={async () => {
          setIsErrorVisible(false);
          await sleep(250);
          setIsEditProfileVisible(true);
        }}
        showConfirmButton={true}
        confirmText={strings.Ok}
        confirmButtonStyle={SettingsScreenStyle.buttonStyle}
        confirmButtonTextStyle={[
          fontStyles.white,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        confirmButtonColor={colors.blue}
        onConfirmPressed={() => {
          setIsErrorVisible(false);
        }}
      />
      <AwesomeAlert
        show={profileUpdated}
        title={strings.ProfileUpdated}
        titleStyle={[
          fontStyles.black,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        message={strings.ProfileUpdatedMessage}
        messageStyle={[
          fontStyles.black,
          fontStyles.bigTextStyle,
          {textAlign: 'center'},
        ]}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        onDismiss={() => {
          setProfileUpdated(false);
        }}
        showConfirmButton={true}
        confirmText={strings.Ok}
        confirmButtonStyle={SettingsScreenStyle.buttonStyle}
        confirmButtonTextStyle={[
          fontStyles.white,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        confirmButtonColor={colors.blue}
        onConfirmPressed={() => {
          setProfileUpdated(false);
        }}
      />
    </View>
  );
};

// Exports the module
export default SettingsScreen;
