import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { colors } from '../../themes/colors';
import { moderateScale } from '../../common/constants';
import { styles } from '../../themes';
import typography from '../../themes/typography';

const Common_Btn = props => {
  let {ParentLoginBtn, ChildLoginBtn, text, OnPress} = props;

  return (
    <TouchableOpacity style={[localStyles.ParentButton, ParentLoginBtn]} onPress={OnPress}>
      <Text style={[localStyles.ChildButton, ChildLoginBtn]}>{text || 'Next'}</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  ParentButton: {
    backgroundColor: colors.default,
    width: moderateScale(344),
    height: moderateScale(54),
    ...styles.ml15,
    ...styles.center,
    borderWidth: 2,
    ...styles.mt35
  },

  ChildButton: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    ...typography.fontSizes.f16,
    ...typography.fontWeights.Bold
  },
});

export default Common_Btn;
