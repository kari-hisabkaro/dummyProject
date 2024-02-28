import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {loginCardStyles} from '../assets/css/loginCardStyles.js';

const TextInputBox = ({inputPlaceholder}) => {
  const [text, setText] = useState('');

  const handleChangeText = newText => {
    setText(newText);
  };

  return (
    <TextInput
      style={loginCardStyles.input}
      placeholder={inputPlaceholder}
      placeholderTextColor="grey"
      onChangeText={handleChangeText}
      value={text}
      keyboardType="default"
    />
  );
};

export default TextInputBox;
