import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import image from '../../assests/image';
import i18n from '../../assests/i18n';
import popnisfont from '../../assests/popnisfont';
import navigationservice from '../../navigation/navigationservice';
import screenname from '../../navigation/screenname';

export default function Welcome() {
    //onGetStarted
    const onGetStarted = () => {
        navigationservice.navigate(screenname.Login);
    }
  return (
    <View style={styles.Container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'default'}
        translucent
      />
      <ImageBackground
        source={image.welcomescreen}
        style={[styles.Container, styles.alignItem]}>
        <View style={styles.Box1}>
          <View style={{marginBottom : 30}}>
            <View style={styles.RoundOfICon}>
              <Image source={image.cartoon} style={styles.icon} />
            </View>
            <Text style={styles.Title}>{i18n.Shori}</Text>
          </View>
          <View style={{marginVertical : 10}}>
            <Text style={styles.Title}>{i18n.WelcomeMichael}</Text>
            <Text style={styles.Description}>
              {i18n.WelcomeScreenDescription}
            </Text>
          </View>
        </View>
        <View style={styles.Box2}>
            <Pressable style={styles.Button} onPress={() => onGetStarted()}>
                <Text style={styles.ButtonName}>
                    {i18n.GetStarted}
                </Text>
                <Image style={styles.rightArrow} source={image.rightarrow}/>
            </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
  },
  alignItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  Box2: {
    flex: 1,
    alignItems : 'center',
    justifyContent  :'flex-end',
  },
  icon: {
    height: 62,
    width: 60,
  },
  Title: {
    fontSize: 34,
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'white',
  },
  Description: {
    fontSize: 12,
    fontFamily: popnisfont.PoppinsRegular,
    color: 'white',
    alignSelf  :"center",
    textAlign  :'center',
    letterSpacing : 1
    // marginVertical: 10,
  },
  Button : {
    height : 50,
    width  :320,
    marginBottom : 50,
    alignSelf : 'center',
    borderRadius : 10,
    alignItems  :'center',
    justifyContent  :'center',
    borderColor  :'white',
    borderWidth : 1,
    flexDirection  :'row'
  },
  ButtonName: {
    fontSize: 16,
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'white',
  },
  rightArrow : {
    height : 10,
    width : 20,
    marginLeft : 4
  }
});