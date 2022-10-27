'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

class TabItem extends Component {
  render() {
    
    const { fieldName, styles, index, curIdx, onTabClick } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={onTabClick}
      >
      	<View style={[styles.tabItem, index === curIdx && styles.tabItemCurrent]}>
      		<Text 
	      	  styles={[styles.tabItemText, index === curIdx && styles.tabItemTextCurrent]}
	      	>{fieldName}</Text>
      	</View>
      </TouchableWithoutFeedback>
    );
  }
}

export default TabItem;