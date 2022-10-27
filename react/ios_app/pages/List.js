'use strict';

import React, { Component } from 'react';

import {
  View,
  ScrollView
} from 'react-native';

import commonStyles from '../styles/commonStyles';

import ListModel from '../models/List';

import ListTab from '../components/ListTab';
import CourseList from '../components/CourseList';

const listModel = new ListModel();

class ListPage extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
    	fieldData: [],
    	courseData: [],
    	field: 'all',
      curIdx: 0
    };
  }

  getDatas (field) {
    listModel.getCourseFields().then((res) => {
      this.setState({
        fieldData: res.result
      });
    });

    listModel.getCourses(field).then((res) => {
      this.setState({
        courseData: res.result
      });
    });
  }

  onTabClick (field, index) {
    this.setState({
      field,
      curIdx: index
    }, () => {
      this.getDatas(this.state.field);
    });
  }

  componentDidMount () {
  	this.getDatas(this.state.field);
  }

  render() {
    
    const { fieldData, courseData, curIdx, navigation } = this.state;

    return (
      <View style={commonStyles.container}>
        <ListTab
          fieldData={fieldData}
          curIdx={curIdx}
          onTabClick={this.onTabClick.bind(this)}
        />
      
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsVerticalScrollIndicator={false}
        >
          <CourseList
            courseData={courseData}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    );
  }
}


export default ListPage;