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
    height: 40,
    paddingHorizontal: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonView: {
    position: 'absolute',
    marginLeft : 14,
  },
  icon: {
    height: 18,
    width: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: popnisfont.PoppinsMedium,
    color: 'black',
    alignSelf : 'center'
  },
});
