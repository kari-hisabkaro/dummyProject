import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPhone from '../screens/Login/LoginPhone';
import LoginEmail from '../screens/Login/LoginEmail';
import ResetPassword from '../screens/Login/ResetPassword';
import ChangePassword from '../screens/Login/ChangePassword';
import Signup from '../screens/Login/Signup';
import Dummy from '../screens/Signup/Dummy';
import SplashScreen from '../screens/Login/SplashScreen';
import OtpVerification from '../screens/Login/OtpVerification';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false, // it's used to hide the "name" of pages from screen
      }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}

      <Stack.Screen name="LoginPhone" component={LoginPhone} />
      {/* <Stack.Screen name="LoginEmail" component={LoginEmail} /> */}
      {/* <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
      {/* <Stack.Screen name="ChangePassword" component={ChangePassword} /> */}
      {/* <Stack.Screen name="Signup" component={Signup} /> */}
      {/* <Stack.Screen name="OtpVerification" component={OtpVerification} /> */}

      {/* <Stack.Screen name="Dummy" component={Dummy} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
