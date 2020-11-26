// This is going to contain all of the functions that will be used for AsyncStorage. They will be exported as named
// exports
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import Guides from './Guides';

const storageVersion = '@1.0.0:';
const hubspotAPIKey = '95fced1a-b418-4d09-82ae-89e8f3b2d12b';

// This method is going to update whether a section has been marked as done or not.
// Additionally, if the user is currently logged in, it will also save this progress online
const updateSectionStatus = async (sectionID, status, userID) => {
  const key = storageVersion + sectionID;
  await AsyncStorage.setItem(key, status);
  if (userID !== '') {
    const guideID = parseInt(sectionID) - (parseInt(sectionID) % 1000) + '';
    const guideDocument = firestore()
      .collection('Users')
      .doc(userID)
      .collection('Guides')
      .doc(guideID);
    const doesDocumentExist = (await guideDocument.get()).exists;
    if (doesDocumentExist) {
      await guideDocument.update({
        [sectionID]: status === 'true' ? true : false,
      });
    } else {
      await guideDocument.set({
        [sectionID]: status === 'true' ? true : false,
      });
    }
  }
  return 0;
};

// This method is going to take in a section name and will return the status of the section
const getSectionStatus = async (sectionID) => {
  const key = storageVersion + sectionID;
  const result = await AsyncStorage.getItem(key);

  if (result == null) {
    return 'false';
  }
  return result;
};

// This function is going to take in an entire guide object and will return an array that contains whether
// or not each section has been completed
const getGuideCompletionStatus = async (guide) => {
  const {sections} = guide;
  let promises = [];
  for (const section of sections) {
    promises.push(getSectionStatus(section.ID));
  }

  promises = await Promise.all(promises);
  return promises;
};

// This function is going to take in a number and store it as the time the user was requested a review. This will
// be used to show requests for a review
const setTimeReviewRequested = async (timeMilliseconds) => {
  const key = storageVersion + 'timeReviewRequested';
  await AsyncStorage.setItem(key, timeMilliseconds + '');
  return 0;
};

// This function is going to get the time the user was last requested for a review
const getTimeReviewRequested = async () => {
  const result = await AsyncStorage.getItem(
    storageVersion + 'timeReviewRequested',
  );
  if (result === null) {
    return 0;
  } else {
    return parseInt(result);
  }
};

// This is going to create a user in Firebase based on the inputted information in the app's sign up
// flow. It will also migrate the existing user's status to the database so it can be saved in the Cloud.
// Additionally, if the user is subscribed, it is going to add their subscription status to MailChimp for
// email campaigns
const createUserInFirestore = async (userID, name, email, isSubscribed) => {
  const usersCollection = firestore().collection('Users');

  // Creates the user document in Firestore
  await usersCollection.doc(userID).set({
    userID,
    name,
    email,
    isSubscribed,
  });

  // Will add the current guide progress to Firebase
  let allKeys = await AsyncStorage.getAllKeys();
  // Filters the keys to only include the guide storages
  allKeys = allKeys.filter(
    (eachKey) =>
      eachKey !== storageVersion + 'timeReviewRequested' &&
      eachKey !== storageVersion + 'AdShown' &&
      eachKey !== 'isFirstLaunch',
  );
  const allProgress = await AsyncStorage.multiGet(allKeys);

  // This is going to get all of the AsyncStorage data and store it in a way that is writable to Firestore
  let allGuideProgress = {};
  for (const sectionProgress of allProgress) {
    // Retrieves all the details about the section completion
    const sectionID = sectionProgress[0].substring(
      sectionProgress[0].indexOf(':') + 1,
    );
    const guideID = parseInt(sectionID) - (parseInt(sectionID) % 1000) + '';
    const completionStatus = sectionProgress[1] === 'true' ? true : false;

    // Appends it to the allGuidesProgress object
    if (allGuideProgress[guideID]) {
      allGuideProgress = {
        ...allGuideProgress,
        [guideID]: {
          ...allGuideProgress[guideID],
          [sectionID]: completionStatus,
        },
      };
    } else {
      allGuideProgress = {
        ...allGuideProgress,
        [guideID]: {
          [sectionID]: completionStatus,
        },
      };
    }
  }

  // This is going to create a batched write to store all of the previous progress that the user already had up
  // to Firebase
  const batch = firestore().batch();
  const GuideCollection = usersCollection.doc(userID).collection('Guides');
  for (const guideID of Object.keys(allGuideProgress)) {
    batch.set(GuideCollection.doc(guideID), allGuideProgress[guideID]);
  }
  await batch.commit();

  if (isSubscribed === true) {
    addUserToEmailList(name, email);
  }

  return 0;
};

// This method is going to add a user to the email marketing list in HubSpot
const addUserToEmailList = async (name, email) => {
  const result = await fetch(
    'https://api.hubapi.com/contacts/v1/contact/?hapikey=' + hubspotAPIKey,
    {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: [
          {property: 'email', value: email},
          {property: 'firstname', value: name},
        ],
      }),
    },
  );
  return result;
};

// Once a user has logged in, this is going to retrieve all of their data from the cloud and write it to the async
// storage so as to keep the data on the client consistent with the server
const retrieveFirestoreData = async (userID) => {
  // Clears the current async storage
  // Will add the current guide progress to Firebase
  let allKeys = await AsyncStorage.getAllKeys();
  // Filters the keys to only include the guide storages
  allKeys = allKeys.filter(
    (eachKey) =>
      eachKey !== storageVersion + 'timeReviewRequested' &&
      eachKey !== storageVersion + 'AdShown' &&
      eachKey !== 'isFirstLaunch',
  );
  await AsyncStorage.multiRemove(allKeys);

  // Retrieves the entire collection of guides from Firestore for the currently signed in user
  const userGuideCollectoin = (
    await firestore().collection('Users').doc(userID).collection('Guides').get()
  ).docs.map((eachDoc) => eachDoc.data());

  const promises = [];
  for (const guideDoc of userGuideCollectoin) {
    for (const sectionID of Object.keys(guideDoc)) {
      promises.push(
        updateSectionStatus(sectionID + '', guideDoc[sectionID] + '', ''),
      );
    }
  }

  await Promise.all(promises);

  return 0;
};

// This function is going to return a user's data based on a passed in userID. The document returned will contain things like
// the user's name and email address. If the user doesn't exist, it will return -1.
const getUserData = async (userID) => {
  const document = await firestore().collection('Users').doc(userID).get();
  if (document.exists) {
    return document.data();
  }
  return -1;
};

// This function is going to return all of the user's progress for all guides that the user has started in the app.
// The returned value will be an object with two values. An array with in progress guides, and an array with
// completed guides. Each guide progress object will look like this
/*
{
  guideID: 1000,
  title: Java,
  logo: JavaLogo
  guideCompletionPercentage: 0.5
}

*/
const getUserProgress = async (userID) => {
  // Fetches a list of the guides a user has started
  let guidesIDList = await AsyncStorage.getAllKeys();
  // Filters the keys to only include the guide storages
  guidesIDList = guidesIDList.filter(
    (eachKey) =>
      eachKey !== storageVersion + 'timeReviewRequested' &&
      eachKey !== storageVersion + 'AdShown' &&
      eachKey !== 'isFirstLaunch',
  );
  // Filters the keys to not include the storage version and only the guide numbers
  guidesIDList = guidesIDList.map((eachKey) => {
    const sectionID = eachKey.substring(eachKey.indexOf(':') + 1);
    const guideID = parseInt(sectionID) - (parseInt(sectionID) % 1000) + '';
    return guideID;
  });

  // Gets all of the started guides' completion status
  const guidesList = Guides.filter((eachGuide) =>
    guidesIDList.includes(eachGuide.guideID + ''),
  );
  const promises = [];
  for (const guide of guidesList) {
    promises.push(getGuideCompletionStatus(guide));
  }
  const promisesResults = await Promise.all(promises);

  const completedGuides = [];
  const inProgressguides = [];

  // Is going to calculate each completion percentage for the guides and sort the final objects in their
  // corresponding arrays
  for (let i = 0; i < guidesList.length; i++) {
    let numSectionsCompleted = 0.0;
    for (const section of promisesResults[i]) {
      if (section === 'true') {
        numSectionsCompleted++;
      }
    }
    const guideCompletionPercentage = parseFloat(
      (numSectionsCompleted / promisesResults[i].length).toFixed(2),
    );

    const finalObject = {
      guideID: guidesList[i].guideID,
      title: guidesList[i].title,
      logo: guidesList[i].logo,
      guideCompletionPercentage,
    };

    if (finalObject.guideCompletionPercentage === 1.0) {
      completedGuides.push(finalObject);
    } else {
      inProgressguides.push(finalObject);
    }
  }

  // Sorts the final inprogress guides by completion percentage
  inProgressguides.sort(
    (a, b) => b.guideCompletionPercentage - a.guideCompletionPercentage,
  );

  // If the both list are empty it is going to fill the list with the Python guide as a starting point
  if (completedGuides.length === 0 && inProgressguides.length === 0) {
    const pythonGuide = Guides.find((eachGuide) => eachGuide.guideID === 12000);
    inProgressguides.push({
      guideID: pythonGuide.guideID,
      title: pythonGuide.title,
      logo: pythonGuide.logo,
      guideCompletionPercentage: 0.0,
    });
  }

  // Returns the final object
  return {completedGuides, inProgressguides};
};

// Exports the Functions
export {
  updateSectionStatus,
  getSectionStatus,
  getGuideCompletionStatus,
  setTimeReviewRequested,
  getTimeReviewRequested,
  createUserInFirestore,
  retrieveFirestoreData,
  addUserToEmailList,
  getUserData,
  getUserProgress,
};
