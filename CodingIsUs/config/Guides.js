// This is going to export all of the guides as default exports within an object to be used in the HomeScreen & Guide Screen.
// Each section will include three attributes. The section name, description, and video link
import PythonLogo from '../assets/images/PythonLogo.png';
import PythonCover from '../assets/images/PythonCover.jpeg';
import FirebaseLogo from '../assets/images/FirebaseLogo.png';
import FirestoreCover from '../assets/images/FirestoreCover.jpg';
import JavaLogo from '../assets/images/JavaLogo.png';
import JavaCover from '../assets/images/JavaCover.jpg';
import JavaScriptLogo from '../assets/images/JavaScriptLogo.png';
import JavaScriptCover from '../assets/images/JavaScriptCover.jpg';
import ReactJSLogo from '../assets/images/ReactJSLogo.png';
import ReactJSCover from '../assets/images/ReactJSCover.png';
import ReactNativeLogo from '../assets/images/ReactNativeLogo.png';
import ReactNativeCover from '../assets/images/ReactNativeCover.png';
import CPlusPlusLogo from '../assets/images/CPlusPlusLogo.png';
import CPlusPlusCover from '../assets/images/CPlusPlusCover.png';
import CLogo from '../assets/images/CLogo.png';
import CCover from '../assets/images/CCover.jpeg';
import CSharpLogo from '../assets/images/CSharpLogo.png';
import CSharpCover from '../assets/images/CSharpCover.jpeg';
import HTMLLogo from '../assets/images/HTMLLogo.png';
import HTMLCover from '../assets/images/HTMLCover.jpg';
import CSSLogo from '../assets/images/CSSLogo.png';
import CSSCover from '../assets/images/CSSCover.jpg';
import MySQLLogo from '../assets/images/MySQLLogo.png';
import MySQLCover from '../assets/images/MySQLCover.jpg';
import PHPLogo from '../assets/images/PHPLogo.png';
import PHPCover from '../assets/images/PHPCover.jpg';
import MachineLearningLogo from '../assets/images/MachineLearningLogo.png';
import MachineLearningCover from '../assets/images/MachineLearningCover.jpg';
import KotlinLogo from '../assets/images/KotlinLogo.png';
import KotlinCover from '../assets/images/KotlinCover.png';
import AndroidStudioLogo from '../assets/images/AndroidStudioLogo.png';
import AndroidStudioCover from '../assets/images/AndroidStudioCover.png';
import FlutterLogo from '../assets/images/FlutterLogo.png';
import FlutterCover from '../assets/images/FlutterCover.png';
import SwiftLogo from '../assets/images/SwiftLogo.png';
import SwiftCover from '../assets/images/SwiftCover.png';
import RubyLogo from '../assets/images/RubyLogo.png';
import RubyCover from '../assets/images/RubyCover.jpg';
import UnityLogo from '../assets/images/UnityLogo.png';
import UnityCover from '../assets/images/UnityCover.jpg';
import UnrealLogo from '../assets/images/UnrealLogo.png';
import UnrealCover from '../assets/images/UnrealCover.png';
import GodotLogo from '../assets/images/GodotLogo.png';
import GodotCover from '../assets/images/GodotCover.png';
import CybersecurityLogo from '../assets/images/CybersecurityLogo.png';
import CybersecurityCover from '../assets/images/CybersecurityCover.jpg';
import CloudComputingLogo from '../assets/images/CloudComputingLogo.png';
import CloudComputingCover from '../assets/images/CloudComputingCover.png';
import GCPLogo from '../assets/images/GCPLogo.png';
import GCPCover from '../assets/images/GCPCover.png';
import AzureLogo from '../assets/images/AzureLogo.png';
import AzureCover from '../assets/images/AzureCover.jpg';
import OOPLogo from '../assets/images/OOPLogo.png';
import OOPCover from '../assets/images/OOPCover.jpg';
import DatabaseDesignLogo from '../assets/images/DatabaseDesignLogo.png';
import DatabaseDesignCover from '../assets/images/DatabaseDesignCover.jpeg';
import XamarinLogo from '../assets/images/XamarinLogo.png';
import XamarinCover from '../assets/images/XamarinCover.png';

const FirestoreGuide = {
  title: 'Firestore',
  cover: FirestoreCover,
  logo: FirebaseLogo,
  description:
    'Cloud Firestore is a NoSQL document database that lets you easily store, sync, and query data for your mobile and web apps at a global scale.',
  duration: '1 Hour',
  guideID: 2000,
  relatedGuides: [29000, 13000],
  sections: [
    {
      name: 'Introduction',
      description: 'What is Firestore? And why should I use it?',
      videoLink: '4d-gIPGzmK4',
      ID: 2001,
    },
    {
      name: 'Setting up Firestore',
      description: 'Learn how to create & setup a Firestore project',
      videoLink: 'UFLvSp4Mh9k',
      ID: 2002,
    },
    {
      name: 'Getting Documents',
      description: 'Learn how to fetch documents from Cloud Firestore',
      videoLink: 'kmTECF0JZyQ',
      ID: 2003,
    },
    {
      name: 'Saving Data',
      description: 'Learn how to save data to Cloud Firestore',
      videoLink: 'zpQle4SBRfg',
      ID: 2004,
    },
    {
      name: 'Deleting Data',
      description: 'Learn how to delete existing data from Cloud Firestore',
      videoLink: 'UZqXcoqC95E',
      ID: 2005,
    },
    {
      name: 'Making Queries',
      description:
        'Learn how to make queries and fetch multiple pieces of data',
      videoLink: 'mYyPbfpoZeM',
      ID: 2006,
    },
    {
      name: 'Ordering Data',
      description: 'Learn how to order and filter through Cloud Firestore data',
      videoLink: 'cb8H_hp10rc',
      ID: 2007,
    },
    {
      name: 'Real Time Data',
      description: 'Learn how to stay in sync with Cloud Firestore',
      videoLink: 'RdnPAOA6qfw',
      ID: 2008,
    },
    {
      name: 'Updating Data',
      description: 'Learn how to update data in Cloud Firestore',
      videoLink: 'fekIsTaQ9Kw',
      ID: 2009,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://firebase.google.com/docs',
    },
  ],
};

const JavaGuide = {
  title: 'Java',
  cover: JavaCover,
  logo: JavaLogo,
  description:
    'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
  duration: '10 Hours',
  guideID: 3000,
  relatedGuides: [16000, 17000],
  sections: [
    {
      name: 'Introduction to Java',
      description:
        'Learn about Java and how you can use it to program powerful programs',
      videoLink: 'sShWhryoMx8',
      ID: 3001,
    },
    {
      name: 'Primitive Types & Definite Loops',
      description:
        "Learn about Java's different primitive types and get an introduction to loops",
      videoLink: 'X68MUwO2Jp8',
      ID: 3002,
    },
    {
      name: 'Parameters & Objects',
      description:
        'Learn about function parameters and get an introduction to Objects',
      videoLink: 'WtjfoJG0mUE',
      ID: 3003,
    },
    {
      name: 'Conditionals',
      description: 'Learn about if statements and control flow in Java',
      videoLink: 'VgaBOaZQ9dY',
      ID: 3004,
    },
    {
      name: 'Indefinite Loops',
      description:
        'Learn about more loops and iterative approaches to problem solving',
      videoLink: 'd3JYoAvclmM',
      ID: 3005,
    },
    {
      name: 'File Processing',
      description: 'Learn how to process text files and more in Java',
      videoLink: 'IkndaG4uq4I',
      ID: 3006,
    },
    {
      name: 'Arrays',
      description: 'Learn about the Array data type in Java',
      videoLink: 'Rjb3jMx8beY',
      ID: 3007,
    },
    {
      name: 'Classes',
      description:
        'Start working with Object Oriented Programming with Java Classes',
      videoLink: 'njPp1cxJUCg',
      ID: 3008,
    },
    {
      name: 'Inheritance',
      description: 'Learn more about OOP concepts with Java Inheritance',
      videoLink: 'mkRyHIVaI30',
      ID: 3009,
    },
    {
      name: 'ArrayLists',
      description: 'Learn about the ArrayList data type and how you can use it',
      videoLink: '2DWz2txqIhk',
      ID: 3010,
    },
    {
      name: 'Java Collections',
      description: 'Learn about other Java data types and collections',
      videoLink: 'Tj9MmRZwzPM',
      ID: 3011,
    },
    {
      name: 'Recursion',
      description: 'Learn about how some problems can be solved with Recursion',
      videoLink: 'A3BTr_jjsP0',
      ID: 3012,
    },
    {
      name: 'Searching & Sorting',
      description: 'Learn about different searching and sorting algorithms',
      videoLink: '_L0kai76dd8',
      ID: 3014,
    },
    {
      name: 'Stacks & Queues',
      description: 'Learn about more Java data types',
      videoLink: 'cEKVhH0_68A',
      ID: 3015,
    },
    {
      name: 'Linked Lists',
      description: 'Learn about the Java implementation Linked List',
      videoLink: 'DYFj8SK7nRs',
      ID: 3016,
    },
    {
      name: 'Binary Trees',
      description: 'Learn about how Binary Trees are implemented in Java',
      videoLink: 'SiQgW1uN9g0',
      ID: 3017,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://docs.oracle.com/en/java/',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
  ],
};

const JavaScriptGuide = {
  title: 'JavaScript',
  cover: JavaScriptCover,
  logo: JavaScriptLogo,
  description:
    'JavaScript is a scripting or programming language that allows you to implement complex features on web pages like displaying timely content updates, interactive maps, animated 2D/3D graphics, and more.',
  duration: '24 Hours',
  guideID: 4000,
  relatedGuides: [5000, 6000],
  sections: [
    {
      name: 'Introduction',
      description: 'Learn about JavaScript and its basic syntax',
      videoLink: 'AdmD3WVV9Zg',
      ID: 4001,
    },
    {
      name: 'Variables',
      description: 'Learn how to declare and manipulate JavaScript variables',
      videoLink: 'uORwgUf1n5k',
      ID: 4002,
    },
    {
      name: 'Conditionals',
      description:
        'Learn how to use if statements and control flow in JavaScript',
      videoLink: '1gV_q57V3SE',
      ID: 4003,
    },
    {
      name: 'Functions',
      description: 'Learn how to define functions and call them in JavaScript',
      videoLink: 'S0GnoCDPFQE',
      ID: 4004,
    },
    {
      name: 'Scope',
      description:
        'Learn how to leverage scope to define unique variables with functions',
      videoLink: 'lpJHUkrPNLc',
      ID: 4005,
    },
    {
      name: 'Arrays',
      description:
        'Learn how to define and manipulate the array data structure in JavaScript',
      videoLink: 'W0_z3Zw2uVA',
      ID: 4006,
    },
    {
      name: 'Loops',
      description:
        'Learn and use loops to solve problems iterativley in JavaScript',
      videoLink: 'HcDqENMbPcE',
      ID: 4007,
    },
    {
      name: 'Higher Order Functions',
      description:
        'Understand how Higher Order Functions work and their use in JavaScript',
      videoLink: 'YbFSUYIDtIM',
      ID: 4008,
    },
    {
      name: 'Iterators',
      description:
        'Learn how to use iterators to solve complex problems in JavaScript',
      videoLink: 'M2t3paRaQHI',
      ID: 4009,
    },
    {
      name: 'Objects',
      description: 'Learn Object Oriented Programming in JavaScript',
      videoLink: 'dCURnRTUJQk',
      ID: 4010,
    },
    {
      name: 'Advanced Objects',
      description:
        'Learn how to manipulate and define complex objects in JavaScript',
      videoLink: 'MNbjcnUE9w0',
      ID: 4011,
    },
    {
      name: 'Classes',
      description:
        'Learn how to create your own class in JavaScript and instantiate it',
      videoLink: 'iLoOxN_G3pQ',
      ID: 4012,
    },
    {
      name: 'Modules',
      description: 'Learn how to reuse code with exported modules',
      videoLink: '5f1IW-al3Ho',
      ID: 4013,
    },
    {
      name: 'Promises',
      description: 'Learn how to write asynchronous code in JavaScript',
      videoLink: 'nHfwGYP9754',
      ID: 4014,
    },
    {
      name: 'Async & Await',
      description:
        'Learn the new ES6 syntax of writing asynchronous code in JavaScript',
      videoLink: 'Pb8EJUTCXjA',
      ID: 4015,
    },
    {
      name: 'Requests 1',
      description: 'Make HTTPS calls and more in JavaScript using promises',
      videoLink: 'Jq86bbGbtNc',
      ID: 4016,
    },
    {
      name: 'Requests 2',
      description: 'Make HTTPS calls and more in JavaScript using promises',
      videoLink: 'Vv9aYhjLv8M',
      ID: 4017,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
  ],
};

const ReactJSGuide = {
  title: 'React.JS',
  cover: ReactJSCover,
  logo: ReactJSLogo,
  description:
    'React is an open-source, front end, JavaScript library for building user interfaces or UI components. React can be used as a base in the development of single-page or mobile applications.',
  duration: '4 Hours',
  guideID: 5000,
  relatedGuides: [4000, 6000],
  sections: [
    {
      name: 'Introduction & Setup',
      description:
        'Learn what React.js is and how you can use it for web development',
      videoLink: 'MhkGQAoc7bc',
      ID: 5001,
    },
    {
      name: 'Components & Rendering',
      description:
        'Learn how React renders different pieces of code called components',
      videoLink: 'fd2Cayhez58',
      ID: 5002,
    },
    {
      name: 'Multiple Components',
      description: 'Learn how to render multiple components at the same time',
      videoLink: 'vu_rIMPROoQ',
      ID: 5003,
    },
    {
      name: 'State & Props',
      description: 'Learn to manage state and props within a screen',
      videoLink: 'qh3dYM6Keuw',
      ID: 5004,
    },
    {
      name: 'Events & Data Changes',
      description: 'Learn how to display and handle data on your web page',
      videoLink: '_D1JGNidMr4',
      ID: 5005,
    },
    {
      name: 'React Router',
      description: 'Learn how to navigate between multiple screens',
      videoLink: '1iAG6h9ff5s',
      ID: 5006,
    },
    {
      name: 'Params & Queries',
      description:
        'Learn how to pass params from one screen to another to build complex websites',
      videoLink: 'ZBxMljq9GSE',
      ID: 5007,
    },
    {
      name: 'Inline Styles & Component Arrays',
      description:
        'Learn how to style your components and create complex components',
      videoLink: 'XVdwq8W2ZsM',
      ID: 5008,
    },
  ],
  additionalResources: [
    {
      title: 'JS Documentation',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      title: 'React Documentation',
      link: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
  ],
};

const ReactNativeGuide = {
  title: 'React Native',
  cover: ReactNativeCover,
  logo: ReactNativeLogo,
  description:
    'React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use React along with native platform capabilities.',
  duration: '5.5 Hours',
  guideID: 6000,
  relatedGuides: [3000, 5000],
  sections: [
    {
      name: 'Introduction',
      description:
        'Learn what is React Native and how you can use it to build a mobile app',
      videoLink: 'ur6I5m2nTvk',
      ID: 6001,
    },
    {
      name: 'Creating a React Native App',
      description: 'Learn how to initialize your first React Native app',
      videoLink: 'pflXnUNMsNk',
      ID: 6002,
    },
    {
      name: 'Views, Text, and Styles',
      description:
        'Learn about basic React Native components and make your first screen',
      videoLink: '_YydVvnjNFE',
      ID: 6003,
    },
    {
      name: 'Using State',
      description: 'Learn how to manage state within a screen',
      videoLink: '1FiIYaRr148',
      ID: 6004,
    },
    {
      name: 'Text Inputs',
      description:
        'Learn about the Text Input component and use it to accept user input',
      videoLink: 'c9Sg9jDitm8',
      ID: 6005,
    },
    {
      name: 'Lists & ScrollView',
      description:
        'Learn about the List & ScrollView component to display many items',
      videoLink: 'W-pg1r6-T0g',
      ID: 6006,
    },
    {
      name: 'FlatList Component',
      description:
        'Learn about the FlatList component and how to use it in React Native',
      videoLink: 'iMCM1NceGJY',
      ID: 6007,
    },
    {
      name: 'Touchable Components',
      description:
        'Learn how to use Touchable Components to make buttons and more',
      videoLink: 'QhX25YGf8qg',
      ID: 6008,
    },
    {
      name: 'Todo App 1',
      description: 'Learn how to make your first basic React Native App',
      videoLink: 'uLHFPt9B2Os',
      ID: 6009,
    },
    {
      name: 'Todo App 2',
      description: 'Learn how to make your first basic React Native App',
      videoLink: 'SGEitne8N-Q',
      ID: 6010,
    },
    {
      name: 'Todo App 3',
      description: 'Learn how to make your first basic React Native App',
      videoLink: 'LH_SoXiu_Hk',
      ID: 6011,
    },
    {
      name: 'Alerts',
      description:
        'Learn about how to use the Alert component to talk to your user',
      videoLink: 'oVA9JgTTiT0',
      ID: 6012,
    },
    {
      name: 'Dismissing the Keyboard',
      description: "Learn about interacting with the device's keyboard",
      videoLink: 'IW-SEiRjUsI',
      ID: 6013,
    },
    {
      name: 'Flexbox Basics',
      description: 'Learn how to organize components with flex styling',
      videoLink: 'R2eqAgR_KlU',
      ID: 6014,
    },
    {
      name: 'Icons & More Flexbox',
      description: 'Learn about common icons used in mobile apps',
      videoLink: 'C4ikFaP0a5o',
      ID: 6015,
    },
    {
      name: 'Starting the Reviews App',
      description: 'Create your first complex React Native app',
      videoLink: 'cFVHTazhb7I',
      ID: 6016,
    },
    {
      name: 'Custom Fonts',
      description: 'Learn about implementing custom fonts in React Native',
      videoLink: 'IY5OBeL9LNE',
      ID: 6017,
    },
    {
      name: 'Global Styles',
      description: 'Learn about more efficient styling methods in React Native',
      videoLink: 'wtvpQ9liu4g',
      ID: 6018,
    },
    {
      name: 'React Navigation',
      description:
        'Learn how to navigate between different screens in React Native',
      videoLink: 'OmQCU-3KPms',
      ID: 6019,
    },
    {
      name: 'Stack Navigator',
      description:
        'Learn about the Stack Navigator component and navigate between screens',
      videoLink: 'cS4PgI3zBzY',
      ID: 6020,
    },
    {
      name: 'Navigating Around',
      description:
        'Learn about different navigation methods and their benefits',
      videoLink: 'PMX6GP1TXGo',
      ID: 6021,
    },
    {
      name: 'Passing Data Between Screens',
      description:
        'Learn how to pass params from one screen to the next with React Navigation',
      videoLink: '-40TBdSRk6E',
      ID: 6022,
    },
    {
      name: 'Navigation Options',
      description:
        'Learn about different options and settings for React Navigation',
      videoLink: 'llPRMRl_ZTM',
      ID: 6023,
    },
    {
      name: 'Drawer Navigation',
      description: 'Learn how to create a drawer to organize your app',
      videoLink: 'EaNCi8o8H0A',
      ID: 6024,
    },
    {
      name: 'Custom Header Component',
      description: 'Create your own custom component',
      videoLink: 'C3oDJdlrEKE',
      ID: 6025,
    },
    {
      name: 'Custom Card Component',
      description: 'Create your own custom component',
      videoLink: '5NewXsBnoKw',
      ID: 6026,
    },
    {
      name: 'Using Images',
      description: 'Learn how to import and display images in React Native',
      videoLink: '2s5KNg_5_LA',
      ID: 6027,
    },
    {
      name: 'Background Images',
      description:
        'Learn how to set images as your background image in React Native',
      videoLink: 'RULLuEC5C7Y',
      ID: 6028,
    },
    {
      name: 'Modals',
      description: 'Learn about the Modal component and how to use it',
      videoLink: 'pYh3Z-iBc4E',
      ID: 6029,
    },
    {
      name: 'Forms 1',
      description: 'Creating a complex React Native App',
      videoLink: 't4Q1s8WntlA',
      ID: 6030,
    },
    {
      name: 'Forms 2',
      description: 'Creating a complex React Native App',
      videoLink: 'urzVC5Zr-JM',
      ID: 6031,
    },
    {
      name: 'Validation',
      description: 'Validating data in the app',
      videoLink: 'ftLy78R8xrg',
      ID: 6032,
    },
    {
      name: 'Showing Errors',
      description: 'Showing user errors in the app',
      videoLink: 'o_ErcEKV23I',
      ID: 6033,
    },
    {
      name: 'Custom Button Component',
      description: 'Creating your custom Touchable component',
      videoLink: 'LEa48P-KtCw',
      ID: 6034,
    },
    {
      name: 'Wrap Up',
      description: 'Finishing up the complex React Native App',
      videoLink: 'BTnp1TiiSMg',
      ID: 6035,
    },
  ],
  additionalResources: [
    {
      title: 'JS Documentation',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      title: 'React Native Documentation',
      link: 'https://reactnative.dev/docs/getting-started',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
  ],
};

const CPlusPlusGuide = {
  title: 'C++',
  cover: CPlusPlusCover,
  logo: CPlusPlusLogo,
  description:
    'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes"',
  duration: '6.5 Hours',
  guideID: 7000,
  relatedGuides: [8000, 9000],
  sections: [
    {
      name: 'Installation & Setup',
      description:
        'Get an introduction to C++ and download the necessary material',
      videoLink: '_r5i5ZtUpUM',
      ID: 7001,
    },
    {
      name: 'Variables & Data Types',
      description:
        'Learn how to declare and manipulate variables and constants in C++',
      videoLink: 'f0u3Pz7kpUw',
      ID: 7002,
    },
    {
      name: 'Input & Operators',
      description: 'Learn about logical and mathematical operators in C++',
      videoLink: 'CjVANVMAwJ4',
      ID: 7003,
    },
    {
      name: 'Arrays, Chars, & Strings',
      description: 'Learn about more data types in C++',
      videoLink: '5u6Oq06Iask',
      ID: 7004,
    },
    {
      name: 'References & Pointers',
      description:
        'Learn about object referencing and types of pointers in C++',
      videoLink: 'DvUYbUn9uQ4',
      ID: 7005,
    },
    {
      name: 'If, Else, & Switch',
      description:
        'Learn about Conditional Statements and how to implement them in C++',
      videoLink: '-6ZkRmhL3QY',
      ID: 7006,
    },
    {
      name: 'Loops',
      description: 'Learn about different ways to iterate in C++',
      videoLink: 'iMbvbWlrMj8',
      ID: 7007,
    },
    {
      name: 'Solutions 1 - 7',
      description: 'Solutions for the exercises presented in sections 1 - 7',
      videoLink: 'SG6TN2Y7zcs',
      ID: 7008,
    },
    {
      name: 'Additional Libraries',
      description: 'Learn about using open source libraries in C++',
      videoLink: 'CJQ1ybhP7Tw',
      ID: 7009,
    },
    {
      name: 'Functions 1',
      description: 'Learn how to define basic functions in C++',
      videoLink: 'K6qgajOzybc',
      ID: 7010,
    },
    {
      name: 'Functions 2',
      description: 'Learn more about functions and C++ syntax',
      videoLink: 'xZvQTbCywFE',
      ID: 7011,
    },
    {
      name: 'Functions 3',
      description: 'Learn about pre and post conditions in functions',
      videoLink: 'fhmJZgxFWsU',
      ID: 7012,
    },
    {
      name: 'Debugging',
      description: 'Learn how to debug C++ code using VSCode',
      videoLink: '2yXYNxNgJek',
      ID: 7013,
    },
    {
      name: 'Enum, Struct, Ascii',
      description:
        'Learn more about different data types in C++ and their usage',
      videoLink: 'aWBGFGioatE',
      ID: 7014,
    },
    {
      name: 'Classes 1',
      description:
        'Learn about object oriented programming and basic classes usage in C++',
      videoLink: 'B9Q87mnLJ20',
      ID: 7015,
    },
    {
      name: 'Solutions 8 - 14',
      description: 'Solutions for the exercises presented in sections 8 - 14',
      videoLink: 'fYKUu6-dz0k',
      ID: 7016,
    },
    {
      name: 'Classes 2',
      description: 'Learn about class destructors in C++',
      videoLink: 'iUoNn56oFG4',
      ID: 7017,
    },
    {
      name: 'Classes 3',
      description:
        'Learn about superclasses and subclasses using inheritance in C++',
      videoLink: 'HNfDuX3aLuM',
      ID: 7018,
    },
    {
      name: 'Classes 4',
      description: 'Learn about polymorphism and how it used in C++',
      videoLink: 'W9hFcP3l91o',
      ID: 7019,
    },
    {
      name: 'Virtual',
      description: 'Learn about the keyword virtual and how to use it in C++',
      videoLink: 'mYxV9HdRNOk',
      ID: 7020,
    },
    {
      name: 'Abstract & Interfaces',
      description:
        'Learn what interfaces are and learn about the absract keyword',
      videoLink: 'DAnz06-Xq1s',
      ID: 7021,
    },
    {
      name: 'Overriding',
      description: 'Learn how to override methods from superclasses',
      videoLink: 'kcOeQ0EwybI',
      ID: 7022,
    },
    {
      name: 'Protected',
      description: 'Learn about the protected keyword and its usage in C++',
      videoLink: 'LSTRj1Ut15w',
      ID: 7023,
    },
    {
      name: 'Encapsulation',
      description:
        'Learn about the concept on encapsulation and its importance in programming',
      videoLink: 'LHwjFF8-lAI',
      ID: 7024,
    },
    {
      name: 'Object Slicing',
      description:
        'Learn about object slicing and how it is implemented in C++',
      videoLink: 'f29xDhRNPfU',
      ID: 7025,
    },
    {
      name: 'Dynamic Memory',
      description: "Learn about C++'s dynamic memory allocation",
      videoLink: 'unrjUfe2sm4',
      ID: 7026,
    },
    {
      name: 'Dynamic Arrays 1',
      description: 'Learn more about arrays in the context of dynamic memory',
      videoLink: 'YNPUt7PIDI4',
      ID: 7027,
    },
    {
      name: 'Dynamic Arrays 2',
      description:
        'Continue learning about arrays in the context of dynamic memory',
      videoLink: 'o0VOg6oOPSs',
      ID: 7028,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://devdocs.io/cpp/',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
  ],
};

const CGuide = {
  title: 'C',
  cover: CCover,
  logo: CLogo,
  duration: '21 Hours',
  description:
    'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.',
  guideID: 8000,
  relatedGuides: [7000, 9000],
  sections: [
    {
      name: 'Intro to C',
      description: 'Get an introduction to C programming',
      videoLink: 'CPjZKsUYSXg',
      ID: 8001,
    },
    {
      name: 'Installing GCC',
      description: 'Install all the needed material to get started',
      videoLink: '9_goo9L5Uko',
      ID: 8002,
    },
    {
      name: 'Hello World',
      description: 'Write your first program in C',
      videoLink: 'Rw_Pyzuv0Go',
      ID: 8003,
    },
    {
      name: 'How a C Program Works 1',
      description: 'Understand the basics of a C program',
      videoLink: 'n7g4keSd0kk',
      ID: 8004,
    },
    {
      name: 'How a C Program Works 2',
      description: 'Understand what makes up a C program',
      videoLink: 'RGxwgBNQwbI',
      ID: 8005,
    },
    {
      name: 'Intro to UNIX/Linux 1',
      description:
        'Learn about what UNIX & Linux are and how they apply to C programming',
      videoLink: 'EbIRKJykc_M',
      ID: 8006,
    },
    {
      name: 'Intro to UNIX/Linux 2',
      description:
        'Learn about what UNIX & Linux are and how they apply to C programming',
      videoLink: '2sAqu2VoJCQ',
      ID: 8007,
    },
    {
      name: 'Intro to UNIX Linux 3',
      description:
        'Learn about what UNIX & Linux are and how they apply to C programming',
      videoLink: 'HPo_BfBJkLA',
      ID: 8008,
    },
    {
      name: 'Variables, Expressions, Statements',
      description: 'Learn about variables, expressions, and statements in C',
      videoLink: 'Rwtsx0BfLxk',
      ID: 8009,
    },
    {
      name: 'Print Variables Using Printf',
      description: 'Learn about the Printf formatting statement',
      videoLink: 'tPlT9mg7bkw',
      ID: 8010,
    },
    {
      name: 'Taking Input from User',
      description: 'Learn how to take input from users in C',
      videoLink: 'EA8K2d3USDc',
      ID: 8011,
    },
    {
      name: 'Arithmetic Expressions',
      description: 'Learn how to do math in C',
      videoLink: 'dJWewDL9jSY',
      ID: 8012,
    },
    {
      name: 'Basic Type Casting',
      description: 'Learn about types in C and how to cast between them',
      videoLink: 'i7zM3m-J_jk',
      ID: 8013,
    },
    {
      name: 'Working with Strings',
      description: 'Learn how to work with strings and manipulate them in C',
      videoLink: 'qarhSok42Ms',
      ID: 8014,
    },
    {
      name: 'Using Functions in C',
      description: 'Learn how to declare and use functions in C',
      videoLink: 'AMU3xDnECsU',
      ID: 8015,
    },
    {
      name: 'Comments',
      description: 'Learn about code quality with comments in C',
      videoLink: 'AcNKU77vyjg',
      ID: 8016,
    },
    {
      name: 'Vim Basics 1',
      description: 'Learn what Vim is, and how it can be useful to you in C',
      videoLink: 'H3X4cJchnkA',
      ID: 8017,
    },
    {
      name: 'Vim Basics 2',
      description: 'Learn what Vim is, and how it can be useful to you in C',
      videoLink: 'kCNvD8950s8',
      ID: 8018,
    },
    {
      name: 'Intro to Data Types 1',
      description: 'Learn about more complex data types in C',
      videoLink: 'TnYCHohAMS8',
      ID: 8019,
    },
    {
      name: 'Intro to Data Types 2',
      description: 'Learn about more complex data types in C',
      videoLink: 'hZ8aaWpPkD8',
      ID: 8020,
    },
    {
      name: 'Int, Float, and Double Data Types',
      description: 'Understand the number data types and how to use them in C',
      videoLink: 'heULTdxf_yQ',
      ID: 8021,
    },
    {
      name: 'Scientific Notation',
      description: 'Learn how to deal with very large or very small numbers',
      videoLink: 'cNU0GK4zitM',
      ID: 8022,
    },
    {
      name: 'Format Characters for Float and Double',
      description: 'Learn how to format characters using numbers',
      videoLink: 'jYcWGYDTWFo',
      ID: 8023,
    },
    {
      name: 'ASCII',
      description: 'Learn about the Char date type using the ASCII set',
      videoLink: 'JuJBfEOxzeg',
      ID: 8024,
    },
    {
      name: 'Char Data Type',
      description: 'Learn more about the Char Data Type',
      videoLink: '_IERzjk4VQY',
      ID: 8025,
    },
    {
      name: 'ASCII and Int Conversion',
      description: 'Learn more about how to use character sets in C',
      videoLink: '2qQTMbYSJGs',
      ID: 8026,
    },
    {
      name: '_Bool Data Type',
      description: 'Learn about this specific binary data type',
      videoLink: 'aCoL10ShmNQ',
      ID: 8027,
    },
    {
      name: 'The bool Data Type',
      description: 'Learn more about the boolean data type',
      videoLink: 'AmaZy1xNe40',
      ID: 8028,
    },
    {
      name: 'Variables',
      description: 'Get a deeper understanding of variables in C',
      videoLink: 'F3h7fYojzsc',
      ID: 8029,
    },
    {
      name: 'Intro to Operators',
      description: 'Learn about more advanced operators in C',
      videoLink: 'OE294nuQ2x4',
      ID: 8030,
    },
    {
      name: 'Arithmetic Operators',
      description: 'Continue learning about arithmetic and math operators in C',
      videoLink: 'YX1ZA4-Ry6o',
      ID: 8031,
    },
    {
      name: 'Modulus Operator',
      description: 'Learn about the universal modulus operator',
      videoLink: 'p6QL1YhJCFU',
      ID: 8032,
    },
    {
      name: 'Unary Plus and Minus',
      description: 'Learn about keyboard shortcuts to make coding faster',
      videoLink: 'zJMv02wURqQ',
      ID: 8033,
    },
    {
      name: 'Increment and Decrement Operators',
      description: 'Learn about more mathematical shortcuts',
      videoLink: 'S8TWdFlMrpU',
      ID: 8034,
    },
    {
      name: 'Assignment Operators',
      description: 'Learn about the assignment operator in C',
      videoLink: 'WgB5sRYDZe0',
      ID: 8035,
    },
    {
      name: 'Operator Precedence',
      description: 'Learn about operator rules and their logic',
      videoLink: 'vAJzfUJ1FxY',
      ID: 8036,
    },
    {
      name: 'Strongly Typed vs Loosely Typed Languages',
      description: 'Get a deeper understanding of different languages like C',
      videoLink: 'bQdzwJWYZRU',
      ID: 8037,
    },
    {
      name: 'Type Casting',
      description: 'Understand types and type casting in C',
      videoLink: 'VDRkrVx7zHQ',
      ID: 8038,
    },
    {
      name: 'Implicit Type Promotion',
      description:
        'Learn about the difference between implicit and explicit casting',
      videoLink: 'oR7eSS0DlEY',
      ID: 8039,
    },
    {
      name: 'How to Use the Type Cast Operator',
      description:
        'Learn about the specific type cast operator and how to use it',
      videoLink: 'Vd299ApQdIE',
      ID: 8040,
    },
    {
      name: 'Quiz 1',
      description: 'Test your knowledge in C with this series of quizes',
      videoLink: 'bKvr0phXrYY',
      ID: 8041,
    },
    {
      name: 'Quiz 2',
      description: 'Test your knowledge in C with this series of quizes',
      videoLink: 'o83af_xMKYU',
      ID: 8042,
    },
    {
      name: 'Quiz 3',
      description: 'Test your knowledge in C with this series of quizes',
      videoLink: 'Tw2xRRu5AO8',
      ID: 8043,
    },
    {
      name: 'Coding Challenge',
      description: 'Get a deeper understand of C with this coding challenge',
      videoLink: '1pBkeg4LDxA',
      ID: 8044,
    },
    {
      name: 'Intro to Logic',
      description: 'Code more powerful programs with logical operators',
      videoLink: 'I66I1e9cMyI',
      ID: 8045,
    },
    {
      name: 'If Statement',
      description: 'Understand the conditional statement and how it works in C',
      videoLink: 'vT-GyM1LTic',
      ID: 8046,
    },
    {
      name: 'How to Write If Statement with Bool',
      description: 'Learn how booleans and if statements work together',
      videoLink: 'dZDsLIt1TVQ',
      ID: 8047,
    },
    {
      name: 'Good Coding Practices',
      description: 'Understand industry standards so you can type quality code',
      videoLink: 'SpKlQTbOuZQ',
      ID: 8048,
    },
    {
      name: 'Relational Operators',
      description:
        'Learn how to code advanced programs with relational operators',
      videoLink: 'zoO9cvwLnW4',
      ID: 8049,
    },
    {
      name: 'If Statement Guessing Game',
      description: 'Create a sample program with the if statement',
      videoLink: 'LoiPkKne_Wg',
      ID: 8050,
    },
    {
      name: 'If-Else Statement',
      description: 'Add more logic to your programs with the else statement',
      videoLink: 'JXCFn3LF_lU',
      ID: 8051,
    },
    {
      name: 'Logical Operators',
      description: 'Use logical operators to make better if statementst',
      videoLink: 'NJth2A4TxMM',
      ID: 8052,
    },
    {
      name: 'Evaluating Complex Conditionals',
      description: 'Using everything we learned to create complex logic',
      videoLink: 'tBA-mB31jxE',
      ID: 8053,
    },
    {
      name: 'Short Circuit Evaluation',
      description: 'See how you can break out of if statements early',
      videoLink: 'nqg26efN8rw',
      ID: 8054,
    },
    {
      name: 'Logical Operator Precedence',
      description: 'Understand the rules surrounding logic operators',
      videoLink: 'euip9TIqSOQ',
      ID: 8055,
    },
    {
      name: 'Else-If Statement',
      description: 'Make complex C programs using the Else If statement',
      videoLink: 'zAgsoGew8jc',
      ID: 8056,
    },
    {
      name: 'How to use the Else-If Statement',
      description: 'Get a better insight into the Else If statement',
      videoLink: 'oVWgBcVOqYE',
      ID: 8057,
    },
    {
      name: 'Multiple-If Vs Else-If',
      description: 'Create a complex if statement with multiple clauses',
      videoLink: 'ksfOGOqgj4c',
      ID: 8058,
    },
    {
      name: 'Single-Line If',
      description: 'Learn how to evalutate if statements in-line',
      videoLink: 'Fi38Nwyuc2A',
      ID: 8059,
    },
    {
      name: 'Intro to Switch Statements',
      description: 'Understand the basics of switch statements',
      videoLink: 'dmVCVFZ2rU0',
      ID: 8060,
    },
    {
      name: 'How to Write a Switch Statement',
      description: 'Learn the syntax of the switch statement',
      videoLink: 'FSxYyHLF_9A',
      ID: 8061,
    },
    {
      name: 'When To Use Switch Over If',
      description:
        'Learn the differences between the if statement and the switch statement',
      videoLink: 'b_ZjYx9G9fk',
      ID: 8062,
    },
    {
      name: 'Characters in switch',
      description: 'Finish off switch statements',
      videoLink: 'cIRpbPgt44Q',
      ID: 8063,
    },
    {
      name: 'Input Stream Explained',
      description: 'Learn how to accept more complicated user input',
      videoLink: 'WRyqzqXK2dA',
      ID: 8064,
    },
    {
      name: 'Nested if with User Input',
      description: 'Combine conditionals with accepting user input',
      videoLink: 'Zex_CWeiK5k',
      ID: 8065,
    },
    {
      name: 'Ternary (Conditional) Operator',
      description: 'Learn more about in-line if statements and conditionals',
      videoLink: 'hrw9ojCWoL8',
      ID: 8066,
    },
    {
      name: 'Intro to Loops',
      description: 'Learn about the basics of iteration',
      videoLink: 'cuh-5AE0AHs',
      ID: 8067,
    },
    {
      name: 'Intro to for Loops',
      description: 'Learn about for loops in C',
      videoLink: 'dodjd3Flh1I',
      ID: 8068,
    },
    {
      name: 'How to Code a For Loop',
      description: 'Learn about the syntax of the fot loop',
      videoLink: 'Qn8dNgvqPoo',
      ID: 8069,
    },
    {
      name: 'More Advanced Loops',
      description: 'Get an insight into more complex loops',
      videoLink: 'q4csanUFQMo',
      ID: 8070,
    },
    {
      name: 'Nested For Loop',
      description: 'Learn how to combine for loops',
      videoLink: 'exbCDwrElcw',
      ID: 8071,
    },
    {
      name: 'Counting Prime Numbers 1',
      description: 'Writing a sample program using our previous learning',
      videoLink: 'KGhLlULL09g',
      ID: 8072,
    },
    {
      name: 'Counting Prime Numbers 2',
      description: 'Writing a sample program using our previous learning',
      videoLink: 'teF-vbJHASI',
      ID: 8073,
    },
    {
      name: 'Counting Prime Numbers 3',
      description: 'Writing a sample program using our previous learning',
      videoLink: 'd5cLIiTSoTA',
      ID: 8074,
    },
    {
      name: 'Counting Prime Numbers 4',
      description: 'Writing a sample program using our previous learning',
      videoLink: 'ZCTZiV5LcRI',
      ID: 8075,
    },
    {
      name: 'While Loop',
      description: 'Learn about another type of loop in C',
      videoLink: 'OfJJsEIO1kE',
      ID: 8076,
    },
    {
      name: 'Nested While Loops',
      description: 'Learn about combining multiple while loops',
      videoLink: 'v9igjbjjYPo',
      ID: 8077,
    },
    {
      name: 'Do While Loop',
      description: 'Understand the do keyword in the while loop',
      videoLink: 'BztbwUkMY_I',
      ID: 8078,
    },
    {
      name: 'break',
      description: 'Learn about the break keyword in C',
      videoLink: '_899YPdiHdY',
      ID: 8079,
    },
    {
      name: 'continue',
      description: 'Learn about the continue keyword in C',
      videoLink: 'GDbvz-v3uzM',
      ID: 8080,
    },
    {
      name: 'Intro to Arrays',
      description: 'Learn about the array data structure in C',
      videoLink: 'u8I31l8Pwc4',
      ID: 8081,
    },
    {
      name: 'Working with Arrays',
      description: 'Learn how to manipulate and work with arrays in C',
      videoLink: 'DQTBPuCdqYI',
      ID: 8082,
    },
    {
      name: 'Printing Array with Loop',
      description: 'Learn about printing and visualizing arrays in C',
      videoLink: 'qmw9K4oHOog',
      ID: 8083,
    },
    {
      name: 'Multidimensional Arrays',
      description: 'Understand complex arrays in C',
      videoLink: 'cfqbzYyx-dM',
      ID: 8084,
    },
    {
      name: '2D Arrays and Nested for Loops',
      description: 'Combine for loops with multidimensional arrays',
      videoLink: 'isOEZVZD1B0',
      ID: 8085,
    },
    {
      name: 'Intro to Strings and Null Character',
      description:
        'Learn about string manipulation along with the null reference',
      videoLink: 'HqADRbshBF4',
      ID: 8086,
    },
    {
      name: 'Continute working with Strings',
      description: 'Learn more about string manipulation',
      videoLink: 'YCbrzDG_XmA',
      ID: 8087,
    },
    {
      name: 'Function Design',
      description: 'Learn about designing proper complex functions',
      videoLink: 'NuRE91IDe-8',
      ID: 8088,
    },
    {
      name: 'Parameters & Return Statement',
      description:
        'Learn about parameters and returning results from a function',
      videoLink: 'ylPG6x1rDxY',
      ID: 8089,
    },
    {
      name: 'How to Create a Function 1',
      description: 'Get a better insight about writing functions in C',
      videoLink: 'DbR-0GfnQOs',
      ID: 8090,
    },
    {
      name: 'How to Create a Function 2',
      description: 'Learn how to call a function in C',
      videoLink: '_0Lp3utEEcs',
      ID: 8091,
    },
    {
      name: 'Creating Void Functions',
      description: 'Learn about void functions and why they are sometimes used',
      videoLink: 'MZAF1R_KzgQ',
      ID: 8092,
    },
    {
      name: 'Refactoring',
      description: 'Learn about the concept of refactoring in programming',
      videoLink: 'G2rTDeyjCPQ',
      ID: 8093,
    },
    {
      name: 'Intro to Pointers and Indirection Operator',
      description: 'Learn about Pointers and their usage in C',
      videoLink: 'ePutOtexvw8',
      ID: 8094,
    },
    {
      name: 'Working with Pointers',
      description: 'Learn more about working with Pointer references',
      videoLink: 'SD1kQH90ofM',
      ID: 8095,
    },
    {
      name: 'Passing by Value vs Pointer',
      description:
        'Understand the differences between values and passing by reference',
      videoLink: '6vifTIRn02g',
      ID: 8096,
    },
    {
      name: 'Decay and Passing Arrays to Functions',
      description: 'Learn how arrays work when they are passed as parameters',
      videoLink: 'GaclhRKfxtI',
      ID: 8097,
    },
    {
      name: 'Working with Structs 1',
      description: 'Get an intro to Structs in C programming',
      videoLink: '7zXqMD6Fj_E',
      ID: 8098,
    },
    {
      name: 'Struct Arrays and Pointers',
      description:
        'Learn more about Structs and how they are used witth Pointers',
      videoLink: '-Vy4qrl675E',
      ID: 8099,
    },
    {
      name: 'Conclusion',
      description: 'Get a final summary of what we learned in this C guide',
      videoLink: 'be7hS1dO1UA',
      ID: 8100,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://devdocs.io/c/',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
  ],
};

const CSharpGuide = {
  title: 'C#',
  cover: CSharpCover,
  logo: CSharpLogo,
  description:
    'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
  duration: '4 Hours',
  guideID: 9000,
  relatedGuides: [7000, 8000],
  sections: [
    {
      name: 'Basics 1',
      description: 'Get an introduction to C# and how it works',
      videoLink: 'pSiIHe2uZ2w',
      ID: 9001,
    },
    {
      name: 'Basics 2',
      description: 'Learn how to run a simple program in C#',
      videoLink: 'nA2pSmBmvKg',
      ID: 9002,
    },
    {
      name: 'Variables',
      description: 'Learn how to define and manipulate variables in C#',
      videoLink: 'udoMi4mGYYw',
      ID: 9003,
    },
    {
      name: 'If Statements',
      description:
        'Learn about conditionals and how you can use them to write powerful programs in C#',
      videoLink: 'OXTK7cnphYY',
      ID: 9004,
    },
    {
      name: 'Switch Statements',
      description:
        'Learn about an alternative way to write conditional statements in C#',
      videoLink: 'Qs-LAYkp9YU',
      ID: 9005,
    },
    {
      name: 'For Loops',
      description:
        'Learn how to write for-loops to solve iterative problems in C#',
      videoLink: 'eIsGXwisKPE',
      ID: 9006,
    },
    {
      name: 'While Loops',
      description: 'Learn about while-loops, an alternative to for-loops',
      videoLink: 'SPE_HXHwJSU',
      ID: 9007,
    },
    {
      name: 'Methods',
      description: 'Learn how to reuse code to write powerful programs in C#',
      videoLink: 'QwygwfqOHsI',
      ID: 9008,
    },
    {
      name: 'Arrays',
      description: 'Learn about the array data structure in C#',
      videoLink: 'RQ0JHMGiobo',
      ID: 9009,
    },
    {
      name: 'Classes',
      description:
        'Learn how to define classes and use object oriented programming in C#',
      videoLink: 's2hHjpZaSyI',
      ID: 9010,
    },
    {
      name: 'Inheritance',
      description:
        'Learn about inheritance, superclasses, and subclasses in C#',
      videoLink: 'EiBCF7rYRtI',
      ID: 9011,
    },
    {
      name: 'Enums',
      description:
        'Learn about another data type in C# and why you should use it',
      videoLink: 'ETy3x4XeK9E',
      ID: 9012,
    },
    {
      name: 'Properties',
      description: 'Learn about class properties like getters and setters',
      videoLink: 'gvQziNULkdY',
      ID: 9013,
    },
    {
      name: 'Interfaces',
      description:
        'Learn about interfaces and how they can be used to write complex programs',
      videoLink: 'IQpss9YAc4g',
      ID: 9014,
    },
    {
      name: 'Generics',
      description:
        'Learn more about generic data types and conclude the C# guide',
      videoLink: 'ZrjCG0Fu5Ew',
      ID: 9015,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
  ],
};

const CSSGuide = {
  title: 'CSS',
  cover: CSSCover,
  logo: CSSLogo,
  description:
    'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
  duration: '2 Hours',
  guideID: 10000,
  relatedGuides: [11000, 5000],
  sections: [
    {
      name: 'Introduction',
      description:
        'Get an introduction to CSS & how you can use it in your web pages',
      videoLink: 'WZ2uqGkHoR0',
      ID: 10001,
    },
    {
      name: 'Basic Inline Styling',
      description: 'Learn how to style inline within HTML files',
      videoLink: 'jH_WY-sQ8Lg',
      ID: 10002,
    },
    {
      name: 'Colors',
      description:
        'Learn how to change colors using different color techniques',
      videoLink: 'jUFjErKxIPo',
      ID: 10003,
    },
    {
      name: 'Margins & Padding',
      description: 'Learn how to add spacing using margin and padding',
      videoLink: 'k4xA_Olo_Uo',
      ID: 10004,
    },
    {
      name: 'Display & Floats',
      description: 'Learn how to organize your layout using display',
      videoLink: 'Bzd1Pnxqeic',
      ID: 10005,
    },
    {
      name: 'Position - Static, Relative, Absolute, Fixed',
      description:
        'Learn how to position your elements using different positioning',
      videoLink: '_0Z1oNQ93Wo',
      ID: 10006,
    },
    {
      name: 'Shadows, Opacity & Border Radius',
      description: 'Learn how to add shadows and fading to your elements',
      videoLink: 'kZAlp-MDvlI',
      ID: 10007,
    },
    {
      name: 'Text & Fonts',
      description: 'Learn how to adjust font styling, size, and more',
      videoLink: 'Bc6tss3gEvU',
      ID: 10008,
    },
    {
      name: 'Style Tags',
      description: 'Learn how to style specific HTML tags using CSS',
      videoLink: 'q4Mxv3gr5mc',
      ID: 10009,
    },
    {
      name: 'External Style Sheets',
      description: 'Learn how to use external style sheets in CSS',
      videoLink: '2P_LUPc2HrM',
      ID: 10010,
    },
    {
      name: 'IDs & Classes',
      description:
        'Learn about how to use different types of selectors to overrride existing styles',
      videoLink: '4C_-y9dIc54',
      ID: 10011,
    },
    {
      name: 'CSS Selectors',
      description: 'Go more in depth about CSS selectors',
      videoLink: 'TbfIyjNTXbA',
      ID: 10012,
    },
    {
      name: 'Flexbox',
      description: 'Learn more about layout and organization using flexbox',
      videoLink: '6FedyF0F2i8',
      ID: 10013,
    },
    {
      name: 'Animations',
      description: 'Learn how to animate specific elements on a webpage in CSS',
      videoLink: '89dMYqpFcYs',
      ID: 10014,
    },
    {
      name: 'Imports',
      description: 'Learn about imports and how to use external CSS files',
      videoLink: 'kfUsT3-M3_k',
      ID: 10015,
    },
    {
      name: 'Browser Support',
      description: 'Learn more about real world application of CSS',
      videoLink: 'B7Y3t2a5mTA',
      ID: 10016,
    },
    {
      name: 'CSS Frameworks',
      description:
        'Get an overview of a variety of different existing CSS frameworks',
      videoLink: 'nDXDxA27poE',
      ID: 10017,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
  ],
};

const HTMLGuide = {
  title: 'HTML',
  cover: HTMLCover,
  logo: HTMLLogo,
  description:
    'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
  duration: '1.5 Hours',
  guideID: 11000,
  relatedGuides: [10000, 5000],
  sections: [
    {
      name: 'Introduction to HTML',
      description: 'Get an introduction to HTML',
      videoLink: 'dD2EISBDjWM',
      ID: 11001,
    },
    {
      name: 'Creating the First Web Page',
      description: 'Learn how to create your first website',
      videoLink: '-USAeFpVf_A',
      ID: 11002,
    },
    {
      name: 'Syntax',
      description: 'Learn about HTML line breaks, spacing and comments',
      videoLink: 'i3GE-toQg-o',
      ID: 11003,
    },
    {
      name: 'Lists',
      description: 'Learn about ordered and unordered lists',
      videoLink: '09oErCBjVns',
      ID: 11004,
    },
    {
      name: 'Tables',
      description: 'Learn how to create tables and organize data in HTML',
      videoLink: 'wvR40su_XBM',
      ID: 11005,
    },
    {
      name: 'Web Links',
      description: 'Learn how to add a web link to your website',
      videoLink: 'U4UHoiK6Oo4',
      ID: 11006,
    },
    {
      name: 'Nested Web Links',
      description:
        'Learn how to create web links that go to sections on the same page',
      videoLink: 'bCt2FnyY7AE',
      ID: 11007,
    },
    {
      name: 'Images 1',
      description: 'Learn how to add images to your webpage',
      videoLink: 'Zy4KJeVN7Gk',
      ID: 11008,
    },
    {
      name: 'Images 2',
      description: 'Learn how to resize and adjust images in HTML',
      videoLink: 'dM12ctixdT4',
      ID: 11009,
    },
    {
      name: 'Nested Elements',
      description:
        'Learn how to put elements within elements to create a complex website',
      videoLink: 'rO6_MZLIzCg',
      ID: 11010,
    },
    {
      name: 'Text Boxes 1',
      description: 'Learn how to create a one line text box in HTML',
      videoLink: 'wvU1mmJn_UI',
      ID: 11011,
    },
    {
      name: 'Text Boxes 2',
      description: 'Learn how to add labels to text boxes in HTML',
      videoLink: 'f9QXNFVlsls',
      ID: 11012,
    },
    {
      name: 'Text Boxes 3',
      description: 'Learn how to create a multiline text box in HTML',
      videoLink: 'onKF88kRK3Q',
      ID: 11013,
    },
    {
      name: 'Radio Buttons',
      description: 'Learn how to create a radio button inside your website',
      videoLink: 'NDAa6EaKce8',
      ID: 11014,
    },
    {
      name: 'Checkbox',
      description: 'Learn how to add a checkbox in your website',
      videoLink: 'g4UAV1lIHyA',
      ID: 11015,
    },
    {
      name: 'Number Input Box',
      description: 'Learn how to accept numbers in a text box in HTML',
      videoLink: 'NPfy-hKOGfk',
      ID: 11016,
    },
    {
      name: 'Drop-down List',
      description:
        'Learn how to add and create options in the form of a drop down list in HTML',
      videoLink: 'yWuAsqUnNsA',
      ID: 11017,
    },
    {
      name: 'Date and Number box',
      description: 'Learn how to accept dates in a text box in HTML',
      videoLink: 'H6BSr5UOg2Y',
      ID: 11018,
    },
    {
      name: 'Fieldbox and Legend Elements',
      description: 'Learn how to use the fieldbox and legend elements in HTML',
      videoLink: 'x13Uxl6_dyw',
      ID: 11019,
    },
    {
      name: 'Attributes',
      description:
        'Learn how to customize your elements using attributes in HTML',
      videoLink: 'iWWTtYGZ4YA',
      ID: 11020,
    },
    {
      name: 'The Meta Element',
      description:
        'Learn about the meta element and why it is important to your website in HTML',
      videoLink: 'sx4kaeyzQzw',
      ID: 11021,
    },
    {
      name: 'Escape Characters',
      description:
        'Learn how to format letters using escape characters in HTML',
      videoLink: 's3h5FLBon88',
      ID: 11022,
    },
    {
      name: 'Bold and Italic Elements',
      description: 'Learn how to properly style your text in HTML',
      videoLink: 'X_OROia6aPo',
      ID: 11023,
    },
    {
      name: 'iFrame Element',
      description:
        'Learn about the iFrame element in HTML and why is important',
      videoLink: '7PORMYx30xE',
      ID: 11024,
    },
    {
      name: 'Sup and Sub Elements',
      description: 'Learn about the concept of sup and sub elements in HTML',
      videoLink: 'iG703SLOJ-Q',
      ID: 11025,
    },
    {
      name: 'Title and Alt Attributes',
      description:
        'Learn how to improve your website with the image title and alt attributes',
      videoLink: 'kA5pqPA5eZE',
      ID: 11026,
    },
    {
      name: 'Audio Element',
      description: 'Learn how to add the audio element to your web page',
      videoLink: '7tWBcT83hek',
      ID: 11027,
    },
    {
      name: 'Audio Element Attributes',
      description:
        'Learn about the ways you can customize the audio element in HTML',
      videoLink: '2aenvVrYWjg',
      ID: 11028,
    },
    {
      name: 'Video Element',
      description: 'Learn how to add or embed a video in your web page in HTML',
      videoLink: 'iIgFqkDs4tY',
      ID: 11029,
    },
    {
      name: 'Doctype',
      description:
        'Learn about the Doctype tage in HTML and why you need it in your web page',
      videoLink: 'c625P4B0OY0',
      ID: 11030,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
  ],
};

const PythonGuide = {
  title: 'Python',
  cover: PythonCover,
  logo: PythonLogo,
  description:
    "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
  duration: '4.5 Hours',
  guideID: 12000,
  relatedGuides: [15000, 3000],
  sections: [
    {
      name: 'Programming with Python',
      description:
        'Get an intro to Python and how it can be used in the real world',
      videoLink: 'jFCNu1-Xdsw',
      ID: 12001,
    },
    {
      name: 'Introducing Python',
      description:
        'Get an intro to Python and how it can be used in the real world',
      videoLink: '7XOhibxgBlQ',
      ID: 12002,
    },
    {
      name: 'Getting Started',
      description: "Learn what you'll need to know to get started with Python",
      videoLink: 'CXZYvNRIAKM',
      ID: 12003,
    },
    {
      name: 'Configuring Visual Studio Code',
      description: "Set up the IDE where you'll be writing Python code",
      videoLink: 'EU8eayHWoZg',
      ID: 12004,
    },
    {
      name: 'Using Print',
      description:
        'Print statement to the console using the print statement in Python',
      videoLink: 'FhoASwgvZHk',
      ID: 12005,
    },
    {
      name: 'Demo: Hello World',
      description: 'Learn how to write a simple Hello World program in Python',
      videoLink: 'wWwr0tDSqnE',
      ID: 12006,
    },
    {
      name: 'Comments',
      description:
        'Learn how to use comments to make your code readable in Python',
      videoLink: 'kEuVvUc1Zec',
      ID: 12007,
    },
    {
      name: 'Demo: Comments',
      description:
        'Write a program using comments that is easily readable and understandable',
      videoLink: 'fbek7n6ecWM',
      ID: 12008,
    },
    {
      name: 'String Concepts',
      description: 'Learn how to create and manipulate strings in Python',
      videoLink: 'tSebLz1hNpA',
      ID: 12009,
    },
    {
      name: 'Demo: Strings',
      description:
        'Create a live program using what you just learned about Strings',
      videoLink: 'zv3cVJHCqXA',
      ID: 12010,
    },
    {
      name: 'Formatting Strings',
      description:
        'Learn how to use String Formatting in Python to print strings',
      videoLink: 'bQQqxysLIGE',
      ID: 12011,
    },
    {
      name: 'Demo: Formatting Strings',
      description: 'Write a program using String Formatting',
      videoLink: 'E850-MF22P0',
      ID: 12012,
    },
    {
      name: 'Numeric Data Types',
      description: 'Learn how to use different data types in Python',
      videoLink: '5yhn0MFLcu8',
      ID: 12013,
    },
    {
      name: 'Demo: Numbers',
      description: 'Create a program in Python using numeric data types',
      videoLink: 'T1j2tfZK7OI',
      ID: 12014,
    },
    {
      name: 'Date data types',
      description: 'Learn how to create and manipulate dates in Python',
      videoLink: 'o1dlxoHxdHU',
      ID: 12015,
    },
    {
      name: 'Demo: Dates',
      description: 'Create a program in Python using the Date data type',
      videoLink: 'Zs9u8TAv4_k',
      ID: 12016,
    },
    {
      name: 'Error Handling',
      description: 'Learn how to handle user error in Python',
      videoLink: 'HQqqNBZosn8',
      ID: 12017,
    },
    {
      name: 'Demo: Error Handling',
      description: 'Create a Python program using proper error handling',
      videoLink: 'LrRh-V-hYEc',
      ID: 12018,
    },
    {
      name: 'Conditional Logic',
      description:
        'Learn how to define and use conditional statements in Python',
      videoLink: '5pPKYWqkoek',
      ID: 12019,
    },
    {
      name: 'Demo: Conditional Logic',
      description:
        'Create a Python program with control flow using conditionals',
      videoLink: 'zqVmqtTLmgw',
      ID: 12020,
    },
    {
      name: 'Handling Multiple Conditions',
      description: 'Learn how to create multiple conditionals in Python',
      videoLink: 'oYaGJBMoXok',
      ID: 12021,
    },
    {
      name: 'Demo: Multiple Conditions',
      description:
        'Create a Python program using multiple conditional statements',
      videoLink: 'J9luo4cODzM',
      ID: 12022,
    },
    {
      name: 'Complex Conditions',
      description:
        'Learn how to define and use complex conditional statements in Python',
      videoLink: 'IBOHc87yFYw',
      ID: 12023,
    },
    {
      name: 'Demo: Complex Conditions',
      description:
        'Create a program in Python using complex conditional statements',
      videoLink: 'Iui6K2STtbA',
      ID: 12024,
    },
    {
      name: 'Collections',
      description: 'Learn about the collection data type in Python',
      videoLink: 'beA8IsY3mQs',
      ID: 12025,
    },
    {
      name: 'Demo: Collections',
      description: 'Create a Python program using the collection data type',
      videoLink: '4PaSlXNjawM',
      ID: 12026,
    },
    {
      name: 'Loops',
      description: 'Learn about iterative solutions in Python',
      videoLink: 'LrOAl8vUFHY',
      ID: 12027,
    },
    {
      name: 'Demo: Loops',
      description: 'Create a Python program using loops and iteration',
      videoLink: 'rAvD-6MpTw4',
      ID: 12028,
    },
    {
      name: 'Introducing Functions',
      description:
        'Learn how to define functions to reuse pieces of code in Python',
      videoLink: 'nrCAxXfRU28',
      ID: 12029,
    },
    {
      name: 'Demo: Functions',
      description: 'Create a Python program using functions',
      videoLink: 'C9ZEGqGHXms',
      ID: 12030,
    },
    {
      name: 'Parameterized Functions',
      description:
        'Learn how to add parameters to write complex programs in Python',
      videoLink: 'sKW-zdYZNX4',
      ID: 12031,
    },
    {
      name: 'Demo: Parameterized functions',
      description:
        'Create a program with advanced functions using parameters in Python',
      videoLink: 'LtKAXFRtxhQ',
      ID: 12032,
    },
    {
      name: 'Modules and Packages',
      description: 'Learn how to import and use packages and modules in Python',
      videoLink: 'Uei2ILcxuPs',
      ID: 12033,
    },
    {
      name: 'Virtual Environments',
      description: 'Learn about the concept of virtual environments in Python',
      videoLink: '_eczHOiFMZA',
      ID: 12034,
    },
    {
      name: 'Demo: Virtual Environment Packages',
      description: 'Create a program within a virtual environment in Python',
      videoLink: 'mzpQgMNdR0g',
      ID: 12035,
    },
    {
      name: 'Calling An API',
      description: 'Learn about APIs and how to call them using Python',
      videoLink: 'BM4S0lNUytA',
      ID: 12036,
    },
    {
      name: 'Demo: Calling An API',
      description: 'Create a program using an API in Python',
      videoLink: 'vkglhX-aoDI',
      ID: 12037,
    },
    {
      name: 'JavaScript Object Notation (JSON)',
      description: 'Learn about JSON files and their importance in Python',
      videoLink: 'KnAyziNnuI0',
      ID: 12038,
    },
    {
      name: 'Demo: JSON',
      description: 'Create a program that uses a JSON file in Python',
      videoLink: '1ty7D--lbXU',
      ID: 12039,
    },
    {
      name: 'Managing Keys',
      description: 'Learn how to manage key-value pairs in Python JSON files',
      videoLink: 'MW3eV2J65hM',
      ID: 12040,
    },
    {
      name: 'Demo: Managing Keys',
      description:
        'Create a program that deals with keys and values in Python with JSON',
      videoLink: 'XbHmiKvreLM',
      ID: 12041,
    },
    {
      name: 'Decorators',
      description: 'Learn about decorators and their use in Python',
      videoLink: '_pnZDV53Rek',
      ID: 12042,
    },
    {
      name: 'Demo: Decorators',
      description: 'Create a program using decorators in Python',
      videoLink: 'ljvCnjtnNkU',
      ID: 12043,
    },
    {
      name: 'Next Steps',
      description: "Now that you've learned Python, learn what's next",
      videoLink: '3JjVPYHihKI',
      ID: 12044,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://docs.python.org/',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
  ],
};

const MySQLGuide = {
  title: 'MySQL',
  cover: MySQLCover,
  logo: MySQLLogo,
  description:
    'MySQL is a database management system. It may be anything from a simple shopping list to a picture gallery or the vast amounts of information in a corporate network.',
  duration: '4.5 Hours',
  guideID: 13000,
  relatedGuides: [29000, 14000],
  sections: [
    {
      name: 'Introduction',
      description: 'Get an introduction of what SQL is and how you can use it',
      videoLink: 'xmwI6VB_wUM',
      ID: 13001,
    },
    {
      name: 'What is a Database?',
      description:
        'Learn what a database means and what type of database SQL is',
      videoLink: '_Q07-8e3UbI',
      ID: 13002,
    },
    {
      name: 'Tables & Keys',
      description: 'Learn about basic tables and key value pairs in SQL',
      videoLink: 'uw6lx3R6q5A',
      ID: 13003,
    },
    {
      name: 'SQL Basics',
      description:
        "Learn about basic SQL concepts and what we'll be learning in the guide",
      videoLink: 'hSv_88mDEio',
      ID: 13004,
    },
    {
      name: 'MySQL Windows Installation',
      description: 'Learn how to install and setup MySQL on a Windows device',
      videoLink: 'iPgIBRVFG14',
      ID: 13005,
    },
    {
      name: 'MySQL Mac Installation',
      description: 'Learn how to install and setup MySQL on a Mac device',
      videoLink: 'TpOMn5_YIyw',
      ID: 13006,
    },
    {
      name: 'Creating Tables',
      description:
        'Learn how to create basic tables and manipulate them in MySQL',
      videoLink: 'SPPTQwx4FfE',
      ID: 13007,
    },
    {
      name: 'Inserting Data',
      description: 'Learn how to insert and manipulate data in a MySQL table',
      videoLink: '3Qq93zqO3GE',
      ID: 13008,
    },
    {
      name: 'Constraints',
      description: 'Learn about constraints and how to handle them in MySQL',
      videoLink: '9WP35xwZ3tk',
      ID: 13009,
    },
    {
      name: 'Update & Delete',
      description:
        'Learn about update and delete operations in a MySQL database',
      videoLink: 'rT7BhXLfhds',
      ID: 13010,
    },
    {
      name: 'Basic Queries',
      description: 'Learn about basic queries and C.R.U.D operations in MySQL',
      videoLink: 'xfHqi11gjyg',
      ID: 13011,
    },
    {
      name: 'Company Database Intro',
      description:
        'Get an introduction to the company database that we will be creating',
      videoLink: 'avGCbVop_YQ',
      ID: 13012,
    },
    {
      name: 'Creating Company Database',
      description:
        'Create the company database using all the techniques we have just learned about',
      videoLink: 'LzeVPZtJglE',
      ID: 13013,
    },
    {
      name: 'More Basic Queries',
      description:
        'Get insight into more MySQL queries and operations in MySQL',
      videoLink: 'LCVK_I5OlY8',
      ID: 13014,
    },
    {
      name: 'Functions',
      description: 'Learn how to define and use functions in MySQL',
      videoLink: 'vMSbkOfHubg',
      ID: 13015,
    },
    {
      name: 'Wildcards',
      description: 'Learn about wildcards and how they are used in MySQL',
      videoLink: '_POPNI4HFsc',
      ID: 13016,
    },
    {
      name: 'Union',
      description:
        'Learn about the Union operation and how to use it to manipulate a MySQL database',
      videoLink: 'OLDJuELLFsA',
      ID: 13017,
    },
    {
      name: 'Joins',
      description:
        'Learn about the Join operation and how to use it to manipulate a MySQL database',
      videoLink: 'efpFCd8iFAQ',
      ID: 13018,
    },
    {
      name: 'Nested Queries',
      description:
        'Learn how to create complex operations and database manipulations by nesting queries',
      videoLink: 'lBpSMeQjNqQ',
      ID: 13019,
    },
    {
      name: 'On Delete',
      description:
        'Learn about the On Delete function and how to use it in MySQL',
      videoLink: 'p_cQqNTuTdw',
      ID: 13020,
    },
    {
      name: 'Triggers',
      description: 'Learn about trigger functions and how to use them in MySQL',
      videoLink: 'gpthfJnvzY8',
      ID: 13021,
    },
    {
      name: 'ER Diagrams Intro',
      description:
        'Get an introduction into the ER Diagram, a new way to design your database',
      videoLink: 'Ql0w3x6gGI4',
      ID: 13022,
    },
    {
      name: 'Designing an ER Diagram',
      description: 'Learn how to design and use an ER Diagram in MySQL',
      videoLink: '8JFaaD1vzSY',
      ID: 13023,
    },
    {
      name: 'Converting ER Diagrams to Schemas',
      description: 'Learn how to convert an ER Diagram to a Schema in MySQL',
      videoLink: 'xQRRf5fOAt8',
      ID: 13024,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://dev.mysql.com/doc/',
    },
  ],
};

const PHPGuide = {
  title: 'PHP',
  cover: PHPCover,
  logo: PHPLogo,
  description:
    'PHP (recursive acronym for PHP: Hypertext Preprocessor ) is a widely-used open source general-purpose scripting language that is especially suited for web development.',
  duration: '6 Hours',
  guideID: 14000,
  relatedGuides: [13000, 2000],
  sections: [
    {
      name: 'Why Learn PHP?',
      description: 'Understand what PHP is and why it is important to learn',
      videoLink: 'pWG7ajC_OVo',
      ID: 14001,
    },
    {
      name: 'Installing PHP',
      description: 'Learn how to install PHP on your device',
      videoLink: '3B-CnezwEeo',
      ID: 14002,
    },
    {
      name: 'Your First PHP File',
      description: 'Create your first PHP file',
      videoLink: 'ABcXbZLm5G8',
      ID: 14003,
    },
    {
      name: 'Variables & Constants',
      description: 'Learn about variables and constants in PHP',
      videoLink: '2CXme275t9k',
      ID: 14004,
    },
    {
      name: 'Strings',
      description: 'Learn how to use and manipulate strings in PHP',
      videoLink: 'U2EliFC9NrQ',
      ID: 14005,
    },
    {
      name: 'Numbers',
      description: 'Learn how to use and manipulate numbers in PHP',
      videoLink: 'lT2AvQ17F_w',
      ID: 14006,
    },
    {
      name: 'Arrays',
      description: 'Learn about the array data type in PHP and how to use it',
      videoLink: 'bWygRxrlD44',
      ID: 14007,
    },
    {
      name: 'Multidimensional Arrays',
      description:
        'Learn about multidimensional arrays and their use cases in PHP',
      videoLink: 'G1iDSoAXyvM',
      ID: 14008,
    },
    {
      name: 'Loops',
      description: 'Learn about iteration and different loops in PHP',
      videoLink: 'TBUgZ84tTgU',
      ID: 14009,
    },
    {
      name: 'Booleans & Comparisons',
      description: 'Learn about booleans and logical operators in PHP',
      videoLink: 'hxYQA-nuIXY',
      ID: 14010,
    },
    {
      name: 'Conditional Statements',
      description: 'Learn about condiitonals and control flow in PHP',
      videoLink: 'E1ms4qpfy78',
      ID: 14011,
    },
    {
      name: 'Continue & Break',
      description: 'Learn about the continue and break keywords in PHP',
      videoLink: 'sEq6riJ0Do8',
      ID: 14012,
    },
    {
      name: 'Functions',
      description:
        'Learn how to define and use functions to reuse functions in PHP',
      videoLink: '438PsnpJj5E',
      ID: 14013,
    },
    {
      name: 'Variable Scope',
      description:
        'Learn about the concept of variable scope and how to use it to your advantage in PHP',
      videoLink: 'YCw3z-yEiwQ',
      ID: 14014,
    },
    {
      name: 'Include & Require',
      description: 'Learn about the include and require keywords in PHP',
      videoLink: 'Tf6erFtmN-Q',
      ID: 14015,
    },
    {
      name: 'Project Header & Footer',
      description:
        'Learn about project headers and footers and their important in PHP',
      videoLink: '-KUFcX7WLaA',
      ID: 14016,
    },
    {
      name: 'Forms in PHP',
      description: 'Learn how to create and use forms in PHP',
      videoLink: 'Ucq4BA-gMO0',
      ID: 14017,
    },
    {
      name: 'XSS Attacks',
      description:
        'Learn about the concept of XSS Attacks and why you should care about them in PHP',
      videoLink: 'EhOcAZJp81s',
      ID: 14018,
    },
    {
      name: 'Basic Form Validation',
      description: 'Learn about form validation basics in PHP',
      videoLink: 'g7x4JO0YW1s',
      ID: 14019,
    },
    {
      name: 'Filters & More Validation',
      description: 'Learn how to leverage form filters and validation in PHP',
      videoLink: 'wFiCZHrCFOw',
      ID: 14020,
    },
    {
      name: 'Showing Errors',
      description: 'Learn how to show errors in PHP',
      videoLink: 'firSTs1bEEY',
      ID: 14021,
    },
    {
      name: 'Checking for Errors & Redirecting',
      description: 'Learn about checking for errors and redirects in PHP',
      videoLink: 'GS2sUveQpU4',
      ID: 14022,
    },
    {
      name: 'MySQL Introduction',
      description: 'Learn about MySQL basics and how it related to PHP',
      videoLink: 'N2L9KZo2szY',
      ID: 14023,
    },
    {
      name: 'Setting Up a MySQL Database',
      description:
        'Learn how to set up a basic MySQL database to use it with PHP',
      videoLink: 'YFlIw4KMpVM',
      ID: 14024,
    },
    {
      name: 'Connecting to a Database',
      description: 'Learn how to connect your PHP code with a MySQL database',
      videoLink: 'zpTlJ6dtOxA',
      ID: 14025,
    },
    {
      name: 'Getting Data From a Database',
      description:
        'Learn how to get and fetch data from a MySQL database using PHP',
      videoLink: 'WGuyxGJW9hs',
      ID: 14026,
    },
    {
      name: 'Rendering Data to the Browser',
      description:
        'Learn how to render data from a MySQL database into a web browser using PHP',
      videoLink: '3T8bp9DlypU',
      ID: 14027,
    },
    {
      name: 'The Explode Function',
      description: 'Learn about the Explode Function and how to use it',
      videoLink: 'wT5CVoOdLlE',
      ID: 14028,
    },
    {
      name: 'Control Flow Alt Syntax',
      description:
        'Learn about a different syntax to manage control flow in PHP',
      videoLink: '1Py5GjnnreE',
      ID: 14029,
    },
    {
      name: 'Saving Data to the Database',
      description: 'Learn how to save data to a MySQL database using PHP',
      videoLink: 'ijHc_3t2arE',
      ID: 14030,
    },
    {
      name: 'Getting a Single Record',
      description: 'Learn how to retrieve an individual record with PHP',
      videoLink: 'G8OYy-y3C9A',
      ID: 14031,
    },
    {
      name: 'Deleting a Record',
      description: 'Learn how to delete a record using PHP',
      videoLink: '3lpPfEdU-8A',
      ID: 14032,
    },
    {
      name: 'Finishing Touches',
      description: 'Get a summary and conclusion to MySQL with PHP',
      videoLink: 'vkH5WZ-4ngU',
      ID: 14033,
    },
    {
      name: 'Ternary Operators',
      description: 'Learn how to use more powerful logical conditionals in PHP',
      videoLink: 'L-S0rsFR-gQ',
      ID: 14034,
    },
    {
      name: 'Superglobals',
      description:
        'Learn about superglobals and how to use them in your PHP code',
      videoLink: 'sMhSKNAHXZ8',
      ID: 14035,
    },
    {
      name: 'Sessions',
      description:
        'Learn about the concept of a session and how to handle individual PHP sessions',
      videoLink: '6ZDTUZ1KRUI',
      ID: 14036,
    },
    {
      name: 'Null Coalescing',
      description: 'Lean about the null datatype and how to handle it',
      videoLink: '8Bsvrm4gHGs',
      ID: 14037,
    },
    {
      name: 'Cookies',
      description:
        'Learn about cookies in browsers and how to handle them in PHP',
      videoLink: 'GNGf-I5pNrI',
      ID: 14038,
    },
    {
      name: 'File System 1',
      description: 'Learn about File Systems in PHP and how to handle files',
      videoLink: 'yUzcYBuSgc4',
      ID: 14039,
    },
    {
      name: 'File System 2',
      description:
        'Get a deeper look into file systems in PHP and how to handle them',
      videoLink: 'UT9zKFYr18U',
      ID: 14040,
    },
    {
      name: 'Classes & Objects 1',
      description:
        'Get a high level introduction to Object Oriented Programming with PHP',
      videoLink: 'bt4znmLQCZ8',
      ID: 14041,
    },
    {
      name: 'Classes & Objects 2',
      description: 'Go deeper into Object Oriented Programming with PHP',
      videoLink: 'BUdGWoMMPQs',
      ID: 14042,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://www.php.net/docs.php',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
  ],
};

const MachineLearningGuide = {
  title: 'Machine Learning',
  cover: MachineLearningCover,
  logo: MachineLearningLogo,
  description:
    'Machine learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence.',
  duration: '6 Hours',
  guideID: 15000,
  relatedGuides: [12000, 3000],
  sections: [
    {
      name: 'What is Machine Learning?',
      description:
        'Got lots of data? Machine learning can help! In this episode of Cloud AI Adventures, Yufeng Guo explains machine learning from the ground up, using concrete examples.',
      videoLink: 'HcqpanDadyQ',
      ID: 15001,
    },
    {
      name: 'The 7 Steps of Machine Learning',
      description:
        'How can we tell if a drink is beer or wine? Machine learning, of course! In this episode of Cloud AI Adventures, Yufeng walks through the 7 steps involved in applied machine learning. ',
      videoLink: 'nKW8Ndu7Mjw',
      ID: 15002,
    },
    {
      name: 'Plain and Simple Estimators',
      description:
        "In this episode of AI Adventures, it's time to write some TensorFlow code! We'll build a linear model to recognize different kinds of flowers using a canned estimator.",
      videoLink: 'G7oolm0jU8I',
      ID: 15003,
    },
    {
      name: 'Serverless Predictions at Scale',
      description:
        'In this episode of AI Adventures, Yufeng explains how to scale your machine learning using the cloud, no ops work required!',
      videoLink: '_JCMN8-yhBM',
      ID: 15004,
    },
    {
      name: 'Visualizing Your Model Using TensorBoard',
      description:
        'In this episode of AI Adventures, Yufeng takes us on a tour of TensorBoard, the visualizer built into TensorFlow, to visualize and help debug models. ',
      videoLink: 'qEQ-_EId-D0',
      ID: 15005,
    },
    {
      name: 'Estimators Revisited: Deep Neural Networks',
      description:
        'In this episode of AI Adventures, Yufeng explains how to build models for more complex datasets, using TensorFlow to build deep neural networks!',
      videoLink: 's0JvhHr3r8k',
      ID: 15006,
    },
    {
      name: 'Big Data for Training Models in the Cloud',
      description:
        'What do you do when your data is too big to fit on your machine? In this episode of Cloud AI Adventures, Yufeng walks through some of the options and rationale for putting your big data in the cloud. ',
      videoLink: 'MNh5Qq0dekQ',
      ID: 15007,
    },
    {
      name: 'Natural Language Generation at Google Research',
      description:
        'In this episode of AI Adventures, Yufeng interviews Google Research engineer Justin Zhao to talk about natural text generation, recurrent neural networks, and state of the art research!',
      videoLink: 'MNvT5JekDpg',
      ID: 15008,
    },
    {
      name: 'Distributed Training in the Cloud',
      description:
        'Training machine learning models at scale has never been simpler. By leveraging in the cloud machine learning engine, we can quickly and easily train TensorFlow models without worrying about configuring servers installing drivers and libraries. ',
      videoLink: 'J_d4bEKUG2Q',
      ID: 15009,
    },
    {
      name: 'Machine Learning Meets Fashion',
      description:
        'In this episode of AI Adventures, Yufeng showcases many of the machine learning tools introduced so far by working through an end-to-end example with a fashionable dataset.',
      videoLink: 'RJudqel8DVA',
      ID: 15010,
    },
    {
      name: 'Wrangling Data with Pandas',
      description:
        'In this episode of AI Adventures, Yufeng explores the fascinating world of pandas, an open-source python library that provides easy to use, high-performance data structures and data analysis tools.',
      videoLink: 'XDAnFZqJDvI',
      ID: 15011,
    },
    {
      name: 'Introduction to Kaggle Kernels',
      description:
        'In this episode of AI Adventures, Yufeng explains how to use Kaggle Kernels to do data science in your browser without any downloads!',
      videoLink: 'FloMHMOU5Bs',
      ID: 15012,
    },
    {
      name: 'Jupyter Tips and Tricks',
      description:
        'In this episode of AI Adventures, Yufeng journeys to Jupyter to bring back some tips and tricks for your data science workflow!',
      videoLink: '2eCHD6f_phE',
      ID: 15013,
    },
    {
      name: 'Which Python Package Manager Should You Use?',
      description:
        'In this episode of AI Adventures, Yufeng discusses some of the options available when it comes to managing your Python environment for machine learning and data science, and helps you make an informed decision based on your needs.',
      videoLink: '3J02sec99RM',
      ID: 15014,
    },
    {
      name: 'Datalab: Notebook in the Cloud',
      description:
        'In this episode of AI Adventures, Yufeng explains how to use Cloud Datalab to use a notebook in the cloud to do data science on large datasets!',
      videoLink: 'Eu57QKNHaiY',
      ID: 15015,
    },
    {
      name: 'Print Statements in TensorFlow',
      description:
        'In this episode of AI Adventures, Yufeng explains how to properly use print statements in your TensorFlow graph.',
      videoLink: 'pCJEMfujekA',
      ID: 15016,
    },
    {
      name: 'TensorFlow Object Detection on IOS',
      description:
        "In this interview of AI Adventures, Yufeng interviews Developer Advocate Sara Robinson to talk about a custom object detection iOS app she built to detect Taylor Swift. We'll cover everything from training a model with transfer learning, to serving the model in the cloud, to making prediction requests to the model from an iOS device (in Swift!).",
      videoLink: '0uXMgLIlXoE',
      ID: 15017,
    },
    {
      name: 'Visualize Your Data with Facets',
      description:
        'In this episode of AI Adventures, Yufeng explains how to use Facets, a project from Google Research, to visualize your dataset, find interesting relationships, and clean your data for machine learning.',
      videoLink: 'WVclIFyCCOo',
      ID: 15018,
    },
    {
      name: 'Quick Draw: The Biggest Doodle Dataset',
      description:
        'In this episode of AI Adventures, Yufeng explores the massive "Quick, Draw!" dataset, a collection of over 1 billion doodles, drawn by users all over the world!',
      videoLink: '8DEjphIfeYw',
      ID: 15019,
    },
    {
      name: 'AI Adventures: Art, Science, and Tools of Machine Learning',
      description: `Looking to get more insights from your data, but don't know where to begin? Dive into machine learning and the discovery journey of applying it to your datasets with this session based on the YouTube series "AI Adventures".`,
      videoLink: 't3Uuk8edSzs',
      ID: 15020,
    },
    {
      name: 'BigQuery and Open Datasets',
      description:
        'We all love data. But it can be hard to make practical use of large datasets. In this episode of AI Adventures, Yufeng Guo introduces BigQuery public datasets, which allow you to query huge datasets with great responsiveness without needing to worry about the storage costs. Time to break out your big data toolbox, because these queries are going to be big!',
      videoLink: '_cj2pA3p51I',
      ID: 15021,
    },
    {
      name: 'How to Make a Data Science Project with Kaggle',
      description:
        'It can take a lot of tools to do data science, but Kaggle is a one-stop shop that provides all the tools to share and collaborate on data science projects. In the episode of AI Adventures, Yufeng is joined by Megan Risdal, product lead for datasets at Kaggle. They’ll teach you how to make a data science project with Kaggle, and more!',
      videoLink: 'm2DfpM6MyB8',
      ID: 15022,
    },
    {
      name: 'AutoML Vision 1',
      description:
        'In this episode of AI Adventures, Yufeng Guo uses AutoML Vision to build and employ a machine learning model that recognizes different types of….chairs! In part 1, he’ll walk you through gathering the data and creating a csv file that describes the location and label for all the images in the dataset. Don’t miss part 2 to see how the model performs!',
      videoLink: 'kgxfdTh9lz0',
      ID: 15023,
    },
    {
      name: 'AutoML Vision 2',
      description:
        'In part one of the AI Adventures intro to AutoML Vision, Yufeng talked about what AutoML Vision is used for and showed how to gather and prepare our training data. Stick around for part two where he shows how to use the data to train our model! ',
      videoLink: 'aUfIFoMEIgg',
      ID: 15024,
    },
    {
      name: 'Learning Scikit-Learn',
      description:
        "Scikit-learn is a well-documented and well-loved Python machine learning library. The library is maintained and reliable, offering a vast collection of machine learning algorithms for you to incorporate into your projects. If you haven't tried scikit-learn, you definitely should! ",
      videoLink: 'rvVkVsG49uU',
      ID: 15025,
    },
    {
      name: 'Serving Scikit-Learn Models at Scale',
      description:
        'Scikit-learn is a great tool for building your models. When it comes time to deploy them to prediction, scale up using Google Cloud ML Engine. In this episode of AI Adventures, Yufeng shows you how to set up your own deployment pipeline with scikit-learn so you can go back to focusing on tuning your model!',
      videoLink: 'MaKLWy5zXe8',
      ID: 15026,
    },
    {
      name: 'Getting Started with Keras',
      description:
        'Getting started with Keras has never been easier! Not only is it built into TensorFlow, but when you combine it with Kaggle Kernels you don’t have to install anything! Plus you get to take advantage of the resources from the Kaggle community. In this episode of AI Adventures, Yufeng shows you how to get started with Keras. Take a look! ',
      videoLink: 'J6Ok8p463C4',
      ID: 15027,
    },
    {
      name: 'Scaling Up Keras with Estimators',
      description:
        'When you convert a Keras model to a TensorFlow Estimator, you get the best of both worlds: easy to read Keras model syntax along with distributed training with TensorFlow. In this episode of AI Adventures, Yufeng shows you how to scale up a Keras model with estimators so that it can run larger datasets or across many machines. Plus, it makes it easy to do model serving once the training is complete! ',
      videoLink: 'YCXFceVKHTk',
      ID: 15028,
    },
    {
      name: 'Getting Started with TensorFlow.Js',
      description:
        'TensorFlow.js is an ecosystem of JavaScript based tools for training and deploying machine learning models. In this episode of AI Adventures, learn all about getting started with Tensorflow.js through tutorials like training a convolutional neural network in your browser and building a Pac-Man game that’s played with data from your webcam! This is only a beginning… stay tuned for deep dives on TensorFlow.js coming soon!',
      videoLink: 'WYvgP9LfvTg',
      ID: 15029,
    },
    {
      name: 'How to Import a Keras Model Into TensorFlow.Js',
      description:
        'How can we get a Keras model to run on TensorFlow.js? One of the best things about TensorFlow.js is that it has the ability to collaborate across a range of platforms, languages, and devices. In this episode of AI Adventures, Yufeng shows you how to import a Keras model into TensorFlow.js. ',
      videoLink: 'f8ed_xAjkOg',
      ID: 15030,
    },
    {
      name: 'Deep Learning VM Images',
      description:
        'Imagine if you could avoid the headache of setting up new libraries, configuring them, and making sure they are all compatible. In this episode of AI Adventures, Yufeng shows you how to take advantage of deep learning VM images on Google Compute Engine to make setting up new environments a piece of cake. ',
      videoLink: 'kyNbYCHFCSw',
      ID: 15031,
    },
    {
      name: 'Using TensorFlow Hub for More Productive Machine Learning',
      description:
        'Libraries and a repository of shared code dramatically boost efficiency as well as innovation. If you lack the resources, do not want to start from scratch, or is searching for collaboration, TensorFlow Hub is a great place to start. In this episode, Yufeng will go over what TF Hub is and the different ways it can be used. ',
      videoLink: 'SJ1LGUyw-Xg',
      ID: 15032,
    },
    {
      name: 'TensorFlow Eager Mode',
      description:
        'TensorFlow graph is an amazing tool that represent your computation in terms of the dependencies between individual operations. However, it can be overwhelming to grasp if you are just starting out. How can we keep the pride and performance without the frustration? Watch the video to find out!',
      videoLink: 'qTYQEXsBb_E',
      ID: 15033,
    },
    {
      name: 'Jupyter on the Web with Colab',
      description:
        "In this episode of AI Adventures, Yufeng introduces Colab, which allows you to not only execute Jupyter Notebooks on the web, but also offers a free GPU, excellent collaboration features, built-in code snippets, and much much more. It's great for learners and researchers alike, and comes with all the things you love about being part of Google Drive!",
      videoLink: 'yEIc9z-Ad3k',
      ID: 15034,
    },
    {
      name: 'How to Upgrade Colab with More Compute',
      description:
        'In this episode of AI Adventures, Yufeng introduces how you can use Deep Learning VMs on Google Cloud Platform to seriously boost your data science processing power, and access it all through Colab.',
      videoLink: 'U5HyNzf_ips',
      ID: 15035,
    },
    {
      name: 'Kubeflow: Machine Learning on Kubernetes',
      description:
        'In this episode of AI Adventures, Yufeng introduces Kubeflow, an open-source project that is meant to help make running machine learning training and prediction on Kubernetes clusters easier.',
      videoLink: 'HBxyLnEzyhw',
      ID: 15036,
    },
    {
      name: 'BigQuery ML: Machine Learning with Standard SQL',
      description:
        'In this episode of AI Adventures, Yufeng introduces BigQuery ML, which allows you to build machine learning models right within BigQuery, using SQL! That means no more copying big tables of data around, and more chances to find insights to your dataset!',
      videoLink: '6Kska20zQO4',
      ID: 15037,
    },
    {
      name: 'PyTorch on GCP',
      description:
        'In this episode of AI Adventures, Yufeng introduces all the ways you can run PyTorch on GCP, from Colab and Kaggle, to Deep Learning VMs.',
      videoLink: 'x2P-Wsqtfi8',
      ID: 15038,
    },
    {
      name: 'AutoML Tables (AI Adventures)',
      description:
        'In this episode of AI Adventures, Yufeng introduces AutoML Tables, a tool to automatically build and deploy state-of-the-art machine learning models on structured data. It automates modeling on a wide range of data types, including numbers, classes, strings, timestamps, lists, and nested fields.  ',
      videoLink: 'tWbiOuHae0c',
      ID: 15039,
    },
    {
      name: 'TensorFlow Privacy',
      description:
        'In this episode of AI Adventures, Yufeng introduces TensorFlow Privacy, a tool that turns the science and math behind differential privacy into a tool that you can use.',
      videoLink: 'fCxp_lHo5ek',
      ID: 15040,
    },
    {
      name: 'Visualizing Convolutional Neural Networks Using Lucid',
      description:
        'In this episode of AI Adventures, Yufeng introduces Lucid, a tool for a collection of infrastructure and tools for research in neural network interpretability. Learn about feature activations and how they can be used to better understand what different parts of a convolutional neural network is looking for! ',
      videoLink: 'b27hzEs8YWw',
      ID: 15041,
    },
    {
      name:
        'Understanding Image Models and Predictions Using an Activation Atlas',
      description:
        'In this episode of AI Adventures, Yufeng takes the idea of feature activations in convolutional neural networks even further, by applying them to entire images to create "activation grids", and uses them to produce an Activation Atlas.',
      videoLink: '76jZkqlGIMY',
      ID: 15042,
    },
    {
      name: 'Getting Started with Natural Language Processing: Bag of Words',
      description:
        "In this episode of AI Adventures, Yufeng introduces how to use Keras to implement 'bag of words', to get you started on your natural language processing journey!",
      videoLink: 'UFtXy0KRxVI',
      ID: 15043,
    },
    {
      name: 'Using AutoML Natural Language for Custom Text Classification',
      description:
        'In this episode of AI Adventures, Yufeng introduces how to use AutoML Natural Language to perform custom text classification using data from Stack Overflow questions! Using machine learning to classify machine learning questions, what could go wrong?',
      videoLink: 'ieaqfU1BwJ8',
      ID: 15044,
    },
    {
      name: 'Tensor Processing Units: History and Hardware',
      description:
        'In this episode of AI Adventures, Yufeng Guo goes through the logistics and history of TPU’s (Tensor Processing Units) and how they differ from CPU’s and GPU’s.',
      videoLink: 'MXxN4fv01c8',
      ID: 15045,
    },
    {
      name: 'Diving Into the TPU V2 and V3',
      description:
        'In this episode of AI Adventures, Yufeng Guo introduces the TPU v2 and v3. Specifically, he goes over their architecture, how they work, and how Google Developers can get their hands on these TPUs. ',
      videoLink: 'kBjYK3K3P6M',
      ID: 15046,
    },
    {
      name: 'AI Platform Training with Built-In Algorithms',
      description:
        'In this episode, Yufeng Guo speaks to how you can use Google Cloud AI Platform Built-in Algorithms to train and deploy machine learning models without writing any training code. ',
      videoLink: 'IrPXm0DSCWI',
      ID: 15047,
    },
    {
      name: 'Training Models with Custom Containers on Cloud AI Platform',
      description:
        'In this episode of AI Adventures, Yufeng Guo uses AI Platform Custom Containers to show you how to run custom training jobs on Google Cloud using Docker containers. Specifically, he speaks to the key benefits of using custom containers such as - faster start-up time, ability to use any ML framework, and capacity to use any version of your choice. ',
      videoLink: 'h_BpDOdTX7Y',
      ID: 15048,
    },
    {
      name: 'Using the What-If Tool for Explainability',
      description:
        'In this episode of AI Adventures, Yufeng Guo speaks to how you can inspect your machine learning models via the new What-If tool. Specifically, he speaks to the different features that are integrated into the What-If tool - such as the Facets Dive tool, Performance & Fairness tab, and the Facets Overview tool - that allows users to create predictions for new edit values, check overall model performance, and look at the distribution of data points within their models. ',
      videoLink: 'jHojeFCc5HE',
      ID: 15049,
    },
    {
      name: 'Intro to Explanations for AI Platform',
      description:
        'In this episode of AI Adventures, we’ll show you how to use Cloud’s AI Prediction service, and how it helps you understand your model’s outputs by recognizing bias and discrepancies via AI Explanations. Yufeng also speaks to the different use cases for the two methods of feature attribution within AI Explanations - sampled shapely and integrated gradients - and what models are best suited for these attributions. ',
      videoLink: 'XXvFHqLv9p8',
      ID: 15050,
    },
    {
      name: 'Cloud AI Data Labeling Service',
      description:
        'Collecting data for training your ML models is one thing. Labeling that data is another. In this episode of AI Adventures, Yufeng Guo explains the Cloud AI Platform data labeling service, how to use it, and how it helps with labeling structured and unstructured data alike. ',
      videoLink: 'o7mcVV0igLw',
      ID: 15051,
    },
    {
      name: 'Introduction to JAX',
      description:
        'JAX is an open-source Python library that brings together Autograd and XLA, facilitating high-performance machine learning research. In this episode of AI Adventures, Yufeng Guo talks about how you can use JAX to compile and run your NumPy programs on GPUs and TPUs, and its ability to support composable function transformations. ',
      videoLink: '0mVmRHMaOJ4',
      ID: 15052,
    },
    {
      name: 'Setting Up AI Platform Pipelines',
      description:
        'AI Platform Pipelines are an excellent way to improve the reliability and reproducibility of your data science and machine learning workflows. In this episode, Yufeng demonstrates how to set up AI Platform Pipelines to address your MLOps needs. ',
      videoLink: 'MUtsIaQuiRw',
      ID: 15053,
    },
    {
      name: 'AI Platform Optimizer',
      description:
        'Wanting to tune your hyperparameters on your machine learning model? In this episode of AI Adventures, Yufeng Guo showcases one of Google’s newest AI products - the AI Platform Optimizer - and how you can use it to tune any evaluable system in your ML model. Watch to learn how you can utilize the AI Platform Optimizer to suggest trials to optimize your ML models.  ',
      videoLink: 'b0MizT6Vatw',
      ID: 15054,
    },
    {
      name: 'Persistent Disk for Productive Data Science',
      description:
        'Looking to upgrade your storage options for your ML workloads? In this episode of AI Adventures, Yufeng Guo showcases the different storage options from Google Cloud - such as Google Cloud Storage and Persistent Disks - and walks you through the different use cases for these tools. What storage option will best fit your ML project? ',
      videoLink: '4T1cYGFjUEk',
      ID: 15055,
    },
  ],
  additionalResources: [
    {
      title: 'Python Documentation',
      link: 'https://docs.python.org/',
    },
    {
      title: 'Tensorflow Documentation',
      link: 'https://www.tensorflow.org/api_docs',
    },
    {
      title: 'SciKit-Learn Documentation',
      link: 'https://scikit-learn.org/0.21/documentation.html',
    },
  ],
};

const KotlinGuide = {
  title: 'Kotlin',
  cover: KotlinCover,
  logo: KotlinLogo,
  duration: '5 Hours',
  description:
    'Kotlin is an open-source statically typed programming language that targets the JVM, Android, JavaScript and Native. It was developed by JetBrains.',
  guideID: 16000,
  relatedGuides: [3000, 17000],
  sections: [
    {
      name: 'Welcome',
      description:
        "Get an introduction to what we'll be discussing in this guide",
      videoLink: 'Org0vh-VSgA',
      ID: 16001,
    },
    {
      name: 'Introduction',
      description: 'Get an introduction to what Kotlin is and what is used for',
      videoLink: '0isrdp5meyQ',
      ID: 16002,
    },
    {
      name: 'Hello World',
      description: 'Learn how to code a simple program in Kotlin',
      videoLink: '3C-e4dTvrSI',
      ID: 16003,
    },
    {
      name: 'Android Studio',
      description: 'Learn about Android Studio and how it relates to Kotlin',
      videoLink: 'glX5Yx63_Vs',
      ID: 16004,
    },
    {
      name: 'Classes & Objects',
      description: 'Learn how to declare classes and objects in Kotlin',
      videoLink: 'NpveMP5869U',
      ID: 16005,
    },
    {
      name: 'Var & Val',
      description:
        'Learn the different types of variables and how to use them in Kotlin',
      videoLink: '4YF_DUMQqFA',
      ID: 16006,
    },
    {
      name: 'Kotlin Java Together',
      description:
        'Learn how to combine Java and Kotlin code to write powerful programs',
      videoLink: 'e-gZc-mZqE8',
      ID: 16007,
    },
    {
      name: 'Convert Java to Kotlin',
      description: 'Learn how to convert existing Java code to Kotlin',
      videoLink: 'YuRjPUxvcek',
      ID: 16008,
    },
    {
      name: 'Decompile Bytecode',
      description: 'Learn how Bytecode Decompiling and when you should use it',
      videoLink: '8TW9zbgQnKc',
      ID: 16009,
    },
    {
      name: 'Operators',
      description:
        'Learn about operators in Kotlin and how to use them to perform math',
      videoLink: 'q_XZWtP6KQg',
      ID: 16010,
    },
    {
      name: 'String Template',
      description: 'Learn how to deal with the String datatype in Kotlin',
      videoLink: '9XmGh4WgfSg',
      ID: 16012,
    },
    {
      name: 'If Else Expression',
      description:
        'Learn how to use conditional statements in Kotlin to manage control flow',
      videoLink: 'qaqKps5mNts',
      ID: 16013,
    },
    {
      name: 'String Comparison',
      description: 'Learn basic operations to compare strings in Kotlin',
      videoLink: 'Fh4chRUL5kE',
      ID: 16014,
    },
    {
      name: 'Null Handling',
      description: 'Learn how to handle the null data type in Kotlin',
      videoLink: 'AWM5cAipEp0',
      ID: 16015,
    },
    {
      name: 'When Expression',
      description:
        'Learn about the When expression in Kotlin and times where you should use it',
      videoLink: 'TrUGG0nENMo',
      ID: 16016,
    },
    {
      name: 'Loops and Range',
      description:
        'Learn how to iterate in Kotlin by using different types of loops combined with Range',
      videoLink: 'bDmXJLV-HmA',
      ID: 16017,
    },
    {
      name: 'List and Map',
      description:
        'Learn about the List and the Map data types in Kotlin and how to manipulate them',
      videoLink: 'FUqD6srpuPY',
      ID: 16018,
    },
    {
      name: 'Function Expression',
      description:
        'Learn about functions in Kotlin and how you can use them to reuse code',
      videoLink: 'XOIC-aHyOag',
      ID: 16019,
    },
    {
      name: 'Calling Java Functions',
      description: 'Learn how to call existing Java functions from Kotlin',
      videoLink: 'n0fdpvOdIbo',
      ID: 16020,
    },
    {
      name: 'Default and Named Parameters',
      description:
        'Learn about default and named parameters in Kotlin and how you can use them to define powerful functions',
      videoLink: 'fr1K_0duf78',
      ID: 16021,
    },
    {
      name: 'String to Integer',
      description:
        'Learn how to convert Strings to Integers and what benefit you get from doing that',
      videoLink: '4tlsFbNLrl8',
      ID: 16022,
    },
    {
      name: 'Try Expression',
      description:
        'Learn about the Try Expression and how you can use it to handle errors in Kotlin',
      videoLink: 'RMe0v0JRuio',
      ID: 16023,
    },
    {
      name: 'Extension Function',
      description:
        'Learn about the concept of extension functions and when to use them',
      videoLink: 'JzaKJNt4eXk',
      ID: 16024,
    },
    {
      name: 'Infix and Operator Overloading',
      description:
        'Learn how you can use operator overloading to define complex booleans and conditionals',
      videoLink: 'vqY58JbLr-U',
      ID: 16025,
    },
    {
      name: 'Recursion 1',
      description: 'Learn about Recursive techniques to solve problems',
      videoLink: 'd39zxt6NWNk',
      ID: 16026,
    },
    {
      name: 'Recursion 2',
      description:
        'See an example where you can solve a problem using recursion',
      videoLink: 'aKYKYOQYjI0',
      ID: 16027,
    },
    {
      name: 'Recursion 3',
      description:
        'Implement recursive techniques to solve different sets of problems',
      videoLink: '5rFOLyxjmOg',
      ID: 16028,
    },
    {
      name: 'Constructor',
      description:
        'Learn about constructors and how they apply to object oriented programming in Kotlin',
      videoLink: '6RIJrnZI7jk',
      ID: 16029,
    },
    {
      name: 'Secondary Constructor',
      description:
        'Learn how you can define multiple constructors to create complex objects',
      videoLink: 'HZLr7XDW7ak',
      ID: 16030,
    },
    {
      name: 'Inheritance',
      description:
        'Learn aboutt subclasses and superclasses while discussing inheritance',
      videoLink: 'ssAt_qrQpi0',
      ID: 16031,
    },
    {
      name: 'Constructor in Inheritance',
      description:
        'Learn how constructors and inheritance can go hand in hand to define complex classes',
      videoLink: 'XR3XueD8_yM',
      ID: 16032,
    },
    {
      name: 'Abstract Class',
      description:
        'Learn about the benefits and use cases of defining an abstract class',
      videoLink: 'kvpvem7BLq0',
      ID: 16033,
    },
    {
      name: 'Interface',
      description:
        'Learn how to implement interfaces and when you should define them',
      videoLink: 'jpp6yAEPB0Y',
      ID: 16034,
    },
    {
      name: 'Data Class',
      description: 'Get an example of a class definition in Kotlin',
      videoLink: 'dV5P8JVfiIc',
      ID: 16035,
    },
    {
      name: 'Object Keyword',
      description: 'Learn about the object keyword and its usage in Kotlin',
      videoLink: 'kH4pSAFSheU',
      ID: 16036,
    },
    {
      name: 'Anonymous Inner Class',
      description:
        'Learn how to define Anonymous Inner Classes to create even more powerful classes',
      videoLink: 'o1bty2jSHpg',
      ID: 16037,
    },
    {
      name: 'Companion Object 1',
      description: 'Get an example of an object instantiation in Kotlin',
      videoLink: 'Xiqfy0OpZnc',
      ID: 16038,
    },
    {
      name: 'Companion Object 2',
      description: 'Get an example of an object instantiation in Kotlin',
      videoLink: 'HTGj9ZxfiSA',
      ID: 16039,
    },
    {
      name: 'Backtick As Escape Character',
      description: 'Learn about string formatting and manipulation in Kotlin',
      videoLink: 'akiCZOVkQ_w',
      ID: 16040,
    },
    {
      name: 'User Input in Kotlin',
      description: 'Learn how to accept input from users in Kotlin',
      videoLink: 'UTEYWN64m-s',
      ID: 16041,
    },
    {
      name: 'Array',
      description:
        'Learn more about the array data type and how to use it in Kotlin',
      videoLink: 'Mq4AbdNsFVw',
      ID: 16042,
    },
    {
      name: 'List',
      description: 'Learn more about Lists in Kotlin and how to use them',
      videoLink: 'N53A_bdbBXE',
      ID: 16043,
    },
    {
      name: 'List of Objects',
      description:
        'Create a list of objects and use polymorphism to interact with them',
      videoLink: 'dSsETZv9_8k',
      ID: 16044,
    },
    {
      name: 'Higher Order Function',
      description: 'Learn about Higher Order Functions and how you use them',
      videoLink: 'ESm5AX1ZbSg',
      ID: 16045,
    },
    {
      name: 'Filter and Map',
      description:
        'Learn about the filter and map functions and how you can use them to manipulate lists',
      videoLink: 'MQTTkEsSKbI',
      ID: 16046,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://kotlinlang.org/docs/reference/',
    },
  ],
};

const AndroidStudioGuide = {
  title: 'Android Studio',
  cover: AndroidStudioCover,
  logo: AndroidStudioLogo,
  description:
    "Android Studio is the official integrated development environment for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development.",
  duration: '14 Hours',
  guideID: 17000,
  relatedGuides: [3000, 19000],
  sections: [
    {
      name: 'Configuring Java JDK',
      description:
        'Get an introduction to Android Studio and download the Java SDK',
      videoLink: 'EknEIzswvC0',
      ID: 17001,
    },
    {
      name: 'Install Android Studio',
      description: 'Learn how to install Android Studio on you device',
      videoLink: 'SLNTnJkg6EE',
      ID: 17002,
    },
    {
      name: 'Hello World App',
      description: 'Learn how to create your first app in Android Studio',
      videoLink: 'taSwS5rhtmc',
      ID: 17003,
    },
    {
      name: 'Genymotion',
      description: 'Learn about Android Emulators and how to install them',
      videoLink: 'MWZ2rVFOQWw',
      ID: 17004,
    },
    {
      name: 'Overview of an Android App',
      description: 'Learn about the basics that make up an Android app',
      videoLink: 'myjSxtAk9XM',
      ID: 17005,
    },
    {
      name: 'Android Activity Lifecycle 1',
      description: 'Learn about activity lifecycles and how to manage it',
      videoLink: 'odqACn2Vgic',
      ID: 17006,
    },
    {
      name: 'Android Activity Lifecycle 2',
      description:
        "Get an example of managing an Android App's activity lifecycle",
      videoLink: 'ecZEMtpw-Gs',
      ID: 17007,
    },
    {
      name: 'Adding Two Numbers App',
      description: 'Build your first android app, which is a calculator',
      videoLink: '7OQJIaXNmT4',
      ID: 17008,
    },
    {
      name: 'Android Styles & Toast',
      description:
        "Learn about different ways to manage your app's layout along with Toasts",
      videoLink: 'V7HPQ6DVvug',
      ID: 17009,
    },
    {
      name: 'Checkbox',
      description: 'Learn about the Android Checkbox and how to use it',
      videoLink: 'HO7CsnUEJAs',
      ID: 17010,
    },
    {
      name: 'Radiobutton',
      description: 'Learn about the Android RadioButton and how to use it',
      videoLink: 'cTlWwuAvRpE',
      ID: 17011,
    },
    {
      name: 'Rating Bar',
      description: 'Learn about the Android Raing Bar and how to use it',
      videoLink: '0MrPs4yk9pU',
      ID: 17012,
    },
    {
      name: 'Alert Dialog',
      description:
        'Learn how to introduce a new Alert dialog in an Android App',
      videoLink: 'oqEXYBepqus',
      ID: 17013,
    },
    {
      name: 'Intents',
      description: 'Learn how to start new activities using Intents',
      videoLink: '3f0NAn5xFy4',
      ID: 17014,
    },
    {
      name: 'AnalogClock & Digital Clock',
      description: 'Learn how to use clocks in an Android App',
      videoLink: 'xRXg7RaXG64',
      ID: 17015,
    },
    {
      name: 'Android Login Screen 1',
      description: 'Create your first Android App login screen',
      videoLink: 'PQqEKrr8KSQ',
      ID: 17016,
    },
    {
      name: 'Android Login Screen 2',
      description: 'Create your first Android App login screen',
      videoLink: 'ihHdHra7zF8',
      ID: 17017,
    },
    {
      name: 'ImageView',
      description: 'Learn how to display images in an Android App',
      videoLink: 'IgbGeOIPu8w',
      ID: 17018,
    },
    {
      name: 'ListView',
      description: 'Learn how to display information in a list using ListView',
      videoLink: 'DmPO6ZWF8-s',
      ID: 17019,
    },
    {
      name: 'SeekBar',
      description:
        'Learn about the SeekBar and how to use it in Android Studio',
      videoLink: 'l5FrTkGoeX8',
      ID: 17020,
    },
    {
      name: 'WebView',
      description:
        'Learn about the WebView in Android Studio and how to use it',
      videoLink: 'nB-relROsrY',
      ID: 17021,
    },
    {
      name: 'Gestures',
      description:
        'Learn how to handle Gestures to handle different user input in Android Studio',
      videoLink: 'L27EhVTLcng',
      ID: 17022,
    },
    {
      name: 'Fragments 1',
      description:
        'Learn about Fragments in Android Studio and how to use them to reuse code',
      videoLink: 'mcF28h9WiGQ',
      ID: 17023,
    },
    {
      name: 'Fragments 2',
      description:
        'Learn about Fragments in Android Studio and how to use them to reuse code',
      videoLink: 'FF-e6CnBwYY',
      ID: 17024,
    },
    {
      name: 'AutoCompleteTextView Control',
      description:
        'Learn how to use AutoCompleteTextView in order to easily manage user input',
      videoLink: 'JpgYAoHXuBk',
      ID: 17025,
    },
    {
      name: 'TimePicker',
      description:
        'Learn about the TimePicker in Android Studio and how to use it',
      videoLink: 'yTjLqTFtjOw',
      ID: 17026,
    },
    {
      name: 'TimePickerDialog',
      description:
        'Learn about an alternative way to collect time input from a user in Android Studio',
      videoLink: 'GDAjPcXRZho',
      ID: 17027,
    },
    {
      name: 'DatePickerDialog',
      description:
        'Learn about the DatePickerDialog and how to use it in Android Studio',
      videoLink: 'czKLAx750N0',
      ID: 17028,
    },
    {
      name: 'NotificationManager',
      description:
        'Learn how to use NotificationManager to display and manage notifications on Android',
      videoLink: 'GQPyXkbikXw',
      ID: 17029,
    },
    {
      name: 'Database and Tables 1',
      description:
        'Learn how to manage basic data in Android by storing it to a local database',
      videoLink: 'cp2rL3sAFmI',
      ID: 17030,
    },
    {
      name: 'Database and Tables 2',
      description:
        'Learn how to manage basic data in Android by storing it to a local database',
      videoLink: 'p8TaTgr4uKM',
      ID: 17031,
    },
    {
      name: 'Inserting Data',
      description:
        'Learn how to store local data using SQLite in Android Studio',
      videoLink: 'T0ClYrJukPA',
      ID: 17032,
    },
    {
      name: 'Displaying Data',
      description:
        'Learn how to retrieve and show data from SQLite in Android Studio',
      videoLink: 'KUq5wf3Mh0c',
      ID: 17033,
    },
    {
      name: 'Updating Data',
      description: 'Learn how to update data in SQLite using Android Studio',
      videoLink: 'PA4A9IesyCg',
      ID: 17034,
    },
    {
      name: 'Deleting Data',
      description: 'Learn how to delete data in Android Studio with SQLite',
      videoLink: 'neaCUaHa2Ek',
      ID: 17035,
    },
    {
      name: 'ActionBar',
      description: 'Learn about ActionBar in Android Studio and how to use it',
      videoLink: 'o4WeEitmF9E',
      ID: 17036,
    },
    {
      name: 'Overflow Menu Items and Icons',
      description:
        'Learn about managing Overflowing Lists and Icons in Android Studio',
      videoLink: 'SF3Hh31clqQ',
      ID: 17037,
    },
    {
      name: 'More ActionBar',
      description:
        'Learn how to further customize the ActionBar to make it handle more complex interactions',
      videoLink: 'm7BWTh6xPsw',
      ID: 17038,
    },
    {
      name: 'Explicit and Implicit Intents',
      description:
        'Look deeper into Intents and how to use them in Android Studio',
      videoLink: 'uAZn1M9v06E',
      ID: 17039,
    },
    {
      name: 'Services',
      description:
        'Get an introduction to Services and how they work in an Android App',
      videoLink: 'L29UVUm8aro',
      ID: 17040,
    },
    {
      name: 'Service and Thread',
      description:
        'Learn about Threading and how it works with Services in Android Studio',
      videoLink: 'c7kjSs2l7iM',
      ID: 17041,
    },
    {
      name: 'IntentService',
      description: 'Learn how to create services using IntentService',
      videoLink: 'p3RHxwA2-8A',
      ID: 17042,
    },
    {
      name: 'Bound Services',
      description:
        'Learn about different types of services and how to use them in Android Studio',
      videoLink: 'cJsqMisTaa8',
      ID: 17043,
    },
    {
      name: 'Applying Styles on Components',
      description:
        'Learn how to apply styles on components to customize the UI of your Android App',
      videoLink: 'x0UkbmhxT6c',
      ID: 17044,
    },
    {
      name: 'Style inheritance',
      description:
        'Learn about inheriting styles in your Android App to make the App more appealing',
      videoLink: 'E-wJJQFlQBs',
      ID: 17045,
    },
    {
      name: 'Saving Files',
      description:
        'Learn how to save files on your Android device from the App using Android Studio',
      videoLink: '_15mKw--RG0',
      ID: 17046,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://developer.android.com/docs',
    },
  ],
};

const FlutterGuide = {
  title: 'Flutter',
  cover: FlutterCover,
  logo: FlutterLogo,
  description:
    'Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.',
  duration: '6 Hours',
  guideID: 18000,
  relatedGuides: [6000, 17000],
  sections: [
    {
      name: 'Intro & Setup',
      description:
        'Get an introduction into Flutter and learn how to set up the environment on your device',
      videoLink: '1ukSR1GRtMU',
      ID: 18001,
    },
    {
      name: 'Flutter Overview',
      description: 'Get a high level overview of the Flutter framwork',
      videoLink: 'bKueYVtV0eA',
      ID: 18002,
    },
    {
      name: 'Dart Primer',
      description:
        'Learn about Dart, the Google language that is used to code Flutter apps',
      videoLink: 'FLQ-Vhw1NYQ',
      ID: 18003,
    },
    {
      name: 'Creating a Flutter App',
      description: 'Create your first Flutter app in Android Studio',
      videoLink: 'TSIhiZ5jRB0',
      ID: 18004,
    },
    {
      name: 'Scaffold & AppBar Widgets',
      description:
        'Learn about different widgets used to create a basic layout for your Flutter app',
      videoLink: 'C5lpPjoivaw',
      ID: 18005,
    },
    {
      name: 'Colors & Fonts',
      description: 'Learn how to customize text colors and styles in Flutter',
      videoLink: 'km2P_KQJyO0',
      ID: 18006,
    },
    {
      name: 'Stateless Widgets & Hot Reload',
      description:
        'Learn about the Hot Reload concept and how to create basic stateless widgets',
      videoLink: 'zwPBMg3SHVU',
      ID: 18007,
    },
    {
      name: 'Images & Assets',
      description:
        'Learn how to use custom images and other assets in your Flutter app',
      videoLink: 'Hxh6nNHSUjo',
      ID: 18008,
    },
    {
      name: 'Buttons & Icons',
      description:
        'Learn how to create buttons and different icons in your Flutter app',
      videoLink: 'ABmqtI7ec7E',
      ID: 18009,
    },
    {
      name: 'Containers & Padding',
      description:
        'Learn how to create containers for your layouts and how to style them using padding and margin',
      videoLink: 'H0cJ0gUlgE8',
      ID: 18010,
    },
    {
      name: 'Rows',
      description: 'Learn how to organize your widgets in terms of rows',
      videoLink: 'a6oKFvGuTH4',
      ID: 18011,
    },
    {
      name: 'Columns',
      description: 'Learn how to organize your widgets in terms of column',
      videoLink: 'siFU8c_Heu0',
      ID: 18012,
    },
    {
      name: 'Flutter Outline & Shortcuts',
      description: 'Learn about different shortcuts you can use in Flutter',
      videoLink: 'RdPkFd6_fTA',
      ID: 18013,
    },
    {
      name: 'Expanded Widgets',
      description:
        'Learn more about widgets and how you can use expanded versions of them',
      videoLink: 'zNZvuP8h1vs',
      ID: 18014,
    },
    {
      name: 'Ninja ID Project',
      description:
        'Create a first mini project in Flutter using the concepts you have learned about so far',
      videoLink: 'c063ddhWafo',
      ID: 18015,
    },
    {
      name: 'Stateful Widgets',
      description:
        'Learn how to manipulate state in widgets to create powerful UIs',
      videoLink: 'p5dkB3Mrxdo',
      ID: 18016,
    },
    {
      name: 'Lists of Data',
      description: 'Learn how to present lists of data in a Flutter app',
      videoLink: '_AC90CiDoKA',
      ID: 18017,
    },
    {
      name: 'Custom Classes',
      description:
        'Learn how to create custom classes to define complex data structures',
      videoLink: 'QgQJJ0y0A6w',
      ID: 18018,
    },
    {
      name: 'Cards',
      description:
        'Learn how to work with a simple layout widget called Card in Flutter',
      videoLink: 'XIxahpXU_QE',
      ID: 18019,
    },
    {
      name: 'Extracting Widgets',
      description:
        'Learn how to extract widget trees into their own reusable class widgets',
      videoLink: 'jAxNZYX7mHM',
      ID: 18020,
    },
    {
      name: 'Functions as Parameters',
      description:
        'Learn how to pass in functions as parameters to define complex control flow',
      videoLink: 'aqePcMyeoIY',
      ID: 18021,
    },
    {
      name: 'Starting the World Time App',
      description: 'Create your first big Flutter app',
      videoLink: 'WghpP9W2vXo',
      ID: 18022,
    },
    {
      name: 'Maps & Routing',
      description:
        'Learn how to route to different screens within a Flutter app',
      videoLink: 'WG5tJIAq5b0',
      ID: 18023,
    },
    {
      name: 'Widget Lifecycle',
      description:
        'Learn about Widget lifestyle and how to use them to create powerful user experiences',
      videoLink: 'pDzQGolJayE',
      ID: 18024,
    },
    {
      name: 'Asynchronous Code',
      description:
        'Learn about aynchronous code in Flutter and how call async functions',
      videoLink: 'nHsxIQ9KMn0',
      ID: 18025,
    },
    {
      name: 'Flutter Packages',
      description:
        'Learn how to add external packages to Flutter in order to extend functionality',
      videoLink: 'WdXcJdhWcEY',
      ID: 18026,
    },
    {
      name: 'World Time API',
      description:
        'Learn how to use packages to retrieve data from the World Time API in order to keep working on your project',
      videoLink: 'AqsmaT1U6sQ',
      ID: 18027,
    },
    {
      name: 'World Time Custom Class',
      description: 'Learn how to create and implement a custom widget class',
      videoLink: '9lCQhwo8WT4',
      ID: 18028,
    },
    {
      name: 'Error Handling',
      description:
        'Learn how to handle user errors and internal errors in Flutter',
      videoLink: 'HemchBJQdgM',
      ID: 18029,
    },
    {
      name: 'Passing Route Data',
      description:
        'Learn how to pass data from one screen to another using Flutter',
      videoLink: 'KIAwGfnoteE',
      ID: 18030,
    },
    {
      name: 'Formatting & Showing Dates',
      description:
        'Learn more about String formatting when it comes to Date objects in Flutter',
      videoLink: 'c7Ap0iLwv6k',
      ID: 18031,
    },
    {
      name: 'Loaders / Spinners',
      description:
        'Learn how to display loading or spinning screens to improve user experience',
      videoLink: 'nLlVANBmFJM',
      ID: 18032,
    },
    {
      name: 'Ternary Operators',
      description:
        'Learn how to use ternary operators to more easily handle conditional statements',
      videoLink: 'NDulhXVcLuI',
      ID: 18033,
    },
    {
      name: 'List View Builder',
      description:
        'Learn how to build your own custom view where you can present lists of data',
      videoLink: 'TdWhYERuv7g',
      ID: 18034,
    },
    {
      name: 'Updating the Time',
      description:
        'Finish off the project with a time updating function based on everythin you have learned thusfar',
      videoLink: 'j6c_vHdbUfg',
      ID: 18035,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://flutter.dev/docs',
    },
  ],
};

const SwiftGuide = {
  title: 'Swift',
  cover: SwiftCover,
  logo: SwiftLogo,
  duration: '3 Hours',
  description:
    'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. It is used to develop applications for macOS and iOS.',
  guideID: 19000,
  relatedGuides: [17000, 6000],
  sections: [
    {
      name: 'Introduction',
      description: 'Get an introduction to Swift programming for iOS',
      videoLink: 'ySa58y1SRy0',
      ID: 19001,
    },
    {
      name: 'Data Types',
      description: 'Learn about data types in Swift and how to manipulate them',
      videoLink: 'zcLMOTEDd8Y',
      ID: 19002,
    },
    {
      name: 'Swift Math Operators',
      description:
        'Learn how to perform arithmetic in Swift using math operators',
      videoLink: 'hWqx7p0TF3Q',
      ID: 19003,
    },
    {
      name: 'If Statements',
      description: 'Learn how to write conditional statements in Swift',
      videoLink: 'H_xErt38mWg',
      ID: 19004,
    },
    {
      name: 'Switch Statements',
      description:
        'Learn about Switch statements in Swift so you can write more powerful control flow',
      videoLink: 'R4U42rkmHDk',
      ID: 19005,
    },
    {
      name: 'Loops 1',
      description: 'Learn about itertation using loops in Swift',
      videoLink: 'KV7Ts9sm850',
      ID: 19006,
    },
    {
      name: 'Loops 2',
      description: 'Learn about itertation using loops in Swift',
      videoLink: '36ipzqIQKIk',
      ID: 19007,
    },
    {
      name: 'Functions 1',
      description:
        'Learn how to define and reuse pieces of code in Swift to write complex programs',
      videoLink: 'CLmZxVkN9gw',
      ID: 19008,
    },
    {
      name: 'Functions 2',
      description:
        'Learn how to define and reuse pieces of code in Swift to write complex programs',
      videoLink: 'AT5_lx4PbVM',
      ID: 19009,
    },
    {
      name: 'Classes',
      description: 'Learn about object oriented programming in Swift',
      videoLink: '43UOxoOuAag',
      ID: 19010,
    },
    {
      name: 'Subclassing and Inheritance',
      description:
        'Learn how to use inheritance to reuse code and build powerful classes and instantiate complex objects',
      videoLink: 'uPw8ankqEOw',
      ID: 19011,
    },
    {
      name: 'UIKit',
      description:
        'Learn about the UIKit in Swift and how you can use it to build great User Experience',
      videoLink: '8r1njDKLs90',
      ID: 19012,
    },
    {
      name: 'Initializers',
      description: 'Learn about Initializers in Swift and how to use them',
      videoLink: '9GoKcRmy-G0',
      ID: 19013,
    },
    {
      name: 'Optionals',
      description: 'Learn about Optionals in Swift and how to use them',
      videoLink: 'IG_JCxSPa_k',
      ID: 19014,
    },
    {
      name: 'Properties',
      description: 'Learn about Properties in Swift and how to use them',
      videoLink: 'kDWDTg_RpLA',
      ID: 19015,
    },
    {
      name: 'Designated and Convenience Initializers',
      description:
        'Learn the difference between Designated & Convenience Initializers and when you should use each',
      videoLink: 'LxKZf0LyRbA',
      ID: 19016,
    },
    {
      name: 'Arrays',
      description:
        'Learn about the Array data type in Swift and how you can manipulate it',
      videoLink: 'rNyTxjGSp8Q',
      ID: 19017,
    },
    {
      name: 'Dictionaries',
      description:
        'Learn about Dictionaries in Swift and how you can manipulate this data type',
      videoLink: 'mJwmGpdZQAg',
      ID: 19018,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://swift.org/documentation/',
    },
  ],
};

const RubyGuide = {
  title: 'Ruby',
  cover: RubyCover,
  logo: RubyLogo,
  duration: '7.5 Hours',
  description:
    'Ruby is a high level, interpreted, general-purpose programming language that was built in the 1990s in Japan. It can be used for a variety of basic programming uses.',
  guideID: 20000,
  relatedGuides: [3000, 4000],
  sections: [
    {
      name: 'Install Ruby and Editor',
      description: 'Get started with Ruby by doing all of the setup',
      videoLink: '8I539U5lXWY',
      ID: 20001,
    },
    {
      name: 'Komodo IDE',
      description: 'Get an in depth look into the Ruby IDE',
      videoLink: 'Z3ibUPyQY30',
      ID: 20002,
    },
    {
      name: 'Arithmetic Operators',
      description: 'Learn about basic math and arithmetic operators in Ruby',
      videoLink: 'f9G-W8RLuJ4',
      ID: 20003,
    },
    {
      name: 'Conditionals',
      description: 'Learn how to perform conditional operators in Ruby',
      videoLink: 'JdCyLqmoxOg',
      ID: 20004,
    },
    {
      name: 'Formatting',
      description:
        'Learn how to capitalize, reverse, and perform other string operations in Python',
      videoLink: '4f1rWL6zccw',
      ID: 20005,
    },
    {
      name: 'Arrays 1',
      description: 'Learn how to work with arrays and their functions in Ruby',
      videoLink: 'wBz4FCWZXRM',
      ID: 20006,
    },
    {
      name: 'Arrays 2',
      description: 'Continue learning how to work with arrays in ruby',
      videoLink: '6J6jGl1i2qg',
      ID: 20007,
    },
    {
      name: 'Hash',
      description: 'Learn how to write a Hash using Ruby',
      videoLink: '3tSPTv27QcY',
      ID: 20008,
    },
    {
      name: 'gets.chomp Method',
      description: 'Learn about a vital Ruby to collect user input',
      videoLink: '3-ne6aqoi8E',
      ID: 20009,
    },
    {
      name: 'More on Hashes',
      description: 'Continue learning about Hashing in Rub',
      videoLink: '_3khk6o2We4',
      ID: 20010,
    },
    {
      name: 'Functions',
      description:
        'Learn how to define and use functions in Ruby to reuse existing code',
      videoLink: 'yQJqzS8Ns2E',
      ID: 20011,
    },
    {
      name: '- counter - index - .each do',
      description:
        'Learn about iteration in Ruby and to use different iteration methods',
      videoLink: 'VkUsiyv54Vc',
      ID: 20012,
    },
    {
      name: 'Functions with Numbers',
      description:
        'Learn how to create more dynamic functions to write powerful programs in Ruby',
      videoLink: 'YmxfZIaSIW8',
      ID: 20013,
    },
    {
      name: 'Pythagorean Theorem Calculator',
      description:
        'Write your first program in Ruby to calculate the Pythagorean Theorem',
      videoLink: 'Z9n2XAVVYY8',
      ID: 20014,
    },
    {
      name: 'Loops',
      description: 'Learn more about other iteration methods in Ruby',
      videoLink: 'Bu5GHmXiP_4',
      ID: 20015,
    },
    {
      name: 'Find and Replace Program',
      description:
        'Write another program that finds and replaces by indicies within an array',
      videoLink: 'LZW-w-_IIxs',
      ID: 20016,
    },
    {
      name: 'Multidimensional Arrays',
      description:
        'Learn about more powerful versions of arrays that let you create complex data structures',
      videoLink: 'pxpJpCIFHYs',
      ID: 20017,
    },
    {
      name: 'Find Prime Numbers',
      description:
        'Write a program to find prime numbers using all the concepts in Ruby',
      videoLink: 'xXuEeChktdQ',
      ID: 20018,
    },
    {
      name: 'Histogram and Sorting',
      description: 'Learn about Sorting algorithms in Ruby',
      videoLink: 'f4pLXGhisuw',
      ID: 20019,
    },
    {
      name: 'Spaceship Operator',
      description:
        'Write a program that utilizes complex comparison operators in Ruby',
      videoLink: 'tpsdxtf01po',
      ID: 20020,
    },
    {
      name: 'How to Write a Sort Method',
      description: 'Write your own custom sorting algorithm in Ruby',
      videoLink: 'I4TD-eCWUWQ',
      ID: 20021,
    },
    {
      name: 'Hashes and Symbols',
      description:
        'Learn more about advanced hashing and using symbols as well',
      videoLink: 'jKonRZataZw',
      ID: 20022,
    },
    {
      name: 'Add an Item to a Hash',
      description: 'Learn how to add items to a specific hash in Ruby',
      videoLink: 'hVSrMsUFrYQ',
      ID: 20023,
    },
    {
      name: 'CRUD Operations 1',
      description:
        'Learn about create, read, update, and delete operations in CRUD using Ruby',
      videoLink: 'BmxzCBEQ6OI',
      ID: 20024,
    },
    {
      name: 'CRUD Operations 2',
      description:
        'Learn about create, read, update, and delete operations in CRUD using Ruby',
      videoLink: 'gtEZ7A7Nqzs',
      ID: 20025,
    },
    {
      name: 'Terenary Conditional Expression',
      description: 'Learn about terenary conditional operators in Ruby',
      videoLink: '-FlndMkEa40',
      ID: 20026,
    },
    {
      name: 'When and Then',
      description:
        'Learn about important keywords to handle asynchronous code in Ruby',
      videoLink: 'UwZnR_x2KAs',
      ID: 20027,
    },
    {
      name: 'Conditional Assignment Operator',
      description: 'Learn how to assign variables conditionally in Ruby',
      videoLink: 'RqpI85wjC7w',
      ID: 20028,
    },
    {
      name: 'Ruby for SketchUp',
      description:
        'Learn about a popular exterior platform known as the SketchUp Ruby Console',
      videoLink: 'w5VqoHO2-wQ',
      ID: 20029,
    },
    {
      name: 'First SketchUp Plugin',
      description: 'Create your first plugin on the SketchUp Ruby Console',
      videoLink: 'YIDLuOEGaK8',
      ID: 20030,
    },
    {
      name: 'Shovel Operator',
      description: 'Learn how to use the shovel concatenation operator in Ruby',
      videoLink: 'HZyjM9KbTxk',
      ID: 20031,
    },
    {
      name: 'Yield',
      description:
        'Get a deeper explanation about the concept of Yielding in Ruby',
      videoLink: 'ObR8UuaPc6Q',
      ID: 20032,
    },
    {
      name: 'Ruby Procs Explained',
      description: 'Learn how to create reusable blocks using Ruby Procs',
      videoLink: '-25cgBtZc94',
      ID: 20033,
    },
    {
      name: 'Ruby Lambdas Explained',
      description:
        'Learn about Ruby Lambdas and how they are different than Procs in Ruby',
      videoLink: 'W3B042cPdsU',
      ID: 20034,
    },
    {
      name: 'Ruby Classes',
      description:
        'Get an overview of object oriented programming in Ruby using instance variables, objects, and classes',
      videoLink: '7myNdQyitXs',
      ID: 20035,
    },
    {
      name: 'Ruby Global Variables',
      description: 'Learn about global variables and their use in Ruby',
      videoLink: 'fVCMrrIf2v0',
      ID: 20036,
    },
    {
      name: 'FizzBuzz Game',
      description: 'Create a game as your final project in Ruby',
      videoLink: 'V5Jp69vHJa4',
      ID: 20037,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://www.ruby-lang.org/en/documentation/',
    },
    {
      title: 'VSCode Download',
      link: 'https://code.visualstudio.com/download',
    },
    {
      title: 'Komodo IDE',
      link: 'https://www.activestate.com/products/komodo-ide/',
    },
  ],
};

const UnityGuide = {
  title: 'Unity',
  cover: UnityCover,
  logo: UnityLogo,
  duration: '14 Hours',
  description:
    'Unity is a cross-platform game engine developed by Unity Technologies. As of 2018, the engine had been extended to support more than 25 platforms.',
  guideID: 21000,
  relatedGuides: [22000, 23000],
  sections: [
    {
      name: 'Getting Started',
      description:
        "Want to make a video game but don't know where to start? This video should help point you in the right direction!",
      videoLink: 'j48LtUkZRjU',
      ID: 21001,
    },
    {
      name: 'Basics',
      description: 'Get started making your first video game!',
      videoLink: 'IlKaB1etrik',
      ID: 21002,
    },
    {
      name: 'Programming',
      description: 'Write your first script to move the player!',
      videoLink: '9ZEu_I-ido4',
      ID: 21003,
    },
    {
      name: 'Movement',
      description: 'In this video we learn to control our player!',
      videoLink: 'Au8oX5pu5u4',
      ID: 21004,
    },
    {
      name: 'Camera Follow',
      description: "Let's make our camera follow our player!",
      videoLink: 'HVB6UVcb3f8',
      ID: 21005,
    },
    {
      name: 'Collision',
      description: "What happens when stuff collides? Let's take a look!",
      videoLink: 'gAB64vfbrhI',
      ID: 21006,
    },
    {
      name: 'Gameplay',
      description:
        "Alright enough messing around... Let's turn this into a game!",
      videoLink: 'D4I0I3QJAvc',
      ID: 21007,
    },
    {
      name: 'Score & UI',
      description: "Let's create a score counter for our game!",
      videoLink: 'TAGZxRMloyU',
      ID: 21008,
    },
    {
      name: 'Game Over',
      description: 'What happens when we lose?',
      videoLink: 'VbZ9_C4-Qbo',
      ID: 21009,
    },
    {
      name: 'Winning Levels',
      description: "Let's make a way to reach new levels!",
      videoLink: 'Iv7A8TzreY4',
      ID: 21010,
    },
    {
      name: 'Finishing Up',
      description: "Let's wrap things up!",
      videoLink: 'r5NWZoTSjWs',
      ID: 21011,
    },
    {
      name: 'Building & Exporting the game',
      description:
        'This video explains the entire export process to three different platforms.',
      videoLink: '7nxKAtxGSn8',
      ID: 21012,
    },
    {
      name: 'Top 10 Tips 1',
      description: 'A collection of my favorite Unity quick tips!',
      videoLink: 'JDVuTBHnGWw',
      ID: 21013,
    },
    {
      name: 'High Score in Unity',
      description: "Let's make a high score!",
      videoLink: 'vZU51tbgMXk',
      ID: 21014,
    },
    {
      name: 'Top 10 Tips 2',
      description:
        'You guys seemed to like the last one so here are 10 more handy Unity tips!',
      videoLink: 'IHeMmFxvmkY',
      ID: 21015,
    },
    {
      name: 'Smooth Camera Follow',
      description: 'In this video we make a smooth camera movement.',
      videoLink: 'MFQhpwc6cKE',
      ID: 21016,
    },
    {
      name: 'Good Graphics',
      description: 'Let’s make Unity look beautiful!',
      videoLink: 'owZneI02YOU',
      ID: 21017,
    },
    {
      name: 'Audio',
      description: 'Learn how to add sound to your game!',
      videoLink: '6OT43pvUyfY',
      ID: 21018,
    },
    {
      name: 'Power Ups',
      description: 'Learn how to make Power Ups in Unity!',
      videoLink: 'CLSiRf_OrBk',
      ID: 21019,
    },
    {
      name: 'Lighting',
      description:
        'In this video we’ll learn a bunch about lighting and use it to light a simple scene using the Progressive Lightmapper.',
      videoLink: 'VnG2gOKV9dw',
      ID: 21020,
    },
    {
      name: 'Tilemaps',
      description:
        'Learn how to use the Tilemap tools in Unity to easily create cool 2D levels.',
      videoLink: 'ryISV_nH8qw',
      ID: 21021,
    },
    {
      name: 'Particle System',
      description: 'Everything to know about the Particle System in Unity!',
      videoLink: 'FEA1wTMJAR0',
      ID: 21022,
    },
    {
      name: 'Real Time Lighting',
      description:
        'In this video we’ll learn how to light up a scene in realtime.',
      videoLink: 'wwm98VdzD8s',
      ID: 21023,
    },
    {
      name: 'Camera Shake',
      description: 'Spice up your game by adding Camera Shake using Unity!',
      videoLink: '9A9yj8KnM8c',
      ID: 21024,
    },
    {
      name: 'Smooth Game UI',
      description: 'Make your game run smooth by using Level of Detail!',
      videoLink: 'ifNyVS2_6f8',
      ID: 21025,
    },
    {
      name: 'NavMesh',
      description:
        'Learn how to create AI pathfinding using the Unity NavMesh components!',
      videoLink: 'CHV1ymlw-P8',
      ID: 21026,
    },
    {
      name: 'Sculp, Paint, and Texture',
      description:
        'Learn how to easily sculpt, paint, detail and texture your levels for free using Polybrush.',
      videoLink: 'JWAnQiN9Zkw',
      ID: 21027,
    },
    {
      name: 'Animated Character',
      description:
        'Learn how to link together surfaces and how to add an animated character to our Agent.',
      videoLink: 'blPglabGueM',
      ID: 21028,
    },
    {
      name: 'ProGrids',
      description: 'Check out Skillshare: http://skl.sh/brackeys4',
      videoLink: 'UtNvtIrJcNc',
      ID: 21029,
    },
    {
      name: 'Model',
      description:
        'Learn how to use ProBuilder to model levels and props inside the Unity editor! ProBuilder has been acquired by Unity and is now completely free.',
      videoLink: 'PUSOg5YEflM',
      ID: 21030,
    },
    {
      name: 'Shader Graph',
      description:
        "The time has come... Let's explore Unity's new Shader Graph!",
      videoLink: 'Ar9eIn4z6XE',
      ID: 21031,
    },
    {
      name: 'Hologram',
      description: 'Let’s create a cool Hologram effect using Shader Graph!',
      videoLink: 'KGGB5LFEejg',
      ID: 21032,
    },
    {
      name: 'Unity 3D Game Kit',
      description:
        'Learn how you can use the 3D Game Kit to create game levels without writing any code.',
      videoLink: 'qsU4nM0L_n0',
      ID: 21033,
    },
    {
      name: '2D Games',
      description:
        "Want to make a 2D game but don't know where to start? This video should help point you in the right direction!",
      videoLink: 'on9nwbZngyw',
      ID: 21034,
    },
    {
      name: '2D Movement',
      description: 'Let’s give our player some moves!',
      videoLink: 'dwcT-Dch0bA',
      ID: 21035,
    },
    {
      name: 'Prefab Workflows',
      description: 'The time has finally come... Nested Prefabs are upon us!',
      videoLink: '6_gAiPPKyUg',
      ID: 21036,
    },
    {
      name: '2D Cameras',
      description: 'Let’s put a camera on our character!',
      videoLink: '2jTY11Am0Ig',
      ID: 21037,
    },
    {
      name: '2D Shooting',
      description: "Let's learn how to shoot enemies!",
      videoLink: 'wkKsl1Mfp5M',
      ID: 21038,
    },
    {
      name: 'Organic Levels',
      description: 'How to make organic levels in Unity with Sprite Shape!',
      videoLink: 'GSo_fU1JdfM',
      ID: 21039,
    },
    {
      name: 'Animation in 2D',
      description:
        'Wanna learn how to make your characters come alive? Then Skeletal Animation is for you!',
      videoLink: 'eXIuizGzY2A',
      ID: 21040,
    },
    {
      name: 'Millions of Particles',
      description:
        'Make amazing particle effects with the new Visual Effect Graph in Unity!',
      videoLink: 'FvZNVQuLDjI',
      ID: 21041,
    },
    {
      name: 'Input Systems',
      description:
        'Let’s check out what Unity is working on for the new Input System!',
      videoLink: 'Pzd8NhcRzVo',
      ID: 21042,
    },
    {
      name: 'Fire & Smoke 1',
      description:
        "Let's learn how to make realistic fire and smoke with VFX Graph!",
      videoLink: 'R6D1b7zZHHA',
      ID: 21043,
    },
    {
      name: 'Fire & Smoke 2',
      description:
        "Let's learn how to make realistic fire and smoke with VFX Graph!",
      videoLink: 'R6D1b7zZHHA',
      ID: 21044,
    },
    {
      name: 'Questing System',
      description: "Let's go on a tutorial-quest together!",
      videoLink: 'e7VEe_qW4oE',
      ID: 21045,
    },
    {
      name: 'HDRP',
      description: 'Upgrade to HDRP and take your graphics to the next level! ',
      videoLink: '12gkcdLc77s',
      ID: 21046,
    },
    {
      name: 'Cartoon Water',
      description: "Let's make some simple cartoon water!",
      videoLink: 'Vg0L9aCRWPE',
      ID: 21047,
    },
    {
      name: 'Snoke',
      description:
        "Let's learn how to make a cool Snow Shader in Shader Graph! ",
      videoLink: 'IC9g5hlfV6o',
      ID: 21048,
    },
    {
      name: '2D Lights',
      description:
        "Let's learn how to make 2D lights using the new 2D Renderer in Unity!",
      videoLink: 'nkgGyO9VG54',
      ID: 21049,
    },
    {
      name: 'Controller Input',
      description:
        'Let’s set up Gamepad controls using the new Unity Input System!',
      videoLink: 'p-3S73MaDP8',
      ID: 21050,
    },
    {
      name: 'Top Down Movement',
      description:
        "Let's have a look at the easiest and best way to make top-down movement in Unity!",
      videoLink: 'whzomFgjT50',
      ID: 21051,
    },
    {
      name: 'Top Down Shooting',
      description:
        "Let's have a look at the easiest and best way to make top down shooting in Unity!",
      videoLink: 'LNLVOjbrQj4',
      ID: 21052,
    },
    {
      name: 'First Person Movement',
      description:
        "Let's see how to get an FPS Character Controller up and running in no time!",
      videoLink: '_QajrabyTJc',
      ID: 21053,
    },
    {
      name: 'RPG Without Code',
      description:
        'Create your first RPG without writing any code using Unity RPG Creator Kit!. ',
      videoLink: 'wnzJ06Y8mdg',
      ID: 21054,
    },
    {
      name: 'Snaps',
      description:
        'Quickly create and prototype 3D levels in Unity using Snaps!',
      videoLink: 'b4oqOdBCy3c',
      ID: 21055,
    },
    {
      name: 'FPS Microgame',
      description:
        'Get started creating your first FPS using the FPS Microgame.',
      videoLink: 'jE3ZJ_tCGTo',
      ID: 21056,
    },
    {
      name: 'Melee Combat',
      description: 'Learn how to make melee combat in Unity!',
      videoLink: 'sPiVz1k-fEs',
      ID: 21057,
    },
    {
      name: 'Fireworks with VFX Graph!',
      description:
        "Let's get this year started with some awesome fireworks in Unity!",
      videoLink: 'iCEHarLRCzI',
      ID: 21058,
    },
    {
      name: 'Transitions',
      description:
        "Transitions in Unity are easy to learn - let's have a look!",
      videoLink: 'CE9VOZivb3I',
      ID: 21059,
    },
    {
      name: 'Light Probes',
      description:
        "High quality lighting is not performant... Until now! Let's have a look at Light Probes in Unity.",
      videoLink: '_E0JXOZDTKA',
      ID: 21060,
    },
    {
      name: 'Dissolve',
      description: 'Create your own 2D Shaders with Shader Graph!',
      videoLink: '5dzGj9k8Qy8',
      ID: 21061,
    },
    {
      name: 'Third Person Movement',
      description:
        "Let's learn how to make a solid third person controller with a moving camera!",
      videoLink: '4HpC--2iowE',
      ID: 21062,
    },
    {
      name: 'Image Effects',
      description: 'Master every Post Processing effect in Unity!',
      videoLink: '9tjYz6Ab0oc',
      ID: 21063,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://docs.unity3d.com/Manual/index.html',
    },
    {
      title: 'Download',
      link:
        'https://unity.com/products?_ga=2.162356348.1718478951.1604785816-110803733.1604785816',
    },
  ],
};

const UnrealGuide = {
  title: 'Unreal',
  cover: UnrealCover,
  logo: UnrealLogo,
  duration: '9 Hours',
  description:
    'Unreal Engine is a complete suite of development tools for anyone working with real-time technology. From design visualizations and cinematic experiences to high-quality games across PC, console, mobile, VR, and AR, Unreal Engine gives you everything you need to start, ship, grow, and stand out from the crowd.',
  guideID: 22000,
  relatedGuides: [21000, 23000],
  sections: [
    {
      name: 'Creating an FPS Game',
      description:
        "If you've ever wanted to create a first person shooter game but weren't sure where to start, this is the tutorial series for you. You'll learn everything you need to create an FPS from scratch using Unreal Engine 4.",
      videoLink: 'DywBqQtTHMo',
      ID: 22001,
    },
    {
      name: 'True First Person Camera',
      description:
        "In today's episode we take a look at how we can setup the true first person camera by converting the third person camera to first person, giving us a realistic look and feel to our FPS game.",
      videoLink: '0mgm16ki8zM',
      ID: 22002,
    },
    {
      name: 'Player Health & Armor',
      description:
        "In today's video we take a look at how we can setup a player health and armor variable that we can use later on in the series for healing and killing the player.",
      videoLink: 'UneAoM979uc',
      ID: 22003,
    },
    {
      name: 'Regenerating Armor & Damage Function',
      description:
        "In today's video we set up our regenerating armor system and create a basic damaging function for when the player loses health. We go over the maths used to differentiate between when the player should lose health or armor.",
      videoLink: 'iFu2WXc8lz0',
      ID: 22004,
    },
    {
      name: 'Blood Splash Effect',
      description:
        "In today's video we show you how you can create a blood splash/splatter effect for when the player takes damage in our shooter game.",
      videoLink: 'RL-x6rHGDxs',
      ID: 22005,
    },
    {
      name: 'Setting Up Character Animations',
      description:
        'Today we take a look at how we can import a customer character and set up the animations. We go over step by step how we can begin creating the animation blueprint and animation blendspace to start bringing our character to life.',
      videoLink: 'RPdPmys9JWY',
      ID: 22006,
    },
    {
      name: 'Finishing The Animation Blueprint',
      description:
        "In today's video we check out how we can finish up our animation blueprint, setting up the conditioning and logic to determine the player's speed and direction and then feed it into our animation blendspace.",
      videoLink: 'ftLBejDtlqc',
      ID: 22007,
    },
    {
      name: 'Adding The A',
      description:
        "We take a look at how we can set up a gun for the character, more specifically the AK-47. We show you how to import the weapon into the game and have it spawn inside of the player's hands.",
      videoLink: 'YCdAX6zhyBs',
      ID: 22008,
    },
    {
      name: 'Firing Our A',
      description:
        'We take a look at how we can setup a projectile for a weapon, showing you how to create the socket and spawn the projectile actor.',
      videoLink: '-Q2ZEFmnnmw',
      ID: 22009,
    },
    {
      name: 'Crouching With Animations',
      description:
        "In today's video we take a look at how we can setup a crouch system for our FPS character, going over how we can create an additional blendspace for crouching and then set up the inputs and transitioning between the normal and crouching state using blueprints.",
      videoLink: 'U4HnqE_OZ7Y',
      ID: 22010,
    },
    {
      name: 'Sprinting With Animations',
      description:
        "In today's video we show you how you can make your FPS character sprint, going over exactly how we can setup a sprint state inside of our blueprint and tell it to play our animations for sprinting.",
      videoLink: 'aAIbKT-hQF0',
      ID: 22011,
    },
    {
      name: 'Using Control Rotation',
      description:
        "Today we take a look at how we can use the player's control rotation to affect the position of the characters weapon. Doing this will make the player's weapon/gun follow the player's camera at all times. Enjoy!",
      videoLink: 'AAd7g8tvheI',
      ID: 22012,
    },
    {
      name: 'Fully Automatic Rifle',
      description:
        'We take a look at how we can make our weapon fully automatic, creating all of the blueprint required to do so along with variables for fire rate!',
      videoLink: 'w2I7rPwGOuU',
      ID: 22013,
    },
    {
      name: 'Aiming Down Sights',
      description:
        "Today we take a look at how we can setup a basic iron sights system, going over how we can get the engine to switch to a different camera when they're holding down the right mouse button.",
      videoLink: '5nNGq6fS6vI',
      ID: 22014,
    },
    {
      name: 'Spawning The Muzzle Flash',
      description:
        'Today we take a look at how we can spawn a muzzle flash from the muzzle point in our weapon when firing. We do this by spawning the particle effects at the socket location.',
      videoLink: 'FIhV9OoHnyc',
      ID: 22015,
    },
    {
      name: 'Fixing Movement States',
      description:
        "In today's video we take a look at how we can fix our movement states, making sure the character is unable to both sprint and crouch at the same time.",
      videoLink: '2_s_cAugBEA',
      ID: 22016,
    },
    {
      name: 'Setting Up Ammo & Reloading ',
      description:
        'We take a look at how we can make our AK47 weapon reload inside of Unreal Engine 4. We go over all of the variables and maths required to setup the reloading system.',
      videoLink: 'z6ln4oVHq0g',
      ID: 22017,
    },
    {
      name: 'Conservative Ammo Reloading ',
      description:
        'We go over how we can setup a conservative reload system, whereby when the reloads it only replenishes the ammo that the player has used as opposed to the entire magazine.',
      videoLink: '5e13-2C_r_c',
      ID: 22018,
    },
    {
      name: 'Weapon Reload Animation ',
      description:
        'Today we show you how to make your reload system play an animation when the player is reloading. We go over everything we need to setup the reload state and variables/logic to make it transition.',
      videoLink: 'PWHu4DPs4j4',
      ID: 22019,
    },
    {
      name: 'Firing System Fix',
      description:
        "Today we show you how you can make some changes to our firing system so that it doesn't fire when the player is either sprinting or reloading.",
      videoLink: 'g_a2sIoh8Oo',
      ID: 22020,
    },
    {
      name: 'Aiming With A Crosshair',
      description:
        "During this video we go over how you can add a cross hair target onto the player's screen. We also go over how you can make it invisible when the player is aiming down the sights to give a clear view of the iron sights.",
      videoLink: 'kc3rx6Izqd8',
      ID: 22021,
    },
    {
      name: 'Dynamic Spread Crosshair',
      description:
        "Today we take a look at how you can create a dynamic spread crosshair which will expand based on the player's speed. We also go over how we can change some of the variables within our crosshair widget to set the default thickness & length.",
      videoLink: '5Dx57AXWyIg',
      ID: 22022,
    },
    {
      name: 'Picking Up Ammo',
      description:
        "In today's video we take a look at how we can create a simple ammo pickup for our game, replenishing the player's max ammo when they walk over the item and collect it.",
      videoLink: 'uUqDVAzbVaQ',
      ID: 22023,
    },
    {
      name: 'Setting Up AI & Bullet Damage',
      description:
        "In today's video we take a look at how we can setup a simple character, place it within our scene and make it take damage when it gets hit with our bullet projectile.",
      videoLink: 'MAvM6ICC42w',
      ID: 22024,
    },
    {
      name: 'Enemy AI Following/Chasing',
      description:
        "Today we take a look at how we can get our AI enemy to chase & follow your character. We setup the navigational mesh to control where they can & can't go along with the script to get him to move.",
      videoLink: '87lkYjAgYoc',
      ID: 22025,
    },
    {
      name: 'Aiming Fixes',
      description:
        'Today we show you how you can fix up our aiming system, ensuring that it does not let you aim whilst sprint or reloading. We also go over how we can make our cross hair disappear when aiming.',
      videoLink: 'hjQYWgggzKQ',
      ID: 22026,
    },
    {
      name: 'Smarter AI Actions',
      description:
        'Today we work on making your AI smarter, making them react to bullet hits on them, we show you how to make them chase you when you hit them and also how to spawn an impact effect on the hit location! ',
      videoLink: 'FQiRnhPE_3k',
      ID: 22027,
    },
    {
      name: 'Random AI Roaming Setup',
      description:
        'In this video we take a look at how we can make our AI roam when they cannot see the player. We do this by running a check to see if the AI can see the player, if not it will move them to a random point within the navigable radius.',
      videoLink: 'tTGe6b0Cf7w',
      ID: 22028,
    },
    {
      name: 'Smooth Gun Movement',
      description:
        'Today we take a look at how we can use layered animations to make our gun movement smoother essentially allowing us to merge the idle animation with our existing walk/run blendspace.',
      videoLink: 'nIVpVyyNEdQ',
      ID: 22029,
    },
    {
      name: 'Simple Objective System',
      description:
        'In this video we take a look at how we can display a player objective on the screen and then change it using a blueprint actor once the player gets to a specific part of the level. This example can also be used to incorporate into your gameplay code.',
      videoLink: 'GpJPOfQzbAQ',
      ID: 22030,
    },
    {
      name: 'Setting Up Our HUD',
      description:
        "In today's episode we take a look at how we can start to form our heads up display within Unreal Engine 4. We go over importing the graphics from our Photoshop document, bring them into the engine and start displaying them on our screen.",
      videoLink: 'stYR5eyJw8c',
      ID: 22031,
    },
    {
      name: 'Enemy Killfeed',
      description:
        'Here we take a look at how we can create a kill-feed which will display and popup when a player has killed an enemy. We go over how to setup the blueprint to display it, along with layout out and animating the graphics to make it look good!',
      videoLink: '3Csk3CAS52U',
      ID: 22032,
    },
    {
      name: 'Creating a Minimap',
      description:
        'Today we take a look at how we can make the minimap for our heads up display inside of Unreal Engine 4. We use a scene capture component to render a real time picture and then place it onto our UI to form our mini-map!',
      videoLink: '8AhY7CUbzwc',
      ID: 22033,
    },
    {
      name: 'Match Timer',
      description:
        "Here we take a look at how we can add a timer onto the player's heads up display (HUD) and get it to count down to when the match or objective goal finishes.",
      videoLink: 'IW1SyIz76jY',
      ID: 22034,
    },
    {
      name: 'Hit Marker With Animation',
      description:
        "Here we take a look at how we can create a hit marker effect that'll popup when the player gets a positive hit on one of the enemies. We cover both the blueprints to make it show on the screen along with animating it to quickly fade in/out.",
      videoLink: '3qje07RrznM',
      ID: 22035,
    },
    {
      name: 'Starting Weapon Switching (HUD)',
      description:
        "Today we take a look at how we can start our weapon switching system, starting by working on the heads up display elements, changing text and icons for the weapon based on a 'equippedweapon' variable.",
      videoLink: 'C_LBE4wibjQ',
      ID: 22036,
    },
    {
      name: 'M4A1 Weapon Pickup',
      description:
        'We create a simple weapon pickup, we cover how to import the model, setup the material then plug that into a blueprint actor the player can pickup which will allow them to use the M4A1 weapon.',
      videoLink: '2SIAYU-eS4s',
      ID: 22037,
    },
    {
      name: 'Weapon Pickup Message',
      description:
        "We create a simple popup message that displays on the player's screen when they collect the M4A1 item within their game. We cover setting up the animation and the blueprints to make it show up.",
      videoLink: 'hGA49hRKnSk',
      ID: 22038,
    },
    {
      name: 'M4A1 Weapon Setup',
      description:
        'We continue working on the weapon switching system, setting up the blueprint for our second weapon the M4A1 inside of Unreal Engine 4. We also make adjustments to the skeletal mesh for the second weapon to allow it to work in the same was it does for our AK47',
      videoLink: 'FU3nLnvKvQk',
      ID: 22039,
    },
    {
      name: 'Changing Weapon Visibility',
      description:
        "In today's video we take a look at how we can spawn the second weapon into the player's hand and change the weapons visibility to work with our weapon switching system inside of Unreal Engine 4.",
      videoLink: '_zTLhntv3e8',
      ID: 22040,
    },
    {
      name: 'Displaying Secondary Ammo',
      description:
        "Here we show you how you can make the engine switch the ammo being displayed based on the weapon selected so that when the new M4A1 weapon is selected, the M4A1's ammo is being displayed inside of Unreal Engine 4.",
      videoLink: 'j19wLdeH7rU',
      ID: 22041,
    },
    {
      name: 'Consuming & Reloading M4A1 Ammo',
      description:
        "In today's video we show you can make the engine consume the ammo from the second weapon when it is selected, we also show you how you can adjust your reloading system to work with our second weapon.",
      videoLink: 'jnUtjBaayqM',
      ID: 22042,
    },
    {
      name: 'Weapon Line Tracing',
      description:
        'Here we take a look at how we can use a line trace based firing system for more accurate results by tracing from the centre of the camera where the cross hair is pointed.',
      videoLink: '5goK0_BSwMY',
      ID: 22043,
    },
    {
      name: 'Ray Tracing While Aiming Down Sight',
      description:
        'In this video we take a look at how we can make the engine ray trace from the aim down sight camera based on a variable switch for more accurate aiming results.',
      videoLink: 'pLdnmkdJaWo',
      ID: 22044,
    },
    {
      name: 'Damaging With Line Trace',
      description:
        'Here we show you how we can deal damage to our AI using the newly created line trace based weapon system. We cover how we can convert the current projectile damage code to work with our new line traces.',
      videoLink: '0i89_9s-gys',
      ID: 22045,
    },
    {
      name: 'Crouch Height Adjustment',
      description:
        "In this video we show you how you can get your character's collision size to change when they're crouching so that they're able to fit underneath objects.",
      videoLink: '5L9M-OC1H4s',
      ID: 22046,
    },
    {
      name: 'Zombie Body Setup',
      description:
        'Welcome back to the FPS series, in this video we set up the body of our zombie enemy for our game. We import the model, animations and setup the animation blueprint to bring it all together.',
      videoLink: '-4pj8bn4mAw',
      ID: 22047,
    },
    {
      name: 'Zombie Ragdoll Death Physics',
      description:
        'In this video we take a look at how we can set up ragdoll physics for our zombie enemy character so when it dies from a bullet induced death it will drop to the ground using realistic physics actions.',
      videoLink: '8xG0_nx4rUg',
      ID: 22048,
    },
    {
      name: 'Zombie Attack Animation',
      description:
        'In this video we take a look at how we can setup our zombie to attack our enemy, setup the animation blueprint and all of the logic code to make it happen.',
      videoLink: 'nW8fOATo5zY',
      ID: 22049,
    },
    {
      name: 'Grenade Spawning',
      description:
        'Here we take a look at how we can get a grenade to spawn into the game with projectile movement when the player presses the G key on their keyboard. This grenade will explode after 1 second and play a sound and particle effect.',
      videoLink: 'FpM1or_-yp0',
      ID: 22050,
    },
    {
      name: 'Grenade Damage',
      description:
        'Today we take a look at how we can setup damage for our grenade projectile using some simple blueprints.',
      videoLink: '2ZdtA26leZM',
      ID: 22051,
    },
    {
      name: 'Starting The Game Level',
      description:
        'Today we take a look at starting a unique level for our shooter game, starting off with a little bit of landscape work & aquiring assets from the Unreal Marketplace.',
      videoLink: 'jmxi20fjQ4E',
      ID: 22052,
    },
    {
      name: 'Decorating our level',
      description:
        'Today we take a look at decorating our level, getting it ready to be used by our players. We cover using the foliage tool to populate it & adjusting the lighting & post processing!',
      videoLink: 'Mb9jQhseE00',
      ID: 22053,
    },
    {
      name: 'Grenade Count',
      description:
        'Today we show you how to make a smoke grenade based on the system we built earlier for the frag grenades.',
      videoLink: 'FuFnQo1Q-78',
      ID: 22054,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://docs.unrealengine.com/en-US/index.html',
    },
    {
      title: 'Download',
      link: 'https://www.unrealengine.com/en-US/get-now',
    },
  ],
};

const GodotGuide = {
  title: 'Godot',
  cover: GodotCover,
  logo: GodotLogo,
  duration: '9.5 Hours',
  description:
    'Godot is a 2D and 3D, cross-platform, free and open-source game engine. It provides a huge set of common tools, so you can just focus on making your game without reinventing the wheel.',
  guideID: 23000,
  relatedGuides: [22000, 21000],
  sections: [
    {
      name: 'Introduction',
      description:
        'We are going to be covering all aspects of Godot development. 2D, 3D, Physics, Importing, Exporting, C#, VisualScript, Shaders, Networking, VR and much more.',
      videoLink: 'iDEcP8Mc-7s',
      ID: 23001,
    },
    {
      name: 'Getting Started',
      description:
        'In this part of our ongoing Godot 3 tutorial series, we will install Godot, download and import examples and take a brief tour of the UI',
      videoLink: 'hG_MgGHAX-Q',
      ID: 23002,
    },
    {
      name: 'Nodes, Scenes and Trees',
      description:
        'In this part of the ongoing Godot 3 tutorial series we delve into the overwhelmingly exciting world of nodes, trees and scenes!',
      videoLink: 'WUARiOGSGKY',
      ID: 23003,
    },
    {
      name: 'GDScript Programming 101',
      description:
        "In this video we cover GDScript 101, a quick primer on learning Godot's built in programming language GDScript. We cover a ton in this video, creating and attaching scripts, the code editor, loops, variables, globals, conditionals and much more. We even briefly look at the built in debugger.",
      videoLink: 'ybz5CfIPYq0',
      ID: 23004,
    },
    {
      name: '2D Graphics, Sprites and Animation',
      description:
        'In this episode, we finally start getting into some of the fun stuff. First we look at how to use the 2D editor in Godot 3. Then we create a sprite, look at the texture importing process and cover Sprite nodes from a programmatic perspective, showing you how to position, rotate, translate etc. We also talk a bit about the built in viewport option.',
      videoLink: 'Ok3fIQstvLw',
      ID: 23005,
    },
    {
      name: 'Keyboard, Mouse and Joystick Input',
      description:
        'As the title suggests, in this video we look at Keyboard, Mouse and Joystick/Gamepad handling using the Godot 3 game engine. We look at both polled and event driven input handling as well as creating Input maps.',
      videoLink: '7r7ZPmspDew',
      ID: 23006,
    },
    {
      name: 'User Interface Development',
      description:
        'Godot has a robust set of widgets, containers and controls that can be used to make flexible user interfaces. This tutorial walks through creating controls like widgets, wiring them up for signals and handled events in code.',
      videoLink: 'RmKcFk2LQjM',
      ID: 23007,
    },
    {
      name: 'Sound FX and Music',
      description:
        'Today we cover all things audio. Using AudioStreamPlayer, loading audio files WAV and OGG, looping, panning, special effects, audio buses, positional audio and using Areas to toggle special effects on an off!',
      videoLink: 'S-8IcHucSNg',
      ID: 23008,
    },
    {
      name: '2D Physics',
      description:
        'In this tutorial we look at implementing 2d physics using the Godot 3 game engine. We cover all kinds of subjects from simple collisions with Area2D, to Rigid Body, Kinematic Body and Static body collisions, custom collision polygons, handling collision callbacks and the basics of creating a platformer in physics.',
      videoLink: 'vY4I5VeQbBk',
      ID: 23009,
    },
    {
      name: 'Tiles & TileMaps',
      description:
        'In this tutorial we are going to look at creating TileSets, then using those TileSets to create TileMaps in the Godot 3 Game Engine. This is part of our ongoing Godot 3 tutorial series and is incredibly useful for creating 2D games such as platformers or top down RPGs. Godot 3 is also capable of creating isometric and custom perspective maps, but that is not covered in this particular tutorial.',
      videoLink: '9KT84VMtmzo',
      ID: 23010,
    },
    {
      name: 'VR in Godot',
      description:
        'This video shows how to implement VR using the Godot 3 engine and SteamVR.  In my case, the headset used is an MS VR powered HMD by Samsung.',
      videoLink: '1y5mtSGTMqs',
      ID: 23016,
    },
    {
      name: 'Networking',
      description:
        'This video covers networking in the Godot game engine. First we start of creating a simple UDP socket server and a client. We then illustrate the use of HTTPClient to make a REST web service request.  We then create a simple ENet based client and server in Godot.  Finally we create a simple lobby and networked game using GDScript keywords master, slave, sync and remote.',
      videoLink: 'JuRhRhJ2914',
      ID: 23017,
    },
    {
      name: 'Keyframed Animation',
      description:
        'This video covers 2D keyframe animation in Godot. In Godot 3.1, the animation system got a massive overhaul, making it easy to create complex animations using keyframes. This video showcases how to use AnimationPlayer, AnimationTreePlayer and the animation system in general to create and blend animations in Godot.',
      videoLink: 'USfmkHbIRyE',
      ID: 23018,
    },
    {
      name: 'Blender to Godot',
      description:
        'This tutorial walks entirely through the process of creating a full textured, rigged and animated model, creating multiple keyframed named animations in the NLA Editor, then using the Better Collada exporter to make those models available in the Godot game engine.  We then import and animate the final model in Godot.',
      videoLink: 'Q78aUox7qKA',
      ID: 23019,
    },
    {
      name: 'Intro to 3D Game Development In Godot',
      description:
        "We've covered all aspects of game development in Godot 2D, now it's time to continue on into the 3rd dimension! In this tutorial, we introduce the 3D editor in Godot, the key commands and hotkeys you need to know to navigate and edit in 3D.  We show how to create 3D objects, apply textures, create a camera and an environment.",
      videoLink: '09ETWu6Wf8Y',
      ID: 23020,
    },
    {
      name: 'Visual Shaders',
      description:
        'In this tutorial in the ongoing Godot Tutorial series we are going to look at Visual Shader development. We discuss how to create fragment and vertex shaders in the open source game engine using the visual tools instead of code.',
      videoLink: 'hiDosLOPQYA',
      ID: 23021,
    },
    {
      name: 'Publishing',
      description:
        'In this tutorial we cover the process of actually publishing your finished Godot game. We look at how you actually generate an exe or APK, HTML5 or whatever that you can then share or publish. We demonstrate how to create a Windows executable and an HTML5 web assembly, but the same process applies to all forms of exporting from Godot.',
      videoLink: '89q1XeYYeXY',
      ID: 23022,
    },
  ],
  additionalResources: [
    {
      title: 'Documentation',
      link: 'https://docs.godotengine.org/en/stable/index.html',
    },
    {
      title: 'Download',
      link: 'https://godotengine.org/download',
    },
  ],
};

const CybersecurityGuide = {
  title: 'Cybersecurity',
  cover: CybersecurityCover,
  logo: CybersecurityLogo,
  duration: '17 Hours',
  description:
    'Computer security, cybersecurity or information technology security is the protection of computer systems and networks from the theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.',
  guideID: 24000,
  relatedGuides: [4000, 14000],
  sections: [
    {
      name: 'Introduction to Cyber Security',
      description: `This video on "What is Cyber Security" gives an introduction to the Cyber Security world and talks about its basic concepts. You get to know different kinds of attack in today's IT world and how cybersecurity is the solution to these attacks.`,
      videoLink: 'ooJSgsB5fIE',
      ID: 24001,
    },
    {
      name: 'CyberSecurity Career',
      description:
        "This video talks about some of the major cybersecurity certifications required to get into the security industry.  If you're interested in a developing an exciting career in cyber security, check out 2018's top ten cybersecurity certifications.",
      videoLink: 'eO8l70pdVhY',
      ID: 24002,
    },
    {
      name: 'NIST Cybersecurity Framework',
      description:
        'This video will help you understand why and how the organizations are using cybersecurity framework to Identify, Protect and Recover from cyber attacks.',
      videoLink: 'uk8-jJgu8-I',
      ID: 24003,
    },
    {
      name: 'Demo On Man in The Middle Attack',
      description:
        'This video gives an indepth information about the Cyber Security world and talks about its basic concepts.',
      videoLink: '_QtSB0Old_Q',
      ID: 24004,
    },
    {
      name: 'Popular Tools for Cybersecurity Threats',
      description:
        "This video gives an introduction to the various tools used in the industry for the purpose of cybersecurity. You get to know different kinds of security tools in today's IT world and how they protect us against cyber threats/attacks.",
      videoLink: 'KgtevibJlTE',
      ID: 24005,
    },
    {
      name: 'Why Cybersecurity is Important',
      description:
        'This video talks about the Top 10 Reasons to Learn Cybersecurity and what makes the Cybersecurity a lucrative career choice.',
      videoLink: 'ZLyFt6BdxD4',
      ID: 24006,
    },
    {
      name: 'Skills Required in Cybersecurity Career',
      description:
        'Cybersecurity careers are complex and many roles can be found in banks, retailers and government organizations. This video will guide you through multiple career paths in cybersecurity.',
      videoLink: 'Sj4TD0LSC_k',
      ID: 24007,
    },
    {
      name: 'Types of Cyber Attacks',
      description:
        'This video will help you understand the types of cyber attacks that commonly plague businesses and how to tackle them and prevent them.',
      videoLink: 'Dk-ZqQ-bfy4',
      ID: 24008,
    },
    {
      name: 'Introduction to Cryptography',
      description:
        'Cryptography is essential to protect the information shared across the internet. This video on What is cryptography explaines you the fundamental concepts along with various encryption techniques.',
      videoLink: '5jpgMXt1Z9Y',
      ID: 24009,
    },
    {
      name: 'CyberSecurity Interview Tips',
      description:
        'This video consists of 50 questions from multiple cybersecurity domains which will help you in preparation of your interviews.',
      videoLink: 'otWst36CKyM',
      ID: 24010,
    },
    {
      name: 'Types of Computer Security',
      description:
        'This video gives an introduction to Computer Security and the types of computer security. Also, it teaches you various ways to secure your computer devices.',
      videoLink: 'd30n-YxOHo4',
      ID: 24011,
    },
    {
      name: 'Penetration Testing Tutorial',
      description:
        'We will go over one of the most rampant vulnerability of web-based applications i.e. Cross-Site Scripting.',
      videoLink: '1qzjWNcQVeI',
      ID: 24012,
    },
    {
      name: 'Secret Key Exchange',
      description:
        'This video teaches Diffie-Helman algorithm which is used to exchange the symmetric key between sender and receiver. The exchange of keys is done using a mathematical calculation individually at both ends.',
      videoLink: 'ochCOjm7XZk',
      ID: 24013,
    },
    {
      name: 'Introduction to Network Security',
      description:
        'This video gives an introduction to Network Security and its nuances.',
      videoLink: '6Jubl1UnJTE',
      ID: 24014,
    },
    {
      name: 'Penetration Testing using Metasploit',
      description:
        'This video gives an introduction to Web Application penetration testing using metasploit and metasploitable2.',
      videoLink: 'LUGkIvcQmGE',
      ID: 24015,
    },
    {
      name: 'Introduction to Netcat',
      description:
        'This video will help you understand Netcat, which is one of the most powerful, versatile tool used by ethical hackers for a multitude of purposes.',
      videoLink: 'rdgv-EqyeAU',
      ID: 24016,
    },
    {
      name: 'Application Security Tutorial',
      description:
        'This video will help you understand what application security is and measures taken to improve the security of an application often by finding, fixing and preventing security vulnerabilities.',
      videoLink: 'gfFKuiZ9Y7s',
      ID: 24017,
    },
    {
      name: 'Ethical Hacking for Beginners',
      description:
        'This video will give you an introduction to Ethical Hacking. This is a beginners tutorial covering all the fundamentals of Ethical Hacking.',
      videoLink: '2VSNn7UIXn8',
      ID: 24018,
    },
    {
      name: 'Understanding Cybersecurity Basics',
      description:
        'This video will introduce you to the world of cybersecurity and talks about its basic concepts.',
      videoLink: '5MMoxyK1Y9o',
      ID: 24019,
    },
    {
      name: 'Cybersecurity Salary',
      description:
        'This video covers all the basic aspects of becoming a certified Cybersecurity Engineer.',
      videoLink: 'e6_mVZg-Dms',
      ID: 24020,
    },
    {
      name: 'Kali Linux Tutorial',
      description:
        'This video will help you understand what Kali Linux, covers all its basic concepts and introduces you to few top Kali Linux tools.',
      videoLink: 'J36yzsCLPNg',
      ID: 24021,
    },
    {
      name: 'Kali Linux Tutorial',
      description:
        'This video will help you understand how to install Kali Linux on different platforms like windows, mac and Linux distributions.',
      videoLink: 'Bbe9YP86yoQ',
      ID: 24022,
    },
    {
      name: 'Ethical Hacking Course',
      description:
        'This video will give you a sneak peek into the career of an Ethical Hacker. ',
      videoLink: 'YkZBsiQj5lc',
      ID: 24023,
    },
    {
      name: 'Ethical Hacker Jobs & Salary',
      description:
        'This video covers all the basic aspects of becoming an ethical hacker. It establishes the concepts like roles, responsibilities, skills, salaries and even trends to get you up to speed with hacking.',
      videoLink: '1jGo3-4t568',
      ID: 24024,
    },
    {
      name: 'Ethical Hacking Career',
      description:
        'This video covers all the basic aspects of becoming an ethical hacker. It establishes the concepts like roles, responsibilities, skills, salaries and even trends to get you up to speed with hacking. The following topics are going to be discussed throughout the course of this video: \n',
      videoLink: 'SFdOLK997fw',
      ID: 24025,
    },
  ],
  additionalResources: [
    {
      title: 'Kali Linux',
      link: 'https://www.kali.org/docs/',
    },
    {
      title: 'Javascript Documentation',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
  ],
};

const CloudComputingGuide = {
  title: 'Cloud Computer',
  cover: CloudComputingCover,
  logo: CloudComputingLogo,
  duration: '1.5 Hours',
  description:
    'Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.',
  guideID: 25000,
  relatedGuides: [26000, 27000],
  sections: [
    {
      name: 'Introduction to Cloud Technologies',
      description:
        'Choosing a career path in IT can be both exciting and daunting — there’s so many options! Here we discuss what to consider when choosing a career path and how cloud computing can allow you to explore different areas of IT.',
      videoLink: 'cVKBFNxaM4k',
      ID: 25001,
    },
    {
      name: 'What are Cloud Technologies?',
      description:
        'Knowing and understanding common terminology is crucial to being successful in IT. Here we cover the basics of cloud computing and its impact on IT.',
      videoLink: 'jW0Y5SimnwM',
      ID: 25002,
    },
    {
      name: 'What Cloud Jobs are Available?',
      description:
        'Cloud computing has many applications. As a result, there are a variety of job roles that require cloud knowledge. Here we highlight some of those jobs. He also discusses the importance of continuing education when working in a cloud-related role.',
      videoLink: 'hVQRrhevo7k',
      ID: 25003,
    },
    {
      name: 'What Cloud Skills are Essential?',
      description:
        'Working in a cloud-based environment requires a specific skill set. Here we cover three must-have cloud computing skills: using tools, communication, and problem solving.',
      videoLink: 'udKBDRcj178',
      ID: 25004,
    },
    {
      name: 'Why You Should Learn Virtualization',
      description:
        'Cloud computing and virtualization work well together to help meet the needs of IT departments. Here we explain virtualization and the role it plays in cloud computing.',
      videoLink: 'bXRLvUeRgvY',
      ID: 25005,
    },
    {
      name: 'Why You Should Automate Everything',
      description:
        'Automation increases efficiency, accuracy, and standardizes processes — all of which are crucial to IT infrastructure. Here we discuss how automation plays a key role in successful cloud-based environments.',
      videoLink: '9fsOI3sxJCw',
      ID: 25006,
    },
    {
      name: 'Why You Should Learn Wide Area Networking',
      description:
        'Networking is where it all starts as far as IT goes. Not surprisingly, networking plays a huge role in cloud computing. Here we discuss networking elements such as connectivity and naming schemes — and how it all ties to cloud computing.',
      videoLink: 'fyS3QdYuMZI',
      ID: 25007,
    },
    {
      name: 'Every Cloud Service Has These Common Traits',
      description:
        'According to the National Institute of Standards and Technology, cloud computing services must possess five key characteristics. Here we define and explains these five traits, which include broad network access and shared resources.',
      videoLink: 'HVTQKUtkyhs',
      ID: 25008,
    },
    {
      name: 'What are the Cloud Deployment Models?',
      description:
        'There are four types of cloud deployment models as defined by the National Institute of Standards and Technology. Here we explain and compares the elements of private, public, hybrid, and community cloud models.',
      videoLink: 'X1qoKLL040A',
      ID: 25009,
    },
    {
      name: 'What are the Cloud Service Models?',
      description:
        'There are three types of cloud service models as defined by the National Institute of Standards and Technology. Here we explain the Infrastructure (IaaS), Platform (PaaS), and Software (SaaS) As-A-Service models.',
      videoLink: 'tOrMC1pDYjs',
      ID: 25010,
    },
    {
      name: 'Cloud Technologies in the Real World',
      description:
        'You might be surprised at just prevalent cloud computing is in everyday life. Here we walk through some real-world examples of cloud services in action. He also demonstrates how different cloud services work together to solve a variety of problems.',
      videoLink: 'oCFTbwTjcgQ',
      ID: 25011,
    },
    {
      name: 'How to Use Cloud Skills to Get a Job',
      description:
        'Many companies, large and small, use cloud computing services. As a result, there is a demand for IT professionals who can leverage cloud technologies. Here we highlight certifications that can help you hit the ground running as you pursue a career working with cloud-based services.',
      videoLink: 'bMXtoLpA5jU',
      ID: 25012,
    },
  ],
  additionalResources: [
    {
      title: 'Amazon Web Services Docs',
      link: 'https://docs.aws.amazon.com/',
    },
    {
      title: 'Google Cloud Platform Docs',
      link: 'https://cloud.google.com/docs',
    },
    {
      title: 'Microsoft Azure Docs',
      link: 'https://docs.microsoft.com/en-us/azure/',
    },
  ],
};

const GCPGuide = {
  title: 'Google Cloud Platform',
  cover: GCPCover,
  logo: GCPLogo,
  duration: '1.5 Hours',
  description:
    'Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.',
  guideID: 26000,
  relatedGuides: [25000, 7000],
  sections: [
    {
      name: 'Welcome to Google Cloud Platform',
      description:
        'Welcome to Google Cloud Platform! GCP can be overwhelming at first, but we’ll help you get started in this video.',
      videoLink: '4D3X6Xl5c_Y',
      ID: 26001,
    },
    {
      name: 'The Google Cloud Platform Free Trial and Free Tier',
      description:
        'Watch this short video to understand the difference between Google Cloud Platform’s (GCP) free tier and free trial and understand how they can help you test GCP or use it for development purposes at no or little cost.',
      videoLink: 'P2ADJdk5mYo',
      ID: 26002,
    },
    {
      name: 'The Cloud Console Tour',
      description:
        'Manage your cloud resources such as virtual machines, Kubernetes clusters, or Machine Learning APIs with the browser-based GCP Console. Tasks that you can access include: user and permissions management, activity logs, technical support, and the GCP’s browser-based command line (CloudShell).',
      videoLink: 'FsbYh47q55o',
      ID: 26003,
    },
    {
      name: 'Developer and Management Tools',
      description:
        'In this short GCP Essentials video, learn about the Cloud SDK, the gcloud Command-Line, and Cloud Shell. We explain how Google Cloud’s tools can help you accomplish tasks effectively, and establish powerful workflows across whichever OS you use.',
      videoLink: '3v9XWdFyh2E',
      ID: 26004,
    },
    {
      name: 'Compute',
      description:
        'Learn about Compute Engine Essentials. We discuss Platform Overview of Compute Engine.',
      videoLink: 'hHmBOv8z1D0',
      ID: 26005,
    },
    {
      name: 'Machine Learning',
      description:
        'In this short GCP Essentials video, see how GCP has made Machine Learning easier for you from behind the scenes. We further discuss Compute Engine Essentials with a Platform Overview.',
      videoLink: 'QR_LQQ-vvko',
      ID: 26006,
    },
    {
      name: 'Serverless',
      description:
        'We try to help you in understanding how Google Cloud Platform makes serverless work for you.',
      videoLink: 'PBw9vD_BO5A',
      ID: 26007,
    },
    {
      name: 'Data & Storage',
      description:
        'We discuss the Platform Overview of Google Cloud Storage. Learn about data and storage essentials, such as BigQuery, CloudSQL, Cloud Dataproc, and much more!',
      videoLink: 'tc2940Zwvyk',
      ID: 26008,
    },
    {
      name: 'Hands-on GCP',
      description:
        'Here, we try out the different tutorials, online courses, codelabs and solutions that Google Cloud Platform has to offer.',
      videoLink: 'eSYOjZuDtDw',
      ID: 26009,
    },
    {
      name: 'GCP Staying in touch',
      description:
        'Join us in a walk through of some prominent and some less obvious resources, that may work well for your GCP journey. Having the right sources of information and communication channels can be the difference between a regular and a highly-productive GCP user!',
      videoLink: 'vmTRaAkYH7k',
      ID: 26010,
    },
    {
      name: 'Running Containers',
      description:
        'Find out the top three ways you can run your containers on Google Cloud! Google Kubernetes Engine for a container orchestration solution, Cloud Run for a fully serverless approach and Compute Engine to simply use Virtual Machines.',
      videoLink: 'jh0fPT-AWwM',
      ID: 26011,
    },
    {
      name: 'Projects & Storage',
      description:
        'In this episode of GCP Essentials, we go over the relationship between Firebase and Google Cloud Platform. Stay tuned to find out how the two platforms have a lot in common and were conceived to nicely complement one another!',
      videoLink: 'xbmYmgBEj4o',
      ID: 26012,
    },
    {
      name: 'Functions & Firestore',
      description:
        'In this episode we’ll explore two more products: Cloud Functions, and Cloud Firestore.',
      videoLink: 'zR6CsTLTPsk',
      ID: 26013,
    },
    {
      name: 'Cloud Logging',
      description:
        'In this episode of Google Cloud Platform Essentials, we show you how logs are aggregated for all Google Cloud products, how to utilize them, and how to use them for tracking application errors.',
      videoLink: 'gyDp-Cl_MdA',
      ID: 26014,
    },
    {
      name: 'Error Reporting',
      description:
        'Error reporting can be tedious in terms of identifying and resolving bugs in your application. In this video of Google Cloud Platform Essentials, we’ll show you how to use Cloud Error Reporting to gain better observability over your workloads running in a multitude of cloud services.',
      videoLink: 'GANi9eRxhHs',
      ID: 26015,
    },
    {
      name: 'Debugging',
      description:
        'Google Cloud offers many tools that can help you manage your application services. In this video, we teach you how to set up and utilize Cloud Trace, Cloud Profiler, and Cloud Debugger to collect latency data across different services, memory-allocation information, and inspect application code locations without compromising the performance of your web application.',
      videoLink: 'CjGv1bDy9rI',
      ID: 26016,
    },
    {
      name: 'Code & Build tools',
      description:
        'In this video of GCP essentials, we discuss how you can use Cloud Code - an IDE extension - to rapidly iterate, debug, and deploy code for various Google Cloud libraries in an IDE. Moreover, we also talk about how to continuously deploy and integrate various cloud services with Cloud Build.',
      videoLink: 'TH_OuqZ1ZKU',
      ID: 26017,
    },
  ],
  additionalResources: [
    {
      title: 'Google Cloud Platform Docs',
      link: 'https://cloud.google.com/docs',
    },
    {
      title: 'Documentation',
      link: 'https://firebase.google.com/docs',
    },
  ],
};

const AzureGuide = {
  title: 'Azure',
  cover: AzureCover,
  logo: AzureLogo,
  duration: '7 Hours',
  description:
    'Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.',
  guideID: 27000,
  relatedGuides: [25000, 26000],
  sections: [
    {
      name: 'What is Cloud',
      description:
        'Get an introduction into the Cloud and how Azure works to provide services in the space.',
      videoLink: 'M7v52Wbe8Dc',
      ID: 27001,
    },
    {
      name: 'Azure Regions',
      description:
        'Learn about the concept of Azure Regions and how to use them.',
      videoLink: 'ptbKhbZM16Q',
      ID: 27002,
    },
    {
      name: 'Azure Docs',
      description: 'Learn about the concept of Azure Docs and how to use it.',
      videoLink: 'eKr_K2c87vs',
      ID: 27003,
    },
    {
      name: 'Azure Portal Basics',
      description:
        'Learn the ins and outs of the Azure Portal and get started with this powerful tool.',
      videoLink: 'X9n-fi0cVN8',
      ID: 27004,
    },
    {
      name: 'CloudShell',
      description:
        'Learn about the CloudShell and how to use it in this video.',
      videoLink: '-Xm6ViBAWKQ',
      ID: 27005,
    },
    {
      name: 'Resource Groups',
      description:
        'Learn about Resource Groups and their allocation in this video.',
      videoLink: 'C0y2108wfsQ',
      ID: 27006,
    },
    {
      name: 'Virtual Networks',
      description: 'Learn how to use Virtual Networks in Microsoft Azure.',
      videoLink: 'uGePuL5wPX0',
      ID: 27007,
    },
    {
      name: 'Create First VMs',
      description:
        'Learn how to create your first Virtual Machine in Microsoft Azure.',
      videoLink: 'fULXp1d1_2A',
      ID: 27008,
    },
    {
      name: 'Create First VMs 2',
      description:
        'Learn how to create your first Virtual Machine in Microsoft Azure.',
      videoLink: 'X5nvQ4I7Byk',
      ID: 27009,
    },
    {
      name: 'Clean Up',
      description:
        'Finish up your projects by learning Clean Up practices in Azure.',
      videoLink: 'wlr-6qp_FwM',
      ID: 27010,
    },
    {
      name: 'Connectivity Options',
      description:
        'Learn about various connectivity options and the uses of each one.',
      videoLink: 'HsOrDE0Mb5Q',
      ID: 27011,
    },
    {
      name: 'ExpressRoute',
      description:
        'Learn about ExpressRoute, a way to create private connections with Azure data centers.',
      videoLink: '8QDWuY0iWtk',
      ID: 27012,
    },
    {
      name: 'Virtual Network Gateway',
      description:
        'Learn about the Virtual Network Gateway, and how to leverage its use cases.',
      videoLink: 'rRKJdbUjAn0',
      ID: 27013,
    },
    {
      name: 'Point-to-Site VPN',
      description:
        'Learn how to create a Point-to-Site VPN with Microsoft Azure.',
      videoLink: 'Olw1YvkBu6Y',
      ID: 27014,
    },
    {
      name: 'Site-to-Site VPN',
      description:
        'Learn how to create a Site-to-Site VPN with Microsoft Azure.',
      videoLink: '9CCZ6I3DRqM',
      ID: 27015,
    },
    {
      name: 'Domain Controller',
      description:
        'Learn about Domain Controllers and their use cases in Microsoft Azure.',
      videoLink: '8vkTkF5jwSI',
      ID: 27016,
    },
    {
      name: 'Azure Firewall',
      description:
        'Learn about Azure Firewall and how it can be used to build protection for your systems.',
      videoLink: 'SM0s-ygsRN8',
      ID: 27017,
    },
    {
      name: 'Public IP Prefix',
      description:
        'Learn about the Public IP Prefix and how Azure related it to basic networking concepts.',
      videoLink: 'khAHNk6R2-8',
      ID: 27018,
    },
    {
      name: 'Azure Bastion',
      description:
        'Learn about Azure Bastion and the use cases of this powerful infrastructure.',
      videoLink: 'Ixl44IRkxj0',
      ID: 27019,
    },
    {
      name: 'Azure Firewall & Azure Bastion',
      description:
        'Learn how to combine Azure Firewall with Azure Bastion to create dynamic, secure software.',
      videoLink: 'xZJKbP3qNWY',
      ID: 27020,
    },
    {
      name: 'Azure-P2S OpenVPN',
      description:
        'Learn about an alternative VPN software offered by Microsoft Azure.',
      videoLink: 'OTAjPrfKS5U',
      ID: 27021,
    },
    {
      name: 'AzureDNS',
      description: 'Learn about AzureDNS and how to use this platform.',
      videoLink: '6kdBgO0jqaY',
      ID: 27022,
    },
    {
      name: 'Azure Charts',
      description:
        'Learn about Azure Charts and how you can use it to analyze and derive decisions from data.',
      videoLink: 'SLMTAkmpExU',
      ID: 27023,
    },
    {
      name: 'New Azure Portal',
      description:
        'Learn about the latest edition of Azure Portal and how to use it.',
      videoLink: 'u7uA8JCZsf4',
      ID: 27024,
    },
    {
      name: 'Top 10 Azure Cost Savings Tips',
      description:
        'Take a inside look at the most cost-effective ways to use Micrsoft Azure.',
      videoLink: 'sZRcqDkIQdk',
      ID: 27025,
    },
    {
      name: 'Azure ARC',
      description: 'Learn about Azure ARC, and its use cases.',
      videoLink: 'hblUwtiK8zY',
      ID: 27026,
    },
    {
      name: 'Azure Dedicated Hosts Secrets Revealed',
      description:
        'Learn about Azure Dedicated Hosts and the ins and outs of the service.',
      videoLink: 'b1_oaX_JqqA',
      ID: 27027,
    },
    {
      name: 'Proximity Placement Groups',
      description:
        'Learn about Proximity Placement Groups and how to use them in your projects.',
      videoLink: '0gdkpLdZv68',
      ID: 27028,
    },
    {
      name: 'New VM Sizes',
      description:
        'Learn about the latest improvements in Virtual Machines and their larger sizes.',
      videoLink: 'tFkSaBq11qA',
      ID: 27029,
    },
  ],
  additionalResources: [
    {
      title: 'Microsoft Azure Docs',
      link: 'https://docs.microsoft.com/en-us/azure/',
    },
  ],
};

const OOPGuide = {
  title: 'Object Oriented Programming',
  cover: OOPCover,
  logo: OOPLogo,
  duration: '1 Hour',
  description:
    'Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures.',
  guideID: 28000,
  relatedGuides: [3000, 9000],
  sections: [
    {
      name: 'What is programming?',
      description: 'Learn the fundamentals of basic programming concepts.',
      videoLink: 'UJcbFIV4JSQ',
      ID: 28001,
    },
    {
      name: 'What is a Class vs What is an Object?',
      description:
        'Learn the definitions of the key concepts of Classes and Objects and understand their differences.',
      videoLink: 'K8eOkzQ_o9w',
      ID: 28002,
    },
    {
      name: 'What is inheritance?',
      description:
        'Learn about in inheritance, and why it is extremely useful in programming.',
      videoLink: 'ajOYOxCanhE',
      ID: 28003,
    },
    {
      name: 'What is polymorphism?',
      description:
        'Learn about Polymorphism in programming, and how you can use it to create powerful programs.',
      videoLink: 'tIWm3I_Zu7I',
      ID: 28004,
    },
    {
      name: 'What is abstraction?',
      description:
        'Learn about the concept of abstraction in programming, and why it is key when it comes to coding in an object oriented langauge.',
      videoLink: 'L1-zCdrx8Lk',
      ID: 28005,
    },
    {
      name: 'What is encapsulation?',
      description:
        'Learn about encapsulation and more about how you can keep your classes safe and secure.',
      videoLink: 'sNKKxc4QHqA',
      ID: 28006,
    },
  ],
  additionalResources: [
    {
      title: 'Java Documentation',
      link: 'https://docs.oracle.com/en/java/',
    },
    {
      title: 'C# Documentation',
      link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
  ],
};

const DatabaseDesignGuide = {
  title: 'Database Design',
  cover: DatabaseDesignCover,
  logo: DatabaseDesignLogo,
  duration: '8 Hours',
  description:
    'Database design is the organization of data according to a database model. The designer determines what data must be stored and how the data elements interrelate. With this information, they can begin to fit the data to the database model.',
  guideID: 29000,
  relatedGuides: [13000, 2000],
  sections: [
    {
      name: 'What is a Database?',
      description:
        'A database is used to store large amounts of data. It differs from a spreadsheet in that it can be manipulated and managed in so many ways. A database will give us security, control, flexibility, and backups for our data.',
      videoLink: 'hG_3UHepr_M',
      ID: 29001,
    },
    {
      name: 'What is a Relational Database?',
      description:
        'In this video we talked about a relational database. A relational database is a database that sorts all information in relations. A relation is physically represented by a table. A table will have rows and columns organizing all of our information.  ',
      videoLink: 'zhu6jtlghIs',
      ID: 29002,
    },
    {
      name: 'RDBMS',
      description:
        'This video will talk about the relational database management system (RDBMS). The RDBMS is what allows us to do awesome things with our database. The RDBMS adds features as well as security. With a RDBMS we do not only have a database to store information but we can run queries and do things with our data. We use our RDBMS with SQL, a database programming language.',
      videoLink: 'X-81V5jNrYM',
      ID: 29003,
    },
    {
      name: 'Introduction to SQL',
      description:
        'This video will be an introduction to structured query language (SQL). SQL is a language used to talk to any relational database management system.',
      videoLink: 'Aw6DwXK0ZGM',
      ID: 29004,
    },
    {
      name: 'Naming Conventions',
      description:
        'This video will be explaining what naming conventions are in general and then proceed to explain what naming conventions we will be using. It is important to realize that many relational database management systems have different naming conventions.',
      videoLink: 'Rtw3YOYDt3A',
      ID: 29005,
    },
    {
      name: 'What is Database Design?',
      description:
        'Database Design is the process of structuring your database in a way that will reduce errors, incorrect data, and redundant data. This will give us an optimized, fast, safe, reliable database.',
      videoLink: 'nSzuHnkcfo8',
      ID: 29006,
    },
    {
      name: 'Data Integrity',
      description:
        'Integrity is important because it is what keeps our database functional and reliable. This video will discuss three areas of integrity that you should be thinking of when you design your database.',
      videoLink: '1D_h-yFtQVo',
      ID: 29007,
    },
    {
      name: 'Database Terms',
      description:
        "This video will go over some of the most common database terms.  Learn these because you don't want to have to look anything up during this series!",
      videoLink: 'pShj3gtYQik',
      ID: 29008,
    },
    {
      name: 'More Database Terms',
      description:
        'Here we will cover more terms that you should know when working with databases.',
      videoLink: '3-qSONSuZq0',
      ID: 29009,
    },
    {
      name: 'Atomic Values',
      description:
        'This video will talk about Atomic values. Atomic values store only one individual thing. As long as the value can be considered as an individual value then it is considered atomic.',
      videoLink: 'Uhy75wsS96s',
      ID: 29010,
    },
    {
      name: 'Relationships',
      description:
        'This video will be an introduction to relationships. Database design relationships, to be exact. The three kinds of relationships (logically) are one-to-one, one-to-many, and many-to-many. We will learn that many-to-many relationships cannot be stored within a database correctly.',
      videoLink: '2ko_rBZXTjE',
      ID: 29011,
    },
    {
      name: 'One-to-One Relationships',
      description:
        'This video will take the time needed to understand the basics of one-to-one relationships. One-to-one relationships are very easy to understand. Watch this video and this series in its entirety to fully understand designing relationships.',
      videoLink: 'jKfZiotyRhk',
      ID: 29012,
    },
    {
      name: 'One-to-Many Relationships',
      description:
        'One-to-Many relationships are when one row from tableA can have a relationship with multiple rows of tableB but each row of tableB can only have a relationship with one row from tableA.',
      videoLink: 'fCUrCNiA0j0',
      ID: 29013,
    },
    {
      name: 'Many-to-Many Relationships',
      description:
        'Many to Many relationships cannot be stored in a database practically. The only way we can think of many to many relationships is logically. This video will be explaining the logical design for a many to many relationships. ',
      videoLink: 'pv7P9R9JI-E',
      ID: 29014,
    },
    {
      name: 'Designing One-to-One Relationships',
      description:
        "This video will go over designing one to one relationships. This video will be useful for you when you're actually designing you database. One to One relationships (over multiple tables) are not as common because it is easier to store as a column within the parent table.",
      videoLink: 'M-Rw21NGORo',
      ID: 29015,
    },
    {
      name: 'Designing One-to-Many Relationships',
      description:
        'One to Many relationships will have a parent table and a child table. The child table will have a foreign key referencing the primary key in the parent table.',
      videoLink: 'DzchNE1pbrk',
      ID: 29016,
    },
    {
      name: 'Parent Tables and Child Tables',
      description:
        'Child tables reference a primary key using a foreign key. This helps us design our relationships properly.',
      videoLink: 'ZtK89kVLPzM',
      ID: 29017,
    },
    {
      name: 'Designing Many-to-Many Relationships',
      description:
        'The secret to designing many to many relationships is to use an intermediary table (junction table) to break a many-to-many relationship into two one-to-many relationships.',
      videoLink: 'GJbtDTGmOGY',
      ID: 29018,
    },
    {
      name: 'Summary of Relationships',
      description:
        'This video will sum up everything we learned from the last videos over relationships!',
      videoLink: 'o2aAU6wQZSw',
      ID: 29019,
    },
    {
      name: 'Introduction to Keys',
      description:
        'Keys are a big thing in database design and programming. Keys keep everything unique and are used to make connections between tables.',
      videoLink: 'AAREmlb4sTs',
      ID: 29020,
    },
    {
      name: 'Primary Key Index',
      description:
        'Primary key will automatically create an index used for database optimization! ',
      videoLink: 'AI4ifO-6-mo',
      ID: 29021,
    },
    {
      name: 'Look up Table',
      description:
        'A look up table is a table with a list of all possible values for a column in a different table. These values are then accessed through a foreign key. This is often used for one to many relationships where the many has only so many possibilities.',
      videoLink: 'sCCBJBb4HQA',
      ID: 29022,
    },
    {
      name: 'Superkey and Candidate Key',
      description:
        'A superkey is any number of columns that forces every row to be unique. A candidate key is taking the superkey and removing unnecessary columns to get the least number of columns possible for row uniqueness.',
      videoLink: 'kAXP8a1zuHo',
      ID: 29023,
    },
    {
      name: 'Primary Key and Alternate Key',
      description:
        '​A primary key are the candidate key that you select to be used as the main key for that table. All other candidate keys can be assigned as an alternate key. The Primary must be specified upon table creation. The alternate keys may be an official type of key in your RDBMS or it may be defined as simply a unique index.',
      videoLink: 'u77YwdnleS0',
      ID: 29024,
    },
    {
      name: 'Surrogate Key and Natural Key 1',
      description:
        'Surrogate keys are auto incremented numbers that have no real world meaning. Auto incremented means that each row will have the next highest number.  Natural keys are keys created from the columns already present within your table.',
      videoLink: 'GCA63syHvsk',
      ID: 29025,
    },
    {
      name: 'Surrogate Keys or Natural Keys 2',
      description:
        'This video will be talking about the pros and cons of using surrogate or natural keys. Keep in mind that the one that you should use can vary depending upon the purpose of your database.',
      videoLink: 'wcuqwXUF-gY',
      ID: 29026,
    },
    {
      name: 'Foreign Key',
      description:
        'Every row within a foreign key column references a primary key value of another table. This is used to make connections between tables within our database.',
      videoLink: 'qvxpTUc4nX0',
      ID: 29027,
    },
    {
      name: 'NOT NULL Foreign Key',
      description:
        'Foreign key columns with NOT NULL as a column characteristic will prevent any rows that do not have a parent primary key. This will force a relationship for every column.',
      videoLink: 'tANmR6BJSDg',
      ID: 29028,
    },
    {
      name: 'Foreign Key Constraints',
      description:
        'Foreign key constraints are used for referential integrity. Referential integrity protects the connections between tables. The three possibilities talked about in this video are do restrict, cascade, and set null.',
      videoLink: 'rOyZtFo4qaU',
      ID: 29029,
    },
    {
      name: 'Simple Key, Composite Key, Compound Key',
      description:
        'Simple keys are keys with only one column. Composite keys are keys with multiple columns where at least one column is not a key in itself. Compound keys are keys where all columns are themselves keys.',
      videoLink: 'vsGDtnBCwgg',
      ID: 29030,
    },
    {
      name: 'Review and Key Points',
      description:
        'This video is a summary of all of the keys that we have learned. We will be discussing the key types and the key categories.',
      videoLink: 'kDguqVQydco',
      ID: 29031,
    },
    {
      name: 'Introduction to Entity Relationship Modeling',
      description:
        'Entity relationship modeling is the process of designing your entire database structure. This video will be going over the basics of EER models.',
      videoLink: 'vmFFEok91GU',
      ID: 29032,
    },
    {
      name: 'Cardinality',
      description:
        'Cardinality is the maximum number of connections a row of one table can have with row(s) of another table. This is basically just a fancy word to describe the two options: 1, or many.',
      videoLink: 'alc5OWoLDkY',
      ID: 29033,
    },
    {
      name: 'Modality',
      description:
        'Modality is the least amount of relationships one row of a table can have with a row of another table. The only two possibilities are 0 or 1. 1 is the equivalent as marking the foreign key column as NOT NULL.',
      videoLink: '_JwVlbzOaP0',
      ID: 29034,
    },
    {
      name: 'Introduction to Database Normalization',
      description:
        'This will introduce you to the topic of Database Normalization. Over the next few videos we will be covering 1NF, 2NF and 3Nf in more detail!',
      videoLink: 'RZ9lvPRxwpg',
      ID: 29035,
    },
    {
      name: '1NF',
      description:
        'First normal form is the first step in database normalization. It has to do with making every column and value atomic.',
      videoLink: 'JjwEhK4QxRo',
      ID: 29036,
    },
    {
      name: '2NF',
      description:
        'Second normal form has to do with removing partial dependencies.  A partial dependency is when a column depends on only part of the primary key.',
      videoLink: 'WSKuxoAN35g',
      ID: 29037,
    },
    {
      name: '3NF',
      description:
        '3rd normal form deals with removing transitive dependencies,  A transitive dependency is when a column depends upon a column that depends upon the primary key.',
      videoLink: '6A41gVJ3g2g',
      ID: 29038,
    },
    {
      name: 'Indexes',
      description:
        'This video covers the basics of indexes. Indexing is an extremely important step of database design. Without Indexes database queries can take a substantial amount of time and hog system resources.',
      videoLink: 'EZ3jBam2IEA',
      ID: 29039,
    },
    {
      name: 'Data Types',
      description:
        'Data types are often classified into Dates, Numeric, and string.',
      videoLink: '4OlN9oianT4',
      ID: 29040,
    },
    {
      name: 'Introduction to Joins',
      description:
        'Joining is the process of taking data from multiple tables and putting it into one generated view.  This video will be pretty slow and easy to follow because I want you to fully grasp the idea of joins.',
      videoLink: 'agC06TR_MJU',
      ID: 29041,
    },
    {
      name: 'Inner Join 1',
      description:
        'Inner joins are used to take columns of 1 table and join them with columns of another table.',
      videoLink: '2lrNZdY3fE4',
      ID: 29042,
    },
    {
      name: 'Inner Join 2',
      description:
        'Inner joins across 3 or more tables will only return results that meet all join requirements.',
      videoLink: 'TMBgvCMvSiI',
      ID: 29043,
    },
    {
      name: 'Inner Join 3',
      description:
        'Inner Joins across multiple tables can be complicated at first, but when you take the time to think about it, they are very easy to understand!',
      videoLink: 'B47Idwxi3jI',
      ID: 29044,
    },
    {
      name: 'Introduction to Outer Joins',
      description:
        'Outer Joins will take all rows from either the left, right, or both tables.  This is good for when you want to return all of the rows for only one side of the join, but not the other.',
      videoLink: 'vPnajSbemUM',
      ID: 29045,
    },
    {
      name: 'Right Outer Join',
      description:
        'Right outer joins are similar to left outer joins. They basically do the same thing. Left is right and right is left and the same effect can be rendered by merely flipping the tables',
      videoLink: 'NHexrFjeO6o',
      ID: 29046,
    },
    {
      name: 'JOIN with NOT NULL Columns',
      description:
        'This video will help you understand the different results you can get when you have foreign keys that are labeled as NOT NULL.',
      videoLink: '6n_zA2Nd9vo',
      ID: 29047,
    },
    {
      name: 'Outer Join Across 3 Tables',
      description:
        'Outer Joins in situations of multiple tables make things complicated.  But with good understanding and a little practice the path will be clear.',
      videoLink: 'EqSI9_03qRM',
      ID: 29048,
    },
    {
      name: 'Alias',
      description:
        'An alias is another name for a column or table. This is useful for when you want to change the way a a query looks, make it easier to type out, or change the way our view is presented. ',
      videoLink: 'wlTRroeVkj0',
      ID: 29049,
    },
    {
      name: 'Self Join',
      description:
        'This video will dive into the topic of self joins. Self joins are when you join a table with itself. This can be useful for replacing values within the table or having more than one of the same column.',
      videoLink: 'W0p8KP0o8g4',
      ID: 29050,
    },
  ],
  additionalResources: [
    {
      title: 'SQL Documentation',
      link: 'https://dev.mysql.com/doc/',
    },
  ],
};

const XamarinGuide = {
  title: 'Xamarin',
  cover: XamarinCover,
  logo: XamarinLogo,
  duration: '4.5 Hours',
  description:
    'Xamarin is an open source cross-platform framework from Microsoft for building iOS, Android, & Windows apps with . NET from a single shared codebase.',
  guideID: 30000,
  relatedGuides: [9000, 18000],
  sections: [
    {
      name: 'Basics',
      description: 'Get familiar with the topics of Xamarin Forms',
      videoLink: 'C5DHkIcIIgc',
      ID: 30001,
    },
    {
      name: 'Setup',
      description:
        'Learn how to set up Xamarin Forms to get started with its concepts',
      videoLink: 'spPKRD0x_DQ',
      ID: 30002,
    },
    {
      name: 'Basic Login Screen',
      description: 'Create a basic login screen with Xamarin Forms',
      videoLink: 'eAZ4kPf5eTc',
      ID: 30003,
    },
    {
      name: 'Login Screen Design',
      description:
        'Start working on the UI and the design of the login screen using Xamarin Forms',
      videoLink: 'a5_DC2AnTZM',
      ID: 30004,
    },
    {
      name: 'Local Database',
      description:
        'Learn how to create a local database in your app using Xamarin Forms',
      videoLink: 'nFkwRuTG8eM',
      ID: 30005,
    },
    {
      name: 'REST API Connection',
      description:
        'Learn how to make asynchronous calls to your API using REST',
      videoLink: 'bXnEaHtPN48',
      ID: 30006,
    },
    {
      name: 'PCL Targeting',
      description:
        'Learn about the concept of PCL Targeting and learn how to apply it in Xamarin Forms',
      videoLink: 'MWtZIaBh97M',
      ID: 30007,
    },
    {
      name: 'Internet Connection Check 1',
      description:
        'Learn how to check for an internet connection in your mobile app using Xamarin Forms',
      videoLink: 'lAfrdG_0Zqg',
      ID: 30008,
    },
    {
      name: 'Internet Connection Check 2',
      description:
        'Learn how to check for an internet connection in your mobile app using Xamarin Forms',
      videoLink: 'O_bSj_LyGhA',
      ID: 30009,
    },
    {
      name: 'Segue',
      description:
        'Continue learning about Xamarin Forms and how to use it to make powerful mobile apps',
      videoLink: 'Wr7pzfXD1LY',
      ID: 30010,
    },
    {
      name: 'Master Detail',
      description:
        'Learn more about detail oriented mobile app development with Xamarin Forms',
      videoLink: 'K2be1RfDYK4',
      ID: 30011,
    },
    {
      name: 'Relative Layout',
      description:
        'Understand layout design in order to build powerful UI designs in Xamarin Forms',
      videoLink: 'xIgLjtr2oo8',
      ID: 30012,
    },
    {
      name: 'Settings',
      description:
        'Creating a Settings screen using Xamarin Forms in order to build a powerful mobile app',
      videoLink: '0q5QuvyYq-M',
      ID: 30013,
    },
    {
      name: 'ListView',
      description:
        'Learn how to construct lists in Xamarin Forms in order to display ordered data in your mobile app',
      videoLink: 'pBwuePbsnOI',
      ID: 30014,
    },
    {
      name: 'Custom ListView Cell',
      description: 'Learn how to customize ListView cell designs',
      videoLink: 'ASsF7sQHNLk',
      ID: 30015,
    },
    {
      name: 'ListView OnSelect',
      description:
        'Learn how to implement complex or simple functionality in your ListViews',
      videoLink: 'm2ytzs6oiJk',
      ID: 30016,
    },
    {
      name: 'SearchBar',
      description:
        'Using Xamarin Forms, learn how to construct a SearchBar in your mobile app',
      videoLink: 'cOIBBxnKmaw',
      ID: 30017,
    },
    {
      name: 'ToolBar Items',
      description:
        'Learn how to construct a ToolBar using Xamarin Forms and then use that to manipulate ToolBar Items',
      videoLink: 'DqFJx6CqKpc',
      ID: 30018,
    },
    {
      name: 'Display Alert Sheet',
      description:
        'Learn how to display Alerts in your mobile app using Xamarin Forms',
      videoLink: '3RAhShvxleE',
      ID: 30019,
    },
    {
      name: 'Picker and BoxView',
      description:
        'Learn how to create a Picker in Xamarin Forms and a BoxView to make your app more powerful',
      videoLink: 'fDz0fVkxrXs',
      ID: 30020,
    },
    {
      name: 'Label, Entry, Editor',
      description:
        'Learn core concepts about taking in user inputs in Xamarin Forms',
      videoLink: 'urjtheZVqUY',
      ID: 30021,
    },
    {
      name: 'DatePicker',
      description:
        'Learn how to control a DatePicker in Xamarin Forms to manipulate dates and times',
      videoLink: 'vxSbVsIEp4s',
      ID: 30022,
    },
    {
      name: 'Switch',
      description:
        'Learn how to use a Switch component in Xamarin Forms in order to make a more dynamic app',
      videoLink: 'psE0GjNQC00',
      ID: 30023,
    },
    {
      name: 'Circle Image',
      description:
        'Learn more about adding images to spice up your mobile app using Xamarin Forms',
      videoLink: 'kSIElbOdNDc',
      ID: 30024,
    },
    {
      name: 'MVVM Login',
      description:
        'Learn about the core web concept of MVVM Login and how to implement it using Xamarin Forms',
      videoLink: 'NWjNUNG1K1A',
      ID: 30025,
    },
    {
      name: 'Pie Chart',
      description:
        'Using OxyPlot, learn how to plot graphs and charts in Xamarin Forms',
      videoLink: 'IBjCa6A_42E',
      ID: 30026,
    },
    {
      name: 'SplashScreen',
      description:
        'Learn how to create a basic SplashScreen to your mobile app using Xamarin Forms',
      videoLink: 'J2B_0cxsm2o',
      ID: 30027,
    },
    {
      name: 'ProgressBar',
      description:
        'Learn how to add a ProgressBar to your Xamarin app to add more animations and dynamic features to the app',
      videoLink: 'A07FLVSXodM',
      ID: 30028,
    },
    {
      name: 'ScrollView, Event, Animation',
      description:
        'Learn about a variety of features in Xamarin Forms features to allow you to create a more interactive and dynamic mobile application',
      videoLink: 'Z_IqSDkPn2M',
      ID: 30029,
    },
    {
      name: 'Listview Delete, SQLite',
      description:
        'Using SQLite, learn how to make dynamic ListViews that rely on backend services like SQL',
      videoLink: 'z9JgdcguBqQ',
      ID: 30030,
    },
  ],
  additionalResources: [
    {
      title: 'Xamarin Documentation',
      link: 'https://docs.microsoft.com/en-us/xamarin/',
    },
    {
      title: 'C# Documentation',
      link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
  ],
};

export default [
  CGuide,
  HTMLGuide,
  PHPGuide,
  FlutterGuide,
  AndroidStudioGuide,
  SwiftGuide,
  KotlinGuide,
  CSSGuide,
  CPlusPlusGuide,
  CSharpGuide,
  MySQLGuide,
  FirestoreGuide,
  PythonGuide,
  MachineLearningGuide,
  JavaGuide,
  JavaScriptGuide,
  ReactJSGuide,
  ReactNativeGuide,
  RubyGuide,
  UnityGuide,
  UnrealGuide,
  GodotGuide,
  CybersecurityGuide,
  CloudComputingGuide,
  GCPGuide,
  AzureGuide,
  OOPGuide,
  DatabaseDesignGuide,
  XamarinGuide,
];
