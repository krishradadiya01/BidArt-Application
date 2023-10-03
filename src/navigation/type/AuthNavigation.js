import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNav} from '../NavigationKeys';
import {AuthRoute} from '../NavigationRoutes';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AuthNav.Login}
        component={AuthRoute.Login}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name={AuthNav.CreatePassword}
        component={AuthRoute.CreatePassword}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
