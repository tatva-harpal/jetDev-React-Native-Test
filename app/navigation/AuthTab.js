import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements/dist/icons/Icon';

import HomeScreen from '../Screens/HomeScreen';
import FavouriteScreen from '../Screens/FavouriteScreen';

import {colors} from '../utils/theme';
import {scaledSize} from '../utils';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let iconType;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home-filled' : 'home';
            iconType = focused ? 'material' : 'octicon';
          } else if (route.name === 'FavouriteScreen') {
            iconName = focused ? 'star-fill' : 'star';
            iconType = 'octicon';
          }

          return (
            <Icon
              name={iconName}
              type={iconType}
              color={colors.primary}
              size={scaledSize(20)}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let name;
          let weight;

          if (route.name === 'HomeScreen') {
            name = 'Home';
            weight = focused ? '600' : '400';
          } else if (route.name === 'FavouriteScreen') {
            name = 'Favourite';
            weight = focused ? '600' : '400';
          }
          return (
            <Text
              style={{
                color: colors.primary,
                fontSize: scaledSize(11),
                fontWeight: weight,
              }}>
              {name}
            </Text>
          );
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: () => (
            <Text
              style={{
                color: colors.primary,
                fontSize: scaledSize(11),
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{
          tabBarLabel: () => (
            <Text
              style={{
                color: colors.primary,
                fontSize: scaledSize(11),
              }}>
              Favourite
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
