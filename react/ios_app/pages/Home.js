'use strict';

import React, { Component } from 'react';

import { 
	View,
	ScrollView,
	RefreshControl
} from 'react-native';

import commonStyles from '../styles/commonStyles';

import IndexModel from '../models/Index';

import IndexSwiper from '../components/IndexSwiper';
import MainTitle from '../components/MainTitle';
import RecomCourseList from '../components/RecomCourseList';
import CourseList from '../components/CourseList';

import { filterFieldData } from '../utils/extension';

const indexModel = new IndexModel();

class HomePage extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	swiperData: [],
			fieldData: [],
			courseData: [],
			recomCourseData: [],
      isRefreshing: false
	  };
	}
  
  getCourseDatas () {
  	indexModel.getCourseDatas().then((res) => {
  		const data = res.result;

  		this.setState({
  			swiperData: data.swipers,
				fieldData: data.fields,
				courseData: data.courses,
				recomCourseData: data.recomCourses
  		});
  	});
  }

  retMainTitle (data) {
  	return data && <MainTitle title={data.field_name} key={data.field} />;
  }

  onPageRefresh () {
    if (this.state.isRefreshing) {
      return;
    }

    this.setState({
      isRefreshing: true
    });
    

    setTimeout(() => {
      this.getCourseDatas();
      this.setState({
        isRefreshing: false
      });
    }, 1000);
  }

  componentDidMount () {
  	this.getCourseDatas();
  }

  render() {
    const { fieldData, swiperData, recomCourseData, courseData } = this.state,
          { navigation } = this.props;

    return (
      <View style={commonStyles.container}>
        <ScrollView
            automaticallyAdjustContentInsets={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onPageRefresh.bind(this)}
                tintColor="#666"
                title="正在加载中"
                titleColor="#666"
              />
            }
        >

		      <IndexSwiper
	          swiperData={swiperData}
	          navigation={navigation}
		      />

		      <MainTitle
            title="推荐课程"
		      />
		      <RecomCourseList
            recomCourseData={recomCourseData}
            navigation={navigation}
		      />

		      { this.retMainTitle(fieldData[0]) }
          <CourseList
            courseData={filterFieldData(courseData, '0', true)}
            navigation={navigation}
          />

		      { this.retMainTitle(fieldData[1]) }
          <CourseList
             courseData={filterFieldData(courseData, '1', true)}
             navigation={navigation}
          />

		      { this.retMainTitle(fieldData[2]) }
          <CourseList
             courseData={filterFieldData(courseData, '2', true)}
             navigation={navigation}
          />

		      { this.retMainTitle(fieldData[3]) }
          <CourseList
             courseData={filterFieldData(courseData, '3', true)}
             navigation={navigation}
          />
          
	      </ScrollView>
	    </View>
    );
  }
}

export default HomePage;