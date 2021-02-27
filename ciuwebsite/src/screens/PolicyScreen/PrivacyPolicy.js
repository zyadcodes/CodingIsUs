// This is going to be the Privacy Policy for the website
import React, { useEffect } from "react";
import "./PolicyScreen.css";
import "../../config/fontStyles.css";
import strings from "../../config/strings";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FadeIn from "react-fade-in";
import MetaTags from "react-meta-tags";
import { Link, animateScroll as scroll } from "react-scroll";

// Declares the functional component
const PrivacyPolicy = (props) => {
  // Scrolls to top when screen is pressed
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  // Renders the UI of the screen
  return (
    <div>
      <MetaTags>
        <meta
          name="description"
          content="Understand how we prioritize and handle user privacy on our website"
        />
      </MetaTags>
      <Header previousTabSelected={-1} currentTabSelected={-1} />
      <FadeIn delay={200}>
        <div className={"container"}>
          <div className={"longTitleTextStyle black titleContainer"}>
            {strings.PrivacyPolicy}
          </div>
          <div className={"textContainer"}>
            <p className={"bigTextStyle black"}>
              Last updated September 18, 2020
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Thank you for choosing to be part of our community at Coding is Us
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;). We are committed to protecting your personal
              information and your right to privacy. If you have any questions
              or concerns about this privacy notice, or our practices with
              regards to your personal information, please contact us at
              info@codingisus.com.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              When you visit our website https://codingisus.com (the
              &quot;Website&quot;), use our mobile application, as the case may
              be (the &quot;App&quot;) and more generally, use any of our
              services (the &quot;Services&quot;, which include the Website and
              App), we appreciate that you are trusting us with your personal
              information. We take your privacy very seriously. In this privacy
              notice, we seek to explain to you in the clearest way possible
              what information we collect, how we use it and what rights you
              have in relation to it. We hope you take some time to read through
              it carefully, as it is important. If there are any terms in this
              privacy notice that you do not agree with, please discontinue use
              of our Services immediately.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              This privacy notice applies to all information collected through
              our Services (which, as described above, includes our Website and
              App), as well as, any related services, sales, marketing or
              events.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Please read this privacy notice carefully as it will help you
              understand what we do with the information that we collect.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>TABLE OF CONTENTS</p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              1. WHAT INFORMATION DO WE COLLECT?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              2. HOW DO WE USE YOUR INFORMATION?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              4. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              6. HOW LONG DO WE KEEP YOUR INFORMATION?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              7. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              8. WHAT ARE YOUR PRIVACY RIGHTS?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              9. CONTROLS FOR DO-NOT-TRACK FEATURES
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              11. DO WE MAKE UPDATES TO THIS NOTICE?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              13. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              1. WHAT INFORMATION DO WE COLLECT?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Information automatically collected
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;Some information &mdash; such as your Internet
              Protocol (IP) address and/or browser and device characteristics
              &mdash; is collected automatically when you visit our Services.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              We automatically collect certain information when you visit, use
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              The information we collect includes:
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Log and Usage Data. Log and usage data is service-related,
              diagnostic, usage and performance information our servers
              automatically collect when you access or use our Services and
              which we record in log files. Depending on how you interact with
              us, this log data may include your IP address, device information,
              browser type and settings and information about your activity in
              the Services (such as the date/time stamps associated with your
              usage, pages and files viewed, searches and other actions you take
              such as which features you use), device event information (such as
              system activity, error reports (sometimes called &apos;crash
              dumps&apos;) and hardware settings).
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Device Data. We collect device data such as information about your
              computer, phone, tablet or other device you use to access the
              Services. Depending on the device used, this device data may
              include information such as your IP address (or proxy server),
              device and application identification numbers, location, browser
              type, hardware model Internet service provider and/or mobile
              carrier, operating system and system configuration information.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Location Data. We collect location data such as information about
              your device&apos;s location, which can be either precise or
              imprecise. How much information we collect depends on the type and
              settings of the device you use to access the Services. For
              example, we may use GPS and other technologies to collect
              geolocation data that tells us your current location (based on
              your IP address). You can opt out of allowing us to collect this
              information either by refusing access to the information or by
              disabling your Location setting on your device. Note however, if
              you choose to opt out, you may not be able to use certain aspects
              of the Services.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Information collected through our App
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;We collect information regarding your push
              notifications, when you use our App.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              If you use our App, we also collect the following information:
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Push Notifications. We may request to send you push notifications
              regarding your account or certain features of the App. If you wish
              to opt-out from receiving these types of communications, you may
              turn them off in your device&apos;s settings.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              This information is primarily needed to maintain the security and
              operation of our App, for troubleshooting and for our internal
              analytics and reporting purposes.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              2. HOW DO WE USE YOUR INFORMATION?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;We process your information for purposes based on
              legitimate business interests, the fulfillment of our contract
              with you, compliance with our legal obligations, and/or your
              consent.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              We use personal information collected via our Services for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations. We indicate the specific processing grounds
              we rely on next to each purpose listed below.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              We use the information we collect or receive:
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              To send you marketing and promotional communications. We and/or
              our third-party marketing partners may use the personal
              information you send to us for our marketing purposes, if this is
              in accordance with your marketing preferences. For example, when
              expressing an interest in obtaining information about us or our
              Services, subscribing to marketing or otherwise contacting us, we
              will collect personal information from you. You can opt-out of our
              marketing emails at any time (see the &quot;WHAT ARE YOUR PRIVACY
              RIGHTS&quot; below).
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Deliver targeted advertising to you. We may use your information
              to develop and display personalized content and advertising (and
              work with third parties who do so) tailored to your interests
              and/or location and to measure its effectiveness.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              For other business purposes. We may use your information for other
              business purposes, such as data analysis, identifying usage
              trends, determining the effectiveness of our promotional campaigns
              and to evaluate and improve our Services, products, marketing and
              your experience. We may use and store this information in
              aggregated and anonymized form so that it is not associated with
              individual end users and does not include personal information. We
              will not use identifiable personal information without your
              consent.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;We only share information with your consent, to
              comply with laws, to provide you with services, to protect your
              rights, or to fulfill business obligations.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              We may process or share your data that we hold based on the
              following legal basis:
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Consent: We may process your data if you have given us specific
              consent to use your personal information for a specific purpose.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Legitimate Interests: We may process your data when it is
              reasonably necessary to achieve our legitimate business interests.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Performance of a Contract: Where we have entered into a contract
              with you, we may process your personal information to fulfill the
              terms of our contract.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Legal Obligations: We may disclose your information where we are
              legally required to do so in order to comply with applicable law,
              governmental requests, a judicial proceeding, court order, or
              legal process, such as in response to a court order or a subpoena
              (including in response to public authorities to meet national
              security or law enforcement requirements).
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Vital Interests: We may disclose your information where we believe
              it is necessary to investigate, prevent, or take action regarding
              potential violations of our policies, suspected fraud, situations
              involving potential threats to the safety of any person and
              illegal activities, or as evidence in litigation in which we are
              involved.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              More specifically, we may need to process your data or share your
              personal information in the following situations:
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Business Transfers. We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business to another company.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              4. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY? &nbsp;
              &nbsp;&nbsp;
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;We may transfer, store, and process your
              information in countries other than your own.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Our servers are located in. If you are accessing our Services from
              outside, please be aware that your information may be transferred
              to, stored, and processed by us in our facilities and by those
              third parties with whom we may share your personal information
              (see &quot;WILL YOUR INFORMATION BE SHARED WITH ANYONE?&quot;
              above), in and other countries.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              If you are a resident in the European Economic Area, then these
              countries may not necessarily have data protection laws or other
              similar laws as comprehensive as those in your country. We will
              however take all necessary measures to protect your personal
              information in accordance with this privacy notice and applicable
              law.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;We are not responsible for the safety of any
              information that you share with third-party providers who
              advertise, but are not affiliated with, our Website.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              The Services may contain advertisements from third parties that
              are not affiliated with us and which may link to other websites,
              online services or mobile applications. We cannot guarantee the
              safety and privacy of data you provide to any third parties. Any
              data collected by third parties is not covered by this privacy
              notice. We are not responsible for the content or privacy and
              security practices and policies of any third parties, including
              other websites, services or applications that may be linked to or
              from the Services. You should review the policies of such third
              parties and contact them directly to respond to your questions.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              6. HOW LONG DO WE KEEP YOUR INFORMATION?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;We keep your information for as long as necessary
              to fulfill the purposes outlined in this privacy notice unless
              otherwise required by law.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than __________.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              7. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;We aim to protect your personal information
              through a system of organizational and technical security
              measures.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              We have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information we process. However, despite our safeguards and
              efforts to secure your information, no electronic transmission
              over the Internet or information storage technology can be
              guaranteed to be 100% secure, so we cannot promise or guarantee
              that hackers, cybercriminals, or other unauthorized third parties
              will not be able to defeat our security, and improperly collect,
              access, steal, or modify your information. Although we will do our
              best to protect your personal information, transmission of
              personal information to and from our Services is at your own risk.
              You should only access the Services within a secure environment.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              8. WHAT ARE YOUR PRIVACY RIGHTS?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;You may review, change, or terminate your account
              at any time.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              If you are a resident in the European Economic Area and you
              believe we are unlawfully processing your personal information,
              you also have the right to complain to your local data protection
              supervisory authority. You can find their contact details here:
              http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              If you are a resident in Switzerland, the contact details for the
              data protection authorities are available here:
              https://www.edoeb.admin.ch/edoeb/en/home.html.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              9. CONTROLS FOR DO-NOT-TRACK FEATURES
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (&quot;DNT&quot;) feature or
              setting you can activate to signal your privacy preference not to
              have data about your online browsing activities monitored and
              collected. At this stage no uniform technology standard for
              recognizing and implementing DNT signals has been finalized. As
              such, we do not currently respond to DNT browser signals or any
              other mechanism that automatically communicates your choice not to
              be tracked online. If a standard for online tracking is adopted
              that we must follow in the future, we will inform you about that
              practice in a revised version of this privacy notice.&nbsp;
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              California Civil Code Section 1798.83, also known as the
              &quot;Shine The Light&quot; law, permits our users who are
              California residents to request and obtain from us, once a year
              and free of charge, information about categories of personal
              information (if any) we disclosed to third parties for direct
              marketing purposes and the names and addresses of all third
              parties with which we shared personal information in the
              immediately preceding calendar year. If you are a California
              resident and would like to make such a request, please submit your
              request in writing to us using the contact information provided
              below.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              If you are under 18 years of age, reside in California, and have a
              registered account with a Service, you have the right to request
              removal of unwanted data that you publicly post on the Services.
              To request removal of such data, please contact us using the
              contact information provided below, and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Services, but please be aware that the data may not be
              completely or comprehensively removed from all our systems (e.g.
              backups, etc.).
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              11. DO WE MAKE UPDATES TO THIS NOTICE? &nbsp; &nbsp;&nbsp;
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              In Short: &nbsp;Yes, we will update this notice as necessary to
              stay compliant with relevant laws.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated &quot;Revised&quot; date
              and the updated version will be effective as soon as it is
              accessible. If we make material changes to this privacy notice, we
              may notify you either by prominently posting a notice of such
              changes or by directly sending you a notification. We encourage
              you to review this privacy notice frequently to be informed of how
              we are protecting your information.
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? &nbsp; &nbsp;&nbsp;
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              If you have questions or comments about this notice, you may email
              us at info@codingisus.com or by post to:
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>Coding is Us</p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>__________</p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>__________</p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>United States</p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU? &nbsp; &nbsp;&nbsp;
            </p>
            <p className={"bigTextStyle black"}>
              <br />
            </p>
            <p className={"bigTextStyle black"}>
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it in some
              circumstances. To request to review, update, or delete your
              personal information, please submit a request form by clicking
              here. We will respond to your request within 30 days.
            </p>
            <p className={"bigTextStyle black"}>&nbsp;&nbsp;</p>
          </div>
          <Footer />
        </div>
      </FadeIn>
    </div>
  );
};

// Exports the component
export default PrivacyPolicy;
