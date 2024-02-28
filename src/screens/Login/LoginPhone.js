import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {loginStyles} from '../../assets/css/loginStyles.js';
import {loginCardStyles} from '../../assets/css/loginCardStyles.js';
import LoginHeader from '../../components/LoginHeader.js';
import NumberInputBox from '../../components/NumberInputBox.js';
import FilledButton from '../../components/FilledButton.js';
import OutlinedButton from '../../components/OutlinedButton.js';

const LoginPhone = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <ImageBackground
          className="mainContainer"
          source={require('../../assets/images/bgPhoneImage.png')}
          style={[loginStyles.backgroundImage, {backgroundColor:"pink"}]}
          resizeMode="center">
          <LoginHeader />

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={[loginCardStyles.card, {backgroundColor:"black"}]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 19,
                }}>
                <View style={loginCardStyles.cardTitleBox}>
                  <Text style={[loginCardStyles.cardTitle, {color: "white"}]}>Insta Login</Text>
                </View>
              </View>

              <NumberInputBox inputPlaceholder={'Enter your phone number'} />
              <TouchableOpacity
                style={{marginTop: 13}}
                onPress={() => console.log('Login')}>
                <FilledButton btnText={'Send OTP'} />
              </TouchableOpacity>
              <OutlinedButton btnText={'Login with email'} />

              <Text
                style={{
                  marginTop: 15,
                  textAlign: 'center',
                  color: '#B8B8B8',
                  marginBottom: 35,
                }}>
                By login/signup, you agree to the
                <Text style={{textDecorationLine: 'underline'}}>
                  Terms of service
                </Text>{' '}
                and{' '}
                <Text style={{textDecorationLine: 'underline'}}>
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginPhone;
