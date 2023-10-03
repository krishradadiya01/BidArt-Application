import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth, moderateScale} from '../../common/constants';
import {colors} from '../../themes/colors';
import {styles} from '../../themes';
import typography from '../../themes/typography';
import strings from '../../i18n/commonString';
import CommonTxtInp from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import images from '../../assets/images';
import CText from '../../components/common/CText';

const Login = props => {
  const [email, setEmail] = useState(email);

  const onChangeText = txt => {
    setEmail(txt);
  };

  const ArrayValue = [1, 2, 3, 4, 5];
  return (
    <SafeAreaView>
      <View style={localStyles.Parent}>
        {ArrayValue.map(item => {
          return (
            <View
              style={item <= 1 ? localStyles.ActiveChild : localStyles.child}
            />
          );
        })}
      </View>
      <View>
        <CText style={localStyles.EmailTxt} type={'B24'}>
          {strings.EnterEmail}
        </CText>
        <CText style={localStyles.EmailLineTxt} type={'M16'}>
          {strings.EmailLine}
        </CText>
        <CText style={localStyles.YourEmailTxt} type={'M14'}>
          {strings.YourEmail}
        </CText>

        <CommonTxtInp
          textInputStyle={localStyles.EmailTxtInp}
          placeholderText={strings.SampleEmail}
          value={email}
          onChangeText={onChangeText}
        />

        <CButton OnPress={() => props.navigation.navigate('CreatePassword')} />

        <View style={localStyles.ParentORTxt}>
          <View style={localStyles.ChildORTxt}></View>
          <CText style={localStyles.OrTxt} type={'M12'}>
            {strings.Or}
          </CText>
          <View style={localStyles.ChildORTxt}></View>
        </View>

        <TouchableOpacity style={localStyles.ParentGoogle}>
          <Image source={images.Google} style={localStyles.GooglePng} />
          <CText style={localStyles.ContinueGoogleTxt} type={'S16'}>
            {strings.ContinueGoogle}
          </CText>
        </TouchableOpacity>

        <TouchableOpacity style={localStyles.ParentGoogle}>
          <Image source={images.FaceBook} style={localStyles.GooglePng} />
          <CText style={localStyles.ContinueGoogleTxt} type={'S16'}>
            {strings.ContinueFacebook}
          </CText>
        </TouchableOpacity>

        <TouchableOpacity style={localStyles.ParentGoogle}>
          <Image source={images.Apple} style={localStyles.GooglePng} />
          <CText style={localStyles.ContinueGoogleTxt} type={'S16'}>
            {strings.ContinueApple}
          </CText>
        </TouchableOpacity>
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
  EmailTxt: {
    width: moderateScale(275),
    height: moderateScale(32),
    ...styles.mt30,
    ...styles.ml15,
  },
  EmailLineTxt: {
    width: moderateScale(314),
    height: moderateScale(48),
    ...styles.mt15,
    ...styles.ml15,
  },
  YourEmailTxt: {
    ...styles.ml15,
    ...styles.mt35,
  },
  EmailTxtInp: {
    borderRadius: moderateScale(0),
    borderColor: colors.lightGray,
    ...styles.ml15,
    ...styles.mt10,
    ...styles.pl10,
    width: moderateScale(344),
    height: moderateScale(52),
  },
  OrTxt: {
    CTextAlign: 'center',
    ...styles.ph20,
  },
  GooglePng: {
    width: moderateScale(30),
    height: moderateScale(35),
    resizeMode: 'cover',
  },
  ParentGoogle: {
    ...styles.flexRow,
    ...styles.center,
    width: moderateScale(344),
    height: moderateScale(52),
    borderColor: colors.lightGray,
    borderWidth: moderateScale(2),
    ...styles.ml15,
    ...styles.mt25,
  },
  ContinueGoogleTxt: {
    ...styles.pl10,
  },
  ParentORTxt: {
    ...styles.center,
    ...styles.flexRow,
    ...styles.mt35,
  },
  ChildORTxt: {
    width: moderateScale(143),
    height: moderateScale(1),
    backgroundColor: colors.lightGray,
  },
});

export default Login;
