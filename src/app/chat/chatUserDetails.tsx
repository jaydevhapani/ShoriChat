import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React from 'react';
import commanStyle from '../../constant/commanStyle';
import AuthHeader from '../../component/authHeader';
import i18n from '../../assests/i18n';
import UserSettingProfileBox from '../../component/userSettingProfileBox';
import image from '../../assests/image';
import popnisfont from '../../assests/popnisfont';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constant';

export default function ChatUserDetails() {
  return (
    <SafeAreaView
      style={[commanStyle.Container, {backgroundColor: '##f1f1fc'}]}>
      <AuthHeader title={i18n.UserDetails} />
      <ScrollView style={[commanStyle.flex, {backgroundColor: '##f1f1fc'}]}>
        <View style={{alignSelf: 'center', marginTop: pixelSizeVertical(20)}}>
          <UserSettingProfileBox />
        </View>
        <View style={[styles.OtherDetails, {alignSelf: 'center'}]}>
          <View style={styles.box}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={image.lock}
                style={[
                  {
                    height: heightPixel(26),
                    width: heightPixel(26),
                    tintColor: '#5A5FEA',
                  },
                ]}
              />
              <Text style={styles.Name}>{i18n.LockthisChat}</Text>
            </View>
            <Switch />
          </View>
        </View>
        <View style={[styles.OtherDetails, {alignSelf: 'center'}]}>
          <View style={styles.box}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={image.filemanager}
                style={[{height: heightPixel(26), width: heightPixel(26)}]}
              />
              <Text style={styles.Name}>{i18n.SharedMedia}</Text>
            </View>
            <Image
              source={image.rightArow}
              style={{height: heightPixel(30), width: heightPixel(30)}}
            />
          </View>
          <View style={styles.box}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={image.star}
                style={[
                  {
                    height: heightPixel(26),
                    width: heightPixel(26),
                    tintColor: '#58BA6E',
                  },
                ]}
              />
              <Text style={styles.Name}>{i18n.SavedMessage}</Text>
            </View>
            <Image
              source={image.rightArow}
              style={{height: heightPixel(30), width: heightPixel(30)}}
            />
          </View>
          <View style={styles.box}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={image.notification}
                style={[{height: heightPixel(26), width: heightPixel(26)}]}
              />
              <Text style={styles.Name}>{i18n.MuteNotification}</Text>
            </View>
            <Switch />
          </View>
        </View>
        <View style={[styles.OtherDetails, {alignSelf: 'center'}]}>
          <View style={styles.box}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={image.report}
                style={[{height: heightPixel(26), width: heightPixel(26)}]}
              />
              <Text style={styles.Name}>{i18n.Report}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={image.block}
                style={[{height: heightPixel(26), width: heightPixel(26)}]}
              />
              <Text style={styles.Name}>{i18n.Block}</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={image.graydelete}
                style={[{height: heightPixel(26), width: heightPixel(26)}]}
              />
              <Text style={styles.Name}>{i18n.Delete}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OtherDetails: {
    width: widthPixel(374),
    backgroundColor: 'white',
    borderRadius: heightPixel(20),
    marginBottom: pixelSizeVertical(20),
    paddingVertical: pixelSizeVertical(10),
    ...commanStyle.boxShadow,
  },
  box: {
    height: heightPixel(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: pixelSizeVertical(6),
    marginHorizontal: pixelSizeHorizontal(20),
  },
  Name: {
    fontSize: fontPixel(18),
    fontFamily: popnisfont.PoppinsRegular,
    color: 'black',
    marginLeft: pixelSizeHorizontal(10),
  },
});
