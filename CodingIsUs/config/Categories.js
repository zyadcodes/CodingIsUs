// This will be the file containing all of thee categories and which guides are associated with them
import GuideTitles from './GuideTitles';

const Languages = {
  title: 'Languages',
  iconName: 'code',
  iconColor: '#99E265',
  guideIDs: [
    3000,
    4000,
    7000,
    8000,
    9000,
    11000,
    10000,
    12000,
    14000,
    16000,
    19000,
    20000,
  ],
};

const MobileAppDevelopment = {
  title: 'Mobile App Development',
  iconName: 'mobile',
  iconColor: '#800080',
  guideIDs: [17000, 18000, 19000, 6000],
};

const Databases = {
  title: 'Databases',
  iconName: 'database',
  iconColor: '#FF5C5C',
  guideIDs: [2000, 13000, 14000],
};

const WebDevelopment = {
  title: 'Web Development',
  iconName: 'desktop',
  iconColor: '#FFBD4A',
  guideIDs: [5000, 11000, 10000],
};

const Concepts = {
  title: 'Concepts',
  iconName: 'atom',
  iconColor: '#1520A6',
  guideIDs: [15000, 24000, 25000],
};

const GameDevelopment = {
  title: 'Game Development',
  iconName: 'gamepad',
  iconColor: '#0EBD60',
  guideIDs: [21000, 22000, 23000, 9000],
};

const AllGuides = {
  title: 'All Guides',
  iconName: 'window-restore',
  iconColor: '#80D8FF',
  guideIDs: GuideTitles.map((eachGuide) => eachGuide.guideID),
};

export default [
  Languages,
  MobileAppDevelopment,
  Databases,
  WebDevelopment,
  GameDevelopment,
  Concepts,
  AllGuides,
];
