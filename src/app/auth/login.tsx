import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import commanStyle from '../../constant/commanStyle';
import AuthHeader from '../../component/authHeader';
import i18n from '../../assests/i18n';
import ButtonComponent from '../../component/buttonComponent';
import HeaderTeam from '../../component/headerTeam';
import navigationservice from '../../navigation/navigationservice';
import screenname from '../../navigation/screenname';
import popnisfont from '../../assests/popnisfont';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constant';
import image from '../../assests/image';

export default function Login() {
  const [number, setNumber] = useState<string>('');
  return (
    <SafeAreaView style={commanStyle.Container}>
      <AuthHeader />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[commanStyle.flex, commanStyle.ph14]}>
          <HeaderTeam
            title={i18n.EnterPhoneNumber}
            description={i18n.LoginDescription}
          />
          <View style={styles.writeView}>
            <View style={styles.selectView}>
              <Image
                source={image.Flag}
                style={{height: heightPixel(44), width: heightPixel(44)}}
              />
              <Image
                source={image.CountySelect}
                style={{height: heightPixel(10), width: heightPixel(16)}}
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.TextInput}
                value={number}
                keyboardType="number-pad"
                maxLength={10}
                placeholder="+91"
                placeholderTextColor={'black'}
                onChange={e => setNumber(e.nativeEvent.text)}
              />
            </View>
          </View>
          <View>
            <ButtonComponent
              buttonName={i18n.SendOtp}
              onPress={() => navigationservice.navigate(screenname.OtpEnter)}
            />
          </View>
          <View style={styles.ConditionsView}>
            <View
              style={{
                height: 'auto',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: fontPixel(14),
                  fontFamily: popnisfont.PoppinsRegular,
                }}>
                Read Our{' '}
                <Text
                  style={{
                    color: '#5A5FEA',
                  }}>
                  Privacy Policy
                </Text>{' '}
                Tab Agree & Continue To accept the{' '}
                <Text
                  style={{
                    color: '#5A5FEA',
                  }}>
                  Terms Of Service
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  writeView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: pixelSizeVertical(36),
    flex: 1,
  },
  ConditionsView: {
    flex: 2.5,
    marginBottom: pixelSizeVertical(40),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  selectView: {
    height: heightPixel(70),
    width: widthPixel(84),
    borderWidth: 1,
    borderColor: '#D8E0F1',
    backgroundColor: 'white',
    borderRadius: heightPixel(16),
    ...commanStyle.boxShadow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  InputView: {
    height: heightPixel(70),
    width: widthPixel(279),
    borderWidth: 1,
    borderColor: '#D8E0F1',
    backgroundColor: 'white',
    borderRadius: heightPixel(16),
    justifyContent: 'center',
    ...commanStyle.boxShadow,
  },
  TextInput: {
    height: heightPixel(60),
    backgroundColor: 'white',
    borderRadius: heightPixel(16),
    paddingHorizontal: pixelSizeHorizontal(10),
  },
});
