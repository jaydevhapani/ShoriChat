import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
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
        <KeyboardAvoidingView
          keyboardVerticalOffset={
            Platform.OS == 'android'
              ? pixelSizeVertical(30)
              : pixelSizeVertical(100)
          } // Pass the calculated height
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={[commanStyle.flex, commanStyle.ph14]}>
              <HeaderTeam
                title={i18n.EnterPhoneNumber}
                description={i18n.LoginDescription}
              />
              <View style={[styles.writeView]}>
                <View style={styles.selectView}>
                  <Text style={styles.CountryCodeText}>+91</Text>
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
                    placeholder="Enter Your Phone Number"
                    placeholderTextColor={'gray'}
                    onChange={e => setNumber(e.nativeEvent.text)}
                  />
                </View>
              </View>
              <View style={{marginTop: pixelSizeVertical(48)}}>
                <ButtonComponent
                  buttonName={i18n.SendOtp}
                  onPress={() =>
                    navigationservice.navigate(screenname.OtpEnter)
                  }
                />
              </View>
              <View style={styles.ConditionsView}>
                <View
                  style={{
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
          </ScrollView>
        </KeyboardAvoidingView>
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
  },
  ConditionsView: {
    height: heightPixel(250),
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
    borderRadius: heightPixel(16),
    paddingHorizontal: pixelSizeHorizontal(10),
    fontFamily: popnisfont.PoppinsRegular,
  },
  CountryCodeText: {
    fontFamily: popnisfont.PoppinsRegular,
    color: 'black',
    fontSize: fontPixel(16),
  },
});
