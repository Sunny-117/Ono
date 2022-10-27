'use strict';

import React, { Component } from 'react';

import {
  View
} from 'react-native';

import CourseItem from './CourseItem';

import styles from './styles';

class CourseList extends Component {
  render() {
    const { courseData, navigation } = this.props;

    return (
      <View style={styles.courseBoard}>
        {
        	courseData.map((item, index) => {
            return (
              <CourseItem
                data={item}
                styles={styles}
                index={index}
                key={index}
                navigation={navigation}
              />
            );
          })
        }
      </View>
    );
  }
}

export default CourseList;