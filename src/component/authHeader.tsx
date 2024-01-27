import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import image from '../assests/image';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';
import navigationservice from '../navigation/navigationservice';

interface Props {

}

export default function AuthHeader(props: Props) {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Pressable onPress={() => navigationservice.goBack()}>
          <Image source={image.backarrow} style={styles.icon} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  icon: {
    height: 18,
    width: 30,
  },
});
