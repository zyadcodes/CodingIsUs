// This is the screen that will show a specific section within a guide. It will contain some information
// about the section, its video, as well as a code editor at the side of the screen
import React, { useEffect, useState } from "react";
import "./SectionScreen.css";
import "../../config/fontStyles.css";
import { useLocation, useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import FadeIn from "react-fade-in";
import strings from "../../config/strings";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../config/colors";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-csharp";
import Guides from "../../config/Guides";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/theme-github";
import "firebase/functions";
import CompilerLanguages from "../../config/CompilerLanguages";
import { updateSectionStatus } from "../../config/StorageFunctions";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { logEvent } from "../../config/Analytics";
import MetaTags from "react-meta-tags";
import { Link, animateScroll as scroll } from "react-scroll";
import ReactLoading from "react-loading";
import queryString from "query-string";
import { getStatusBySectionID } from "../../config/StorageFunctions";
import { sleep } from "../../config/sleep";

// Creates & exports the functional component
const SectionScreen = () => {
  // Initializes the location and history
  const location = useLocation();
  const history = useHistory();

  // Fetches the query strings for this screen
  const parsed = queryString.parse(location.search, {
    arrayFormat: "comma",
    parseNumbers: true,
    parseBooleans: true,
  });
  let { guideID, sectionID, numVideo } = parsed;

  // Sets up the state variables for the screen
  const [isCompiling, setIsCompiling] = useState(false);
  const [languageSelected, setLanguageSelected] = useState("");
  const [languageSelectedDropdown, setLanguageSelectedDropdown] = useState("");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isComplete, setIsComplete] = useState();
  const [guide, setGuide] = useState("");
  const [section, setSection] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userID, setUserID] = useState("");
  const [adType, setAdtype] = useState("large");

  // Handles all event subscriptions
  useEffect(() => {
    // Listens for any auth changes
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

    // Adds a listener for resizing the screen in order to know which ad size to show
    window.addEventListener("resize", handleResize);

    return () => {
      subscriber();
      window.removeEventListener("resize", handleResize);
    };
  }, [sectionID]);

  // This is going to set the state based on the current window size to know which ad to show
  const handleResize = () => {
    if (window.innerWidth * 0.525 > 728) {
      setAdtype("large");
    }

    if (window.innerWidth * 0.525 < 728) {
      setAdtype("medium");
    }

    if (window.innerWidth * 0.525 < 468) {
      setAdtype("small");
    }

    if (window.innerWidth * 0.525 < 300) {
      setAdtype("tiny");
    }

    if (window.innerWidth * 0.525 < 120) {
      setAdtype("none");
    }
  };

  // This is going to be the helper method to the useEffect state which is going to handle any additional
  // authentication
  const onAuthStateChanged = async (user) => {
    if (user) {
      setUserID(user.uid);
      loadScreenData(user.uid);
    } else {
      // If no user is logged in, will navigate back to the category screen
      setUserID("");
      history.push({
        pathname: "CategoryScreen",
      });
    }
  };

  // Will load the screen data that is required to display a specific section
  const loadScreenData = async (userID) => {
    setIsLoading(true);
    handleResize();

    // If guideID or sectionID isn't passed into the query parameters, goes
    // back to the category screen
    if (!guideID || !sectionID) {
      history.push({
        pathname: "CategoryScreen",
      });
      return;
    }

    if (!numVideo) {
      numVideo = 1;
    }

    // Retrieves all of the objects required for screen rendering
    const guideObject = Guides.find(
      (eachGuide) => eachGuide.guideID === guideID
    );
    const sectionObject = guideObject.sections.find(
      (eachSection) => eachSection.ID === sectionID
    );
    const { compilerIndex } = guideObject;

    // Fetches the status for this specific section
    const status = await getStatusBySectionID(userID, guideID, sectionID);

    // Sets all the state variables
    setIsComplete(status);
    setLanguageSelected(CompilerLanguages[compilerIndex]);
    setLanguageSelectedDropdown(CompilerLanguages[compilerIndex]);
    setCode(CompilerLanguages[compilerIndex].template);
    setGuide(guideObject);
    setSection(sectionObject);
    await sleep(250);
    setIsLoading(false);
    await sleep(150);
  };

  // Renders the loading container for the screen
  // Renders the loading state of the screen
  if (isLoading === true) {
    return (
      <div>
        <Header previousTabSelected={-1} currentTabSelected={-1} />
        <MetaTags>
          <meta
            name="description"
            content="View a specific section within a guide from our variety of guides and categories"
          />
        </MetaTags>
        <div className={"sectionLoadingContainer"}>
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

  // Returns the UI of the screen
  return (
    <div className={"sectionScreenContainer"}>
      <MetaTags>
        <meta
          name="description"
          content="View a specific section within a guide from our variety of guides and categories"
        />
      </MetaTags>
      <Header previousTabSelected={-1} currentTabSelected={-1} />
      <FadeIn delay={50}>
        <div className={"sectionScreenFlexRow"}>
          <div className={"sectionScreenLeftSide"}>
            <button
              className={"sectionScreenBackToGuideButton"}
              onClick={() => {
                // Goes back to the guide
                history.replace({
                  pathname: "/GuideScreen",
                  search: new URLSearchParams({
                    guideID: guide.guideID,
                  }).toString(),
                });
              }}
            >
              <FontAwesomeIcon
                className={"sectionBackButton"}
                icon={"arrow-left"}
                color={colors.white}
              />
              <div className={"bigTextStyle white"}>{strings.BackToGuide}</div>
            </button>
            <div>
              <div
                className={"mainTitleTextStyle black sectionScreenMarginLeft"}
              >
                {section.name}
              </div>
              <div className={"sectionScreenVerticalSpacer"} />
              <div className={"biggerTextStyle black sectionScreenMarginLeft"}>
                {section.description}
              </div>
            </div>
            <div className={"sectionScreenVerticalSpacer"} />
            <div className={"sectionScreenVerticalSpacer"} />
            <YouTube
              videoId={section.videoLink}
              opts={{
                rel: 0,
                fs: 0,
              }}
              className={"sectionScreenYoutubeContainer"}
              onPlay={() => {
                logEvent("VideoStarted", {});
                logEvent("VideoStarted" + numVideo, {});
              }}
              onEnd={() => {
                setIsComplete(true);
                updateSectionStatus(userID, guide.guideID, section.ID, true);
                logEvent("VideoCompleted", {});
                logEvent("VideoCompleted" + numVideo, {});
              }}
            />
            <div className={"sectionBottomButtons"}>
              {guide.sections[0].ID === sectionID ? (
                <div />
              ) : (
                <button
                  className={"sectionScreenNextButton"}
                  onClick={async () => {
                    // Goes to the next section
                    history.replace({
                      pathname: "/SectionScreen",
                      search: new URLSearchParams({
                        guideID: guideID,
                        sectionID: sectionID - 1,
                        numVideo: numVideo + 1,
                      }).toString(),
                    });
                  }}
                >
                  <FontAwesomeIcon
                    className={"sectionNextButton"}
                    icon={"arrow-left"}
                    color={colors.white}
                  />
                </button>
              )}
              <button
                className={
                  isComplete
                    ? "sectionScreenCheckButton sectionGreen"
                    : "sectionScreenCheckButton sectionGray"
                }
                onClick={async () => {
                  updateSectionStatus(
                    userID,
                    guide.guideID,
                    section.ID,
                    !isComplete
                  );
                  if (isComplete) {
                    setIsComplete(false);
                  } else {
                    setIsComplete(true);
                  }
                }}
              >
                <FontAwesomeIcon
                  className={"sectionNextButton"}
                  icon={"check"}
                  color={colors.white}
                />
              </button>
              {guide.sections[guide.sections.length - 1].ID === sectionID ? (
                <button
                  className={"sectionScreenNextButton"}
                  onClick={() => {
                    // Tests which screen to navigate to
                    history.replace({
                      pathname: "/GuideScreen",
                      search: new URLSearchParams({
                        guideID: guide.guideID,
                      }).toString(),
                    });
                  }}
                >
                  <div className={"bigTextStyle white"}>{strings.Done}</div>
                </button>
              ) : (
                <button
                  className={"sectionScreenNextButton"}
                  onClick={async () => {
                    // Goes to the next section
                    history.replace({
                      pathname: "/SectionScreen",
                      search: new URLSearchParams({
                        guideID: guideID,
                        sectionID: sectionID + 1,
                        numVideo: numVideo + 1,
                      }).toString(),
                    });
                  }}
                >
                  <FontAwesomeIcon
                    className={"sectionNextButton"}
                    icon={"arrow-right"}
                    color={colors.white}
                  />
                </button>
              )}
            </div>

            <div className={"sectionScreenAd"}>
              {adType === "large" ? (
                <iframe
                  id={"adIFrame"}
                  src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=topgiftideas&banner=0D4RWFY28JQA0H12NC82&f=ifr&linkID=7431d704a3def8e0fa3593bff1f4a15b&t=zyadelgohary-20&tracking_id=zyadelgohary-20"
                  width="728"
                  height="90"
                  scrolling="no"
                  border="0"
                  marginwidth="0"
                  frameborder="0"
                ></iframe>
              ) : adType === "medium" ? (
                <iframe
                  id={"adIFrame"}
                  src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=26&l=ur1&category=topgiftideas&banner=13TF8DHM5H3K11P61YR2&f=ifr&linkID=7b6f20db095abfd7a6b8bb798d724db9&t=zyadelgohary-20&tracking_id=zyadelgohary-20"
                  width="468"
                  height="60"
                  scrolling="no"
                  border="0"
                  marginwidth="0"
                  frameborder="0"
                ></iframe>
              ) : adType === "small" ? (
                <iframe
                  id={"adIFrame"}
                  src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=42&l=ur1&category=topgiftideas&banner=0QBNTGD3GGK7Y0AS2WR2&f=ifr&linkID=f5a5f2e9942bb72d4739be6f49186cec&t=zyadelgohary-20&tracking_id=zyadelgohary-20"
                  width="234"
                  height="60"
                  scrolling="no"
                  border="0"
                  marginwidth="0"
                  frameborder="0"
                ></iframe>
              ) : adType === "tiny" ? (
                <iframe
                  id={"adIFrame"}
                  src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=20&l=ur1&category=topgiftideas&banner=17VRX5WHZ0FRZZGF4MG2&f=ifr&linkID=6780e58c5935d47cc9b3fd245f7a19ed&t=zyadelgohary-20&tracking_id=zyadelgohary-20"
                  width="120"
                  height="90"
                  scrolling="no"
                  border="0"
                  marginwidth="0"
                  frameborder="0"
                ></iframe>
              ) : (
                <div />
              )}
            </div>
          </div>
          <div className={"sectionScreenRightSection"}>
            <div className="sectionScreenDropdownContainer">
              <Dropdown
                controlClassName={"sectionScreenControlClassName"}
                menuClassName={"sectionScreenControlClassName"}
                placeholderClassName={"mainTextStyle black"}
                options={CompilerLanguages}
                onChange={(value) => {
                  const newLanguageSelected = CompilerLanguages.find(
                    (eachLangauage) => {
                      return eachLangauage.value === value.value;
                    }
                  );
                  setLanguageSelected(newLanguageSelected);
                  setCode(newLanguageSelected.template);
                  setLanguageSelectedDropdown(value.value);
                }}
                value={languageSelectedDropdown}
              />
            </div>
            <div className="sectionScreenTypeCodeBelowTextContainer">
              <div className={"longTitleTextStyle black"}>
                {strings.TypeYourCodeBelow}
              </div>
            </div>
            <div className="sectionScreenCodeEditorContainer">
              <AceEditor
                width={"45vw"}
                fontSize={"0.833vw"}
                height={"40vh"}
                mode={languageSelected.editorMode}
                value={code}
                theme="monokai"
                onChange={(newCode) => setCode(newCode)}
              />
            </div>
            <button
              disabled={isCompiling}
              type="button"
              className="sectionScreenRunCodeButton"
              onClick={async () => {
                scroll.scrollTo(document.body.scrollHeight - 1000);
                setIsCompiling(true);
                setOutput(strings.Compiling);
                const compiledOutput = (
                  await firebase.functions().httpsCallable("runCode")({
                    code,
                    languageID: languageSelected.compilerID,
                  })
                ).data;
                logEvent("RunCodeInSection", {
                  language: languageSelected.label,
                  sectionID: section.ID,
                });
                setOutput(compiledOutput);
                setIsCompiling(false);
              }}
            >
              <div className={"biggerTextStyle white"}>{strings.RunCode}</div>
            </button>
            <div className="sectionScreenTypeCodeBelowTextContainer">
              <div className={"longTitleTextStyle black"}>{strings.Output}</div>
            </div>
            <textarea
              className="sectionScreenOutputStyle"
              multiline={true}
              value={output}
              disabled={false}
            />
          </div>
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
};

// Exports the component
export default SectionScreen;
