// This is the component that will control the flow of authentication within the mobile app.
// It will control the logging in and the signing up for an account
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Platform, TouchableOpacity} from 'react-native';
import AuthFlowStyle from './AuthFlowStyle';
import AwesomeAlert from '../../components/AwesomeAlert/AwesomeAlert';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import colors from '../../../config/colors';
import {logEvent, setupFBMatching} from '../../../config/Analytics';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import {createUserInFirestore} from '../../../config/StorageFunctions';

// Declares the functional component
const AuthFlow = (props) => {
  // Retrieves the isVisible prop
  const {isVisible, showSuccess, navigation} = props;

  // Sets the initial states of the flow
  const [isInitialScreenVisible, setIsInitialScreenVisible] = useState(
    isVisible,
  );
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [resetPasswordvisible, setResetPasswordVisible] = useState(false);
  const [
    isResetPasswordSuccessVisible,
    setIsResetPasswordSuccessVisible,
  ] = useState(false);

  // The useEffect method will unsubscribe from any left over events when it is unmounted so as to not create any memory leaks
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  // This is going to be the helper method to the useEffect state which is going to handle any additional
  // authentication
  const onAuthStateChanged = (user) => {
    if (user) {
      setIsLoadingVisible(false);
    }
  };

  // This is a helper method that will sleep for a parameterized amount of seconds
  const sleep = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  // This method is going to log in the user and handle all of the errors that could arise with that login
  const logIn = async () => {
    // The first step will check to see that the email and password fields have been filled out
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (trimmedEmail.length === 0 || trimmedPassword.length === 0) {
      setErrorMessage(strings.PleaseFillOutAllFields);
      await sleep(500);
      setIsLoadingVisible(false);
      await sleep(250);
      setIsErrorVisible(true);
      return;
    }

    // If everything is filled out correctly, the next step is that it will try to log in the user to their account
    try {
      const user = await auth().signInWithEmailAndPassword(
        trimmedEmail,
        trimmedPassword,
      );
      setupFBMatching(trimmedEmail);
      logEvent('LogIn', {});
    } catch (error) {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password'
      ) {
        setErrorMessage(strings.IncorrectEmailOrPassword);
        await sleep(500);
        setIsLoadingVisible(false);
        await sleep(250);
        setIsErrorVisible(true);
        return;
      }
    }
  };

  // This is going to send an email password link to the entered email
  const resetPassword = async () => {
    const trimmedEmail = email.trim();
    auth().sendPasswordResetEmail(trimmedEmail);
    await sleep(250);
    logEvent('PasswordReset', {});
    setIsLoadingVisible(false);
    await sleep(250);
    setIsResetPasswordSuccessVisible(true);
  };

  // Renders the UI of the screen
  return (
    <View>
      <AwesomeAlert
        show={isInitialScreenVisible}
        title={strings.CreateFreeAccount}
        titleStyle={[
          fontStyles.black,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        onDismiss={() => {
          setIsInitialScreenVisible(false);
        }}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText={strings.LogIn}
        confirmText={strings.SignUp}
        cancelButtonStyle={AuthFlowStyle.buttonStyle}
        confirmButtonStyle={AuthFlowStyle.buttonStyle}
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
          setIsInitialScreenVisible(false);
          await sleep(250);
          setIsLoginVisible(true);
        }}
        onConfirmPressed={async () => {
          setIsInitialScreenVisible(false);
          await sleep(250);
          navigation.push('SignUpScreen');
        }}
      />
      <AwesomeAlert
        show={isLoginVisible}
        title={strings.LogIn}
        titleStyle={[
          fontStyles.black,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        customView={
          <View style={AuthFlowStyle.inputViewContainer}>
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {alignSelf: 'flex-start'},
              ]}>
              {strings.Email}
            </Text>
            <View style={AuthFlowStyle.spacer} />
            <TextInput
            placeholderTextColor={colors.lightGray}
              keyboardType={'email-address'}
              autoCorrect={false}
              style={AuthFlowStyle.inputContainerStyle}
              placeholder={strings.EmailDotDotDot}
              autoCapitalize={'none'}
              onChangeText={(newText) => setEmail(newText)}
              autoCompleteType={'email'}
              value={email}
            />
            <View style={AuthFlowStyle.spacer} />
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {alignSelf: 'flex-start'},
              ]}>
              {strings.Password}
            </Text>
            <View style={AuthFlowStyle.spacer} />
            <TextInput
              style={AuthFlowStyle.inputContainerStyle}
              placeholder={strings.PasswordDotDotDot}
              placeholderTextColor={colors.lightGray}
              autoCompleteType={'password'}
              autoCorrect={false}
              autoCapitalize={'none'}
              onChangeText={(newText) => setPassword(newText)}
              secureTextEntry={Platform.OS === 'ios' ? false : true}
              value={password}
            />
            <View style={AuthFlowStyle.spacer} />
            <View style={AuthFlowStyle.spacer} />
            <TouchableOpacity
              onPress={async () => {
                setIsLoginVisible(false);
                await sleep(250);
                setResetPasswordVisible(true);
              }}>
              <Text style={[fontStyles.black, fontStyles.bigTextStyle]}>
                {strings.ForgetPassword}
              </Text>
            </TouchableOpacity>
          </View>
        }
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        onDismiss={() => {
          setIsLoginVisible(false);
        }}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText={strings.Back}
        confirmText={strings.LogIn}
        cancelButtonStyle={AuthFlowStyle.buttonStyle}
        confirmButtonStyle={AuthFlowStyle.buttonStyle}
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
          setIsLoginVisible(false);
          await sleep(250);
          setIsInitialScreenVisible(true);
        }}
        onConfirmPressed={async () => {
          setIsLoginVisible(false);
          await sleep(250);
          setIsLoadingVisible(true);
          logIn();
        }}
      />
      <AwesomeAlert
        show={resetPasswordvisible}
        title={strings.ResetPassword}
        titleStyle={[
          fontStyles.black,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        customView={
          <View style={AuthFlowStyle.inputViewContainer}>
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {alignSelf: 'flex-start'},
              ]}>
              {strings.EnterYourEmail}
            </Text>
            <View style={AuthFlowStyle.spacer} />
            <TextInput
              keyboardType={'email-address'}
              autoCorrect={false}
              placeholderTextColor={colors.lightGray}
              style={AuthFlowStyle.inputContainerStyle}
              placeholder={strings.EmailDotDotDot}
              autoCapitalize={'none'}
              onChangeText={(newText) => setEmail(newText)}
              autoCompleteType={'email'}
              value={email}
            />
          </View>
        }
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        onDismiss={() => {
          setResetPasswordVisible(false);
        }}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText={strings.Back}
        confirmText={strings.Reset}
        cancelButtonStyle={AuthFlowStyle.buttonStyle}
        confirmButtonStyle={AuthFlowStyle.buttonStyle}
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
          setResetPasswordVisible(false);
          await sleep(250);
          setIsLoginVisible(true);
        }}
        onConfirmPressed={async () => {
          setResetPasswordVisible(false);
          await sleep(250);
          setIsLoadingVisible(true);
          resetPassword();
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
          setIsLoginVisible(true);
        }}
        showConfirmButton={true}
        confirmText={strings.Ok}
        confirmButtonStyle={AuthFlowStyle.buttonStyle}
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
        show={isSuccessVisible}
        title={strings.Success}
        titleStyle={[
          fontStyles.black,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        message={strings.AccountCreatedSuccessfully}
        messageStyle={[
          fontStyles.black,
          fontStyles.bigTextStyle,
          {textAlign: 'center'},
        ]}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        onDismiss={() => {
          setIsSuccessVisible(false);
        }}
        showConfirmButton={true}
        confirmText={strings.Ok}
        confirmButtonStyle={AuthFlowStyle.buttonStyle}
        confirmButtonTextStyle={[
          fontStyles.white,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        confirmButtonColor={colors.blue}
        onConfirmPressed={() => {
          setIsSuccessVisible(false);
        }}
      />
      <AwesomeAlert
        show={isResetPasswordSuccessVisible}
        title={strings.ResetPassword}
        titleStyle={[
          fontStyles.black,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        message={strings.ResetPasswordMessage}
        messageStyle={[
          fontStyles.black,
          fontStyles.bigTextStyle,
          {textAlign: 'center'},
        ]}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        onDismiss={() => {
          setIsResetPasswordSuccessVisible(false);
        }}
        showConfirmButton={true}
        confirmText={strings.Ok}
        confirmButtonStyle={AuthFlowStyle.buttonStyle}
        confirmButtonTextStyle={[
          fontStyles.white,
          fontStyles.biggerTextStyle,
          {textAlign: 'center'},
        ]}
        confirmButtonColor={colors.blue}
        onConfirmPressed={() => {
          setIsResetPasswordSuccessVisible(false);
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
    </View>
  );
};

// Exports the component
export default AuthFlow;
