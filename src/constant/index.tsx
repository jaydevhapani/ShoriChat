import {Dimensions, PixelRatio} from 'react-native';

const getResponsiveDimensions = () => {
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen'); // Use physical screen dimensions
  const widthBaseScale = SCREEN_WIDTH / 414; // Adjust baseline if needed
  const heightBaseScale = SCREEN_HEIGHT / 896; // Adjust baseline if needed

  return {
    widthPixel: (size: any) =>
      Math.round(PixelRatio.roundToNearestPixel(size * widthBaseScale)), // use for width
    heightPixel: (size: any) =>
      Math.round(PixelRatio.roundToNearestPixel(size * heightBaseScale)), // use for height
    fontPixel: (size: any) =>
      Math.round(PixelRatio.roundToNearestPixel(size * heightBaseScale)), // Consider rem or em
    pixelSizeVertical: (size: any) => heightPixel(size), //use on margin and padding
    pixelSizeHorizontal: (size: any) => widthPixel(size), //use on margin and padding
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
  };
};

export const {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
} = getResponsiveDimensions();
