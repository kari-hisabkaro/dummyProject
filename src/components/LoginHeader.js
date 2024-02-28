import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {loginStyles} from '../assets/css/loginStyles.js';
import Logo from './Logo.js';

const LoginHeader = () => {
  return (
    <View className="mainLoginHeader" style={loginStyles.mainLoginHeader}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column'}}>
          <Logo />
        </View>

        <View style={loginStyles.header}>
          <TouchableOpacity
            style={[
              loginStyles.languageButton,
              {backgroundColor: 'cornflowerblue'},
            ]}
            // onPress={handleLanguage}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={[loginStyles.languageText, {color: 'white'}]}>
                Instagram
              </Text>
              <Image
                source={require('../assets/images/languageIcon.png')}
                style={[loginStyles.languageIcon, {tintColor: 'white'}]}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginHeader;
