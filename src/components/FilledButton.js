import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {loginCardStyles} from '../assets/css/loginCardStyles.js';

const FilledButton = ({btnText}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = () => {
    // Add functionality to send OTP
    console.log('Sending OTP to:', phoneNumber);
  };

  return (
    <TouchableOpacity
      style={[loginCardStyles.otpButton]}
      onPress={handleSendOTP}>
      <Text style={loginCardStyles.otpText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;
