import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import image from '../assests/image';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';
import navigationservice from '../navigation/navigationservice';
import popnisfont from '../assests/popnisfont';
import { fontPixel, heightPixel, pixelSizeHorizontal } from '../constant';

interface Props {
  title?: string;
}

export default function AuthHeader(props: Props) {
  return (
    <View style={styles.Container}>
      <Pressable
        onPress={() => navigationservice.goBack()}
        style={styles.ButtonView}>
        <Image source={image.backarrow} style={styles.icon} />
      </Pressable>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: heightPixel(50),
    paddingHorizontal: pixelSizeHorizontal(10),
    justifyContent: 'center',
  },
  ButtonView: {
    position: 'absolute',
    marginLeft : pixelSizeHorizontal(14),
  },
  icon: {
    height: heightPixel(18),
    width: heightPixel(30),
  },
  title: {
    fontSize: fontPixel(20),
    fontFamily: popnisfont.PoppinsMedium,
    color: 'black',
    alignSelf : 'center'
  },
});
