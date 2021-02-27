// This is the screen that will show up in case of a 404 error
import React from "react";
import "./ErrorPage.css";
import strings from "../../config/strings";
import fontStyles from "../../config/fontStyles";
import CIULogo from "../../assets/images/CIULogo.png";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";

// Creates the functional component
const ErrorPage = () => {
  // Initializes the history hook
  const history = useHistory();

  // Renders the UI of the screen
  return (
    <div className={"errorContainer"}>
      <img src={CIULogo} className={"errorLogo"} />
      <div
        style={
          isMobile === true
            ? {
                ...fontStyles.longTitleTextStyle,
                ...fontStyles.black,
                fontSize: "5vh",
              }
            : {
                ...fontStyles.longTitleTextStyle,
                ...fontStyles.black,
              }
        }
      >
        {strings.CodingIsUs}
      </div>
      <div
        className={"errorMessage errorMarginTop"}
        style={
          isMobile === true
            ? {
                ...fontStyles.longTitleTextStyle,
                ...fontStyles.black,
                fontSize: "4vh",
              }
            : {
                ...fontStyles.biggerTextStyle,
                ...fontStyles.black,
              }
        }
      >
        {strings.ErrorPageMessage}
      </div>
      <button
        className={"errorButton errorMarginTop"}
        onClick={() => {
          history.push({
            pathname: "/",
          });
        }}
      >
        <div
          style={
            isMobile === true
              ? {
                  ...fontStyles.biggerTextStyle,
                  ...fontStyles.white,
                  fontSize: "4vh",
                }
              : {
                  ...fontStyles.biggerTextStyle,
                  ...fontStyles.white,
                }
          }
        >
          {strings.GoToSite}
        </div>
      </button>
    </div>
  );
};

// Exports the component
export default ErrorPage;
