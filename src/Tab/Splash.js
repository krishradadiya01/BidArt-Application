import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../themes/colors';
import {styles} from '../themes';
import image from '../assets/images/index';
import {StorageValueGet} from '../utils/asyncStrorage';

const Splash = props => {
  // setTimeout(() => {
  //   props.navigation.replace('OnBoarding');
  // }, 1000);

  useEffect(() => {
    setTimeout(() => {
      asyncProcess();
    }, 2000);
  });

  const asyncProcess = async () => {
    try {
      let async = await StorageValueGet();
      if (async) {
        let {onBoardingValue, accessValue} = async;
        if (!!accessValue) {
          props.navigation.navigate('HomeScreen');
        } else if (!!onBoardingValue) {
          props.navigation.navigate('AuthNavigation');
        } else {
          props.navigation.navigate('OnBoarding');
        }
      }
    } catch (e) {
      console.log('error ', e);
    }
  };

  return (
    <SafeAreaView style={localStyles.Parent}>
      <Image source={image.splash} style={{backgroundColor: colors.default}} />
      <Image source={image.loading} style={localStyles.loader} />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  Parent: {
    backgroundColor: colors.default,
    ...styles.center,
    ...styles.flex,
  },
  loader: {
    ...styles.t300,
  },
});

export default Splash;
