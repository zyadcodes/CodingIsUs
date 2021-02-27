// This is going to be a file containing all of the storage functions and API calls that will be happening in the website
import firebase from "firebase";
import "firebase/functions";
import "firebase/firestore";
import Guides from "../config/Guides";

// This method will subscribe a user's email to the email list in Hubspot
const subscribeEmailToEmailList = async (email) => {
  const result = (
    await firebase.functions().httpsCallable("subscribeEmailToEmailList")({
      email: email,
    })
  ).data;
  return result;
};

// This method will subscribe a user's email AND name to the email list in Hubspot as a new contact
const subscribeEmailAndNameToEmailList = async (email, name) => {
  const result = (
    await firebase
      .functions()
      .httpsCallable("subscribeEmailAndNameToEmailList")({
      email: email,
      name: name,
    })
  ).data;
  return result;
};

// This method is going to take in email information and call the Firebase Function that will send an email
const sendEmail = async (to, subject, text) => {
  const result = (
    await firebase.functions().httpsCallable("sendEmail")({
      to,
      subject,
      text,
    })
  ).data;
  return result;
};

// This is going to create a user in Firebase based on the inputted information in the app's sign up
// flow. It will also migrate the existing user's status to the database so it can be saved in the Cloud.
// Additionally, if the user is subscribed, it is going to add their subscription status to MailChimp for
// email campaigns
const createUserInFirestore = async (userID, name, email, isSubscribed) => {
  const usersCollection = firebase.firestore().collection("Users");

  // Creates the user document in Firestore
  await usersCollection.doc(userID).set({
    userID,
    name,
    email,
    isSubscribed,
  });

  if (isSubscribed === true) {
    subscribeEmailAndNameToEmailList(email, name);
  }

  return 0;
};

// This function is going to return a user's data based on a passed in userID. The document returned will contain things like
// the user's name and email address. If the user doesn't exist, it will return -1.
const getUserData = async (userID) => {
  const document = await firebase
    .firestore()
    .collection("Users")
    .doc(userID)
    .get();
  if (document.exists) {
    return document.data();
  }
  return -1;
};

// This is going to retrieve the user's progress for all of their guides from Firestore
const getUserProgress = async (userID) => {
  // Retrieves the entire collection of guides from Firestore for the currently signed in user
  const userGuideCollection = (
    await firebase
      .firestore()
      .collection("Users")
      .doc(userID)
      .collection("Guides")
      .get()
  ).docs.map((eachDoc) => eachDoc.data());

  // Initializes the initial arrays holding the guides
  const completedGuides = [];
  const inProgressGuides = [];

  // Tests which guides have been fully completed and which ones haven't
  for (const eachGuideProgress of userGuideCollection) {
    const sectionIDs = Object.keys(eachGuideProgress);
    const guideID = parseInt(sectionIDs[0]) - (parseInt(sectionIDs[0]) % 1000);

    const guideObject = Guides.find(
      (eachGuide) => eachGuide.guideID === guideID
    );
    const title = guideObject.title;
    const logo = guideObject.logo;

    // Calculates the completion percentage
    let numCompleted = 0;
    for (const eachSection of guideObject.sections) {
      const eachSectionID = eachSection.ID;
      if (eachGuideProgress[eachSectionID] === true) {
        numCompleted += 1;
      }
    }
    const guideCompletionPercentage = (
      numCompleted / guideObject.sections.length
    ).toFixed(2);

    // Constructs the final object and adds it to the correct array
    const finalGuideProgressObject = {
      guideID,
      title,
      logo,
      guideCompletionPercentage,
    };

    if (finalGuideProgressObject.guideCompletionPercentage === "1.00") {
      completedGuides.push(finalGuideProgressObject);
    } else {
      inProgressGuides.push(finalGuideProgressObject);
    }
  }

  // Sorts the final inprogress guides by completion percentage
  inProgressGuides.sort(
    (a, b) => b.guideCompletionPercentage - a.guideCompletionPercentage
  );

  // If the both list are empty it is going to fill the list with the Python guide as a starting point
  if (inProgressGuides.length === 0) {
    const pythonGuide = Guides.find((eachGuide) => eachGuide.guideID === 12000);
    inProgressGuides.push({
      guideID: pythonGuide.guideID,
      title: pythonGuide.title,
      logo: pythonGuide.logo,
      guideCompletionPercentage: 0.0,
    });
  }

  // Returns the final object
  return { completedGuides, inProgressGuides };
};

// This is going to return the user's progress for a specific guide
const getUserProgressForGuide = async (userID, guideID) => {
  // Retrieves the guide from Firestore
  const userGuideProgress = await firebase
    .firestore()
    .collection("Users")
    .doc(userID)
    .collection("Guides")
    .doc(guideID + "")
    .get();
  if (userGuideProgress.exists) {
    return userGuideProgress.data();
  } else {
    return [];
  }
};

// This will mark a section as complete in a specifc guide
const updateSectionStatus = async (userID, guideID, sectionID, status) => {
  const guideDocument = await firebase
    .firestore()
    .collection("Users")
    .doc(userID)
    .collection("Guides")
    .doc(guideID + "")
    .get();

  if (guideDocument.exists) {
    await firebase
      .firestore()
      .collection("Users")
      .doc(userID)
      .collection("Guides")
      .doc(guideID + "")
      .update({
        [sectionID]: status,
      });
  } else {
    await firebase
      .firestore()
      .collection("Users")
      .doc(userID)
      .collection("Guides")
      .doc(guideID + "")
      .set({
        [sectionID]: status,
      });
  }
};

// This method is going to retrieve the status of a particular section for a specific user
const getStatusBySectionID = async (userID, guideID, sectionID) => {
  // Retrieves the guide from Firestore
  const userGuideProgress = await firebase
    .firestore()
    .collection("Users")
    .doc(userID)
    .collection("Guides")
    .doc(guideID + "")
    .get();
  if (userGuideProgress.exists) {
    const documentData = userGuideProgress.data();
    return documentData[sectionID];
  } else {
    return false;
  }
};

// Exports the functions as named functions
export {
  subscribeEmailToEmailList,
  subscribeEmailAndNameToEmailList,
  sendEmail,
  createUserInFirestore,
  getUserData,
  getUserProgress,
  getUserProgressForGuide,
  getStatusBySectionID,
  updateSectionStatus,
};
