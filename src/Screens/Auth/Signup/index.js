import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { styles } from './style';
import { colors, appImages } from '../../../Services';
import { NewHeader, InputText, Button } from '../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Toast from 'react-native-simple-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../features/auth/authSlice';
const Signup = props => {
  const { check } = props.route.params;
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const dispatch = useDispatch();
  const shoulUpdateAccount = useSelector((state) => state.auth.shoulUpdateAccount);
  const error = useSelector((state) => state.auth.error);
  useEffect(()=>{
    if(shoulUpdateAccount){
      props.navigation.navigate('Verification', { email: email });
    }
  },[shoulUpdateAccount]);
  useEffect(()=>{
    if(error){
      Toast.show('Email has already been taken');
    }
  },[error]);
  const onSignup = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      Toast.show('Email field can not be empty');
    }
    else if (password === '') {
      Toast.show('Password field can not be empty');
    }
    else if (confirmPassword === '') {
      Toast.show('Confirm Password field can not be empty');
    }
    else if (confirmPassword != password) {
      Toast.show('Password does not match with confirm password');
    }
    else if (!isCheck) {
      Toast.show('Please agree with our terms and conditions');
    }
    else if (!re.test(email)) {
      Toast.show('Email is badly formatted');
    }
    else {
      const credentials = {
        "user": {
          "email": email,
          "password": password,
          "password_confirmation": confirmPassword
        }
      };
      dispatch(signUp(credentials))
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <NewHeader title={'Sign Up'} back />
      <KeyboardAwareScrollView
        // extraHeight={250}
        enableOnAndroid
        extraScrollHeight={250}
        keyboardShouldPersistTaps='always'

      >
        <View style={{ height: responsiveHeight(4) }} />
        <InputText
          placeholder={'Add your Email'}
          label={'Email'}
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <View style={{ height: responsiveHeight(4) }} />
        <InputText
          placeholder={'Add your password'}
          label={'Password'}
          value={password}
          onChangeText={val => setPassword(val)}
          onPress={() => setVisible(!visible)}
          secureTextEntry={!visible}
          icon
        />
        <View style={{ height: responsiveHeight(4) }} />
        <InputText
          placeholder={'Add your password confirmation'}
          label={'Password confirmation'}
          value={confirmPassword}
          onChangeText={val => setConfirmPassword(val)}
          onPress={() => setIsVisible(!isVisible)}
          secureTextEntry={!isVisible}
          icon
        />
        <View style={{ height: responsiveHeight(2) }} />
        <View style={styles.termscondition}>
          {check || isCheck ? (
            <TouchableOpacity
              style={[
                styles.checkBox,
                { backgroundColor: colors.royal, borderColor: colors.royal },
              ]}
              onPress={() => setIsCheck(!isCheck)}>
              <Icon
                type="antdesign"
                name="check"
                color={colors.white}
                size={responsiveFontSize(2.5)}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => setIsCheck(!isCheck)}>
              {/* <Icon
                type="antdesign"
                name="check"
                color={colors.black}
                size={responsiveFontSize(2.8)}
              /> */}
            </TouchableOpacity>
          )}
          <Text style={styles.agreeterms}>
            I agree to the Terms and Conditions
          </Text>
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => props.navigation.navigate('TermsAndConditions')}>
          <Text style={styles.btntitle}>Read Terms and Conditions</Text>
          <Icon
            type="antdesign"
            name="arrowright"
            color={colors.white}
            size={responsiveFontSize(3.5)}
          />
        </TouchableOpacity>
        {/* <View style={{ height: responsiveHeight(20) }} /> */}

      </KeyboardAwareScrollView>

      <View style={styles.bottomView}>
        <View style={[styles.line, { marginBottom: responsiveHeight(2) }]} />
        <Button
          title={'Continue'}
          onPress={() => onSignup()}
        />
      </View>
    </View>
  );
};

export default Signup;
