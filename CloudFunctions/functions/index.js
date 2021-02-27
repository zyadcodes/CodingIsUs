// This file will contain any Cloud Functions that will be called from the website or mobile app
const functions = require("firebase-functions");
const fetch = require("node-fetch");
const got = require("got");
//Configures email for automated emails
const nodemailer = require("nodemailer");

// The following are the access tokens and endpoints for the various APIS used here
// HIGHLY SENSITIVE
const accessToken = "8ca5858d335f9887bfda937a1517cbae";
const endpoint = "c8f4cd08.compilers.sphere-engine.com";

const hubspotAPIKey = "95fced1a-b418-4d09-82ae-89e8f3b2d12b";

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
  const { code, languageID } = input;
  const output = await postSubmission(code, languageID);
  return output;
});

// This cloud function will subscribe a user to the email list in Hubspot using only their email
exports.subscribeEmailToEmailList = functions.https.onCall(
  async (input, context) => {
    const { email } = input;

    const result = await fetch(
      "https://api.hubapi.com/contacts/v1/contact/?hapikey=" + hubspotAPIKey,
      {
        credentials: "include",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: [{ property: "email", value: email }],
        }),
      }
    );
    return result;
  }
);

// This cloud function will subscribe a user to the email list in Hubspot using their email and their name
exports.subscribeEmailAndNameToEmailList = functions.https.onCall(
  async (input, context) => {
    const { email, name } = input;

    const result = await fetch(
      "https://api.hubapi.com/contacts/v1/contact/?hapikey=" + hubspotAPIKey,
      {
        credentials: "include",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: [
            { property: "email", value: email },
            { property: "firstname", value: name },
          ],
        }),
      }
    );
    return result;
  }
);

// This function is going to send emails to a specific reciever from the info@codingisus.com email.
// Eventually, we will want to switch to a newer domain name to recieve messages, like a help desk email, etc.
exports.sendEmail = functions.https.onCall(async (input, context) => {
  // Gets the information that will be in the email
  const { to, subject, text } = input;

  // Logs into the email
  const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "infocodingisus@gmail.com",
      pass: "zBusiness123!",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //Configures the email subject, to, and from
  const mailOptions = {
    from: "Coding is Us <infocodingisus@gmail.com>",
    to,
    subject,
    text,
  };

  // Sends the email
  await mailTransport.sendMail(mailOptions);

  return 0;
});

// This function will handle the posting of the submission to the Sphere Engine API to compile
const postSubmission = async (code, languageID) => {
  const submission = await fetch(
    "https://" + endpoint + "/api/v4/submissions?access_token=" + accessToken,
    {
      method: "POST",
      body: JSON.stringify({
        compilerId: languageID,
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
  try {
    if (finalResult.executing === true) {
      await sleep(2000);
      const output = await getSubmission(submissionID);
      return output;
    } else {
      if (finalResult.result.streams.output) {
        const uri = finalResult.result.streams.output.uri;
        const response = await got(uri);
        return response.body;
      } else if (finalResult.result.streams.cmpinfo) {
        const uri = finalResult.result.streams.cmpinfo.uri;
        const response = await got(uri);
        return response.body;
      } else if (finalResult.result.streams.error) {
        const uri = finalResult.result.streams.error.uri;
        const response = await got(uri);
        return response.body;
      } else if (finalResult.result.streams.source) {
        return " ";
      }
    }
  } catch (error) {
    console.log(finalResult);
    return "Error in code. Please try again.";
  }
};
