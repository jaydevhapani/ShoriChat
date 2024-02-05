import {Platform, StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop : Platform.OS == 'android' ? 40 : 0
  },
  flex: {
    flex : 1
  },
  ph14: {
    paddingHorizontal: 14,
  },
  boxShadow: {
    shadowColor: '#5A5FEA',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation : 10
  },
});
