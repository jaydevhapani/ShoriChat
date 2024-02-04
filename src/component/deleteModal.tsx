import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';
import image from '../assests/image';
import i18n from '../assests/i18n';
import popnisfont from '../assests/popnisfont';
import OtpInputs from 'react-native-otp-inputs';
import ButtonComponent from './buttonComponent';
import RnLockSwitch from './RnLockSwitch';

interface ModalProps {
  onClosePress: Callback;
  isMultipleMessage: boolean;
}

const DeleteModal = (props: ModalProps) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.Container}>
        <View style={styles.ModalView}>
          <Pressable
            onPress={() => props.onClosePress()}
            style={{alignSelf: 'flex-end'}}>
            <Image source={image.close} style={{height: 30, width: 30}} />
          </Pressable>
          <Text style={styles.label}>{i18n.Aresuretodeletemessage}</Text>
          {!props.isMultipleMessage && (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  marginLeft: 30,
                  marginTop: 10,
                }}>
                <View style={styles.checkBox}></View>
                <Text style={styles.label1}>{i18n.Deleteforme}</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <ButtonComponent
                  buttonStyle={[
                    styles.ButtonStyle,
                    {backgroundColor: 'white', borderWidth: 0.5},
                  ]}
                  buttonName={i18n.Yes}
                  textStyle={{color: 'black'}}
                />
                <ButtonComponent
                  buttonStyle={styles.ButtonStyle}
                  buttonName={i18n.No}
                />
              </View>
            </>
          )}
          {props.isMultipleMessage && (
            <>
              <View style={{marginTop: 10}} />
              <DateSelection title={i18n.From} />
              <DateSelection title={i18n.To} />
              <ButtonComponent
                buttonName={i18n.DeleteMessage}
                buttonStyle={{width: 200, height: 50, marginTop: 20}}
              />
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

interface SelectProps {
  title?: string;
}
const DateSelection = (props: SelectProps) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text
        style={{
          width: '20%',
          color: 'black',
          fontFamily: popnisfont.PoppinsRegular,
        }}>
        {props.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
          width: 150,
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 20,
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: 'black',
            fontFamily: popnisfont.PoppinsRegular,
          }}>
          12-03-2022
        </Text>
        <Image source={image.calander} style={{height: 24, width: 24}} />
      </View>
    </View>
  );
};

export default DeleteModal;

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
    width: '90%',
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
  label: {
    fontSize: 18,
    color: 'black',
    fontFamily: popnisfont.PoppinsSemiBold,
    marginTop: 6,
  },
  label1: {
    fontSize: 16,
    color: 'black',
    fontFamily: popnisfont.PoppinsRegular,
  },
  checkBox: {
    height: 24,
    width: 24,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginHorizontal: 10,
  },
  ButtonStyle: {
    width: 100,
    borderRadius: 40,
    marginHorizontal: 10,
  },
});
