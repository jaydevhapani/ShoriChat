import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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

export default function Login() {
  const [number, setNumber] = useState<string>('');
  return (
    <SafeAreaView style={commanStyle.Container}>
      <AuthHeader />
      <View style={[commanStyle.flex, commanStyle.ph14]}>
        <HeaderTeam
          title={i18n.EnterPhoneNumber}
          description={i18n.LoginDescription}
        />
        <View style={styles.writeView}>
          <View style={styles.selectView}></View>
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
        <View style={{alignSelf: 'center', marginTop: 50}}>
          <ButtonComponent
            buttonName={i18n.SendOtp}
            onPress={() => {
              navigationservice.navigate(screenname.OtpEnter);
            }}
          />
        </View>
        <View
          style={{
            height: '40%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  writeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  selectView: {
    height: 60,
    width: 90,
    borderWidth: 1,
    borderColor: '#D8E0F1',
    backgroundColor: 'white',
    borderRadius: 10,
    ...commanStyle.boxShadow,
  },
  InputView: {
    height: 60,
    width: '74%',
    borderWidth: 1,
    borderColor: '#D8E0F1',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    ...commanStyle.boxShadow,
  },
  TextInput: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
