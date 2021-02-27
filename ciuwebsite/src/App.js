// This is the main file that will be called when the web app is rendered
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./navigation/Routes";
import firebase from "firebase";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ReactPixel from "react-facebook-pixel";
import { isMobile } from "react-device-detect";
import "./config/fontStyles";
import "./App.css";
import strings from "./config/strings";
import { logEvent } from "./config/Analytics";
import MobilePlayground from "./screens/MobilePlayground/MobilePlayground";

// Initializes firebase
firebase.initializeApp({
  apiKey: "AIzaSyAuPVR7ZPOMddAQX2_asx0VsOLpTlfF4NU",
  authDomain: "coding-is-us.firebaseapp.com",
  databaseURL: "https://coding-is-us.firebaseio.com",
  projectId: "coding-is-us",
  storageBucket: "coding-is-us.appspot.com",
  messagingSenderId: "234463436871",
  appId: "1:234463436871:web:4cdebed85b0ecc0d2d1162",
  measurementId: "G-YD5RKZX6KZ",
});
// Loads the website icons
library.add(fab, fas);

// Declares the functional component. Uses the declared router to connect all of the pages together
const App = () => {
  // Loads facebook analytics, etc.
  useEffect(() => {
    ReactPixel.init("2743178669284425");
    ReactPixel.pageView();
  }, []);

  // This function will take in a URL and open the URL in a new tab. The function also deals with the _blank security
  // issue
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    logEvent("URLClicked", { url });
    if (newWindow) newWindow.opener = null;
  };

  /*
  Returns the app Playground
  */
  return <MobilePlayground />;

  // If on mobile, returns a screen showing them links to the apps
  if (
    isMobile &&
    window.location.href !== "https://codingisus.com/#/PodcastLinks"
  ) {
    return (
      <div className={"appContainer"}>
        <div className={"biggerTextStyle black"} style={{ fontSize: "4vh" }}>
          {strings.TheCodingIsUsMobileWebsite}
        </div>
        <button
          className="appBlueButton"
          onClick={() =>
            openInNewTab(
              "https://apps.apple.com/us/app/coding-is-us/id1532536501"
            )
          }
        >
          <div className={"biggerTextStyle white"} style={{ fontSize: "4vh" }}>
            {strings.iOS}
          </div>
        </button>
        <button
          className="appBlueButton"
          onClick={() =>
            openInNewTab(
              "https://play.google.com/store/apps/details?id=com.CodingIsUs.CodingIsUs&hl=en_US&gl=US"
            )
          }
        >
          <div className={"biggerTextStyle white"} style={{ fontSize: "4vh" }}>
            {strings.Android}
          </div>
        </button>
      </div>
    );
  }

  // Returns the normal app
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

// Exports the app
export default App;
