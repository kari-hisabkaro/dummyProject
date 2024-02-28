import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {loginCardStyles} from '../assets/css/loginCardStyles.js';

const NumberInputBox = ({inputPlaceholder}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = text => {
    setPhoneNumber(text);
  };

  return (
    <TextInput
      style={loginCardStyles.input}
      placeholder={inputPlaceholder}
      placeholderTextColor="grey"
      onChangeText={handlePhoneNumberChange}
      value={phoneNumber}
      keyboardType="phone-pad"
    />
  );
};

export default NumberInputBox;
