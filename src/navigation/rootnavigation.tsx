import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import screenname from './screenname';
import Welcome from '../app/welcome/welcome';
import Login from '../app/auth/login';
import Spash from '../app/splash/splash';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName={screenname.Splash}>
        <Stack.Screen name={screenname.Splash} component={Spash}/>
        <Stack.Screen name={screenname.Welcome} component={Welcome}/>
        <Stack.Screen name={screenname.Login} component={Login}/>
    </Stack.Navigator>
  )
}
