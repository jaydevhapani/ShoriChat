import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../assests/image';
import { heightPixel, pixelSizeHorizontal } from '../constant';

interface Props {
  isCapture?: boolean;
  viewStyle?: any;

}

export default function ProfileImage(props: Props) {
  return (
    <View style={[styles.Container, props.viewStyle]}>
      {props.isCapture && (
        <View style={styles.ImageCapture}>
          <Image source={image.camera} style={styles.Icon} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: heightPixel(160),
    width: heightPixel(160),
    borderRadius: heightPixel(80),
    backgroundColor: '#D8E0F1',
  },
  ImageCapture: {
    height: heightPixel(44),
    width: heightPixel(44),
    borderRadius: heightPixel(30),
    borderWidth: heightPixel(4),
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5FEA',
    position: 'absolute',
    right: pixelSizeHorizontal(10),
    bottom: 0,
  },
  Icon: {
    height: heightPixel(22),
    width: heightPixel(24),
  },
});
