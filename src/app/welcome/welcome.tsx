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
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constant';

export default function Welcome() {
  //onGetStarted
  const onGetStarted = () => {
    navigationservice.navigate(screenname.Login);
  };
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
          <View>
            <View style={styles.RoundOfICon}>
              <Image source={image.cartoon} style={styles.icon} />
            </View>
            <Text style={styles.Title}>{i18n.Shori}</Text>
          </View>
          <View>
            <Text style={styles.Title2}>{i18n.WelcomeMichael}</Text>
            <Text style={styles.Description}>
              {i18n.WelcomeScreenDescription}
            </Text>
          </View>
        </View>
        <View style={styles.Box2}>
          <Pressable style={styles.Button} onPress={() => onGetStarted()}>
            <Text style={styles.ButtonName}>{i18n.GetStarted}</Text>
            <Image style={styles.rightArrow} source={image.rightarrow} />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  alignItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  RoundOfICon: {
    height: heightPixel(100),
    width: heightPixel(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: heightPixel(30),
    backgroundColor: 'white',
  },
  Box1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  Box2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: pixelSizeVertical(40),
  },
  icon: {
    height: heightPixel(64),
    width: heightPixel(61),
  },
  Title: {
    fontSize: fontPixel(34),
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'white',
    marginTop: pixelSizeVertical(18),
  },
  Title2: {
    fontSize: fontPixel(24),
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'white',
    marginTop: pixelSizeVertical(68),
    alignSelf: 'center',
  },
  Description: {
    fontSize: fontPixel(14),
    fontFamily: popnisfont.PoppinsRegular,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: pixelSizeVertical(10),
  },
  Button: {
    height: heightPixel(70),
    width: widthPixel(374),
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
  },
  ButtonName: {
    fontSize: fontPixel(18),
    fontFamily: popnisfont.PoppinsSemiBold,
    color: 'white',
  },
  rightArrow: {
    height: heightPixel(10),
    width: heightPixel(20),
    marginLeft: pixelSizeHorizontal(4),
  },
});
