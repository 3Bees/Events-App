import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Toast from 'react-native-simple-toast';
import {styles} from './style';
import {colors} from '../../../Services';
import {NewHeader, InputText, Button, Notify} from '../../../Components';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../features/auth/authSlice';
const ForgetPassword = props => {
  const [forgot, setForgot] = useState(false);
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const onForgotPasswordRequest = () => {
    if (email === '') {
      Toast.show('Email field cannot be empty');
    } else {
      const body = {
        user: {
          email
        }
      };
      dispatch(forgotPassword(body));
      setForgot(true)
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      {forgot ? (
        <Notify
          text={'Password reset email has been sent'}
          onAnimationEnd={() =>
            setTimeout(() => {
              setForgot(false);
            }, 1500)
          }
        />
      ) : null}
      <View style={{height: responsiveHeight(6.2)}} />
      <NewHeader title={'Reset Password'} close />

      {/* <View style={styles.line} /> */}
      <Text style={styles.topText}>
        We'll send you an email with a link to reset your password.{'\n'}For
        security, the link will expire in x hours.
      </Text>
      <InputText
        placeholder={'Add your Email'}
        label={'Email'}
        value={email}
        onChangeText={val => setEmail(val)}
      />
      <Text
        style={styles.ForgetPass}
        onPress={() => props.navigation.navigate('Login')}>
        Back to Login
      </Text>
      <View style={styles.bottomView}>
        <View style={[styles.line, {marginBottom: responsiveHeight(2)}]} />
        <Button title={'Send Email'} onPress={onForgotPasswordRequest} />
      </View>
    </View>
  );
};

export default ForgetPassword;
