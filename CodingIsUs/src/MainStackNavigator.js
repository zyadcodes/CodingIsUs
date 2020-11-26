// This is going to be the MainStackNavigator which will connect all of the different screens together in this app
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import MainTabNavigator from './MainTabNavigator';
import GuideScreen from './screens/GuideScreen/GuideScreen';
import GuidesListScreen from './screens/GuidesListScreen/GuidesListScreen';
import SectionScreen from './screens/SectionScreen/SectionScreen';
import ResourcesScreen from './screens/ResourcesScreen/ResourcesScreen';
import PolicyScreen from './screens/PolicyScreen/PolicyScreen';
import LaunchScreen from './screens/LaunchScreen/LaunchScreen';
import SettingScreen from './screens/SettingsScreen/SettingsScreen';

// Declares the Stack Navigator
const Stack = createStackNavigator();

// Links the screens to the Stack Navigator
const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={'LaunchScreen'}>
      <Stack.Screen
        name={'BottomTabs'}
        component={MainTabNavigator}
        options={{
          gestureEnabled: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name={'LaunchScreen'}
        component={LaunchScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={'GuidesListScreen'}
        component={GuidesListScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={'GuideScreen'}
        component={GuideScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={'SectionScreen'}
        component={SectionScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={'ResourcesScreen'}
        component={ResourcesScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={'PolicyScreen'}
        component={PolicyScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={'SettingsScreen'}
        component={SettingScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

// Exports the module
export default MainStackNavigator;
