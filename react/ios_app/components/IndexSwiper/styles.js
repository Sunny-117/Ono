import {
	StyleSheet
} from 'react-native';

import { screenSize } from '../../utils/tools';

const styles = StyleSheet.create({
  swiperSize: {
  	width: screenSize.width,
  	height: screenSize.width * 360 / 1200
  },
  pagination: {
  	bottom: 5
  }
});

export default styles;