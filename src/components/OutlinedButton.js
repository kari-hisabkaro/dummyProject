import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {loginCardStyles} from '../assets/css/loginCardStyles.js';

const OutlinedButton = ({btnText}) => {
  const handleLoginWithEmail = () => {
    // Add functionality to login with email
    console.log('Logging in with email');
  };

  return (
    <TouchableOpacity
      style={[loginCardStyles.loginEmailButton]}
      onPress={handleLoginWithEmail}>
      <Text style={loginCardStyles.loginEmailText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default OutlinedButton;
