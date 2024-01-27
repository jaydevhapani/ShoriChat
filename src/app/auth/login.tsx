import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commanStyle from '../../constant/commanStyle'
import AuthHeader from '../../component/authHeader'

export default function Login() {
  return (
    <View style={commanStyle.Container}>
        <AuthHeader/>
        <View style={[commanStyle.Container, commanStyle.ph14]}>
            <View style={styles.Box1}>

            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    RoundOfICon: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'white',
      },
      Box1: {
        flex: 1,
      },
      Box2: {
        flex: 1,
        alignItems : 'center',
        justifyContent  :'flex-end',
      },
})