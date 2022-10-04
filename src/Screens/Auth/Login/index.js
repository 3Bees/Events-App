import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from './style';
import { colors } from '../../../Services';
import { NewHeader, InputText, Button } from '../../../Components';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { clearScreenToGoTo, logIn } from '../../../features/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
const Login = props => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const error = useSelector(state => state.auth.error);
  const screenToGoTo = useSelector(state => state.auth.screenToGoTo);
  useEffect(()=>{
    if(screenToGoTo !== ''){
      dispatch(clearScreenToGoTo());
      navigation.navigate(screenToGoTo);
    }
  }, [screenToGoTo])
  const onLogin = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      Toast.show('Email field cannot be empty');
    }
    else if (password === '') {
      Toast.show('Password field cannot be empty');
    }
    else if (!re.test(email)) {
      Toast.show('Email is badly formatted');
    }
    else {

      const credentials = {
        "user": {
          "email": email,
          "password": password
        }
      };
      dispatch(logIn(credentials));
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <NewHeader title={'Log In'} back />
      {/* <View style={styles.line} /> */}
      <Text style={styles.topText}>
        Log in to learn more about upcoming events. If you don't have an account
        you can
        <Text
          onPress={() => props.navigation.navigate('Signup', { check: false })}
          style={{ color: colors.royal }}>
          {' '}
          Sign up
        </Text>
      </Text>
      <InputText
        placeholder={'Add your Email'}
        label={'Email'}
        value={email}
        onChangeText={val => setEmail(val)}
        />
      <View style={{ height: responsiveHeight(5) }} />
      <InputText
        placeholder={'Add your password'}
        icon
        onPress={() => setVisible(!visible)}
        secureTextEntry={!visible}
        label={'Password'}
        value={password}
        onChangeText={val => setPassword(val)}
      />
      <Text
        style={styles.ForgetPass}
        onPress={() => props.navigation.navigate('ForgetPassword')}>
        Forgot Password
      </Text>
      <View style={styles.bottomView}>
        <View style={[styles.line, { marginBottom: responsiveHeight(2) }]} />
        <Button
          title={'Log In'}
          onPress={() => onLogin()}
        />
      </View>
    </View>
  );
};

export default Login;
