'use strict';

import React, { Component } from 'react';

import styles from './styles';

import {
  Image
} from 'react-native';

class Logo extends Component {
  render() {
    return (
      <Image 
         style={ styles.logo }
         source={require('../../assets/img/logo.png')} />
    );
  }
}

export default Logo;