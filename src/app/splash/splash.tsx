import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import navigationservice from '../../navigation/navigationservice';
import screenname from '../../navigation/screenname';

interface Props {
  navigation?: any;
}

export default function Spash(props: Props) {
  useEffect(() => {
    navigationservice.setTopLevelNavigator(props.navigation);
    setTimeout(() => {
      navigationservice.navigate(screenname.Welcome);
    }, 1000);
  }, []);
  return (
    <View>
      <Text>splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
