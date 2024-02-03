import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../assests/image';

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
    height: 160,
    width: 160,
    borderRadius: 80,
    backgroundColor: '#D8E0F1',
  },
  ImageCapture: {
    height: 44,
    width: 44,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5FEA',
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  Icon: {
    height: 22,
    width: 24,
  },
});
