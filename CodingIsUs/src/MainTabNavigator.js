// This is going to contain the bottom tab navigator that will be used in the mobile app
import React from 'react';
import colors from '../config/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllCategoriesScreen from './screens/AllCategoriesScreen/AllCategoriesScreen';
import GuidesListScreen from './screens/GuidesListScreen/GuidesListScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        style: {
          height: '12%',
          alignItems: 'center',
          justifyContent: 'center',
        },
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
              size={size * 1.5}
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
            <Icon
              type={'font-awesome'}
              name={'th'}
              size={size * 1.5}
              color={color}
            />
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
              size={size * 1.5}
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
