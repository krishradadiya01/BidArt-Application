import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import strings from './src/i18n/mergeString';
import commonString from './src/i18n/commonString';
import Splash from './src/container/Splash';
import StackNavigation from './src/navigation/type/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
