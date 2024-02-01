import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import i18n from '../assests/i18n';
import image from '../assests/image';
import commanStyle from '../constant/commanStyle';
import popnisfont from '../assests/popnisfont';
interface Props  {
    title?: string;
    description?: string
}
export default function HeaderTeam(props : Props) {
  return (
    <View style={{marginTop: 20}}>
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
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#5A5FEA',
    alignSelf: 'center',
    ...commanStyle.boxShadow,
  },
  icon: {
    height: 62,
    width: 60,
    tintColor: 'white',
  },
  Title: {
    fontSize: 24,
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'black',
    marginTop: 50,
    alignSelf: 'center',
  },
  Description: {
    fontSize: 14,
    fontFamily: popnisfont.PoppinsRegular,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
