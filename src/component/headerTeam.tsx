import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import i18n from '../assests/i18n';
import image from '../assests/image';
import commanStyle from '../constant/commanStyle';
import popnisfont from '../assests/popnisfont';
import { fontPixel, heightPixel, pixelSizeVertical } from '../constant';
interface Props  {
    title?: string;
    description?: string
}
export default function HeaderTeam(props : Props) {
  return (
    <View>
      <View style={styles.RoundOfICon}>
        <Image style={styles.icon} source={image.cartoon} />
      </View>
      <Text style={styles.Title}>{props.title}</Text>
      <Text style={styles.Description}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  RoundOfICon: {
    height: heightPixel(100),
    width:  heightPixel(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: heightPixel(30),
    backgroundColor: '#5A5FEA',
    alignSelf: 'center',
    ...commanStyle.boxShadow,
    marginTop : pixelSizeVertical(10),
  },
  icon: {
    height: heightPixel(64),
    width: heightPixel(61),
    tintColor : 'white'
  },
  Title: {
    marginTop: pixelSizeVertical(56),
    fontSize: fontPixel(24),
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'black',
    alignSelf: 'center',
  },
  Description: {
    fontSize: fontPixel(14),
    fontFamily: popnisfont.PoppinsRegular,
    color: '#686978',
    alignSelf: 'center',
    textAlign: 'center',
    letterSpacing : 0.5,
    marginTop : pixelSizeVertical(16)
  },
});
