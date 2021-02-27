// This is going to be the screen where a specific category is displayed in the Coding is Us website
import React, { useEffect, useState } from "react";
import GuideTitles from "../../config/GuideTitles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLocation, useHistory } from "react-router-dom";
import Categories from "../../config/Categories";
import "./CategoryScreen.css";
import "../../config/fontStyles.css";
import AuthFlow from "../../components/AuthFlow/AuthFlow";
import FadeIn from "react-fade-in";
import ReactLoading from "react-loading";
import colors from "../../config/colors";
import { logEvent } from "../../config/Analytics";
import MetaTags from "react-meta-tags";
import { Link, animateScroll as scroll } from "react-scroll";
import firebase from "firebase";
import "firebase/auth";
import queryString from "query-string";
import { sleep } from "../../config/sleep";

// Creates the functional component
const CategoryScreen = (props) => {
  // The location is used to fetch params passed in from previous screens
  const location = useLocation();
  const history = useHistory();

  // Fetches the passed in GuideIDs from the previous screen
  const parsed = queryString.parse(location.search, {
    arrayFormat: "comma",
    parseNumbers: true,
    parseBooleans: true,
  });
  let { guideIDs } = parsed;

  // Will control the state of the screen
  const [isLoading, setIsLoading] = useState(true);
  const [guides, setGuides] = useState("");
  const [authFlowVisible, setAuthFlowVisible] = useState("");
  const [userID, setUserID] = useState("");

  // The useEffect method will set the screen's data to display the correct guides
  useEffect(() => {
    scroll.scrollToTop();
    if (!guideIDs) {
      guideIDs = Categories[Categories.length - 1].guideIDs;
    }
    const guideData = GuideTitles.filter((eachGuide) =>
      guideIDs.includes(eachGuide.guideID)
    );
    setGuides(guideData);
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  // This helper method will determine whether or not a user is logged in
  const onAuthStateChanged = async (user) => {
    if (user) {
      setUserID(user.uid);
    } else {
      setUserID("");
    }
    setIsLoading(false);
  };

  // Renders the loading state of the screen
  if (isLoading === true) {
    return (
      <div>
        <Header previousTabSelected={-1} currentTabSelected={-1} />
        <MetaTags>
          <meta
            name="description"
            content="View a specific category from our variety of programming guides and concepts"
          />
        </MetaTags>
        <div className={"categoryLoadingContainer"}>
          <ReactLoading
            type={"spin"}
            color={colors.blue}
            height={"3.5vh"}
            width={"2vw"}
          />
        </div>
        <Footer />
      </div>
    );
  }

  // Returns the UI for the screen
  return (
    <div className={"contactContainer"}>
      <MetaTags>
        <meta
          name="description"
          content="View a specific category from our variety of programming guides and concepts"
        />
      </MetaTags>
      <Header previousTabSelected={-1} currentTabSelected={-1} />
      <AuthFlow initialVisible={authFlowVisible} />
      <FadeIn delay={50} className={"contactListContainer"}>
        {guides.map((eachGuide, index) => (
          <div
            key={index}
            className={"contactCategoryCardContainer"}
            onClick={async () => {
              if (userID === "") {
                setAuthFlowVisible("");
                await sleep(100);
                setAuthFlowVisible("initial");
              } else {
                logEvent("GuideClicked", { guideID: eachGuide.guideID });
                history.push({
                  pathname: "/GuideScreen",
                  search: new URLSearchParams({
                    guideID: eachGuide.guideID,
                  }).toString(),
                });
              }
            }}
          >
            <img className={"contactGuideLogo"} src={eachGuide.logo} />
            <div className={"contactVerticalSpacer"} />
            <div className={"biggerTextStyle black"}>{eachGuide.title}</div>
          </div>
        ))}
      </FadeIn>
      <Footer />
    </div>
  );
};

// Exports the component
export default CategoryScreen;
