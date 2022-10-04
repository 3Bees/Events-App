import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from './style';
import { colors, fontFamily } from '../../../Services';
import { NewHeader, InputText, Button, Notify } from '../../../Components';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { clearAccountPendingVerification, resendVerificationCode, verifyAccount } from '../../../features/auth/authSlice';
const Verification = props => {
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState(0);
  const [verificationCode, setVerificationCode] = useState('');
  const profile = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();
  const accountPendingVerification = useSelector(state => state.auth.accountPendingVerification);
  const error = useSelector(state => state.auth.error);
  useEffect(()=>{
    if(accountPendingVerification){
      dispatch(clearAccountPendingVerification());
      props.navigation.navigate('UserProfile', { email: email });
    }
  },[accountPendingVerification]);
  useEffect(()=>{
    if(error){
      Toast.show('Verification code is invalid');
    }
  },[error]);
  const onVerifyCode = () => {
    if (verificationCode === '') {
      Toast.show('Verification code field cannot be empty');
    }
    else {
      dispatch(verifyAccount(verificationCode));
    }
  }

  const onResendCode = () => {
    dispatch(resendVerificationCode());
    setVerify(true)
  }


  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      {verify ? (
        <Notify
          text={'Verification code has been sent.'}
          onAnimationEnd={() =>
            setTimeout(() => {
              setVerify(false);
            }, 1000)
          }
        />
      ) : null}
      <View style={{ height: responsiveHeight(4.7) }} />
      <NewHeader title={"Verify it's you"} close />

      {/* <View style={styles.line} /> */}
      <Text style={styles.topText}>
        Enter the 8 digit code we sent you to {'\n'}
        <Text style={{ fontFamily: fontFamily.bold }}>{profile ? profile.email : ''}</Text>
      </Text>
      <InputText
        // placeholder={'Add your Email'}
        label={'Verification code'}
        value={email}
        onChangeText={val => setVerificationCode(val.toUpperCase())}
        capitalize={true}
        // keyboardType={'numeric'}
      />
      <TouchableOpacity onPress={() => onResendCode()}>
        <Text style={styles.ForgetPass}>Resend code</Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <View style={[styles.line, { marginBottom: responsiveHeight(2) }]} />
        <Button
          title={'Verify account'}
          onPress={() => onVerifyCode()}
        />
      </View>
    </View>
  );
};

export default Verification;
