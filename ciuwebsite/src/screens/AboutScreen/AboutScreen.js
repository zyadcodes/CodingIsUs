// This is going to be the screen that details about who Coding is Us is and ways to reach out to us
import React, { useState, useEffect } from "react";
import "./AboutScreen.css";
import "../../config/fontStyles.css";
import CodingImage from "../../assets/images/CodingImage.png";
import strings from "../../config/strings";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InstagramLogo from "../../assets/images/InstagramLogo.jpg";
import FacebookLogo from "../../assets/images/FacebookLogo.jpg";
import TikTokLogo from "../../assets/images/TikTokLogo.jpg";
import PodcastPhoto from "../../assets/images/PodcastPhoto.jpg";
import iPhonePhoto from "../../assets/images/iPhonePhoto.jpeg";
import AndroidPhoto from "../../assets/images/AndroidPhoto.jpg";
import colors from "../../config/colors";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ReactLoading from "react-loading";
import { subscribeEmailToEmailList } from "../../config/StorageFunctions";
import { logEvent } from "../../config/Analytics";
import MetaTags from "react-meta-tags";
import { Link, animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

// Declares the functional component
const AboutScreen = (props) => {
  // Declares the state for the subscribe form
  const [emailAddress, setEmailAddress] = useState("");
  const [emailAddressPlaceholder, setEmailAddressPlaceholder] = useState(
    strings.Subscribe
  );
  const [isLoading, setIsLoading] = useState(false);

  // Scrolls to top when screen is pressed
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  // Declares the history hook
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
      logEvent("Subscribed", {});
      setEmailAddressPlaceholder(strings.ThankYouForSubscribing);
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

  // Returns the information about the "About Cards" so the UI Code isn't repetitive
  const aboutCards = [
    {
      photo: InstagramLogo,
      text: strings.InstagramAboutMessage,
      color: colors.red,
      title: strings.Instagram,
      onClick: () => openInNewTab("https://instagram.com/codingisus"),
    },
    {
      photo: FacebookLogo,
      text: strings.FacebookAboutMessage,
      color: colors.blue,
      title: strings.Facebook,
      onClick: () => openInNewTab("https://facebook.com/codingisus"),
    },
    {
      photo: TikTokLogo,
      text: strings.TikTokAboutMessage,
      color: colors.yellow,
      title: strings.TikTok,
      onClick: () => openInNewTab("https://tiktok.com/@codingisus"),
    },
    {
      photo: PodcastPhoto,
      text: strings.PodcastAboutMessage,
      color: colors.yellow,
      title: strings.Podcast,
      onClick: () =>
        history.push({
          pathname: "PodcastLinks",
        }),
    },
    {
      photo: iPhonePhoto,
      text: strings.iOSAppAboutMessage,
      color: colors.red,
      title: strings.iOSApp,
      onClick: () =>
        openInNewTab("https://apps.apple.com/us/app/coding-is-us/id1532536501"),
    },
    {
      photo: AndroidPhoto,
      text: strings.AndroidAppAboutMessage,
      color: colors.blue,
      title: strings.AndroidApp,
      onClick: () =>
        openInNewTab(
          "https://play.google.com/store/apps/details?id=com.CodingIsUs.CodingIsUs&hl=en_SG&gl=US"
        ),
    },
  ];

  // Returns the main UI of the screen
  return (
    <div className={"aboutContainer"}>
      <Header previousTabSelected={-1} currentTabSelected={-1} />
      <FadeIn delay={200}>
        <Zoom>
          <img src={CodingImage} className={"aboutPeopleImage"} />
          <div className={"aboutTopTextContainer"}>
            <div className={"mainTitleTextStyle black"}>{strings.WhoWeAre}</div>
            <div className={"aboutVerticalSpacer"} />
            <div className={"biggerTextStyle black"}>{strings.AboutUsText}</div>
          </div>
          <ul className={"aboutCardsContainer"}>
            {aboutCards.slice(0, 3).map((eachCard, index) => (
              <li
                key={index}
                className={"aboutCard"}
                style={{ backgroundColor: eachCard.color }}
                onClick={() => eachCard.onClick()}
              >
                <img className={"aboutCardImage"} src={eachCard.photo} />
                <div className={"aboutVerticalSpacer"} />
                <div
                  className={"longTitleTextStyle white aboutHorizontalPadding"}
                >
                  {eachCard.title}
                </div>
                <div className={"aboutVerticalSpacer"} />
                <div className={"bigTextStyle white aboutHorizontalPadding"}>
                  {eachCard.text}
                </div>
              </li>
            ))}
          </ul>

          <div className={"aboutVerticalSpacer"} />
          <ul className={"aboutCardsContainer"}>
            {aboutCards.slice(3).map((eachCard, index) => (
              <li
                key={index}
                className={"aboutCard"}
                style={{ backgroundColor: eachCard.color }}
                onClick={() => eachCard.onClick()}
              >
                <img className={"aboutCardImage"} src={eachCard.photo} />
                <div className={"aboutVerticalSpacer"} />
                <div
                  className={"longTitleTextStyle white aboutHorizontalPadding"}
                >
                  {eachCard.title}
                </div>
                <div className={"aboutVerticalSpacer"} />
                <div className={"bigTextStyle white aboutHorizontalPadding"}>
                  {eachCard.text}
                </div>
              </li>
            ))}
          </ul>
          <div className={"aboutVerticalSpacer"} />
          <div className={"aboutSubscribeContainer"}>
            <div className={"longTitleTextStyle black"}>
              {strings.SubscribeToOurEmailList}
            </div>
            <div className={"aboutInputField"}>
              <input
                value={emailAddress}
                placeholder={emailAddressPlaceholder}
                onChange={(event) => setEmailAddress(event.target.value)}
                className={"aboutTextFieldStyle subTextStyle black"}
              />
              <button
                className={"aboutLink aboutSubscribeButton"}
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
                    className={"aboutCheck"}
                  />
                )}
              </button>
            </div>
          </div>
          <div className={"aboutVerticalSpacer"} />
        </Zoom>
      </FadeIn>
      <Footer />
    </div>
  );
};

// Exports the component
export default AboutScreen;
