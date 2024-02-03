import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';
import image from '../assests/image';
import i18n from '../assests/i18n';
import popnisfont from '../assests/popnisfont';
import OtpInputs from 'react-native-otp-inputs';
import ButtonComponent from './buttonComponent';

interface ModalProps {
  onClosePress: Callback;
  isLockingChat: boolean;
}

const LockModal = (props: ModalProps) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.Container}>
        <View style={styles.ModalView}>
          <Pressable
            onPress={() => props.onClosePress()}
            style={{alignSelf: 'flex-end'}}>
            <Image source={image.close} style={{height: 30, width: 30}} />
          </Pressable>
          {!props.isLockingChat && (
            <>
              <View style={styles.lockRound}>
                <Image
                  source={image.lock}
                  style={{height: 30, width: 30, tintColor: '#5A5FEA'}}
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
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
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
              <Text style={styles.UnLockText}>{i18n.Lockingchats}</Text>
            </>
          )}
        </View>
      </View>
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
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  lockRound: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#5A5FEA25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UnLockText: {
    fontSize: 20,
    color: 'black',
    fontFamily: popnisfont.PoppinsBold,
    marginTop: 6,
  },
  UnLockTextDescription: {
    fontSize: 14,
    color: '#686978',
    fontFamily: popnisfont.PoppinsRegular,
  },
  InputBox: {
    height: 40,
    width: 40,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    marginHorizontal: 6,
  },
  FocusInputBox: {
    height: 40,
    width: 40,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  ButtonStyle: {
    height: 50,
    marginTop: 20,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#5A5FEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
