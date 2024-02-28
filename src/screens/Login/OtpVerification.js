// import React, {useState, useEffect, useRef} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   Keyboard,
//   Platform,
//   KeyboardAvoidingView,
//   TextInput,
// } from 'react-native';
// import {loginStyles} from '../../assets/css/loginStyles.js';
// import {loginCardStyles} from '../../assets/css/loginCardStyles.js';
// // import LoginHeader from '../../components/LoginHeader.js';
// import TextInputBox from '../../components/TextInputBox.js';
// import FilledButton from '../../components/FilledButton.js';
// import OutlinedButton from '../../components/OutlinedButton.js';
// import Logo from '../../components/Logo.js';
// import LinearGradient from 'react-native-linear-gradient';

// const OtpVerfication = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [keyboardVisible, setKeyboardVisible] = useState(false);

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
//       () => {
//         setKeyboardVisible(true);
//       },
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
//       () => {
//         setKeyboardVisible(false);
//       },
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   const [otp, setOTP] = useState(['', '', '', '']);
//   const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

//   const handleOTPChange = (index, value) => {
//     const newOTP = [...otp];
//     newOTP[index] = value;
//     setOTP(newOTP);

//     // Focus next input field if there's a value
//     if (index < 3 && value !== '') {
//       otpInputRefs[index + 1].current.focus();
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{flex: 1}}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
//       <LinearGradient
//         start={{x: 0, y: 0}}
//         end={{x: 0, y: 0.5}}
//         colors={['#f1fbf4', 'white']}
//         style={loginStyles.linearGradient}>
//         {/* <View style={{flex: 1, backgroundColor: '#f1fbf4'}}> */}
//         <View className="mainLoginHeader" style={loginStyles.mainLoginHeader}>
//           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//             <View style={{flexDirection: 'column'}}>
//               <Text style={loginStyles.otpVerification}>OTP Verification</Text>

//               <View style={{marginTop: 45}}>
//                 <Logo />
//               </View>

//               <View style={{marginTop: 30}}>
//                 <View>
//                   <Text
//                     style={{
//                       color: '#868686',
//                       fontSize: 18,
//                       fontWeight: '500',
//                     }}>
//                     Enter OTP
//                   </Text>
//                 </View>
//                 <View>
//                   <View
//                   // style={styles.container}
//                   >
//                     {otp.map((digit, index) => (
//                       <TextInput
//                         key={index}
//                         // style={styles.input}
//                         style={{
//                           borderWidth: 2,
//                           borderColor: 'red',
//                           borderRadius: 5,
//                         }}
//                         maxLength={1}
//                         keyboardType="numeric"
//                         value={digit}
//                         onChangeText={value => handleOTPChange(index, value)}
//                         ref={otpInputRefs[index]}
//                       />
//                     ))}
//                   </View>
//                 </View>
//                 <View>
//                   <Text
//                     style={{
//                       fontWeight: '500',
//                       fontSize: 17,
//                       letterSpacing: 0.7,
//                     }}>
//                     <Text style={{color: '#AAAAAA'}}>Resend OTP in {''}</Text>
//                     <Text style={{color: '#02BC4F'}}>23 sec</Text>
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//         {/* </View> */}
//       </LinearGradient>
//     </KeyboardAvoidingView>
//   );
// };

// export default OtpVerfication;
