// This is going to be the Authentication flow for the coding is us website. It will allow people to log in,
// sign up, reset passwords, etc.
import React, { useEffect, useState } from "react";
import "./AuthFlow.css";
import "../../config/fontStyles.css";
import { useHistory } from "react-router-dom";
import strings from "../../config/strings";
import Modal from "react-awesome-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sleep } from "../../config/sleep";
import firebase from "firebase";
import "firebase/auth";
import { createUserInFirestore } from "../../config/StorageFunctions";
import ReactLoading from "react-loading";
import colors from "../../config/colors";
import ReactPixel from "react-facebook-pixel";
import { logEvent } from "../../config/Analytics";

// Creates the functional component
const AuthFlow = (props) => {
  // Fetches the initial modal that should be displayed according to the props passed in
  const { initialVisible } = props;

  // Retrieves the auth library
  const auth = firebase.auth();

  // Initializes the history module
  const history = useHistory();

  // This useEffect method will control showing the modal. It will be called everytime the initialVisible changes
  useEffect(() => {
    if (initialVisible === "") {
      setIsInitialVisible(false);
      setIsLoginVisible(false);
      setIsSignUpVisible(false);
    } else if (initialVisible === "initial") {
      setIsSignUpVisible(false);
      setIsLoginVisible(false);
      setIsInitialVisible(true);
    } else if (initialVisible === "login") {
      setIsInitialVisible(false);
      setIsSignUpVisible(false);
      setIsLoginVisible(true);
    } else if (initialVisible === "signup") {
      setIsInitialVisible(false);
      setIsLoginVisible(false);
      setIsSignUpVisible(true);
    }
  }, [initialVisible]);

  // Sets up the state properties that will be used in the UI
  const [isInitialVisible, setIsInitialVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);
  const [
    isForgotPasswordSuccessVisible,
    setIsForgotPasswordSuccessVisible,
  ] = useState(false);
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStep, setCurrentStep] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(true);

  // This method is going to log in the user and handle all of the errors that could arise with that login
  const logIn = async () => {
    setIsLoadingVisible(true);
    // The first step will check to see that the email and password fields have been filled out
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (trimmedEmail.length === 0 || trimmedPassword.length === 0) {
      setErrorMessage(strings.PleaseFillOutAllFields);
      await sleep(250);
      setIsLoadingVisible(false);
      await sleep(250);
      setIsErrorVisible(true);
      return;
    }

    // If everything is filled out correctly, the next step is that it will try to log in the user to their account
    try {
      const user = await auth.signInWithEmailAndPassword(
        trimmedEmail,
        trimmedPassword
      );
      await sleep(250);
      setIsLoadingVisible(false);
      ReactPixel.init("2743178669284425", { em: trimmedEmail });
      history.replace({
        pathname: "/AccountScreen",
        search: new URLSearchParams({
          previousTabSelected: 2,
        }).toString(),
      });
      logEvent("LogInSuccess", {});
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/invalid-email" ||
        error.code === "auth/wrong-password"
      ) {
        setErrorMessage(strings.IncorrectEmailOrPassword);
        await sleep(500);
        setIsLoadingVisible(false);
        await sleep(250);
        setIsErrorVisible(true);
        return;
      } else {
        console.log(error);
      }
      logEvent("LogInFailure", { error });
    }
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
      const user = await auth.createUserWithEmailAndPassword(
        trimmedEmail,
        trimmedPassword
      );
      user.user.sendEmailVerification();

      await createUserInFirestore(
        user.user.uid,
        trimmedName,
        trimmedEmail,
        isSubscribed
      );
      if (isSubscribed === true) {
        logEvent("Subscribed", {});
      }
      ReactPixel.init("2743178669284425", { em: trimmedEmail });
      logEvent("SignUpSuccess", {});
      await sleep(250);
      setIsLoadingVisible(false);
      history.replace({
        pathname: "/AccountScreen",
        search: new URLSearchParams({
          previousTabSelected: 2,
        }).toString(),
      });
    } catch (error) {
      // Checks if the email format is valid
      if (error.code === "auth/invalid-email") {
        setErrorMessage(strings.PleaseEnterValidEmailAddress);
        await sleep(500);
        setIsLoadingVisible(false);
        await sleep(250);
        setIsErrorVisible(true);
        return;
      } else if (error.code === "auth/email-already-in-use") {
        setErrorMessage(strings.EmailInUse);
        await sleep(500);
        setIsLoadingVisible(false);
        await sleep(250);
        setIsErrorVisible(true);
        return;
      } else {
        console.log(error);
      }
      logEvent("SignUpFailure", { error });
    }
  };

  // This is going to send an email password link to the entered email
  const resetPassword = async () => {
    const trimmedEmail = email.trim();
    auth.sendPasswordResetEmail(trimmedEmail);
    await sleep(250);
    setIsLoadingVisible(false);
    await sleep(250);
    setIsForgotPasswordSuccessVisible(true);
    logEvent("ResetPassword", {});
  };

  // Returns the UI of the modals
  return (
    <div>
      <Modal
        visible={isInitialVisible}
        effect="fadeInDown"
        onClickAway={() => setIsInitialVisible(false)}
      >
        <div className={"authModalContainer"}>
          <div
            className={"authXButton"}
            onClick={() => setIsInitialVisible(false)}
          >
            <FontAwesomeIcon icon={"times"} color={colors.lightGray} />
          </div>
          <div className={"biggerTextStyle black"}>
            {strings.CreateAFreeAccount}
          </div>
          <div className={"authButtonsContainer"}>
            <button
              className="authButton authGray"
              onClick={async () => {
                setIsInitialVisible(false);
                await sleep(250);
                logEvent("LogInInitiated", {});
                setIsLoginVisible(true);
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.LogIn}</div>
            </button>
            <button
              className="authButton authBlue"
              onClick={async () => {
                setIsInitialVisible(false);
                await sleep(250);
                logEvent("SignUpInitiated", {});
                setIsSignUpVisible(true);
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.SignUp}</div>
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        visible={isLoginVisible}
        effect="fadeInDown"
        onClickAway={() => setIsLoginVisible(false)}
      >
        <div className={"authModalContainer"}>
          <div
            className={"authXButton"}
            onClick={() => setIsLoginVisible(false)}
          >
            <FontAwesomeIcon icon={"times"} color={colors.lightGray} />
          </div>
          <div className={"longTitleTextStyle black"}>{strings.LogIn}</div>
          <div className={"biggerTextStyle black authInputTitle"}>
            {strings.Email}
          </div>
          <input
            autocomplete={"on"}
            type={"email"}
            className={"authInputStyle subTextStyle black"}
            placeholder={strings.EmailDotDotDot}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className={"biggerTextStyle black authInputTitle"}>
            {strings.Password}
          </div>
          <input
            autocomplete={"on"}
            type={"password"}
            className={"authInputStyle subTextStyle black"}
            placeholder={strings.PasswordDotDotDot}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div
            className={
              "bigTextStyle black authLink forgotPassword authHoverBlue"
            }
            onClick={async () => {
              setIsLoginVisible(false);
              await sleep(250);
              setIsForgotPasswordVisible(true);
            }}
          >
            {strings.ForgotPassword}
          </div>
          <div className={"authButtonsContainer"}>
            <button
              className="authButton authGray"
              onClick={async () => {
                setIsLoginVisible(false);
                await sleep(250);
                setIsInitialVisible(true);
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.Back}</div>
            </button>
            <button
              className="authButton authBlue"
              onClick={async () => {
                // Will attempt to log in the user
                setIsLoginVisible(false);
                setCurrentStep("login");
                await sleep(250);
                logIn();
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.LogIn}</div>
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        visible={isSignUpVisible}
        effect="fadeInDown"
        onClickAway={() => setIsSignUpVisible(false)}
      >
        <div className={"authModalContainer"}>
          <div
            className={"authXButton"}
            onClick={() => setIsSignUpVisible(false)}
          >
            <FontAwesomeIcon icon={"times"} color={colors.lightGray} />
          </div>
          <div className={"longTitleTextStyle black"}>{strings.SignUp}</div>
          <div className={"modalRow"}>
            <div className={"modalRowSection"}>
              <div className={"biggerTextStyle black authInputTitle"}>
                {strings.Name}
              </div>
              <input
                autocomplete={"on"}
                className={"authInputStyle subTextStyle black"}
                placeholder={strings.NameDotDotDot}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <div className={"biggerTextStyle black authInputTitle"}>
                {strings.Email}
              </div>
              <input
                autocomplete={"on"}
                type={"email"}
                className={"authInputStyle subTextStyle black"}
                placeholder={strings.EmailDotDotDot}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className={"biggerTextStyle black authInputTitle"}>
                {strings.ConfirmEmail}
              </div>
              <input
                autocomplete={"off"}
                className={"authInputStyle subTextStyle black"}
                placeholder={strings.ConfirmEmailDotDotDot}
                value={confirmEmail}
                onChange={(event) => setConfirmEmail(event.target.value)}
              />
            </div>
            <div className={"modalRowSection"}>
              <div className={"biggerTextStyle black authInputTitle"}>
                {strings.Password}
              </div>
              <input
                autocomplete={"on"}
                type={"password"}
                className={"authInputStyle subTextStyle black"}
                placeholder={strings.PasswordDotDotDot}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className={"biggerTextStyle black authInputTitle"}>
                {strings.ConfirmPassword}
              </div>
              <input
                autocomplete={"off"}
                type={"password"}
                className={"authInputStyle subTextStyle black"}
                placeholder={strings.ConfirmPasswordDotDotDot}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <input
                type="checkbox"
                className={"authCheckbox"}
                checked={isSubscribed}
                onChange={(event) => setIsSubscribed(event.target.checked)}
              />
              <div className={"bigTextStyle black"}>
                {strings.IAgreeToReceiveEmails}
              </div>
            </div>
          </div>
          <div className={"authButtonsContainer"}>
            <button
              className="authButton authGray"
              onClick={async () => {
                setIsSignUpVisible(false);
                await sleep(250);
                setIsInitialVisible(true);
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.Back}</div>
            </button>
            <button
              className="authButton authBlue"
              onClick={async () => {
                // Will attempt to sign up the user
                setIsSignUpVisible(false);
                setCurrentStep("signup");
                await sleep(250);
                signUp();
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.SignUp}</div>
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        visible={isForgotPasswordVisible}
        effect="fadeInDown"
        onClickAway={() => setIsForgotPasswordVisible(false)}
      >
        <div className={"authModalContainer"}>
          <div
            className={"authXButton"}
            onClick={() => setIsForgotPasswordVisible(false)}
          >
            <FontAwesomeIcon icon={"times"} color={colors.lightGray} />
          </div>
          <div className={"longTitleTextStyle black"}>
            {strings.ResetPassword}
          </div>
          <div className={"biggerTextStyle black authInputTitle"}>
            {strings.EnterYourEmailAddress}
          </div>
          <input
            className={"authInputStyle subTextStyle black"}
            placeholder={strings.EmailDotDotDot}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className={"authButtonsContainer"}>
            <button
              className="authButton authGray"
              onClick={async () => {
                setIsForgotPasswordVisible(false);
                await sleep(250);
                setIsLoginVisible(true);
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.Back}</div>
            </button>
            <button
              className="authButton authBlue"
              onClick={async () => {
                // Resets the password for this email
                setIsForgotPasswordVisible(false);
                await sleep(250);
                setIsForgotPasswordSuccessVisible(true);
                resetPassword();
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.Reset}</div>
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        visible={isForgotPasswordSuccessVisible}
        effect="fadeInDown"
        onClickAway={() => setIsForgotPasswordSuccessVisible(false)}
      >
        <div className={"authModalContainer"}>
          <div
            className={"authXButton"}
            onClick={() => setIsForgotPasswordSuccessVisible(false)}
          >
            <FontAwesomeIcon icon={"times"} color={colors.lightGray} />
          </div>
          <div className={"longTitleTextStyle black"}>
            {strings.ResetPassword}
          </div>
          <div className={"biggerTextStyle black"}>
            {strings.WeHaveSentEmailToResetPassword}
          </div>
          <div className={"authButtonsSingleContainer"}>
            <button
              className="authButton authBlue"
              onClick={async () => {
                setIsForgotPasswordSuccessVisible(false);
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.Ok}</div>
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        visible={isErrorVisible}
        effect="fadeInDown"
        onClickAway={async () => {
          setIsErrorVisible(false);
          await sleep(250);
          if (currentStep === "login") {
            setIsLoginVisible(true);
          } else {
            setIsSignUpVisible(true);
          }
        }}
      >
        <div className={"authModalContainer"}>
          <div
            className={"authXButton"}
            onClick={async () => {
              setIsErrorVisible(false);
              await sleep(250);
              if (currentStep === "login") {
                setIsLoginVisible(true);
              } else {
                setIsSignUpVisible(true);
              }
            }}
          >
            <FontAwesomeIcon icon={"times"} color={colors.lightGray} />
          </div>
          <div className={"longTitleTextStyle black"}>{strings.Whoops}</div>
          <div className={"biggerTextStyle black"}>{errorMessage}</div>
          <div className={"authButtonsSingleContainer"}>
            <button
              className="authButton authBlue"
              onClick={async () => {
                setIsErrorVisible(false);
                await sleep(250);
                if (currentStep === "login") {
                  setIsLoginVisible(true);
                } else {
                  setIsSignUpVisible(true);
                }
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.Ok}</div>
            </button>
          </div>
        </div>
      </Modal>
      <Modal visible={isLoadingVisible} effect="fadeInDown">
        <div className={"authModalContainer"}>
          <ReactLoading
            type={"spin"}
            color={colors.blue}
            height={"3.5vh"}
            width={"2vw"}
          />
        </div>
      </Modal>
    </div>
  );
};

// Exports the component
export default AuthFlow;
