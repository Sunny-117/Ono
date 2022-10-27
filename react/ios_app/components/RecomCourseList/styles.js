import {
  StyleSheet
} from 'react-native';

import { screenSize } from '../../utils/tools';

const styles = StyleSheet.create({
  recomCourseBoard: {
  	flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    padding: 5
  },
  courseItem: {
    width: screenSize.width / 2 - 5,
    padding: 5
  },
  imgView: {
  	width: (screenSize.width / 2 - 15),
    height: (screenSize.width / 2 - 20) * 1080 / 1920
  },
  courseName: {
    marginTop: 5,
    marginBottom: 5
  },
  courseNameText: {
    fontSize: 13
  },
  teacherInfo: {
  	flexDirection: 'row',
  	alignItems: 'center',
    height: 30
  },
  teacherImg: {
    width: 25,
    height: 25,
    borderRadius: 12,
    marginRight: 5
  },
  teacherName: {
    fontSize: 12,
    color: '#666'
  },
  price: {
  	alignItems: "flex-end",
    marginTop: 5
  },
  priceNum: {
  	color: '#f40',
  }
});

export default styles;