// This screen will be the one that contains all of the categories in the website and will allow the user to navigate to the guides
// It'll be accessed from the Learn tab in the website
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Categories from "../../config/Categories";
import { useLocation, useHistory } from "react-router-dom";
import "./LearnScreen.css";
import "../../config/fontStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase";
import "firebase/auth";
import FadeIn from "react-fade-in";
import { logEvent } from "../../config/Analytics";
import MetaTags from "react-meta-tags";
import { Link, animateScroll as scroll } from "react-scroll";
import queryString from "query-string";

// Creates the functional component
const LearnScreen = (props) => {
  // The location is used to fetch params passed in from previous screens. Will also initialze the history
  // hook
  const location = useLocation();
  const history = useHistory();

  // Fetches the passed in queries from the previous screen
  const parsed = queryString.parse(location.search, {
    arrayFormat: "comma",
    parseNumbers: true,
  });
  const { previousTabSelected } = parsed;


  // Sets the state for the initial userID
  const [userID, setUserID] = useState("");

  // Subscribes to the auth state changes
  useEffect(() => {
    scroll.scrollToTop();
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  // This is going to be the helper method to the useEffect state which is going to handle any additional
  // authentication
  const onAuthStateChanged = async (user) => {
    if (user) {
      setUserID(user.uid);
    } else {
      setUserID("");
    }
  };

  // Returns the UI for the screen
  return (
    <div className={"learnContainer"}>
      <MetaTags>
        <meta
          name="description"
          content="Browse our variety of programming guides and categories"
        />
      </MetaTags>
      <Header
        previousTabSelected={
          previousTabSelected ? previousTabSelected : 0
        }
        currentTabSelected={0}
      />
      <FadeIn delay={50} className={"learnListContainer"}>
        {Categories.map((eachCategory, index) => (
          <div
            key={index}
            className={"learnCategoryCardContainer"}
            onClick={() => {
              logEvent("CategoryClicked", {
                categoryTitle: eachCategory.title,
              });
              history.push({
                pathname: "/CategoryScreen",
                search: new URLSearchParams({
                  guideIDs: eachCategory.guideIDs,
                }).toString(),
              });
            }}
          >
            <FontAwesomeIcon
              icon={eachCategory.iconName}
              color={eachCategory.iconColor}
              className={"learnCategoryIcon"}
            />
            <div className={"learnVerticalSpacer"} />
            <div className={"biggerTextStyle black"}>{eachCategory.title}</div>
          </div>
        ))}
      </FadeIn>
      <Footer />
    </div>
  );
};

// Exports the component
export default LearnScreen;
