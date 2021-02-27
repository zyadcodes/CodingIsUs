// This is going to be the header that will be shown across the entier website. It will control the navigation
// and the flow of the website
import React, { useState, useEffect } from "react";
import "./Header.css";
import "../../config/fontStyles.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import strings from "../../config/strings";
import { tabsUseStyles, tabUseStyles } from "./HeaderStyles";
import { useHistory } from "react-router-dom";
import CIULogo from "../../assets/images/CIULogo.png";
import AuthFlow from "../AuthFlow/AuthFlow";
import { sleep } from "../../config/sleep";
import firebase from "firebase";
import "firebase/auth";
import { logEvent } from "../../config/Analytics";

// Creates the functional component
const Header = (props) => {
  // Fetches the props of the previous tabs
  const { previousTabSelected, currentTabSelected } = props;

  // Controls the value of the current tab selected in the header. Also controls the auth flow modal
  const [tabSelected, setTabSelected] = useState(previousTabSelected);
  const [authFlowVisible, setAuthFlowVisible] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Uses the styles as defined by the Material UI styles
  const tabsClasses = tabsUseStyles();
  const tabClasses = tabUseStyles();

  // Creates the history hook to allow navigation between screens
  const history = useHistory();

  // Adds the animation for switching tabs so it is smooth. Also subscribes to the auth flow
  useEffect(() => {
    setTabSelected(currentTabSelected);
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  // This is going to be the helper method to the useEffect state which is going to handle any additional
  // authentication
  const onAuthStateChanged = async (user) => {
    if (user) {
      await sleep(350);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };
  return (
    <div className={"headerContainer"}>
      <AuthFlow initialVisible={authFlowVisible} />
      <div className={"headerTopSection"}>
        <div
          className={"headerLogoContainer"}
          onClick={() =>
            history.replace({
              pathname: "/",
              search: new URLSearchParams({
                previousTabSelected: currentTabSelected,
              }).toString(),
            })
          }
        >
          <img src={CIULogo} className={"headerLogoStyle"} />
        </div>
        <div className={"headerTopRightSection"}>
          <div
            className={"bigTextStyle black headerLink headerHoverBlue"}
            onClick={() =>
              history.push({
                pathname: "/ContactScreen",
              })
            }
          >
            {strings.Contact}
          </div>
          <div
            onClick={() =>
              history.push({
                pathname: "/AboutScreen",
              })
            }
            className={"bigTextStyle black headerLink headerHoverBlue"}
          >
            {strings.About}
          </div>
          <div
            onClick={() =>
              history.push({
                pathname: "/TermsOfService",
              })
            }
            className={"bigTextStyle black headerLink headerHoverBlue"}
          >
            {strings.TermsOfService}
          </div>
          <div
            onClick={() =>
              history.push({
                pathname: "/PrivacyPolicy",
              })
            }
            className={"bigTextStyle black headerLink headerHoverBlue"}
          >
            {strings.PrivacyPolicy}
          </div>
        </div>
      </div>
      <div className={"headerBottomSection"}>
        <div className={isLoggedIn ? "" : "headerLeftSpacer"} />
        <div>
          <Tabs
            scrollButtons={"off"}
            value={tabSelected}
            onChange={(event, newValue) => {
              console.log(isLoggedIn);
              console.log(newValue)
              if (isLoggedIn === false && newValue == 2) {
                // Do nothing
              } else {
                setTabSelected(newValue);
              }
            }}
            classes={tabsClasses}
          >
            <Tab
              classes={tabClasses}
              onClick={() =>
                history.replace({
                  pathname: "/",
                  search: new URLSearchParams({
                    previousTabSelected: currentTabSelected,
                  }).toString(),
                })
              }
              label={
                <div
                  className={
                    tabSelected === 0
                      ? "biggerTextStyle blue headerHoverBlue"
                      : "biggerTextStyle black headerHoverBlue"
                  }
                >
                  {strings.Learn}
                </div>
              }
            />
            <Tab
              classes={tabClasses}
              onClick={() =>
                history.replace({
                  pathname: "/PracticeScreen",
                  search: new URLSearchParams({
                    previousTabSelected: currentTabSelected,
                  }).toString(),
                })
              }
              label={
                <div
                  className={
                    tabSelected === 1
                      ? "biggerTextStyle blue headerHoverBlue"
                      : "biggerTextStyle black headerHoverBlue"
                  }
                >
                  {strings.Practice}
                </div>
              }
            />
            <Tab
              classes={tabClasses}
              onClick={async () => {
                // Insert if statement to test if a user is logged in or not
                if (isLoggedIn === true) {
                  history.replace({
                    pathname: "/AccountScreen",
                    search: new URLSearchParams({
                      previousTabSelected: currentTabSelected,
                    }).toString(),
                  });
                } else {
                  setAuthFlowVisible("");
                  await sleep(100);
                  setAuthFlowVisible("initial");
                  logEvent("AuthInitiated", {});
                }
              }}
              label={
                <div
                  className={
                    tabSelected === 2
                      ? "biggerTextStyle blue headerHoverBlue"
                      : "biggerTextStyle black headerHoverBlue"
                  }
                >
                  {strings.Account}
                </div>
              }
            />
          </Tabs>
        </div>
        {isLoggedIn === false ? (
          <div className={"headerAuthButtons"}>
            <div
              className={
                "longTitleTextStyle black headerLink headerLogInLink headerHoverBlue"
              }
              onClick={async () => {
                setAuthFlowVisible("");
                await sleep(100);
                logEvent("LogInInitiated", {});
                setAuthFlowVisible("login");
              }}
            >
              {strings.LogIn}
            </div>
            <div
              className={"longTitleTextStyle white headerLink headerSignUpLink"}
              onClick={async () => {
                setAuthFlowVisible("");
                await sleep(100);
                logEvent("SignUpInitiated", {});
                setAuthFlowVisible("signup");
              }}
            >
              {strings.SignUp}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

// Exports the component
export default Header;
