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
    const description = finalObject.description
      .substring(
        finalObject.description.indexOf("https://cbt.gg/2GUgiHU") + 22,
        finalObject.description.indexOf("Step 1")
      )
      .trim();
    let name = title;
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
    "cVKBFNxaM4k",
    "jW0Y5SimnwM",
    "hVQRrhevo7k",
    "udKBDRcj178",
    "bXRLvUeRgvY",
    "9fsOI3sxJCw",
    "fyS3QdYuMZI",
    "HVTQKUtkyhs",
    "X1qoKLL040A",
    "tOrMC1pDYjs",
    "oCFTbwTjcgQ",
    "bMXtoLpA5jU",
  ],
  25000
);
