// This is the screen where users will be able to contact us and submit forms that will go directly to our emails
import React, { useState, useEffect } from "react";
import "./ContactScreen.css";
import "../../config/fontStyles.css";
import strings from "../../config/strings";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CodingImage from "../../assets/images/CodingImage.png";
import { faPodcast, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../config/colors";
import Modal from "react-awesome-modal";
import {
  subscribeEmailAndNameToEmailList,
  subscribeEmailToEmailList,
  sendEmail,
} from "../../config/StorageFunctions";
import FadeIn from "react-fade-in";
import { logEvent } from "../../config/Analytics";
import MetaTags from "react-meta-tags";
import { Link, animateScroll as scroll } from "react-scroll";
import {useHistory} from 'react-router-dom';

// Declares the functional component
const ContactScreen = () => {
  // Controls the state of the screen
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  // Scrolls to top when screen is pressed
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  // Declares the history hook
  const history = useHistory();

  // This function will take in a URL and open the URL in a new tab. The function also deals with the _blank security
  // issue
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    logEvent("URLClicked", { url });
    if (newWindow) newWindow.opener = null;
  };

  // This method will handle the submission process of the message
  const submitMessage = async () => {
    // Verifies the email is valid
    if (email.trim() === "" || !email.includes("@")) {
      setModalTitle(strings.Whoops);
      setModalMessage(strings.PleaseEnterValidEmailAddress);
      setIsModalOpen(true);
    } else {
      let trimmedEmail = email.trim();
      let trimmedName = name.trim();
      let trimmedMessage = message.trim();

      if (trimmedName === "") {
        trimmedName = "-";
      }
      if (trimmedMessage === "") {
        trimmedMessage = "-";
      }

      // Sends the message
      sendEmail(
        "info@codingisus.com",
        "Website Message",
        "New Customer Message\n\nName: " +
          trimmedName +
          "\n\n" +
          "Email: " +
          trimmedEmail +
          "\n\n" +
          "Message: " +
          trimmedMessage
      );
      logEvent("ContectMessageSent", {});

      // Subscribes the user if they chose to do so
      if (isSubscribed === true) {
        logEvent("Subscribed", {});
        if (trimmedName !== "-") {
          subscribeEmailAndNameToEmailList(trimmedEmail, trimmedName);
        } else {
          subscribeEmailToEmailList(trimmedEmail);
        }
      }

      // Notifies the user that their message was sent successfull
      setModalTitle(strings.MessageReceived);
      setModalMessage(strings.MessageReceivedMessage);
      setIsModalOpen(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  // Returns the UI for the screen
  return (
    <div className={"contactContainer"}>
      <MetaTags>
        <meta name="description" content={strings.GetInTouchMessage} />
      </MetaTags>
      <Header previousTabSelected={-1} currentTabSelected={-1} />
      <FadeIn delay={200}>
        <img src={CodingImage} className={"contactCodingImage"} />
        <div className={"contactBottomContainer"}>
          <div className={"contactLeftSide"}>
            <div className={"mainTitleTextStyle black contactGetInTouch"}>
              {strings.GetInTouch}
            </div>
            <div className={"biggerTextStyle black contactGetInTouch"}>
              {strings.GetInTouchMessage}
            </div>
            <div className={"contactContactMethod"}>
              <FontAwesomeIcon
                className={"contactMethodIcon"}
                icon={faEnvelope}
                color={colors.blue}
              />
              <div className={"contactHorizontalSpacer"} />
              <a
                className={"bigTextStyle black contactNoTextDecoration"}
                href={"mailto: " + strings.CIUEmail}
              >
                {strings.CIUEmail}
              </a>
            </div>
            <div
              className={"contactContactMethod contactLink"}
              onClick={() => openInNewTab("https://instagram.com/codingisus")}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color={colors.green}
                className={"contactMethodIcon"}
              />
              <div className={"contactHorizontalSpacer"} />
              <div className={"bigTextStyle black"}>{strings.CIUInstagram}</div>
            </div>
            <div
              className={"contactContactMethod contactLink"}
              onClick={() => openInNewTab("https://facebook.com/codingisus")}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                color={colors.yellow}
                className={"contactMethodIcon"}
              />
              <div className={"contactHorizontalSpacer"} />
              <div className={"bigTextStyle black"}>{strings.CIUFacebook}</div>
            </div>
            <div
              className={"contactContactMethod contactLink"}
              onClick={() => openInNewTab("https://tiktok.com/@codingisus")}
            >
              <FontAwesomeIcon
                icon={faTiktok}
                color={colors.red}
                className={"contactMethodIcon"}
              />
              <div className={"contactHorizontalSpacer"} />
              <div className={"bigTextStyle black"}>{strings.CIUTikTok}</div>
            </div>
            <div
              className={"contactContactMethod contactLink"}
              onClick={() => {
                history.push({
                  pathname: "PodcastLinks",
                });
              }}
            >
              <FontAwesomeIcon
                icon={faPodcast}
                color={colors.blue}
                className={"contactMethodIcon"}
              />
              <div className={"contactHorizontalSpacer"} />
              <div className={"bigTextStyle black"}>{strings.CIUPodcast}</div>
            </div>
          </div>
          <div className={"contactRightSide"}>
            <div className={"mainTitleTextStyle black contactGetInTouch"}>
              {strings.ContactUs}
            </div>
            <div className={"biggerTextStyle black"}>{strings.Name}</div>
            <input
              className={"contactInputStyle subTextStyle black"}
              placeholder={strings.NameDotDotDot}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <div className={"biggerTextStyle black"}>{strings.Email}</div>
            <input
              className={"contactInputStyle subTextStyle black"}
              placeholder={strings.EmailDotDotDot}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className={"biggerTextStyle black"}>{strings.Message}</div>
            <textarea
              className={
                "contactInputStyle contactMultiline subTextStyle black"
              }
              placeholder={strings.MessageDotDotDot}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <div className={"contactEmailSubscriptionSection"}>
              <input
                type="checkbox"
                className={"contactCheckbox"}
                checked={isSubscribed}
                onChange={(event) => setIsSubscribed(event.target.checked)}
              />
              <div className={"contactHorizontalSpacer"} />
              <div className={"bigTextStyle black"}>
                {strings.IAgreeToReceiveEmails}
              </div>
            </div>
            <button
              className="contactSubmitButton"
              onClick={() => submitMessage()}
            >
              <div className={"biggerTextStyle white"}>{strings.Submit}</div>
            </button>
          </div>
        </div>
      </FadeIn>
      <Footer />
      <Modal
        visible={isModalOpen}
        effect="fadeInDown"
        onClickAway={() => setIsModalOpen(false)}
      >
        <div className={"contactModalContainer"}>
          <div className={"mainTitleTextStyle blue"}>{modalTitle}</div>
          <div className={"biggerTextStyle blue"}>{modalMessage}</div>
          <button
            className="contactOkButton"
            onClick={() => setIsModalOpen(false)}
          >
            <div className={"biggerTextStyle white"}>{strings.Ok}</div>
          </button>
        </div>
      </Modal>
    </div>
  );
};

// Exports the component
export default ContactScreen;
