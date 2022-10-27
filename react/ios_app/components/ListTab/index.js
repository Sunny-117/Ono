'use strict';

import React, { Component } from 'react';

import {
  View,
  ScrollView
} from 'react-native';

import styles from './styles';

import TabItem from './TabItem';

class ListTab extends Component {
  render() {
    
    const { fieldData, curIdx, onTabClick } = this.props;

    return (
      
        <View style={styles.tabBoard}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            <TabItem
              fieldName="全部"
              styles={styles}
              key={0}
              index={0}
              curIdx={curIdx}
              onTabClick={onTabClick.bind(null, 'all', 0)}
            />
            {
            	fieldData.map((item, index) => {
                return (
                  <TabItem
                    fieldName={item.field_name}
                    styles={styles}
                    key={index}
                    index={index + 1}
                    curIdx={curIdx}
                    onTabClick={onTabClick.bind(null, item.field, (index + 1))}
                  />
                );
            	})
            }
          </ScrollView>
        </View>
      
    );
  }
}

export default ListTab;