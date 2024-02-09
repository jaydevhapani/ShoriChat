import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commanStyle from '../constant/commanStyle';
import ProfileImage from './profileImage';
import popnisfont from '../assests/popnisfont';
import image from '../assests/image';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../constant';



interface ProfilePros {
  name?: string;
  about?: string;
  birthdate?: string;
  isEditImage?: boolean;
}
const UserSettingProfileBox = (props: ProfilePros) => {
  return (
    <View style={styles.Container}>
      <View style={styles.ChildContainer}>
        <View>
          <Text style={styles.Name}>Ethan Howard</Text>
        </View>
        <View>
          <Text style={styles.About}>Hey There, I’m using chat app</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.bdate}>20 Otc, 1999</Text>
          <Image
            source={image.gift}
            style={{height: heightPixel(32), width: heightPixel(32), marginLeft: pixelSizeHorizontal(10)}}
          />
        </View>
      </View>
      <View style={{position: 'absolute', top: 0, alignSelf: 'center'}}>
        <ProfileImage viewStyle={styles.viewStyle} isCapture={props.isEditImage ? true : false}/>
      </View>
    </View>
  );
};

export default UserSettingProfileBox;

const styles = StyleSheet.create({
  Container: {
    height: heightPixel(340),
    width: widthPixel(374),
    justifyContent: 'flex-end',
  },
  ChildContainer: {
    height: heightPixel(228),
    width: widthPixel(374),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: pixelSizeVertical(30),
    backgroundColor: 'white',
    borderRadius: heightPixel(20),
    marginBottom: pixelSizeVertical(20),
    ...commanStyle.boxShadow,
  },
  viewStyle: {
    borderWidth: heightPixel(3),
    borderColor: 'white',
  },
  Name: {
    fontSize: fontPixel(24),
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'black',
  },
  About: {
    fontSize: fontPixel(16),
    fontFamily: popnisfont.PoppinsRegular,
    color: 'black',
  },
  bdate: {
    fontSize: fontPixel(16),
    fontFamily: popnisfont.PoppinsRegular,
    color: 'black',
    textAlignVertical: 'center',
    top: pixelSizeVertical(4),
  },

});
