import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import React from 'react';
import { deviceWidth, moderateScale } from '../../common/constants';
import { styles } from '../../themes';
import { colors } from '../../themes/colors';
import typography from '../../themes/typography';

const CreatePassword = () => {
  const ArrayValue = [1, 2, 3, 4, 5];
  return (
    <SafeAreaView>
      <View style={localStyles.Parent}>
        {ArrayValue.map(item => {
          return item <= 2 ? (
            <View style={localStyles.ActiveChild}></View>
          ) : (
            <View style={localStyles.child}></View>
          );
        })}
      </View>
      <View>
        <Text styles={localStyles.CreatePasswordTxt}>{strings.CreatePassword}</Text>
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  Parent: {
    width: deviceWidth,
    ...styles.flexRow,
    ...styles.mt25,
    ...styles.mh10,
  },
  child: {
    height: moderateScale(4),
    width: moderateScale(60),
    ...styles.mh5,
    backgroundColor: colors.lightGray,
  },
  ActiveChild: {
    height: moderateScale(4),
    width: moderateScale(60),
    ...styles.mh5,
    backgroundColor: colors.default,
  },
  CreatePasswordTxt: {
    ...typography.fontWeights.Bold,
    width: moderateScale(275),
    height: moderateScale(32),
    fontSize: moderateScale(24),
    ...styles.mt30,
    ...styles.ml15,
  },
});

export default CreatePassword;
