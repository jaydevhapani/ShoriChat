import {StyleSheet, Text, View, Platform, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import commanStyle from '../constant/commanStyle';
import popnisfont from '../assests/popnisfont';
import image from '../assests/image';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../constant';

interface Props {
  value?: string;
  onChange?(text: string): void;
  placeholder?: string;
  headerName?: string;
  Editable?: boolean;
  isRight?: boolean;
  image?: ImageSourcePropType;
}

export default function ConmanTextInput(props: Props) {
  return (
    <>
      <Text style={styles.HeaderName}>{props.headerName}</Text>
      <View style={[styles.inputViewStyle, props.isRight && {flexDirection : 'row', alignItems : 'center'}]}>
        <TextInput
          style={[styles.TextInput, props.isRight && {flex : 1}]}
          value={props.value}
          editable={props.Editable}
          placeholder={props.placeholder}
          placeholderTextColor={'gray'}
          onChange={e => props.onChange && props.onChange(e.nativeEvent.text)}
        />
        {props.isRight && (
          <View>
            <Image source={props.image} style={{height : heightPixel(30), width : heightPixel(30), marginRight : 10}}/>
          </View>
        )}
      </View>
    </>
  );
}
// ...commanStyle.boxShadow,
const styles = StyleSheet.create({
  inputViewStyle: {
    height: heightPixel(70),
    width: widthPixel(360),
    borderWidth: 1,
    borderColor: '#D8E0F1',
    backgroundColor: 'white',
    borderRadius: heightPixel(14),
    justifyContent: 'center',
    ...commanStyle.boxShadow,
  },
  TextInput: {
    height: heightPixel(60),
    paddingHorizontal: pixelSizeHorizontal(10),
    color : 'black',
    fontSize: fontPixel(16),
    fontFamily: popnisfont.PoppinsRegular,
 
  },
  HeaderName: {
    fontSize: fontPixel(16),
    fontFamily: popnisfont.PoppinsMedium,
    color: '#686978',
    marginBottom : pixelSizeVertical(11)
  },
});
