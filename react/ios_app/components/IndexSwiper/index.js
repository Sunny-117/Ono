'use strict';

import React, { Component } from 'react';

import Swiper from 'react-native-swiper';

import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import SwiperItem from './SwiperItem';

import { screenSize } from '../../utils/tools';

import styles from './styles';

class IndexSwiper extends Component {
  render() {
  	const { swiperData, navigation } = this.props,
  	      sHeight = styles.swiperSize.height;

    return (
      <View
        height={sHeight}
      >
      	<Swiper
	        height={sHeight}
	        autoplay={true}
	        loop={true}
	        paginationStyle={styles.pagination} 
	      >
	      	{
	      		swiperData.map((item, index) => {
	            return (
	              <SwiperItem
                  data={item}
                  key={index}
                  navigation={navigation}
                  styles={styles}
	              />
	            );
	      		})
	      	}
	      </Swiper>
      </View>
    );
  }
}

export default IndexSwiper;