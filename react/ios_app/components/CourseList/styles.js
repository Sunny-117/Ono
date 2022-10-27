import {
  StyleSheet
} from 'react-native';

import { screenSize } from '../../utils/tools';

const styles = StyleSheet.create({
  courseBoard: {
  	width: screenSize.width,
  },
  courseItem: {
  	flexDirection: 'row',
  	height: 80,
  	backgroundColor: '#fff',
  	borderBottomColor: '#eee',
  	marginTop: 10
  },
  courseItemFirst: {
    marginTop: 0
  },
  imgView: {
  	width: 142,
  	height: 80
  },
  infoView: {
  	position: 'absolute',
  	top: 0,
  	left: 0,
  	width: screenSize.width,
  	height: 80,
  	paddingLeft: 152,
  	paddingTop: 10,
  	paddingBottom: 10
  },
  courseName: {
  	lineHeight: 20
  },
  price: {
  	color: '#f40',
  	marginTop: 5
  }
});

export default styles;