import React, {useState} from 'react';
import {Image} from 'react-native';
import {loginStyles} from '../assets/css/loginStyles.js';

const Logo = () => {
  return (
    <Image
      source={require('../assets/images/dummyLogo.png')}
      style={loginStyles.logo}
    />
  );
};

export default Logo;
