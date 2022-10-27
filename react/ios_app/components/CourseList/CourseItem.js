'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import { directToPage } from '../../utils/extension';

class CourseItem extends Component {
  render() {
    
    const { data, styles, navigation, index } = this.props;

    return (
      <TouchableWithoutFeedback 
        onPress={directToPage(navigation, 'Detail', {
        	courseId: data.id
        })}
      >
      	<View style={[styles.courseItem, index === 0 && styles.courseItemFirst]}>
      		<View style={styles.imgView}>
            <Image
              style={styles.imgView}
              source={{url: data.img}}
            />
      		</View>
      		<View style={styles.infoView}>
            <Text 
              numberOfLines={2} 
              style={styles.courseName}
            >{data.course_name}</Text>
            <Text style={styles.price}>{data.price == 0 ? '免费' : `￥${data.price}.00`}</Text>
      		</View>
      	</View>
      </TouchableWithoutFeedback>
    );
  }
}

export default CourseItem;