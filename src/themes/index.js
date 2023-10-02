import {StyleSheet} from 'react-native';
import flex from './flex';
import position from './position';
import margin from './margin';
import padding from './padding';

export const styles = StyleSheet.create({
  ...flex,
  ...position,
  ...margin,
  ...padding
});
