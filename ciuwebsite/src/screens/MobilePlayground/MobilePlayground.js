// This is going to be the screen in the mobile app which will contain the coding playground. It will utilize React Native
// web in order to contain all of the code that is used in the app
import React, { useState } from "react";
import { Text } from "react-native-web";
import strings from "../../config/strings";
import fontStyles from "../../config/fontStyles";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./MobilePlaygroundStyle.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/theme-github";
import firebase from "firebase";
import "firebase/functions";
import CompilerLanguages from "../../config/CompilerLanguages";
import { logEvent } from "../../config/Analytics";

// Creates the functional component
const MobilePlayground = () => {
  // The state of the code being entered and the language selected. Also the loading state
  const [isCompiling, setIsCompiling] = useState(false);
  const [languageSelected, setLanguageSelected] = useState(
    CompilerLanguages[0]
  );
  const [languageSelectedDropdown, setLanguageSelectedDropdown] = useState(
    CompilerLanguages[0]
  );
  const [code, setCode] = useState(CompilerLanguages[0].template);
  const [output, setOutput] = useState("");

  // Returns a maintenance screen temporarily until playground is fixed
  const dateNow = new Date().getFullYear();

  if (dateNow === 2021) {
    return (
      <div className={"maintenanceContainer"}>
        <Text
          style={{
            ...fontStyles.biggerTextStyle,
            ...fontStyles.black,
            paddingHorizontal: "5vw",
            textAlign: "center",
          }}
        >
          {"Playground currently under maintenance. Please check back soon!"}
        </Text>
      </div>
    );
  }

  // Returns the UI of the screen
  return (
    <div className="container">
      <div className="headerStyle">
        <Text
          style={{
            ...fontStyles.longTitleTextStyle,
            ...fontStyles.white,
            fontSize: "5vh",
          }}
        >
          {strings.Playground}
        </Text>
      </div>
      <div className="dropdownContainer">
        <Dropdown
          controlClassName={"controlClassName"}
          menuClassName={"controlClassName"}
          options={CompilerLanguages}
          onChange={(value) => {
            const newLanguageSelected = CompilerLanguages.find(
              (eachLangauage) => {
                return eachLangauage.value === value.value;
              }
            );
            setLanguageSelected(newLanguageSelected);
            setCode(newLanguageSelected.template);
            setLanguageSelectedDropdown(value.value);
          }}
          value={languageSelectedDropdown}
        />
      </div>
      <div className="typeCodeBelowTextContainer">
        <Text
          style={{
            ...fontStyles.biggerTextStyle,
            ...fontStyles.black,
            fontSize: "4vh",
          }}
        >
          {strings.TypeYourCodeBelow}
        </Text>
      </div>
      <div className="codeEditorContainer">
        <AceEditor
          className={"editorStyle"}
          width={"100vw"}
          fontSize={"3.25vw"}
          height={"20vh"}
          mode={languageSelected.editorMode}
          value={code}
          theme="monokai"
          onChange={(newCode) => setCode(newCode)}
        />
      </div>
      <div className="typeCodeBelowTextContainer">
        <Text
          style={{
            ...fontStyles.biggerTextStyle,
            ...fontStyles.black,
            fontSize: "4vh",
          }}
        >
          {strings.Output}
        </Text>
      </div>
      <textarea
        className="outputStyle"
        multiline={true}
        value={output}
        disabled={false}
      />
      <button
        disabled={isCompiling}
        type="button"
        className="runCodeButton"
        onClick={async () => {
          logEvent("PlaygroundCompiled", {
            language: languageSelected.label,
          });
          setIsCompiling(true);
          setOutput(strings.Compiling);
          const compiledOutput = (
            await firebase.functions().httpsCallable("runCode")({
              code,
              languageID: languageSelected.compilerID,
            })
          ).data;
          setOutput(compiledOutput);
          setIsCompiling(false);
        }}
      >
        <Text
          style={{
            ...fontStyles.biggerTextStyle,
            ...fontStyles.white,
            fontSize: "4vh",
          }}
        >
          {strings.RunCode}
        </Text>
      </button>
    </div>
  );
};

// Exports the playground
export default MobilePlayground;
