// This is going to contain the bottom tab navigator that will be used in the mobile app
import React, {useState, useEffect} from 'react';
import colors from '../config/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllCategoriesScreen from './screens/AllCategoriesScreen/AllCategoriesScreen';
import GuidesListScreen from './screens/GuidesListScreen/GuidesListScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import {Icon} from 'react-native-elements';
import {Text} from 'react-native';
import admob, {
  MaxAdContentRating,
  AdsConsent,
  AdsConsentStatus,
} from '@react-native-firebase/admob';

const Tab = createBottomTabNavigator();

const MyTabs = () => {

  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: colors.lightGray,
        showLabel: false,
      }}>
      <Tab.Screen
        name="AllCategoriesScreen"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              type={'font-awesome'}
              name={'home'}
              size={size}
              color={color}
            />
          ),
        }}
        component={AllCategoriesScreen}
      />
      <Tab.Screen
        name="GuidesListScreen"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon type={'font-awesome'} name={'th'} size={size} color={color} />
          ),
        }}
        component={GuidesListScreen}
      />
      <Tab.Screen
        name="SettingsScreen"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              type={'font-awesome'}
              name={'cogs'}
              size={size}
              color={color}
            />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
