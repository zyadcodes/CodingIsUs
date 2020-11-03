// This is going to contain all of the functions that will be used for AsyncStorage. They will be exported as named
// exports
import AsyncStorage from '@react-native-community/async-storage';

const storageVersion = '@1.0.0:';

// This method is going to update whether a section has been marked as done or not
const updateSectionStatus = async (sectionID, status) => {
  const key = storageVersion + sectionID;
  await AsyncStorage.setItem(key, status);
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

// Exports the Functions
export {
  updateSectionStatus,
  getSectionStatus,
  getGuideCompletionStatus,
  setTimeReviewRequested,
  getTimeReviewRequested,
};
