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

const fetch = require('node-fetch');
async function constructGuideSections(videoIDs, startingID) {
	const sections = [];
	let ID = startingID;
	for (let i = 0; i < videoIDs.length; i++) {
		const videoID = videoIDs[i];
		const result = await fetch(
			'https://noembed.com/embed?url=https://www.youtube.com/watch?v=' + videoID,
			{
				method: 'GET',
			}
		);
		const finalObject = await result.json();
		// The next piece of code needs tto be adjusted according to the format of the video titles
		const title = finalObject.title;
		let name = '';
		name = title.substring(title.indexOf('Lesson ') + 9).trim();
		const section = {
			name,
			description: '',
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
		'ySa58y1SRy0',
		'zcLMOTEDd8Y',
		'hWqx7p0TF3Q',
		'H_xErt38mWg',
		'R4U42rkmHDk',
		'KV7Ts9sm850',
		'36ipzqIQKIk',
		'CLmZxVkN9gw',
		'AT5_lx4PbVM',
		'43UOxoOuAag',
		'uPw8ankqEOw',
		'8r1njDKLs90',
		'9GoKcRmy-G0',
		'IG_JCxSPa_k',
		'kDWDTg_RpLA',
		'LxKZf0LyRbA',
		'rNyTxjGSp8Q',
		'mJwmGpdZQAg',
	],
	19001
);
