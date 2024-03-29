import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screenname from './screenname';
import Welcome from '../app/welcome/welcome';
import Login from '../app/auth/login';
import Spash from '../app/splash/splash';
import OtpEnter from '../app/auth/otp';
import AddBio from '../app/auth/addBio';
import ChatScreen from '../app/chat/chatScreen';
import MessageScreen from '../app/chat/messageScreen';
import ChatSetting from '../app/chat/chatSetting';
import ChatUserDetails from '../app/chat/chatUserDetails';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screenname.Splash}>
      <Stack.Screen name={screenname.Splash} component={Spash} />
      <Stack.Screen name={screenname.Welcome} component={Welcome} />
      <Stack.Screen name={screenname.Login} component={Login} />
      <Stack.Screen name={screenname.OtpEnter} component={OtpEnter} />
      <Stack.Screen name={screenname.AddBio} component={AddBio} />
      <Stack.Screen name={screenname.ChatScreen} component={ChatScreen} />
      <Stack.Screen name={screenname.MessageScreen} component={MessageScreen} />
      <Stack.Screen name={screenname.ChatSetting} component={ChatSetting} />
      <Stack.Screen name={screenname.ChatUserDetails} component={ChatUserDetails} />
    </Stack.Navigator>
  );
}
