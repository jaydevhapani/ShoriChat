import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import image from '../assests/image';
import i18n from '../assests/i18n';
import popnisfont from '../assests/popnisfont';

const RnLockSwitch = () => {
  const [isToggled, setToggled] = useState(false);
  const toggleValue = useRef(new Animated.Value(0)).current;

  const handleToggle = useCallback(() => {
    setToggled(prev => !prev);
    Animated.timing(toggleValue, {
      toValue: isToggled ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isToggled, toggleValue]);

  const translateX = toggleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0], // Adjust as needed
  });

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.toggleButton,
            {backgroundColor: isToggled ? '#5A5FEA' : '#ddd'},
          ]}>
          {isToggled && (
            <Text style={[styles.label, {color: 'white', left : 10}]}>
              {i18n.Lock}
            </Text>
          )}
          <Animated.View style={[styles.thumb, {transform: [{translateX}]}]}>
            <Image
              source={isToggled ? image.openlock : image.lock}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </Animated.View>
          {!isToggled && (
            <Text style={[styles.label, {right: 10, color: '#5A5FEA'}]}>
              {i18n.Unlock}
            </Text>
          )}
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButton: {
    width: 150,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    flexDirection: 'row',
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 30,
    height: 30,
    tintColor: '#5A5FEA',
  },
  label: {
    fontSize: 18,
    color: 'white',
    fontFamily: popnisfont.PoppinsSemiBold,
    textTransform: 'capitalize',
  },
});

export default RnLockSwitch;
