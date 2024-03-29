import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
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

const OtherData = [
  {
    name: i18n.Privacy,
    icon: image.lock,
  },
  {
    name: i18n.Account,
    icon: image.profile,
  },
  {
    name: i18n.Storage,
    icon: image.storage,
  },
  {
    name: i18n.Notifications,
    icon: image.notification,
  },
  {
    name: i18n.AppLanguage,
    icon: image.language,
  },
  {
    name: i18n.Help,
    icon: image.question,
  },
];

const ChatSetting = () => {
  return (
    <SafeAreaView
      style={[commanStyle.Container, {backgroundColor: '##f1f1fc'}]}>
      <AuthHeader title={i18n.ChatSettings} />
      <ScrollView style={[commanStyle.flex, {backgroundColor: '##f1f1fc'}]}>
        <View style={{alignSelf: 'center', marginTop: pixelSizeVertical(20)}}>
          <UserSettingProfileBox isEditImage />
        </View>
        <View
          style={[
            styles.OtherDetails,
            {alignSelf: 'center', marginTop: pixelSizeVertical(30)},
          ]}>
          {OtherData &&
            OtherData.map((item, index) => {
              return (
                <View key={index} style={styles.box}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={item.icon}
                      style={[
                        {height: heightPixel(26), width: heightPixel(26)},
                        index == 0 && {tintColor: '#5A5FEA'},
                      ]}
                    />
                    <Text style={styles.Name}>{item.name}</Text>
                  </View>
                  <Image
                    source={image.rightArow}
                    style={{height: heightPixel(30), width: heightPixel(30)}}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatSetting;

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
    height: heightPixel(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  Name: {
    fontSize: fontPixel(18),
    fontFamily: popnisfont.PoppinsRegular,
    color: 'black',
    marginLeft: pixelSizeHorizontal(10),
  },
});
