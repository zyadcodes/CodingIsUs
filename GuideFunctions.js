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

const fetch = require("node-fetch");

const getVideoObjectByID = async (videoID) => {
  const result = await fetch(
    "https://noembed.com/embed?url=https://www.youtube.com/watch?v=" + videoID,
    {
      method: "GET",
    }
  );
  const finalObject = await result.json();
  return finalObject;
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
    // The next piece of code needs tto be adjusted according to the format of the video titles
    const title = finalObject.title;
    let name = "";
    name = title.substring(title.indexOf("-") + 5).trim();
    const section = {
      name,
      description: "",
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
    "8I539U5lXWY",
    "Z3ibUPyQY30",
    "f9G-W8RLuJ4",
    "JdCyLqmoxOg",
    "4f1rWL6zccw",
    "wBz4FCWZXRM",
    "6J6jGl1i2qg",
    "3tSPTv27QcY",
    "3-ne6aqoi8E",
    "_3khk6o2We4",
    "yQJqzS8Ns2E",
    "VkUsiyv54Vc",
    "YmxfZIaSIW8",
    "Z9n2XAVVYY8",
    "Bu5GHmXiP_4",
    "LZW-w-_IIxs",
    "pxpJpCIFHYs",
    "xXuEeChktdQ",
    "f4pLXGhisuw",
    "tpsdxtf01po",
    "I4TD-eCWUWQ",
    "jKonRZataZw",
    "hVSrMsUFrYQ",
    "BmxzCBEQ6OI",
    "gtEZ7A7Nqzs",
    "-FlndMkEa40",
    "UwZnR_x2KAs",
    "RqpI85wjC7w",
    "w5VqoHO2-wQ",
    "YIDLuOEGaK8",
    "HZyjM9KbTxk",
    "ObR8UuaPc6Q",
    "-25cgBtZc94",
    "W3B042cPdsU",
    "7myNdQyitXs",
    "fVCMrrIf2v0",
    "V5Jp69vHJa4",
  ],
  20001
);
