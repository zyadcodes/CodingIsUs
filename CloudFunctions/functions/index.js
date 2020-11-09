// This file will contain any Cloud Functions that will be called from the website or mobile app
const functions = require("firebase-functions");
const fetch = require("node-fetch");
const got = require("got");

// The following are the access tokens and endpoints for the Sphere Engine API to compile code in the Cloud
// HIGHLY SENSITIVE
const accessToken = "8ca5858d335f9887bfda937a1517cbae";
const endpoint = "c8f4cd08.compilers.sphere-engine.com";

// The following is an objecct that connects each language to be compiled in the cloud and its corresponding
// ID in the Sphere engine
const languages = {
  java: 10,
  c: 11,
  csharp: 27,
  cpp: 44,
  js: 56,
  python: 116,
};

/* The following are miscellaneous functions that can be used throughout the rest of the file */

// This function will halt the program for the amount of milliseconds specified
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/* The following group of functions will handle the compiling and running code in the Cloud */

// This CLOUD FUNCTION is going to run code in the cloud and return the result as a string. It will
// take in a language to run the code in, and then the source code itself, as parameters.
exports.runCode = functions.https.onCall(async (input, context) => {
  const { code, language } = input;
  const output = await postSubmission(code, language);
  return output;
});

// This function will handle the posting of the submission to the Sphere Engine API to compile
const postSubmission = async (code, language) => {
  const submission = await fetch(
    "https://" + endpoint + "/api/v4/submissions?access_token=" + accessToken,
    {
      method: "POST",
      body: JSON.stringify({
        compilerId: languages[language],
        source: code,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const submissionJSON = await submission.json();
  const submissionID = submissionJSON.id;
  await sleep(2000);
  const output = await getSubmission(submissionID);
  return output;
};

// This function will handle retrieving the result from the submission posted to the Sphere Engine API
const getSubmission = async (submissionID) => {
  const result = await fetch(
    "https://" +
      endpoint +
      "/api/v4/submissions/" +
      submissionID +
      "?access_token=" +
      accessToken,
    {
      method: "GET",
    }
  );

  const finalResult = await result.json();
  if (finalResult.executing === true) {
    await sleep(2000);
    const output = await getSubmission(submissionID);
    return output;
  } else {
    if (finalResult.result.streams.output) {
      const uri = finalResult.result.streams.output.uri;
      const response = await got(uri);
      return response.body;
    } else {
      const uri = finalResult.result.streams.cmpinfo.uri;
      const response = await got(uri);
      return response.body;
    }
  }
};
