'use strict';

import React, { Component } from 'react';

import {
  View,
  Image,
  TouchableWithoutFeedback 
} from 'react-native';

class SwiperItem extends Component {

  render() {
    const { data, styles, navigation } = this.props;

    const toDetailPage = () => {
    	navigation.navigate('Detail', {
        courseId: data.course_id
	  	});
    }

    return (
      <TouchableWithoutFeedback 
        style={styles.swiperSize}
        onPress={toDetailPage}>
      	<Image 
      	  style={styles.swiperSize}
      	  source={{url: data.img}}
      	/>
      </TouchableWithoutFeedback>
    );
  }
}

export default SwiperItem;