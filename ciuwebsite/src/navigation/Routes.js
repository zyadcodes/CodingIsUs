// This file is going to serve as the one containing the Routes in the website that will
// help navigate from screen to screen
import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import LearnScreen from "../screens/LearnScreen/LearnScreen";
import PracticeScreen from "../screens/PracticeScreen/PracticeScreen";
import AccountScreen from "../screens/AccountScreen/AccountScreen";
import CategoryScreen from "../screens/CategoryScreen/CategoryScreen";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import TermsOfService from "../screens/PolicyScreen/TermsOfService";
import PrivacyPolicy from "../screens/PolicyScreen/PrivacyPolicy";
import GuideScreen from "../screens/GuideScreen/GuideScreen";
import PodcastLinks from "../screens/LinkScreen/PodcastLinks";
import SectionScreen from "../screens/SectionScreen/SectionScreen";
import ErrorPage from "../screens/ErrorPage/ErrorPage";

// Declares the route container
const Routes = (props) => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={LearnScreen} />
        <Route path="/PracticeScreen" exact component={PracticeScreen} />
        <Route path="/AccountScreen" exact component={AccountScreen} />
        <Route path="/CategoryScreen" exact component={CategoryScreen} />
        <Route path="/GuideScreen" exact component={GuideScreen} />
        <Route path="/SectionScreen" exact component={SectionScreen} />
        <Route path="/PodcastLinks" exact component={PodcastLinks} />
        <Route path="/ContactScreen" exact component={ContactScreen} />
        <Route path="/AboutScreen" exact component={AboutScreen} />
        <Route path="/TermsOfService" exact component={TermsOfService} />
        <Route path="/PrivacyPolicy" exact component={PrivacyPolicy} />
        <Route path="" component={ErrorPage} />
      </Switch>
    </HashRouter>
  );
};

// Exports the functional component
export default Routes;
