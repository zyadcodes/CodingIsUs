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
    const description = finalObject.description.substring(0, finalObject.description.indexOf('\n\n'));
    let name = title.substring(title.indexOf('-') + 1).trim();
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
    "hG_3UHepr_M",
    "zhu6jtlghIs",
    "X-81V5jNrYM",
    "Aw6DwXK0ZGM",
    "Rtw3YOYDt3A",
    "nSzuHnkcfo8",
    "1D_h-yFtQVo",
    "pShj3gtYQik",
    "3-qSONSuZq0",
    "Uhy75wsS96s",
    "2ko_rBZXTjE",
    "jKfZiotyRhk",
    "fCUrCNiA0j0",
    "pv7P9R9JI-E",
    "M-Rw21NGORo",
    "DzchNE1pbrk",
    "ZtK89kVLPzM",
    "GJbtDTGmOGY",
    "o2aAU6wQZSw",
    "AAREmlb4sTs",
    "AI4ifO-6-mo",
    "sCCBJBb4HQA",
    "kAXP8a1zuHo",
    "u77YwdnleS0",
    "GCA63syHvsk",
    "wcuqwXUF-gY",
    "qvxpTUc4nX0",
    "tANmR6BJSDg",
    "rOyZtFo4qaU",
    "vsGDtnBCwgg",
    "kDguqVQydco",
    "vmFFEok91GU",
    "alc5OWoLDkY",
    "_JwVlbzOaP0",
    "RZ9lvPRxwpg",
    "JjwEhK4QxRo",
    "WSKuxoAN35g",
    "6A41gVJ3g2g",
    "EZ3jBam2IEA",
    "4OlN9oianT4",
    "agC06TR_MJU",
    "2lrNZdY3fE4",
    "TMBgvCMvSiI",
    "B47Idwxi3jI",
    "vPnajSbemUM",
    "NHexrFjeO6o",
    "6n_zA2Nd9vo",
    "EqSI9_03qRM",
    "wlTRroeVkj0",
    "W0p8KP0o8g4",
  ],
  29001
);
