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

// This function is going to fetch the ads status in the local storage to show the ads only a limited amount of times
const getAdShownStatus = async () => {
  const key = storageVersion + 'AdShown';
  const result = await AsyncStorage.getItem(key);

  if (result == null) {
    return 'false';
  }
  return result;
};

// This function is going to update the ads status in the local storage so it shows the ad a limited amount of times
// Acts a global status
const updateAdShownStatus = async (status) => {
  const key = storageVersion + 'AdShown';
  await AsyncStorage.setItem(key, status);
  return 0;
};

// Exports the Functions
export {
  updateSectionStatus,
  getSectionStatus,
  getGuideCompletionStatus,
  getAdShownStatus,
  updateAdShownStatus,
};
