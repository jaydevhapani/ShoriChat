import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';
import image from '../assests/image';
import i18n from '../assests/i18n';
import popnisfont from '../assests/popnisfont';
import OtpInputs from 'react-native-otp-inputs';
import ButtonComponent from './buttonComponent';
import RnLockSwitch from './RnLockSwitch';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../constant';

interface ModalProps {
  onClosePress: Callback;
  isLockingChat: boolean;
}

const LockModal = (props: ModalProps) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <Pressable style={styles.Container} onPress={() => props.onClosePress()}>
        <View
          style={[
            styles.ModalView,
            props.isLockingChat && {height: heightPixel(200)},
          ]}>
          {!props.isLockingChat && (
            <Pressable
              onPress={() => props.onClosePress()}
              style={{alignSelf: 'flex-end'}}>
              <Image
                source={image.close}
                style={{height: heightPixel(30), width: heightPixel(30)}}
              />
            </Pressable>
          )}

          {!props.isLockingChat && (
            <>
              <View style={styles.lockRound}>
                <Image
                  source={image.lock}
                  style={{
                    height: heightPixel(30),
                    width: heightPixel(30),
                    tintColor: '#5A5FEA',
                  }}
                />
              </View>
              <Text style={styles.UnLockText}>{i18n.UnlockChats}</Text>
              <Text style={styles.UnLockTextDescription}>
                {i18n.Pleaseenterdigitkeytounlock}
              </Text>
              <View>
                <OtpInputs
                  handleChange={code => console.log(code)}
                  numberOfInputs={4}
                  autofillFromClipboard={true}
                  autoCorrect
                  keyboardType="phone-pad"
                  inputStyles={styles.InputBox}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: pixelSizeVertical(20),
                  }}
                  focusStyles={styles.FocusInputBox}
                />
              </View>
              <View>
                <ButtonComponent
                  buttonName={i18n.Unlock}
                  buttonStyle={styles.ButtonStyle}
                />
              </View>
            </>
          )}
          {props.isLockingChat && (
            <>
              <Text
                style={[
                  styles.UnLockText,
                  props.isLockingChat && {
                    fontSize: fontPixel(24),
                    color: '#181D20',
                    fontFamily: popnisfont.PoppinsMedium,
                    marginTop: pixelSizeVertical(24),
                  },
                ]}>
                {i18n.Lockingchats}
              </Text>
              <View style={{marginTop: pixelSizeVertical(28)}}>
                <RnLockSwitch />
              </View>
            </>
          )}
        </View>
      </Pressable>
    </Modal>
  );
};

export default LockModal;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000070',
  },
  ModalView: {
    shadowColor: '#000',
    backgroundColor: 'white',
    width: widthPixel(374),
    height: heightPixel(376),
    borderRadius: heightPixel(20),
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(10),
    shadowOffset: {
      width: 0,
      height: heightPixel(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  lockRound: {
    height: heightPixel(60),
    width: heightPixel(60),
    borderRadius: heightPixel(30),
    backgroundColor: '#5A5FEA25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UnLockText: {
    fontSize: fontPixel(24),
    color: '#181D20',
    fontFamily: popnisfont.PoppinsBold,
    marginTop: pixelSizeVertical(24),
  },
  UnLockTextDescription: {
    fontSize: fontPixel(14),
    color: '#686978',
    fontFamily: popnisfont.PoppinsRegular,
    marginTop: pixelSizeVertical(12),
  },
  InputBox: {
    height: heightPixel(40),
    width: heightPixel(40),
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: fontPixel(14),
    textAlign: 'center',
    color: 'black',
    marginHorizontal: pixelSizeHorizontal(6),
  },
  FocusInputBox: {
    height: heightPixel(40),
    width: heightPixel(40),
    borderBottomWidth: heightPixel(2),
    borderBottomColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: pixelSizeHorizontal(6),
  },
  ButtonStyle: {
    height: heightPixel(60),
    width: widthPixel(166),
    borderRadius: 100,
    backgroundColor: '#5A5FEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: pixelSizeVertical(30),
  },
});
