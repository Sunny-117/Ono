'use strict';

import React, { Component } from 'react';

import {
  View
} from 'react-native';

import CourseItem from './CourseItem';

import styles from './styles';

class RecomCourseList extends Component {
  render() {

    const { recomCourseData, navigation } = this.props;

    return (
      <View style={styles.recomCourseBoard}>
        {
          recomCourseData.map((item, index) => {
            return (
              <CourseItem
                data={item}
                styles={styles}
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

export default RecomCourseList;