// This screen is going to be the one that handles all of the Podcast links
import React from "react";
import "./LinkScreen.css";
import fontStyles from "../../config/fontStyles";
import CIULogo from "../../assets/images/CIULogo.png";
import strings from "../../config/strings";
import { logEvent } from "../../config/Analytics";
import { isMobile } from "react-device-detect";

// Declares the functional component
const PodcastLinks = () => {
  // Declares an array with the links in it
  const links = [
    {
      title: "Spotify",
      link: "https://open.spotify.com/show/4fZmmlOhwkeWqTDesSweJs",
    },
    {
      title: "Google Podcasts",
      link:
        "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80MjIzYTlkYy9wb2RjYXN0L3Jzcw==",
    },
    {
      title: "Apple Podcasts",
      link:
        "https://podcasts.apple.com/us/podcast/the-coding-is-us-podcast/id1543315226?uo=4",
    },
    {
      title: "Anchor",
      link: "https://anchor.fm/codingisus",
    },
    {
      title: "RadioPublic",
      link: "https://radiopublic.com/the-coding-is-us-podcast-WDnYov",
    },
    {
      title: "Pocket Casts",
      link: "https://pca.st/mdlqjyz7",
    },
    {
      title: "Breaker",
      link: "https://www.breaker.audio/the-coding-is-us-podcast",
    },
  ];

  // This function will take in a URL and open the URL in a new tab. The function also deals with the _blank security
  // issue
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    logEvent("URLClicked", { url });
    if (newWindow) newWindow.opener = null;
  };

  // Renders the screen
  return (
    <div className={"linkContainer"}>
      <img src={CIULogo} className={"linkLogo"} />
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
        {strings.TheCodingIsUsPodcast}
      </div>
      {links.map((eachLink) => (
        <button
          className={"linkButton"}
          onClick={() => {
            logEvent("PodcastLinkClicked", { title: eachLink.title });
            logEvent(eachLink.title + "Clicked", {});
            openInNewTab(eachLink.link);
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
            {eachLink.title}
          </div>
        </button>
      ))}
      <div
        style={
          isMobile === true
            ? {
                ...fontStyles.biggerTextStyle,
                ...fontStyles.black,
                fontSize: "4vh",
              }
            : {
                ...fontStyles.biggerTextStyle,
                ...fontStyles.black,
              }
        }
        className={"linkMarginTop"}
      >
        {strings.CodingIsUs}
      </div>
    </div>
  );
};

export default PodcastLinks;
