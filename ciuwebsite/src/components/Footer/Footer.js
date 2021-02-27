// This is going to be the Footer for the website that will contain basic information about Coding is Us
// and who we are and links to other pages as well
import React, { useState } from "react";
import strings from "../../config/strings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPodcast } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import "../../config/fontStyles.css";
import colors from "../../config/colors";
import ReactLoading from "react-loading";
import { subscribeEmailToEmailList } from "../../config/StorageFunctions";
import { useHistory } from "react-router-dom";
import { logEvent } from "../../config/Analytics";
import CIULogo from "../../assets/images/CIULogo.png";

// Declares the functional component
const Footer = (props) => {
  // The state containing the subscribe form
  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressPlaceholder, setEmailAddressPlaceholder] = useState(
    strings.Subscribe
  );
  const [isLoading, setIsLoading] = useState(false);

  // Initializes the navigation
  const history = useHistory();

  // This function is going to subscribe the user to the email list
  // It will also verify that this is a valid email address
  const subscribeToEmailList = async () => {
    setIsLoading(true);
    if (emailAddress.trim() === "" || !emailAddress.includes("@")) {
      setEmailAddressPlaceholder(strings.PleaseEnterValidEmailAddress);
      setEmailAddress("");
      setIsLoading(false);
    } else {
      const trimmedEmailAddress = emailAddress.trim();
      await subscribeEmailToEmailList(trimmedEmailAddress);
      setEmailAddressPlaceholder(strings.ThankYouForSubscribing);
      logEvent("Subscribed", {});
      setEmailAddress("");
      setIsLoading(false);
      return 0;
    }
  };

  // This function will take in a URL and open the URL in a new tab. The function also deals with the _blank security
  // issue
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    logEvent("URLClicked", { url });
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      <div className={"footerContainer"}>
        <div className={"footerSection"}>
          <div className={"footerAboutUsContainer"}>
            <div className={"longTitleTextStyle black"}>{strings.AboutUs}</div>
            <div className={"mainTextStyle black"}>{strings.AboutUsText}</div>
          </div>
        </div>
        <div className={"footerSection"}>
          <div className={"footerLinksContainer"}>
            <div
              className={"bigTextStyle black footerLink footerHoverBlue"}
              onClick={() =>
                history.push({
                  pathname: "/",
                })
              }
            >
              {strings.Learn}
            </div>
            <div
              className={"bigTextStyle black footerLink footerHoverBlue"}
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
              className={"bigTextStyle black footerLink footerHoverBlue"}
            >
              {strings.About}
            </div>
            <div
              onClick={() =>
                history.push({
                  pathname: "/TermsOfService",
                })
              }
              className={"bigTextStyle black footerLink footerHoverBlue"}
            >
              {strings.TermsOfService}
            </div>
            <div
              onClick={() =>
                history.push({
                  pathname: "/PrivacyPolicy",
                })
              }
              className={"bigTextStyle black footerLink footerHoverBlue"}
            >
              {strings.PrivacyPolicy}
            </div>
          </div>
        </div>
        <div className={"footerSection"}>
          <div className={"footerConnectWithUsContainer"}>
            <div className={"longTitleTextStyle black"}>
              {strings.ConnectWithUs}
            </div>
            <div className={"footerInputField"}>
              <input
                value={emailAddress}
                placeholder={emailAddressPlaceholder}
                onChange={(event) => setEmailAddress(event.target.value)}
                className={"footerTextFieldStyle subTextStyle black"}
              />
              <button
                className={"footerLink footerSubscribeButton"}
                onClick={() => subscribeToEmailList()}
                disabled={isLoading}
              >
                {isLoading === true ? (
                  <ReactLoading
                    type={"spin"}
                    color={colors.white}
                    height={"3.5vh"}
                    width={"2vw"}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCheck}
                    color={colors.white}
                    className={"footerCheckIcon"}
                  />
                )}
              </button>
            </div>
            <div className={"footerSocialMediaRow"}>
              <FontAwesomeIcon
                className={"footerLink footerIcon"}
                onClick={() => openInNewTab("https://instagram.com/codingisus")}
                icon={faInstagram}
                color={colors.green}
              />
              <FontAwesomeIcon
                className={"footerLink footerIcon"}
                onClick={() => openInNewTab("https://facebook.com/codingisus")}
                icon={faFacebook}
                color={colors.yellow}
              />
              <FontAwesomeIcon
                icon={faTiktok}
                color={colors.red}
                className={"footerLink footerIcon"}
                onClick={() => openInNewTab("https://tiktok.com/@codingisus")}
              />
              <FontAwesomeIcon
                icon={faPodcast}
                color={colors.blue}
                className={"footerLink footerIcon"}
                onClick={() => {
                  history.push({
                    pathname: "PodcastLinks",
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={"footerCopyrightNotice mainTextStyle white"}>
        {strings.Copyright}
      </div>
    </div>
  );
};

// Exports the functional component
export default Footer;
