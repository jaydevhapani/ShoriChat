import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commanStyle from '../../constant/commanStyle';
import HeaderTeam from '../../component/headerTeam';
import AuthHeader from '../../component/authHeader';
import i18n from '../../assests/i18n';
import OtpInputs from 'react-native-otp-inputs';
import ButtonComponent from '../../component/buttonComponent';
import popnisfont from '../../assests/popnisfont';
import navigationservice from '../../navigation/navigationservice';
import screenname from '../../navigation/screenname';
import {fontPixel, heightPixel, pixelSizeVertical} from '../../constant';

export default function OtpEnter() {
  return (
    <SafeAreaView style={commanStyle.Container}>
      <AuthHeader />
      <View style={[commanStyle.flex, commanStyle.ph14]}>
        <HeaderTeam
          title={i18n.EnterYourOtp}
          description={
            'We are automatically detecting a SMS send to your mobile Number ******372'
          }
        />
        <OtpInputs
          handleChange={code => console.log(code)}
          numberOfInputs={4}
          autofillFromClipboard={true}
          autoCorrect
          keyboardType="phone-pad"
          inputStyles={styles.InputBox}
          style={{
            marginTop: heightPixel(36),
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
          focusStyles={styles.FocusInputBox}
        />
        <View style={{marginTop: pixelSizeVertical(70)}}>
          <ButtonComponent
            buttonName={i18n.Verify}
            onPress={() => navigationservice.navigate(screenname.AddBio)}
          />
        </View>
        <View style={{marginTop: pixelSizeVertical(48), alignSelf: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: fontPixel(16),
              fontFamily: popnisfont.PoppinsRegular,
            }}>
            {i18n.DontGetOtp}{' '}
            <Text style={{color: '#5A5FEA'}}>{i18n.ResendOtp}</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  InputBox: {
    height: heightPixel(80),
    width: heightPixel(80),
    borderWidth: 1,
    borderColor: '#D8E0F1',
    borderRadius: heightPixel(20),
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: fontPixel(20),
    textAlign: 'center',
    color: 'black',
  },
  FocusInputBox: {
    height: heightPixel(80),
    width: heightPixel(80),
    borderWidth: 1,
    borderColor: '#5A5FEA',
    borderRadius: heightPixel(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
