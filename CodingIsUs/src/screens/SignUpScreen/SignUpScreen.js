// This is going to be the screen where the user signs up for the app & will enter all of their information
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import strings from '../../../config/strings';
import SignUpScreenStyle from './SignUpScreenStyle';
import fontStyles from '../../../config/fontStyles';
import CheckBox from '@react-native-community/checkbox';
import {
  createUserInFirestore,
  getUserData,
} from '../../../config/StorageFunctions';
import auth from '@react-native-firebase/auth';
import AwesomeAlert from '../../components/AwesomeAlert/AwesomeAlert';
import colors from '../../../config/colors';
import {Icon} from 'react-native-elements';
import {logEvent, setupFBMatching} from '../../../config/Analytics';

// Declares the functional component
const SignUpScreen = ({navigation, route}) => {
  // Sets the state of the screen
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // This is a helper method that will sleep for a parameterized amount of seconds
  const sleep = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  // This method is going to sign the user up and handle all of the errors that could arise with that sign up
  const signUp = async () => {
    setIsLoadingVisible(true);
    // The first step is to check that all of the fields have been filled out
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedConfirmEmail = confirmEmail.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();
    if (
      trimmedName.length === 0 ||
      trimmedEmail.length === 0 ||
      trimmedConfirmEmail.length === 0 ||
      trimmedPassword.length === 0 ||
      trimmedConfirmPassword === 0
    ) {
      setErrorMessage(strings.PleaseFillOutAllFields);
      await sleep(500);
      setIsLoadingVisible(false);
      await sleep(250);
      setIsErrorVisible(true);
      return;
    }

    // Will check to see if the length of the password is valid
    if (trimmedPassword.length < 6) {
      setErrorMessage(strings.PasswordLengthError);
      await sleep(500);
      setIsLoadingVisible(false);
      await sleep(250);
      setIsErrorVisible(true);
      return;
    }

    // Will check to see that email and password match
    if (
      trimmedEmail !== trimmedConfirmEmail ||
      trimmedPassword !== trimmedConfirmPassword
    ) {
      setErrorMessage(strings.EmailPasswordMatchError);
      await sleep(500);
      setIsLoadingVisible(false);
      await sleep(250);
      setIsErrorVisible(true);
      return;
    }

    // If all of the above tests pass, will attempt to now create the account in the database
    try {
      const user = await auth().createUserWithEmailAndPassword(
        trimmedEmail,
        trimmedPassword,
      );
      user.user.sendEmailVerification();
      await createUserInFirestore(
        user.user.uid,
        trimmedName,
        trimmedEmail,
        isSubscribed,
      );
      setupFBMatching(trimmedEmail);
      await sleep(250);
      logEvent('SignUp', {});
      const userObject = await getUserData(user.user.uid);
      setIsLoadingVisible(false);
      navigation.push('BottomTabs', {
        userID: user.user.uid,
        user: userObject,
        isEmailVerified: user.user.emailVerified,
      });
    } catch (error) {
      // Checks if the email format is valid
      if (error.code === 'auth/invalid-email') {
        setErrorMessage(strings.PleaseEnterValidEmail);
        await sleep(500);
        setIsLoadingVisible(false);
        await sleep(250);
        setIsErrorVisible(true);
        return;
      } else if (error.code === 'auth/email-already-in-use') {
        setErrorMessage(strings.EmailInUse);
        await sleep(500);
        setIsLoadingVisible(false);
        await sleep(250);
        setIsErrorVisible(true);
        return;
      } else {
        console.log(error);
      }
    }
  };

  // Returns the UI of the screen
  return (
    <KeyboardAvoidingView behavior={'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={SignUpScreenStyle.inputViewContainer}>
          <View>
            <View style={SignUpScreenStyle.headerStyleBackButton}>
              <TouchableOpacity
                style={SignUpScreenStyle.backButton}
                onPress={() => navigation.goBack()}>
                <Icon
                  type="font-awesome"
                  name="arrow-left"
                  color={colors.white}
                />
              </TouchableOpacity>
              <Text
                style={[
                  fontStyles.biggerTextStyle,
                  fontStyles.white,
                  SignUpScreenStyle.headerTextStyle,
                ]}>
                {strings.SignUp}
              </Text>
              <View />
            </View>
          </View>
          <Text
            style={[
              fontStyles.black,
              fontStyles.bigTextStyle,
              SignUpScreenStyle.textInputTitleStyle,
            ]}>
            {strings.Name}
          </Text>
          <View style={SignUpScreenStyle.spacer} />
          <TextInput
            style={SignUpScreenStyle.inputContainerStyle}
            autoCapitalize={'words'}
            autoCorrect={false}
            placeholder={strings.NameDotDotDot}
            placeholderTextColor={colors.lightGray}
            onChangeText={(newText) => setName(newText)}
            autoCompleteType={'name'}
            value={name}
          />
          <View style={SignUpScreenStyle.spacer} />
          <Text
            style={[
              fontStyles.black,
              fontStyles.bigTextStyle,
              SignUpScreenStyle.textInputTitleStyle,
            ]}>
            {strings.Email}
          </Text>
          <View style={SignUpScreenStyle.spacer} />
          <TextInput
          placeholderTextColor={colors.lightGray}
            style={SignUpScreenStyle.inputContainerStyle}
            keyboardType={'email-address'}
            autoCorrect={false}
            placeholder={strings.EmailDotDotDot}
            autoCapitalize={'none'}
            autoCompleteType={'email'}
            onChangeText={(newText) => setEmail(newText)}
            value={email}
          />
          <View style={SignUpScreenStyle.spacer} />
          <Text
            style={[
              fontStyles.black,
              fontStyles.bigTextStyle,
              SignUpScreenStyle.textInputTitleStyle,
            ]}>
            {strings.ConfirmEmail}
          </Text>
          <View style={SignUpScreenStyle.spacer} />
          <TextInput
            style={SignUpScreenStyle.inputContainerStyle}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            autoCorrect={false}
            placeholderTextColor={colors.lightGray}
            autoCorrect={false}
            placeholder={strings.ConfirmEmailDotDotDot}
            autoCompleteType={'email'}
            onChangeText={(newText) => setConfirmEmail(newText)}
            value={confirmEmail}
          />
          <View style={SignUpScreenStyle.spacer} />
          <Text
            style={[
              fontStyles.black,
              fontStyles.bigTextStyle,
              SignUpScreenStyle.textInputTitleStyle,
            ]}>
            {strings.Password}
          </Text>
          <View style={SignUpScreenStyle.spacer} />
          <TextInput
            style={SignUpScreenStyle.inputContainerStyle}
            placeholder={strings.PasswordDotDotDot}
            autoCorrect={false}
            autoCapitalize={'none'}
            onChangeText={(newText) => setPassword(newText)}
            autoCompleteType={'password'}
            secureTextEntry={Platform.OS === 'ios' ? false : true}
            value={password}
          />
          <View style={SignUpScreenStyle.spacer} />
          <Text
            style={[
              fontStyles.black,
              fontStyles.bigTextStyle,
              SignUpScreenStyle.textInputTitleStyle,
            ]}>
            {strings.ConfirmPassword}
          </Text>
          <View style={SignUpScreenStyle.spacer} />
          <TextInput
            style={SignUpScreenStyle.inputContainerStyle}
            autoCapitalize={'none'}
            placeholderTextColor={colors.lightGray}
            autoCorrect={false}
            placeholder={strings.ConfirmPasswordDotDotDot}
            autoCompleteType={'password'}
            onChangeText={(newText) => setConfirmPassword(newText)}
            secureTextEntry={Platform.OS === 'ios' ? false : true}
            value={confirmPassword}
          />
          <View style={SignUpScreenStyle.spacer} />
          <View style={SignUpScreenStyle.spacer} />
          <View style={SignUpScreenStyle.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={isSubscribed}
              tintColors={{
                true: colors.blue,
                false: colors.lightGray,
              }}
              onCheckColor={colors.blue}
              onTintColor={colors.blue}
              tintColor={colors.lightGray}
              onValueChange={(newValue) => setIsSubscribed(newValue)}
            />
            <View style={SignUpScreenStyle.spacer} />
            <Text
              style={[
                fontStyles.mainTextStyle,
                fontStyles.black,
                {textAlign: 'center'},
              ]}>
              {strings.IAgreeToReceiveEmails}
            </Text>
            <View style={SignUpScreenStyle.spacer} />
            <TouchableOpacity
              style={SignUpScreenStyle.buttonStyle}
              onPress={() => signUp()}>
              <Text style={[fontStyles.white, fontStyles.biggerTextStyle]}>
                {strings.SignUp}
              </Text>
            </TouchableOpacity>
          </View>
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
            }}
            showConfirmButton={true}
            confirmText={strings.Ok}
            confirmButtonStyle={SignUpScreenStyle.popUpButtonStyle}
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
            show={isLoadingVisible}
            showProgress={true}
            closeOnTouchOutside={false}
            onDismiss={() => {
              setIsLoadingVisible(false);
            }}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={false}
            progressSize={'large'}
            progressColor={colors.blue}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

// Exports the component
export default SignUpScreen;
