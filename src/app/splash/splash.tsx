import {Linking, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import navigationservice from '../../navigation/navigationservice';
import screenname from '../../navigation/screenname';
import Contacts from 'react-native-contacts';

interface Props {
  navigation?: any;
}

export default function Spash(props: Props) {
  useEffect(() => {
    getAllContactFromDevicePermission();
    navigationservice.setTopLevelNavigator(props.navigation);
    setTimeout(() => {
      navigationservice.navigate(screenname.Welcome);
    }, 1000);
  }, []);

  //getAllContactFromDevice
  const getAllContactFromDevicePermission = async () => {
    // Contacts.checkPermission().then((permission: any) => {
    //   console.log('permission : ', permission);
    //   // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
    //   if (permission === 'authorized') {
    //     getAllContact();
    //   }
    //   if (permission === 'denied') {
    //   }
    // });
    getAllContact();
  };
  //getAllContact
  const getAllContact = () => {
    // Contacts.getAll()
    //   .then(contacts => {
    //     // work with contacts
    //     console.log(contacts);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  };
  return (
    <View>
      <Text>splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
