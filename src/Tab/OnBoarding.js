import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {styles} from '../themes';
import {OnBoardingData} from '../api/constant';
import images from '../assets/images/index';
import {colors} from '../themes/colors';
import typography from '../themes/typography';
import {deviceWidth, moderateScale} from '../common/constants';
import { OnBoardingToken, StorageValueGet } from '../utils/asyncStrorage';

const OnBoarding = props => {
  const [onBoarding, setOnBoarding] = useState(0);
  const slideRef = useRef(null);

  const _ViewableItemsChanged = useCallback(({viewableItems}) => {
    setOnBoarding(viewableItems[0]?.index);
  }, []);

  const onPressRightArrow = () => {
    if (onBoarding === 2) {
      props.navigation.navigate('HomeScreen');
      OnBoardingToken(true)
    } else {
      slideRef.current._listRef._scrollRef.scrollTo({
        x: deviceWidth * (onBoarding + 1),
      });
    }
  };

  const NextIndicator = () => {
    // console.log('onBoarding====>', onBoarding);
    switch (onBoarding) {
      case 1:
        return <Image source={images.Next} style={localStyles.ImgStyle} />;
      case 2:
        return <Image source={images.Start} style={localStyles.ImgStyle} />;
      default:
        return <Image source={images.Next1} style={localStyles.ImgStyle} />;
    }
  };

  return (
    <View style={styles.flex}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator="false"
        data={OnBoardingData}
        renderItem={({item}) => {
          return (
            <View style={localStyles.Parent}>
              <Image style={localStyles.Frame} source={item.image} />
              <Text style={localStyles.titleTxt}>{item.titleTxt}</Text>
              <Text style={localStyles.description}>{item.description}</Text>
            </View>
          );
        }}
        onViewableItemsChanged={_ViewableItemsChanged}
        ref={slideRef}
      />

      <View style={styles.rowCenter}>
        {OnBoardingData.map((_, index) => (
          <View
            key={index.toString()}
            style={[
              localStyles.bottomIndicatorStyle,
              {
                width:
                  index !== onBoarding ? moderateScale(5) : moderateScale(20),
                backgroundColor:
                  index !== onBoarding ? colors.dimGray : colors.default,
              },
            ]}
          />
        ))}
      </View>
      <TouchableOpacity style={localStyles.NextInd} onPress={onPressRightArrow}>
        <NextIndicator />
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  Parent: {
    ...styles.center,
    ...styles.alignCenter,
  },
  Frame: {
    width: deviceWidth,
    height: deviceWidth,
  },
  titleTxt: {
    ...typography.fontSizes.f24,
    width: moderateScale(318),
    textAlign: 'center',
    ...styles.mt30,
    ...typography.fontWeights.Bold,
  },
  description: {
    ...typography.fontWeights.Regular,
    fontSize: moderateScale(16),
    textAlign: 'center',
    width: moderateScale(327),
    height: moderateScale(48),
    ...styles.mt15,
  },
  NextInd: {
    ...styles.center,
    ...styles.mb50,
  },
  bottomIndicatorStyle: {
    height: moderateScale(4),
    width: moderateScale(32),
    borderRadius: moderateScale(10),
    ...styles.mh5,
    ...styles.mb80,
  },
  ImgStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
});

export default OnBoarding;
