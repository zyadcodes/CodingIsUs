// This is the component that will control the flow of authentication within the mobile app.
// It will control the logging in and the signing up for an account
import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Platform} from 'react-native';
import AuthFlowStyle from './AuthFlowStyle';
import AwesomeAlert from '../../components/AwesomeAlert/AwesomeAlert';
import strings from '../../../config/strings';
import fontStyles from '../../../config/fontStyles';
import colors from '../../../config/colors';
import {logEvent, setupFBMatching} from '../../../config/Analytics';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import {
  createUserInFirestore,
  retrieveFirestoreData,
} from '../../../config/StorageFunctions';

// Declares the functional component
const AuthFlow = (props) => {
  // Retrieves the isVisible prop
  const {isVisible, showSuccess} = props;

  // Sets the initial states of the flow
  const [isInitialScreenVisible, setIsInitialScreenVisible] = useState(
    isVisible,
  );
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

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
      setCurrentStep('login');
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
      await retrieveFirestoreData(user.user.uid);
      setupFBMatching(trimmedEmail);
      logEvent('LogIn', {});
    } catch (error) {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password'
      ) {
        setErrorMessage(strings.IncorrectEmailOrPassword);
        setCurrentStep('login');
        await sleep(500);
        setIsLoadingVisible(false);
        await sleep(250);
        setIsErrorVisible(true);
        return;
      }
    }
  };

  // This method is going to sign the user up and handle all of the errors that could arise with that sign up
  const signUp = async () => {
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
      setCurrentStep('signup');
      await sleep(500);
      setIsLoadingVisible(false);
      await sleep(250);
      setIsErrorVisible(true);
      return;
    }

    // Will check to see if the length of the password is valid
    if (trimmedPassword.length < 6) {
      setErrorMessage(strings.PasswordLengthError);
      setCurrentStep('signup');
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
      setCurrentStep('signup');
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
      if (showSuccess === true) {
        setIsSuccessVisible(true);
      }
    } catch (error) {
      // Checks if the email format is valid
      if (error.code === 'auth/invalid-email') {
        setErrorMessage(strings.PleaseEnterValidEmail);
        setCurrentStep('signup');
        await sleep(500);
        setIsLoadingVisible(false);
        await sleep(250);
        setIsErrorVisible(true);
        return;
      } else if (error.code === 'auth/email-already-in-use') {
        setErrorMessage(strings.EmailInUse);
        setCurrentStep('signup');
        await sleep(500);
        setIsLoadingVisible(false);
        await sleep(250);
        setIsErrorVisible(true);
        return;
      }
    }
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
          setIsSignUpVisible(true);
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
              autoCompleteType={'password'}
              autoCorrect={false}
              autoCapitalize={'none'}
              onChangeText={(newText) => setPassword(newText)}
              secureTextEntry={Platform.OS === 'ios' ? false : true}
              value={password}
            />
            <View style={AuthFlowStyle.spacer} />
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
        show={isSignUpVisible}
        title={strings.SignUp}
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
              {strings.Name}
            </Text>
            <View style={AuthFlowStyle.spacer} />
            <TextInput
              style={AuthFlowStyle.inputContainerStyle}
              autoCapitalize={'words'}
              autoCorrect={false}
              placeholder={strings.NameDotDotDot}
              onChangeText={(newText) => setName(newText)}
              autoCompleteType={'name'}
              value={name}
            />
            <View style={AuthFlowStyle.spacer} />
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
              style={AuthFlowStyle.inputContainerStyle}
              keyboardType={'email-address'}
              autoCorrect={false}
              placeholder={strings.EmailDotDotDot}
              autoCapitalize={'none'}
              autoCompleteType={'email'}
              onChangeText={(newText) => setEmail(newText)}
              value={email}
            />
            <View style={AuthFlowStyle.spacer} />
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {alignSelf: 'flex-start'},
              ]}>
              {strings.ConfirmEmail}
            </Text>
            <View style={AuthFlowStyle.spacer} />
            <TextInput
              style={AuthFlowStyle.inputContainerStyle}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              autoCorrect={false}
              autoCorrect={false}
              placeholder={strings.ConfirmEmailDotDotDot}
              autoCompleteType={'email'}
              onChangeText={(newText) => setConfirmEmail(newText)}
              value={confirmEmail}
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
              autoCorrect={false}
              autoCapitalize={'none'}
              onChangeText={(newText) => setPassword(newText)}
              autoCompleteType={'password'}
              secureTextEntry={Platform.OS === 'ios' ? false : true}
              value={password}
            />
            <View style={AuthFlowStyle.spacer} />
            <Text
              style={[
                fontStyles.black,
                fontStyles.bigTextStyle,
                {alignSelf: 'flex-start'},
              ]}>
              {strings.ConfirmPassword}
            </Text>
            <View style={AuthFlowStyle.spacer} />
            <TextInput
              style={AuthFlowStyle.inputContainerStyle}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder={strings.ConfirmPasswordDotDotDot}
              autoCompleteType={'password'}
              onChangeText={(newText) => setConfirmPassword(newText)}
              secureTextEntry={Platform.OS === 'ios' ? false : true}
              value={confirmPassword}
            />
            <View style={AuthFlowStyle.spacer} />
            <View style={AuthFlowStyle.spacer} />
            <View style={AuthFlowStyle.checkboxContainer}>
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
              <View style={AuthFlowStyle.spacer} />
              <Text
                style={[
                  fontStyles.mainTextStyle,
                  fontStyles.black,
                  {textAlign: 'center'},
                ]}>
                {strings.IAgreeToReceiveEmails}
              </Text>
              <View style={AuthFlowStyle.spacer} />
            </View>
          </View>
        }
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        onDismiss={() => {
          setIsSignUpVisible(false);
        }}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText={strings.Back}
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
          setIsSignUpVisible(false);
          await sleep(250);
          setIsInitialScreenVisible(true);
        }}
        onConfirmPressed={async () => {
          setIsSignUpVisible(false);
          await sleep(250);
          setIsLoadingVisible(true);
          signUp();
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
          if (currentStep === 'login') {
            setIsLoginVisible(true);
          } else {
            setIsSignUpVisible(true);
          }
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
