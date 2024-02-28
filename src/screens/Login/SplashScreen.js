import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <ImageBackground
        source={require('../../assets/images/splashScreen.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{width: 200, height: 175, borderRadius: 5.33}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
});

export default SplashScreen;
