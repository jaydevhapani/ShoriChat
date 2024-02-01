import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commanStyle from '../../constant/commanStyle';
import AuthHeader from '../../component/authHeader';
import i18n from '../../assests/i18n';
import ProfileImage from '../../component/profileImage';
import ConmanTextInput from '../../component/conmanTextInput';
import image from '../../assests/image';
import ButtonComponent from '../../component/buttonComponent';
import navigationservice from '../../navigation/navigationservice';
import screenname from '../../navigation/screenname';

export default function AddBio() {
  return (
    <SafeAreaView style={commanStyle.Container}>
      <AuthHeader title={i18n.AddBio} />
      <View style={[commanStyle.flex]}>
        <ScrollView style={[commanStyle.flex]}>
          <View style={{marginTop: 30, alignSelf: 'center'}}>
            <ProfileImage isCapture />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={{marginTop: 50}}>
              <ConmanTextInput
                headerName={i18n.Name}
                placeholder="Michael Keats"
              />
            </View>
            <View style={{marginTop: 20}}>
              <ConmanTextInput
                headerName={i18n.UserStatus}
                Editable={false}
                isRight
                image={image.happy}
                placeholder="Michael Keats"
              />
            </View>
            <View style={{marginTop: 20, marginBottom: 30}}>
              <ConmanTextInput
                headerName={i18n.DateofBirth}
                Editable={false}
                isRight
                image={image.calander}
                placeholder="01/01/2000"
              />
            </View>
            <View style={{marginTop: 10}}>
              <ButtonComponent buttonName={i18n.SaveBio} onPress={() => navigationservice.navigate(screenname.ChatScreen)}/>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
