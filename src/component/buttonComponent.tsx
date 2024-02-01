import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import popnisfont from '../assests/popnisfont';
import i18n from '../assests/i18n';
import { Callback } from '@react-native-async-storage/async-storage/lib/typescript/types';

interface PressableProps {
  buttonName?: string;
  onPress?: Callback
}

const ButtonComponent: React.FC<PressableProps> = props => {
  return (
    <Pressable style={styles.Container} onPress={() => props.onPress && props.onPress()}>
      <Text style={styles.title}>{props.buttonName}</Text>
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  Container: {
    height: 60,
    width: 374,
    borderRadius: 10,
    backgroundColor: '#5A5FEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'white',
  },
});
