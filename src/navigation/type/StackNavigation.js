import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../../container/Splash';
import HomeScreen from '../../Tab/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
  )
}

export default StackNavigation;