import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../../container/Splash';
import OnBoarding from '../../Tab/OnBoarding';
import HomeScreen from '../../Tab/Screens/HomeScreen';
import DiscoverScreen from '../../Tab/Screens/DiscoverScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigation;
