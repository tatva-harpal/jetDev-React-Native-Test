import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthTab from './AuthTab';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AuthenticatedTab" component={AuthTab} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
