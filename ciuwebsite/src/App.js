// This is the main file that will be called when the web app is rendered
import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import MobilePlayground from "./MobilePlayground/MobilePlayground";

// Declares the functional component
const App = () => {
  return <MobilePlayground />;
};

// Exports the app
export default App;
