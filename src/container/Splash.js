import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../themes/colors';
import {styles} from '../themes';
import image from '../assets/images/index'

const Splash = props => {
  console.log('props', props);
  setTimeout(() => {
    props.navigation.replace('HomeScreen');
  }, 1000);

  return (
    <SafeAreaView style={localStyles.Parent}>
      <Image
        source={image.splash}
        style={{backgroundColor: colors.default}}
      />
      <Image
        source={image.loading}
        style={localStyles.loader}
      />
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
    ...styles.t100,
  },
});

export default Splash;
