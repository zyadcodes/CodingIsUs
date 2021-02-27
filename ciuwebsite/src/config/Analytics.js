// This will export the functions used to interact with both Facebook Analytics and Google Analytics to be used
// throughout the apps
import firebase from "firebase";
import ReactPixel from "react-facebook-pixel";
import "firebase/analytics";

// This single function is going to log analytics events and parameters to both Facebook and Analytics
const logEvent = (events, parameters) => {
  firebase.analytics().logEvent(events, parameters);
  ReactPixel.trackCustom(events, parameters);
};

export { logEvent };
