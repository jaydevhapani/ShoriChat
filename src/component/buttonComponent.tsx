import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import popnisfont from '../assests/popnisfont';
import i18n from '../assests/i18n';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';
import {fontPixel, heightPixel, widthPixel} from '../constant';

interface PressableProps {
  buttonName?: string;
  onPress?: Callback;
  buttonStyle?: any;
  textStyle?: any;
}

const ButtonComponent: React.FC<PressableProps> = props => {
  return (
    <Pressable
      style={[styles.Container, props.buttonStyle && props.buttonStyle]}
      onPress={() => props.onPress && props.onPress()}>
      <Text style={[styles.title, props.textStyle]}>{props.buttonName}</Text>
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  Container: {
    height: heightPixel(70),
    width: widthPixel(374),
    borderRadius: heightPixel(18),
    backgroundColor: '#5A5FEA',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: fontPixel(18),
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'white',
  },
});
