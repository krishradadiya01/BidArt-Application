import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNav} from '../NavigationKeys';
import {StackRoute} from '../NavigationRoutes';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackNav.Splash}
        component={StackRoute.Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.OnBoardingScreen}
        component={StackRoute.OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={StackNav.AuthNavigation}
        component={StackRoute.AuthNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
