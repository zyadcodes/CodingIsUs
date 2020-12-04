// This is going to contain the bottom tab navigator that will be used in the mobile app
import React from 'react';
import colors from '../config/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllCategoriesScreen from './screens/AllCategoriesScreen/AllCategoriesScreen';
import PlaygroundScreen from './screens/PlaygroundScreen/PlaygroundScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();

const MyTabs = ({navigation, route}) => {
  return (
    <Tab.Navigator
      lazy={true}
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
        children={() => (
          <AllCategoriesScreen route={route} navigation={navigation} />
        )}
      />
      <Tab.Screen
        name="PlaygroundScreen"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              type={'font-awesome'}
              name={'code'}
              size={size * 1.5}
              color={color}
            />
          ),
        }}
        children={() => (
          <PlaygroundScreen route={route} navigation={navigation} />
        )}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              type={'font-awesome'}
              name={'user'}
              size={size * 1.5}
              color={color}
            />
          ),
        }}
        children={() => <ProfileScreen route={route} navigation={navigation} />}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
