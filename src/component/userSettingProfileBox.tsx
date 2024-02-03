import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commanStyle from '../constant/commanStyle';
import ProfileImage from './profileImage';
import popnisfont from '../assests/popnisfont';
import image from '../assests/image';



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
            style={{height: 32, width: 32, marginLeft: 10}}
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
    height: 340,
    width: 374,
    justifyContent: 'flex-end',
  },
  ChildContainer: {
    height: 228,
    width: 374,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    ...commanStyle.boxShadow,
  },
  viewStyle: {
    borderWidth: 3,
    borderColor: 'white',
  },
  Name: {
    fontSize: 24,
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'black',
  },
  About: {
    fontSize: 16,
    fontFamily: popnisfont.PoppinsRegular,
    color: 'black',
  },
  bdate: {
    fontSize: 16,
    fontFamily: popnisfont.PoppinsRegular,
    color: 'black',
    textAlignVertical: 'center',
    top: 4,
  },

});
