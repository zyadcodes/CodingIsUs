// This is going to be the practice screen for the website where the user will be able to practice what they learned
import React, { useState, useEffect } from "react";
import strings from "../../config/strings";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./PracticeScreen.css";
import "../../config/fontStyles.css";
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
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { sleep } from "../../config/sleep";
import ReactLoading from "react-loading";
import { logEvent } from "../../config/Analytics";
import colors from "../../config/colors";
import MetaTags from "react-meta-tags";
import { Link, animateScroll as scroll } from "react-scroll";
import queryString from "query-string";

// Creates the functional component
const PracticeScreen = () => {
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
  const [isLoading, setIsLoading] = useState(true);

  // Initializes the location state params
  const location = useLocation();

  // Fetches the query strings for this screen
  const parsed = queryString.parse(location.search, {
    arrayFormat: "comma",
    parseNumbers: true,
    parseBooleans: true,
  });
  const { previousTabSelected } = parsed;

  // useEffect will provide a short buffer period to allow the tab transition to happen smoothly
  useEffect(() => {
    scroll.scrollToTop();
    loadScreen();
  }, []);

  // Helper for the useEffectMethod
  const loadScreen = async () => {
    await sleep(500);
    setIsLoading(false);
  };

  const dateNow = new Date().getFullYear();

  if (dateNow === 2021) {
    return (
      <div>
        <MetaTags>
          <meta
            name="description"
            content="Practice what you learned through our online IDE and use it to code in a variety of languages"
          />
        </MetaTags>
        <Header
          previousTabSelected={previousTabSelected ? previousTabSelected : -1}
          currentTabSelected={1}
        />
        <div className={"practiceMaintenanceContainer"}>
          <div className={"biggerTextStyle black"}>
            {"Playground currently under maintenance. Please check back soon!"}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Returns the loading state of the screen
  if (isLoading === true) {
    return (
      <div>
        <MetaTags>
          <meta
            name="description"
            content="Practice what you learned through our online IDE and use it to code in a variety of languages"
          />
        </MetaTags>
        <Header
          previousTabSelected={previousTabSelected ? previousTabSelected : -1}
          currentTabSelected={1}
        />
        <div className={"practiceLoadingContainer"}>
          <ReactLoading
            type={"spin"}
            color={colors.blue}
            height={"5vh"}
            width={"5vw"}
          />
        </div>
        <Footer />
      </div>
    );
  }

  // Returns the UI of the screen
  return (
    <div className="practiceContainer">
      <MetaTags>
        <meta
          name="description"
          content="Practice what you learned through our online IDE and use it to code in a variety of languages"
        />
      </MetaTags>
      <Header
        previousTabSelected={previousTabSelected ? previousTabSelected : -1}
        currentTabSelected={1}
      />
      <div className="practiceDropdownContainer">
        <Dropdown
          controlClassName={"practiceControlClassName"}
          menuClassName={"practiceControlClassName"}
          placeholderClassName={"mainTextStyle black"}
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
      <div className="practiceTypeCodeBelowTextContainer">
        <div className={"longTitleTextStyle black"}>
          {strings.TypeYourCodeBelow}
        </div>
      </div>
      <div className="practiceCodeEditorContainer">
        <AceEditor
          className={"practiceEditorStyle"}
          width={"90vw"}
          fontSize={"0.833vw"}
          height={"40vh"}
          mode={languageSelected.editorMode}
          value={code}
          theme="monokai"
          onChange={(newCode) => setCode(newCode)}
        />
      </div>
      <button
        disabled={isCompiling}
        type="button"
        className="practiceRunCodeButton"
        onClick={async () => {
          scroll.scrollTo(document.body.scrollHeight - 1000);
          setIsCompiling(true);
          setOutput(strings.Compiling);
          const compiledOutput = (
            await firebase.functions().httpsCallable("runCode")({
              code,
              languageID: languageSelected.compilerID,
            })
          ).data;
          logEvent("RunCode", {
            language: languageSelected.label,
          });
          setOutput(compiledOutput);
          setIsCompiling(false);
        }}
      >
        <div className={"biggerTextStyle white"}>{strings.RunCode}</div>
      </button>
      <div className="practiceTypeCodeBelowTextContainer">
        <div className={"longTitleTextStyle black"}>{strings.Output}</div>
      </div>
      <textarea
        className="practiceOutputStyle"
        multiline={true}
        value={output}
        disabled={false}
      />
      <Footer />
    </div>
  );
};

// Exports the playground
export default PracticeScreen;
