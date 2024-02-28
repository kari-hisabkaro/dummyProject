import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
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
import CheckboxInput from '../../components/CheckboxInput.js';

const LoginEmail = () => {
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
      <ScrollView
        contentContainerStyle={!keyboardVisible ? {flex: 1} : undefined}
        style={keyboardVisible ? {flex: 1} : undefined}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <ImageBackground
            className="mainContainer"
            source={require('../../assets/images/bgPhoneImage.png')}
            style={loginStyles.backgroundImage}
            resizeMode="contain">
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
                    <Text style={loginCardStyles.cardTitle}>Login</Text>

                    <TouchableOpacity style={[loginCardStyles.signupButton]}>
                      <Text style={loginCardStyles.signupText}>Sign up</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <TextInputBox inputPlaceholder={'Email ID'} />
                <TextInputBox inputPlaceholder={'Password'} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <CheckboxInput
                      text="Remember me"
                      isChecked={isChecked}
                      onPress={() => {
                        setIsChecked(!isChecked);
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => console.log('Reset Password')}>
                    <Text style={[loginCardStyles.resetPassword]}>
                      Reset Password
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{marginTop: 28}}
                  onPress={() => console.log('Login')}>
                  <FilledButton btnText={'Login'} />
                </TouchableOpacity>
                <OutlinedButton btnText={'Login with mobile number'} />

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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginEmail;
