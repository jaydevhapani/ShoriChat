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
  isMultipleMessage: boolean;
}

const DeleteModal = (props: ModalProps) => {
  return (
    <Modal animationType="slide" transparent={true}>
      <Pressable style={styles.Container} onPress={() => props.onClosePress()}>
        <View
          style={[
            styles.ModalView,
            props.isMultipleMessage && {
              height: heightPixel(349),
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingVertical: pixelSizeVertical(20),
            },
          ]}>
          <Text style={styles.label}>
            {props.isMultipleMessage
              ? i18n.DeleteTotalMessage
              : i18n.Aresuretodeletemessage}
          </Text>
          {!props.isMultipleMessage && (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  marginLeft: pixelSizeHorizontal(10),
                  marginTop: pixelSizeVertical(12),
                }}>
                <View style={styles.checkBox}></View>
                <Text style={styles.label1}>{i18n.Deleteforme}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: pixelSizeVertical(29),
                }}>
                <ButtonComponent
                  buttonStyle={[
                    styles.ButtonStyle,
                    {backgroundColor: 'white', borderWidth: 0.5},
                  ]}
                  buttonName={i18n.Yes}
                  textStyle={{
                    color: 'black',
                    fontSize: fontPixel(16),
                    fontFamily: popnisfont.PoppinsMedium,
                  }}
                />
                <ButtonComponent
                  buttonStyle={styles.ButtonStyle}
                  buttonName={i18n.No}
                  textStyle={{
                    color: 'white',
                    fontSize: fontPixel(16),
                    fontFamily: popnisfont.PoppinsMedium,
                  }}
                />
              </View>
            </View>
          )}
          {props.isMultipleMessage && (
            <>
              <View style={{marginTop: 10}} />
              <DateSelection title={i18n.From} />
              <View style={{height: heightPixel(13)}} />
              <DateSelection title={i18n.To} />
              <ButtonComponent
                buttonName={i18n.DeleteMessage}
                buttonStyle={{
                  width: widthPixel(200),
                  height: heightPixel(60),
                  marginTop: 20,
                  borderRadius: heightPixel(30),
                }}
              />
            </>
          )}
        </View>
      </Pressable>
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
          color: 'black',
          fontSize: fontPixel(15),
          fontFamily: popnisfont.PoppinsMedium,
          marginHorizontal: pixelSizeHorizontal(10),
          width: widthPixel(40),
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: heightPixel(60),
          width: widthPixel(210),
          borderWidth: 0.5,
          borderRadius: heightPixel(10),
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: fontPixel(16),
            color: 'black',
            fontFamily: popnisfont.PoppinsMedium,
          }}>
          12-03-2022
        </Text>
        <Image
          source={image.calander}
          style={{height: heightPixel(24), width: heightPixel(24)}}
        />
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
    width: widthPixel(374),
    height: heightPixel(210),
    borderRadius: heightPixel(20),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(10),
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
    fontSize: fontPixel(18),
    color: 'black',
    fontFamily: popnisfont.PoppinsMedium,
  },
  label1: {
    fontSize: fontPixel(16),
    color: 'black',
    fontFamily: popnisfont.PoppinsRegular,
  },
  checkBox: {
    height: heightPixel(24),
    width: heightPixel(24),
    borderRadius: heightPixel(6),
    borderWidth: 0.5,
    borderColor: 'gray',
    marginHorizontal: pixelSizeHorizontal(10),
  },
  ButtonStyle: {
    width: widthPixel(103),
    height: heightPixel(60),
    borderRadius: heightPixel(40),
    marginHorizontal: pixelSizeHorizontal(10),
  },
});
