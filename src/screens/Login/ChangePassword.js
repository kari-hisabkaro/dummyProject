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
import TextInputBox from '../../components/TextInputBox.js';
import FilledButton from '../../components/FilledButton.js';
import OutlinedButton from '../../components/OutlinedButton.js';

const ChangePassword = () => {
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
          style={loginStyles.backgroundImage}
          resizeMode="center">
          <LoginHeader />

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={loginCardStyles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 19,
                }}>
                <View style={loginCardStyles.cardTitleBox}>
                  <Text style={[loginCardStyles.cardTitle, {fontSize: 28}]}>
                    Change Password
                  </Text>
                </View>
              </View>

              <View style={{marginTop: 5}}>
                <TextInputBox inputPlaceholder={'Enter Password'} />
              </View>
              <View style={{marginTop: 7}}>
                <TextInputBox inputPlaceholder={'Confirm Password'} />
              </View>

              <TouchableOpacity
                style={{marginTop: 13}}
                onPress={() => console.log('Login')}>
                <FilledButton btnText={'Submit'} />
              </TouchableOpacity>

              <Text
                style={{
                  textAlign: 'center',
                  marginBottom: 25,
                }}>
                {''}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
