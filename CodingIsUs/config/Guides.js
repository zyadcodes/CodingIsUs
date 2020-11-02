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

const FirestoreGuide = {
  title: 'Firestore',
  cover: FirestoreCover,
  logo: FirebaseLogo,
  description:
    'Cloud Firestore is a NoSQL document database that lets you easily store, sync, and query data for your mobile and web apps at a global scale.',
  duration: '1 Hour',
  guideID: 2000,
  relatedGuides: [13000, 6000],
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
      description: 'Learn how to create your first webstie',
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
  relatedGuides: [2000, 14000],
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
  duration: '2.5 Hours',
  guideID: 15000,
  relatedGuides: [12000, 3000],
  sections: [
    {
      name: 'Introduction',
      description: 'Get an introduction to Machine Learning with Python',
      videoLink: 'ujTCoH21GlA',
      ID: 15001,
    },
    {
      name: 'Linear Regression 1',
      description:
        'Learn about the basics of creating a linear regression model',
      videoLink: '45ryDIPHdGg',
      ID: 15002,
    },
    {
      name: 'Linear Regression 2',
      description:
        'Get a deeper insight into implementing a Linear Regression model',
      videoLink: '1BYu65vLKdA',
      ID: 15003,
    },
    {
      name: 'Saving Models & Plotting Data',
      description:
        'Learn how to save your ML models and plot the data and the results',
      videoLink: '3AQ_74xrch8',
      ID: 15004,
    },
    {
      name: 'K-Nearest Neighbors 1',
      description:
        'Learn how to deal with irregular data using the KNN techniques',
      videoLink: 'ddqQUz9mZaM',
      ID: 15005,
    },
    {
      name: 'K-Nearest Neighbors 2',
      description: 'Understand how K-Nearest Neighbors work on a high level',
      videoLink: 'vwLT6bZrHEE',
      ID: 15006,
    },
    {
      name: 'K-Nearest Neighbors 3',
      description: 'Learn how to implement a K-Nearest Neighbors model',
      videoLink: 'TQKI0KE-JYY',
      ID: 15007,
    },
    {
      name: 'Using Sci-Kit Learn Datasets',
      description:
        'Learn how to implement and create models for datasets using Sci-Kit Learn',
      videoLink: 'dNBvQ38MlT8',
      ID: 15008,
    },
    {
      name: 'Support Vector Machines 1',
      description:
        'Get a high level understanding for how Support Vector Machines work',
      videoLink: 'JHxyrMgOUWI',
      ID: 15009,
    },
    {
      name: 'Support Vector Machine',
      description:
        'Learn how to implement a Support Vector Machine to create powerful machine learning models',
      videoLink: 'l2I8NycJMCY',
      ID: 15010,
    },
    {
      name: 'K-Means Clustering 1',
      description:
        'Get a high level understanding of what K-Means Clustering is and why it is a useful strategy when implementing models',
      videoLink: 'g1Zbuk1gAfk',
      ID: 15011,
    },
    {
      name: 'K-Means Clustering 2',
      description: 'Learn how to implement K-Means Clustering in a real model',
      videoLink: 'zixd-si9Q-o',
      ID: 15012,
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
      description: 'Learn how to capitalize, reverse, and perform other string operations in Python',
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
      description: 'Learn how to define and use functions in Ruby to reuse existing code',
      videoLink: 'yQJqzS8Ns2E',
      ID: 20011,
    },
    {
      name: '- counter - index - .each do',
      description: 'Learn about iteration in Ruby and to use different iteration methods',
      videoLink: 'VkUsiyv54Vc',
      ID: 20012,
    },
    {
      name: 'Functions with Numbers',
      description: 'Learn how to create more dynamic functions to write powerful programs in Ruby',
      videoLink: 'YmxfZIaSIW8',
      ID: 20013,
    },
    {
      name: 'Pythagorean Theorem Calculator',
      description: 'Write your first program in Ruby to calculate the Pythagorean Theorem',
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
      description: 'Write another program that finds and replaces by indicies within an array',
      videoLink: 'LZW-w-_IIxs',
      ID: 20016,
    },
    {
      name: 'Multidimensional Arrays',
      description: 'Learn about more powerful versions of arrays that let you create complex data structures',
      videoLink: 'pxpJpCIFHYs',
      ID: 20017,
    },
    {
      name: 'Find Prime Numbers',
      description: 'Write a program to find prime numbers using all the concepts in Ruby',
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
      description: 'Write a program that utilizes complex comparison operators in Ruby',
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
      description: 'Learn more about advanced hashing and using symbols as well',
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
      description: 'Learn about create, read, update, and delete operations in CRUD using Ruby',
      videoLink: 'BmxzCBEQ6OI',
      ID: 20024,
    },
    {
      name: 'CRUD Operations 2',
      description: 'Learn about create, read, update, and delete operations in CRUD using Ruby',
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
      description: 'Learn about important keywords to handle asynchronous code in Ruby',
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
      description: 'Learn about a popular exterior platform known as the SketchUp Ruby Console',
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
      description: 'Get a deeper explanation about the concept of Yielding in Ruby',
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
      description: 'Learn about Ruby Lambdas and how they are different than Procs in Ruby',
      videoLink: 'W3B042cPdsU',
      ID: 20034,
    },
    {
      name: 'Ruby Classes',
      description: 'Get an overview of object oriented programming in Ruby using instance variables, objects, and classes',
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
];
