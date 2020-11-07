// These will be the developer functions used to quickly construct guides. They will only be used here

/* Run the below function in he Playlist page after loading the WHOLE page to retrieve video IDs for that playlist in an array format

var els = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-playlist-video-renderer');
var show="";
for(i = 0; i < els.length; i++) {
    var el = els[i];
	show += ("\"" + el.href.split('?v=')[1].split('&list')[0] + "\",\n");
}
console.log(show);

Sample output:

"EXAMPLEID-1",
"EXAMPLEID-2",
"EXAMPLEID-3",

*/

/*

Use the below website to get length of any playlist:

https://ytplaylist-len.herokuapp.com/

*/

const YoutubeAPIKey = "AIzaSyAzey3sf4xQP9VHrgPsPdBVWUhjECWfiws";

const fetch = require("node-fetch");

const getVideoObjectByID = async (videoID) => {
  const result = await fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=" +
      videoID +
      "&key=" +
      YoutubeAPIKey,
    {
      method: "GET",
    }
  );
  const finalObject = await result.json();
  const videoInformation = finalObject.items[0].snippet;
  return videoInformation;
};

/*


// This function will take in an array of video IDs and a starting ID to number each section. It will then construct and print out the array. Below is
// a sample output:
/* 

[
    {
        name: 'Example Video',
        description: '',
        videoLink: 'EXAMPLEID-1',
        ID: 1001
    },
    ...
]

*/

async function constructGuideSections(videoIDs, startingID) {
  const sections = [];
  let ID = startingID;
  for (let i = 0; i < videoIDs.length; i++) {
    const videoID = videoIDs[i];
    const finalObject = await getVideoObjectByID(videoID);
    // The next piece of code needs tto be adjusted according to the format of the video titles and descriptions
    const title = finalObject.title;
    const description = finalObject.description.substring(
      0,
      finalObject.description.indexOf("\n")
    );
    let name = title.substring(0, title.indexOf("-") - 1);
    const section = {
      name,
      description: description,
      videoLink: videoID,
      ID: ID,
    };
    ID++;
    sections.push(section);
  }
  console.log(sections);
}
constructGuideSections(
  [
    "iDEcP8Mc-7s",
    "hG_MgGHAX-Q",
    "WUARiOGSGKY",
    "ybz5CfIPYq0",
    "Ok3fIQstvLw",
    "7r7ZPmspDew",
    "RmKcFk2LQjM",
    "S-8IcHucSNg",
    "vY4I5VeQbBk",
    "9KT84VMtmzo",
    "7oARHEepjJ0",
    "h1t6ZSIW5L8",
    "C1hbiIp4qtE",
    "QHCdeBzdmlA",
    "XPs-HGzElTg",
    "1y5mtSGTMqs",
    "JuRhRhJ2914",
    "USfmkHbIRyE",
    "Q78aUox7qKA",
    "09ETWu6Wf8Y",
    "hiDosLOPQYA",
    "89q1XeYYeXY",
    "49awsu1VJbo",
    "W19zgasQK-c",
  ],
  23001
);
