import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import commanStyle from '../../constant/commanStyle';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';
import image from '../../assests/image';
import popnisfont from '../../assests/popnisfont';
import i18n from '../../assests/i18n';
import navigationservice from '../../navigation/navigationservice';
import screenname from '../../navigation/screenname';

export default function MessageScreen() {
  //State
  const [state, setState] = useState({
    messageText: '',
    isThreeDots: false,
  });
  //onStatePress
  const onStatePress = (key: string, value: any) => {
    setState(prev => ({...prev, [key]: value}));
  };
  return (
    <ImageBackground style={[commanStyle.flex]} source={image.chatbackground}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.HeaderBox}>
        <HeaderOfChatScreen
          onThreeDots={() => onStatePress('isThreeDots', !state.isThreeDots)}
        />
      </View>
      <View style={commanStyle.flex}>
        <ScrollView
          style={commanStyle.flex}
          showsVerticalScrollIndicator={false}>
          <Text>soidfhjsiojo</Text>
        </ScrollView>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.ChatBox}>
            <TextInput
              value={state.messageText}
              onChange={e => {}}
              placeholder={'Type here...'}
              style={styles.SearchInputView}
            />
            <View style={styles.sendIcon}>
              <Image
                style={{height: 24, width: 24}}
                source={image.sendmessage}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
      {/* Position absulate */}
      {state.isThreeDots && (
        <View style={styles.FilterBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 24, width: 24, tintColor: 'black'}}
              source={image.search}
            />
            <Text style={styles.FilterText}>{i18n.Search}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 24, width: 24, tintColor: 'black'}}
              source={image.star}
            />
            <Text style={styles.FilterText}>{i18n.StarredMessage}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 24, width: 24, tintColor: 'black'}}
              source={image.delete}
            />
            <Text style={styles.FilterText}>{i18n.DeleteMessage}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 24, width: 24, tintColor: 'black'}}
              source={image.clearclose}
            />
            <Text style={styles.FilterText}>{i18n.Clearchat}</Text>
          </View>
        </View>
      )}
    </ImageBackground>
  );
}

interface HeaderProps {
  onThreeDots: Callback;
}
const HeaderOfChatScreen = (props: HeaderProps) => {
  return (
    <View style={styles.HeaderView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Pressable onPress={() => navigationservice.goBack()}>
          <Image
            source={image.backarrow}
            style={{height: 26, width: 26, tintColor: 'white'}}
          />
        </Pressable>
      </View>
      <View style={{flex: 6, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            style={styles.HeaderProfile}
            onPress={() =>
              navigationservice.navigate(screenname.ChatUserDetails)
            }></Pressable>
          <View style={{marginLeft: 10}}>
            <Text style={styles.UserName}>Jenny Wilson</Text>
            <Text style={styles.Online}>Online</Text>
          </View>
        </View>
        <View>
          <Text style={styles.Time}>9:18PM</Text>
          <Text style={styles.TimeStemp}>In USA</Text>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Pressable onPress={() => props.onThreeDots()}>
          <Image
            source={image.threedots}
            style={{height: 26, width: 26, tintColor: 'white'}}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderBox: {
    height: 140,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 40,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor: '#5A5FEA',
  },
  HeaderView: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  HeaderProfile: {
    height: 50,
    width: 50,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5FEA25',
  },
  Time: {
    color: 'white',
    fontFamily: popnisfont.PoppinsMedium,
    fontSize: 14,
  },
  TimeStemp: {
    color: 'white',
    fontFamily: popnisfont.PoppinsRegular,
    fontSize: 10,
    textAlign: 'right',
  },
  UserName: {
    color: 'white',
    fontFamily: popnisfont.PoppinsMedium,
    fontSize: 18,
  },
  Online: {
    color: 'white',
    fontFamily: popnisfont.PoppinsRegular,
    fontSize: 12,
  },
  ChatBox: {
    height: 64,
    width: 390,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: '#D8E0F1',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  SearchInputView: {
    height: 40,
    flex: 1,
    paddingLeft: 20,
    fontSize: 14,
  },
  sendIcon: {
    height: 44,
    width: 44,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5FEA25',
  },
  FilterBox: {
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: 'white',
    ...commanStyle.boxShadow,
    right: 20,
    top: Platform.OS == 'android' ? StatusBar.currentHeight + 60 : 110,
  },
  FilterText: {
    fontSize: 16,
    color: 'black',
    margin: 6,
    fontFamily: popnisfont.PoppinsRegular,
  },
});
