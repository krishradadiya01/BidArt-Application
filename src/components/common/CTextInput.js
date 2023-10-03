import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../../common/constants';

function CommonTxtInp({
  textInputStyle,
  placeholderText,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View>
      <TextInput
        style={[styles.usNm, textInputStyle]}
        placeholder={placeholderText}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  usNm: {
    backgroundColor: 'white',
    fontSize: moderateScale(14),
    padding: moderateScale(5),
    width: moderateScale(250),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
  },
});

export default CommonTxtInp;
