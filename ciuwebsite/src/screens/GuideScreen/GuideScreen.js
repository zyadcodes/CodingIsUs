// This is the screen where the progress and all of the sections will be shown to the user for a specific guide
import React, { useEffect, useState } from "react";
import "./GuideScreen.css";
import "../../config/fontStyles.css";
import { useLocation, useHistory } from "react-router-dom";
import ReactLoading from "react-loading";
import colors from "../../config/colors";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Guides from "../../config/Guides";
import FadeIn from "react-fade-in";
import { getUserProgressForGuide } from "../../config/StorageFunctions";
import ProgressBar from "@ramonak/react-progress-bar";
import strings from "../../config/strings";
import { Link, animateScroll as scroll } from "react-scroll";
import { logEvent } from "../../config/Analytics";
import MetaTags from "react-meta-tags";
import firebase from "firebase";
import "firebase/auth";
import queryString from "query-string";
import Zoom from "react-reveal/Zoom";

// Declares the functional component
const GuideScreen = () => {
  // Declares the history and location variables
  const location = useLocation();
  const history = useHistory();

  // Fetches the query strings for this screen
  const parsed = queryString.parse(location.search, {
    arrayFormat: "comma",
    parseNumbers: true,
    parseBooleans: true,
  });
  const { guideID } = parsed;

  // Sets the initial values of the screen's state
  const [isLoading, setIsLoading] = useState(true);
  const [userProgress, setUserProgress] = useState("");
  const [guide, setGuide] = useState("");
  const [userProgressPercentage, setUserProgressPercentage] = useState("");
  const [userID, setUserID] = useState("");
  const [adType, setAdtype] = useState("medium");

  // The useEffect method is going to fetch the user's progress for this specific guide
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    // Adds a listener for resizing the screen in order to know which ad size to show
    window.addEventListener("resize", handleResize);

    return subscriber;
  }, [guideID]);

  // This is going to set the state based on the current window size to know which ad to show
  const handleResize = () => {
    if (window.innerWidth * 0.25 > 300) {
      setAdtype("medium");
    }

    if (window.innerWidth * 0.25 < 300) {
      setAdtype("small");
    }

    if (window.innerWidth * 0.25 < 234) {
      setAdtype("tiny");
    }

    if (window.innerWidth * 0.25 < 125) {
      setAdtype("none");
    }
  };

  // This is going to be the helper method to the useEffect state which is going to handle any additional
  // authentication
  const onAuthStateChanged = async (user) => {
    if (user) {
      setUserID(user.uid);
      loadUserProgress(user.uid);
    } else {
      // If no user is logged in, will navigate back to the category screen
      setUserID("");
      history.push({
        pathname: "CategoryScreen",
      });
    }
  };

  // This is a helper async method for the previous method
  const loadUserProgress = async (userID) => {
    setIsLoading(true);
    // If the guideID is not found in the query, will navigate back the CategoryScreen
    if (!guideID) {
      history.push({
        pathname: "CategoryScreen",
      });
      return;
    }
    const guideObject = Guides.find(
      (eachGuide) => eachGuide.guideID === guideID
    );
    const userGuideProgress = await getUserProgressForGuide(userID, guideID);
    // Calculates the number of sections completed
    let numSectionsDone = 0;
    for (const sectionID of Object.keys(userGuideProgress)) {
      if (userGuideProgress[sectionID] === true) {
        numSectionsDone++;
      }
    }
    setUserProgressPercentage(
      (numSectionsDone / guideObject.sections.length).toFixed(2)
    );
    setGuide(guideObject);
    setUserProgress(userGuideProgress);
    setIsLoading(false);
    scroll.scrollToTop();
  };

  // Returns the loading state of the screen
  if (isLoading === true) {
    return (
      <div>
        <MetaTags>
          <meta
            name="description"
            content="View a specific guide within our variety of programming guidesn and concepts"
          />
        </MetaTags>
        <Header previousTabSelected={-1} currentTabSelected={-1} />
        <div className={"guideScreenLoadingContainer"}>
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
    <div>
      <MetaTags>
        <meta
          name="description"
          content="View a specific guide within our variety of programming guidesn and concepts"
        />
      </MetaTags>
      <Header previousTabSelected={-1} currentTabSelected={0} />
      <FadeIn delay={50} className={"guideScreenContainer"}>
        <div className={"guideScreenRowContainer"}>
          <div>
            <div className={"guideScreenTitleTopContainer"}>
              <img src={guide.cover} className={"guideScreenGuideCover"} />
            </div>
            <div className={"guideScreenTitleBottomContainer"}>
              {!Object.values(userProgress).includes(true) ? (
                <div>
                  <div
                    className={"longTitleTextStyle black guideScreenMarginLeft"}
                  >
                    {strings.GetStarted}
                  </div>
                  <div
                    className={"guideScreenSectionCard guideScreenMarginLeft"}
                    onClick={() => {
                      logEvent("SectionClicked", {
                        sectionID: guide.sections[0].ID,
                      });
                      logEvent("GetStartedSectionClicked", {
                        sectionID: guide.sections[0].ID,
                      });
                      history.push({
                        pathname: "/SectionScreen",
                        search: new URLSearchParams({
                          guideID: guide.guideID,
                          sectionID: guide.sections[0].ID,
                          numVideo: 1,
                        }).toString(),
                      });
                    }}
                  >
                    <div className={"guideScreenIndicator guideScreenRed"} />
                    <div className={"guideScreenSectionInfoContainer"}>
                      <div className={"biggerTextStyle black"}>
                        {guide.sections[0].name}
                      </div>
                      <div className={"bigTextStyle black"}>
                        {guide.sections[0].description.length > 80
                          ? guide.sections[0].description
                              .substring(0, 80)
                              .substring(
                                0,
                                guide.sections[0].description
                                  .substring(0, 80)
                                  .lastIndexOf(" ")
                              ) + "..."
                          : guide.sections[0].description}
                      </div>
                    </div>
                  </div>
                </div>
              ) : Object.values(userProgress).lastIndexOf(true) ===
                guide.sections.length - 1 ? (
                <div />
              ) : (
                <div>
                  <div
                    className={"longTitleTextStyle black guideScreenMarginLeft"}
                  >
                    {strings.UpNext}
                  </div>
                  <div
                    className={"guideScreenSectionCard guideScreenMarginLeft"}
                    onClick={() => {
                      logEvent("SectionClicked", {
                        sectionID: guide.sections.find(
                          (eachSection) =>
                            parseInt(eachSection.ID) ===
                            parseInt(
                              Object.keys(userProgress).sort()[
                                Object.keys(userProgress).length - 1
                              ]
                            ) +
                              1
                        ).ID,
                      });
                      logEvent("UpNextSectionClicked", {
                        sectionID: guide.sections.find(
                          (eachSection) =>
                            parseInt(eachSection.ID) ===
                            parseInt(
                              Object.keys(userProgress).sort()[
                                Object.keys(userProgress).length - 1
                              ]
                            ) +
                              1
                        ).ID,
                      });
                      history.push({
                        pathname: "/SectionScreen",
                        search: new URLSearchParams({
                          guideID: guide.guideID,
                          sectionID: guide.sections.find(
                            (eachSection) =>
                              parseInt(eachSection.ID) ===
                              parseInt(
                                Object.keys(userProgress).sort()[
                                  Object.keys(userProgress).length - 1
                                ]
                              ) +
                                1
                          ).ID,
                          numVideo: 1,
                        }).toString(),
                      });
                    }}
                  >
                    <div className={"guideScreenIndicator guideScreenRed"} />
                    <div className={"guideScreenSectionInfoContainer"}>
                      <div className={"biggerTextStyle black"}>
                        {
                          guide.sections.find(
                            (eachSection) =>
                              parseInt(eachSection.ID) ===
                              parseInt(
                                Object.keys(userProgress).sort()[
                                  Object.keys(userProgress).length - 1
                                ]
                              ) +
                                1
                          ).name
                        }
                      </div>
                      <div className={"bigTextStyle black"}>
                        {guide.sections.find(
                          (eachSection) =>
                            parseInt(eachSection.ID) ===
                            parseInt(
                              Object.keys(userProgress).sort()[
                                Object.keys(userProgress).length - 1
                              ]
                            ) +
                              1
                        ).description.length > 80
                          ? guide.sections
                              .find(
                                (eachSection) =>
                                  parseInt(eachSection.ID) ===
                                  parseInt(
                                    Object.keys(userProgress).sort()[
                                      Object.keys(userProgress).length - 1
                                    ]
                                  ) +
                                    1
                              )
                              .description.substring(0, 80)
                              .substring(
                                0,
                                guide.sections
                                  .find(
                                    (eachSection) =>
                                      parseInt(eachSection.ID) ===
                                      parseInt(
                                        Object.keys(userProgress).sort()[
                                          Object.keys(userProgress).length - 1
                                        ]
                                      ) +
                                        1
                                  )
                                  .description.substring(0, 80)
                                  .lastIndexOf(" ")
                              ) + "..."
                          : guide.sections.find(
                              (eachSection) =>
                                parseInt(eachSection.ID) ===
                                parseInt(
                                  Object.keys(userProgress).sort()[
                                    Object.keys(userProgress).length - 1
                                  ]
                                ) +
                                  1
                            ).description}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className={"longTitleTextStyle black guideScreenMarginLeft"}>
                {strings.Sections}
              </div>
              <div className={"guideScreenSectionsListContainer"}>
                {guide.sections.map((eachSection, index) => (
                  <Zoom>
                    <div
                      className={"guideScreenSectionCard"}
                      onClick={() => {
                        logEvent("SectionClicked", {
                          sectionID: eachSection.ID,
                        });
                        history.push({
                          pathname: "/SectionScreen",
                          search: new URLSearchParams({
                            guideID: guide.guideID,
                            sectionID: eachSection.ID,
                            numVideo: 1,
                          }).toString(),
                        });
                      }}
                    >
                      <div
                        className={
                          userProgress[eachSection.ID] === true
                            ? "guideScreenIndicator guideScreenGreen"
                            : "guideScreenIndicator guideScreenRed"
                        }
                      />
                      <div className={"guideScreenSectionInfoContainer"}>
                        <div className={"biggerTextStyle black"}>
                          {eachSection.name}
                        </div>
                        <div className={"bigTextStyle black"}>
                          {eachSection.description.length > 80
                            ? eachSection.description
                                .substring(0, 80)
                                .substring(
                                  0,
                                  eachSection.description
                                    .substring(0, 80)
                                    .lastIndexOf(" ")
                                ) + "..."
                            : eachSection.description}
                        </div>
                      </div>
                    </div>
                  </Zoom>
                ))}
              </div>
              <Zoom>
                <div
                  className={"longTitleTextStyle black guideScreenMarginLeft"}
                >
                  {strings.RelatedGuides}
                </div>
                <div className={"guideScreenRelatedGuidesContainer"}>
                  {Guides.filter((eachGuide) =>
                    guide.relatedGuides.includes(eachGuide.guideID)
                  ).map((eachGuide, index) => (
                    <div
                      key={index}
                      className={"guideScreenCardContainer"}
                      onClick={() => {
                        logEvent("GuideClicked", {
                          guideID: eachGuide.guideID,
                        });
                        logEvent("RelatedGuideClicked", {
                          guideID: eachGuide.guideID,
                        });
                        history.replace({
                          pathname: "/GuideScreen",
                          search: new URLSearchParams({
                            guideID: eachGuide.guideID,
                          }).toString(),
                        });
                      }}
                    >
                      <img
                        className={"guideScreenRelatedGuideLogo"}
                        src={eachGuide.logo}
                      />
                      <div className={"guideScreenVerticalSpacer"} />
                      <div className={"biggerTextStyle black"}>
                        {eachGuide.title}
                      </div>
                    </div>
                  ))}
                </div>
              </Zoom>
            </div>
          </div>
          <div className={"guideScreenRightSideSticky"}>
            <div className={"guideScreenRightInfoBox"}>
              <div className={"guideScreenTitleLogoContainer"}>
                <img src={guide.logo} className={"guideScreenGuideLogo"} />
                <div className={"longTitleTextStyle black"}>{guide.title}</div>
              </div>
              <div className={"mainTextStyle black"}>{guide.description}</div>
              <div className={"biggerTextStyle black"}>{strings.Length}</div>
              <div className={"bigTextStyle black"}>{guide.duration}</div>
              <div className={"biggerTextStyle black"}>
                {strings.YourProgress}
              </div>
              <ProgressBar
                completed={parseFloat(
                  (userProgressPercentage * 100).toFixed(0)
                )}
                height={"5vh"}
                width={"25vw"}
                bgcolor={colors.blue}
                labelColor={colors.black}
                borderRadius={"0px"}
                labelAlignment={"outside"}
                baseBgColor={colors.lightGray}
                labelSize={"1.82vw"}
              />
            </div>
            <div className={"guideScreenAd"}>
              {adType === "medium" ? (
                <iframe
                  src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=topgiftideas&banner=11QH56VCWYW6G4PKV382&f=ifr&linkID=34cd9bbda37a84445cdb8de2bdd75e1e&t=zyadelgohary-20&tracking_id=zyadelgohary-20"
                  width="300"
                  height="250"
                  scrolling="no"
                  border="0"
                  marginwidth="0"
                  frameborder="0"
                ></iframe>
              ) : adType === "small" ? (
                <iframe
                  src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=42&l=ur1&category=topgiftideas&banner=0QBNTGD3GGK7Y0AS2WR2&f=ifr&linkID=6db2da6bdbc6e3466a06a99a94742229&t=zyadelgohary-20&tracking_id=zyadelgohary-20"
                  width="234"
                  height="60"
                  scrolling="no"
                  border="0"
                  marginwidth="0"
                  frameborder="0"
                ></iframe>
              ) : adType === "tiny" ? (
                <iframe
                  src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=topgiftideas&banner=1RZA3ATYBAJCS3X46SG2&f=ifr&linkID=17c86ccf8bb4efcc8eb7d323bb9ea20a&t=zyadelgohary-20&tracking_id=zyadelgohary-20"
                  width="125"
                  height="125"
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
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
};

// Exports the component
export default GuideScreen;
