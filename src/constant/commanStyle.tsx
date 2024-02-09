import {Platform, StatusBar, StyleSheet} from 'react-native';
import { heightPixel, pixelSizeHorizontal } from '.';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop : StatusBar.currentHeight
  },
  flex: {
    flex : 1
  },
  ph14: {
    paddingHorizontal: pixelSizeHorizontal(14),
  },
  boxShadow: {
    shadowColor: '#D8E0F1',
    shadowOffset: {width: 0, height: heightPixel(10)},
    shadowOpacity: 0.2,
    shadowRadius: heightPixel(10),
    elevation : heightPixel(4)
  },
});
