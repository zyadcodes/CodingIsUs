// This screen will be the one containing the account information for a specific user in the website.
// It'll be accessed from the Account tab in the website
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLocation, useHistory } from "react-router-dom";
import "./AccountScreen.css";
import "../../config/fontStyles.css";
import firebase from "firebase";
import "firebase/auth";
import ReactLoading from "react-loading";
import colors from "../../config/colors";
import { sleep } from "../../config/sleep";
import { getUserData, getUserProgress } from "../../config/StorageFunctions";
import CIULogo from "../../assets/images/CIULogo.png";
import ProgressBar from "@ramonak/react-progress-bar";
import strings from "../../config/strings";
import FadeIn from "react-fade-in";
import { logEvent } from "../../config/Analytics";
import MetaTags from "react-meta-tags";
import { Link, animateScroll as scroll } from "react-scroll";
import queryString from "query-string";
import AuthFlow from "../../components/AuthFlow/AuthFlow";

// Creates the functional component
const AccountScreen = (props) => {
  // The location is used to fetch params passed in from previous screens
  const location = useLocation();
  const history = useHistory();

  // Fetches the queries from the previous screen
  const parsed = queryString.parse(location.search, {
    arrayFormat: "comma",
    parseNumbers: true,
    parseBooleans: true,
  });
  const { previousTabSelected } = parsed;

  // Sets the state of the screen
  const [user, setUser] = useState("");
  const [userID, setUserID] = useState("");
  const [userProgress, setUserProgress] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Subscribes to the auth flow
  useEffect(() => {
    scroll.scrollToTop();
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  // This is going to be the helper method to the useEffect state which is going to handle any additional
  // authentication
  const onAuthStateChanged = async (user) => {
    if (user) {
      await sleep(350);
      setIsLoading(true);
      const userData = await getUserData(user.uid);
      const userProgress = await getUserProgress(user.uid);
      setUserProgress(userProgress);
      setUser(userData);
      setUserID(user.uid);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setUser("");
      history.replace({
        pathname: "/",
        search: new URLSearchParams({
          previousTabSelected: 2,
        }).toString(),
      });
      setUserID("");
    }
  };

  if (isLoading === true) {
    return (
      <div>
        <MetaTags>
          <meta
            name="description"
            content="Access your account and view your progress in the programming guides"
          />
        </MetaTags>
        <Header
          previousTabSelected={previousTabSelected ? previousTabSelected : -1}
          currentTabSelected={2}
        />
        <div className={"accountLoadingContainer"}>
          <ReactLoading
            type={"spin"}
            color={colors.blue}
            height={"5vh"}
            width={"5vw"}
          />
        </div>
        <Footer />
      </div>
    );
  }

  // Returns the UI for the screen
  return (
    <div className={"accountContainer"}>
      <MetaTags>
        <meta
          name="description"
          content="Access your account and view your progress in the programming guides"
        />
      </MetaTags>
      <Header
        previousTabSelected={previousTabSelected ? previousTabSelected : -1}
        currentTabSelected={2}
      />
      <FadeIn delay={50}>
        <div className={"accountProfileHeader"}>
          <div>
            <div className={"mainTitleTextStyle white"}>{strings.Hi}</div>
            <div className={"mainTitleTextStyle white"}>
              {user.name.length < 15 ? user.name : user.name.substring(0, 15)}
            </div>
          </div>
          <img className={"accountCIULogo"} src={CIULogo} />
        </div>
        <div className={"accountProgressContainer"}>
          <div className={"longTitleTextStyle black"}>{strings.InProgress}</div>
          {userProgress.inProgressGuides.map((eachGuide) => (
            <div
              className={"accountGuideCard"}
              onClick={() => {
                logEvent("GuideClicked", { guideID: eachGuide.guideID });
                logEvent("InProgressGuideClicked", {
                  guideID: eachGuide.guideID,
                });
                history.push({
                  pathname: "/GuideScreen",
                  search: new URLSearchParams({
                    guideID: eachGuide.guideID,
                  }).toString(),
                });
              }}
            >
              <img src={eachGuide.logo} className={"accountGuideLogo"} />
              <div className={"accountTitleProgressContainer"}>
                <div className={"biggerTextStyle black"}>{eachGuide.title}</div>
                <ProgressBar
                  completed={parseFloat(
                    (eachGuide.guideCompletionPercentage * 100).toFixed(0)
                  )}
                  height={"5vh"}
                  borderRadius={"0px"}
                  width={"70vw"}
                  bgcolor={colors.blue}
                  labelColor={colors.black}
                  labelAlignment={"outside"}
                  baseBgColor={colors.lightGray}
                  labelSize={"1.82vw"}
                />
              </div>
            </div>
          ))}
          {userProgress.completedGuides.length > 0 ? (
            <div>
              <div className={"longTitleTextStyle black"}>
                {strings.Completed}
              </div>
              {userProgress.completedGuides.map((eachGuide) => (
                <div
                  className={"accountGuideCard"}
                  onClick={() => {
                    logEvent("GuideClicked", { guideID: eachGuide.guideID });
                    logEvent("CompletedGuideClicked", {
                      guideID: eachGuide.guideID,
                    });
                    history.push({
                      pathname: "/GuideScreen",
                      search: new URLSearchParams({
                        guideID: eachGuide.guideID,
                      }).toString(),
                    });
                  }}
                >
                  <img src={eachGuide.logo} className={"accountGuideLogo"} />
                  <div className={"accountTitleProgressContainer"}>
                    <div className={"biggerTextStyle black"}>
                      {eachGuide.title}
                    </div>
                    <ProgressBar
                      completed={parseFloat(
                        (eachGuide.guideCompletionPercentage * 100).toFixed(0)
                      )}
                      height={"5vh"}
                      width={"70vw"}
                      borderRadius={"0px"}
                      bgcolor={colors.blue}
                      labelColor={colors.black}
                      labelAlignment={"outside"}
                      baseBgColor={colors.lightGray}
                      labelSize={"1.82vw"}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div />
          )}
        </div>
      </FadeIn>
      <button
        className="accountSignOutButton"
        onClick={async () => {
          logEvent("SignOut", {});
          history.replace({
            pathname: "/",
            search: new URLSearchParams({
              previousTabSelected: 2,
            }).toString(),
          });
          firebase.auth().signOut();
        }}
      >
        <div className={"biggerTextStyle white"}>{strings.SignOut}</div>
      </button>
      <Footer />
    </div>
  );
};

// Exports the component
export default AccountScreen;
