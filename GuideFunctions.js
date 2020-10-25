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
    name = title.substring(title.indexOf("Lesson ") + 9).trim();
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

getVideoObjectByID("ySa58y1SRy0").then((result) => {
  console.log(result);
});
