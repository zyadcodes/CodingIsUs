// This is going to be the MainStackNavigator which will connect all of the different screens together in this app
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MainTabNavigator from './MainTabNavigator';
import GuideScreen from './screens/GuideScreen/GuideScreen';
import GuidesListScreen from './screens/GuidesListScreen/GuidesListScreen';
import SectionScreen from './screens/SectionScreen/SectionScreen';
import ResourcesScreen from './screens/ResourcesScreen/ResourcesScreen';

// Declares the Stack Navigator
const Stack = createStackNavigator();

// Links the screens to the Stack Navigator
const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={'BottomTabs'}>
       <Stack.Screen
        name={'BottomTabs'}
        component={MainTabNavigator}
        screenOptions={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={'GuidesListScreen'}
        component={GuidesListScreen}
        screenOptions={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={'GuideScreen'}
        component={GuideScreen}
        screenOptions={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={'SectionScreen'}
        component={SectionScreen}
        screenOptions={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={'ResourcesScreen'}
        component={ResourcesScreen}
        screenOptions={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

// Exports the module
export default MainStackNavigator;
