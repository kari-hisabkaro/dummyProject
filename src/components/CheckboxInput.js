import React, {useRef} from 'react';
import {TouchableOpacity, Text, View, Animated, Image} from 'react-native';
import tickmarkIcon from '../assets/images/tickmarkIcon.png';
import {loginCardStyles} from '../assets/css/loginCardStyles';

const CheckboxInput = ({
  text,
  onPress,
  isChecked,
  containerStyle,
  textStyle,
  checkboxStyle,
}) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    const toValue = isChecked ? 0 : 30;
    Animated.timing(animatedWidth, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={[loginCardStyles.flexRowAlignCenter, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          startAnimation();
          onPress();
        }}
        style={[
          loginCardStyles.checkbox,
          isChecked && loginCardStyles.checkboxSelected,
          checkboxStyle,
        ]}>
        {isChecked && (
          <Image
            source={require('../assets/images/tickmarkIcon.png')}
            style={{width: 20, height: 20, tintColor: 'white'}}
          />
        )}
      </TouchableOpacity>
      <Text style={[loginCardStyles.checkboxText, textStyle]}>{text}</Text>
    </View>
  );
};

export default CheckboxInput;
