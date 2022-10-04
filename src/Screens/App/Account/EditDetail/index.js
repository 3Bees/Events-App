import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { styles } from './style';
import { Button, NewHeader, SimpleInput, InputText } from '../../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { appImages, colors, fontFamily } from '../../../../Services';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import PhoneInput, { PhoneNumber } from 'react-native-phone-input';
import { useDispatch, useSelector } from 'react-redux';
import { useInputValue } from '../../../../hooks';
import { resendVerificationCode, updateAccount, verifyAccountEmailChange } from '../../../../features/auth/authSlice';
import { useNavigation } from '@react-navigation/native';


const AccountDetails = props => {
  const { type } = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [unverifiedEmail, setUnverifiedEmail] = useState(user?.unconfirmed_email || '')
  const user = useSelector((state) => state.auth.profile);
  const email = useInputValue(user?.email||'');
  const firstName = useInputValue(user?.first_name||'');
  const lastName = useInputValue(user?.last_name || '');
  const phone = useInputValue(user?.phone || '');
  const twitter = useInputValue(user?.twitter_handle || '');
  const verificationCode = useInputValue('');
  const onEditProfile = () => {
    if(type){
      const userDetailsObject = {};
      let goBack = false;
      if(type === 'Name'){
        if(firstName.value.length > 0 && firstName.value !== user.first_name){
          userDetailsObject.first_name = firstName.value;
          goBack = true;
        }
        if(lastName.value.length > 0 && lastName.value !== user.last_name){
          userDetailsObject.last_name = lastName.value;
          goBack = true;
        }
      } else if(type === 'Email'){
        if(email.value.length > 0 && email.value !== user.email){
          userDetailsObject.email = email.value;
          setUnverifiedEmail(email.value);
        } 
      } else if(type === 'Twitter'){
        if(twitter.value.length > 0 && twitter.value !== user.twitter_handle){
          userDetailsObject.twitter_handle = twitter.value;
          goBack = true;
        }
      } else if(type === 'Phone Number'){
        if(phone.value.length > 0 && phone.value !== user.phone){
          userDetailsObject.mobile = phone.value;
          goBack = true;
        }
      }
      if(Object.keys(userDetailsObject).length > 0){
        const userObject = {user: userDetailsObject}
        dispatch(updateAccount(userObject))
        if(goBack){
          navigation.navigate('AccountDetails');
        }
      }
    }
  }
  const onSendVerificationCode = () => {
    dispatch(verifyAccountEmailChange(verificationCode.value));
    navigation.navigate('AccountDetails');
  }
  const onResendVerificationCodeToEmail = () => {
    dispatch(resendVerificationCode());
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.header}>
        <Icon
          type="antdesign"
          name="arrowleft"
          color={colors.black}
          size={responsiveFontSize(4)}
          onPress={() => props.navigation.goBack()}
        />
        <Text numberOfLines={1} style={styles.headerTitle}>
          {'Edit your account information'}
        </Text>
      </View>
      <ScrollView>
        {
          type === 'Name' ?
            <View style={styles.InputView}>
              <SimpleInput
                onChangeText={firstName.onChange}
                value={firstName.value}
                label={'First Name'}
                MyStyles={{ width: responsiveWidth(42.5), alignSelf: 'flex-start' }}
                customstyle
              />
              <SimpleInput
                onChangeText={lastName.onChange}
                value={lastName.value}
                label={'Last Name'}
                MyStyles={{ width: responsiveWidth(42.5), alignSelf: 'flex-start' }}
                customstyle
              />
            </View>
            :
            type === 'Twitter' ? <View style={styles.InputView}>
              <SimpleInput
                onChangeText={twitter.onChange}
                value={twitter.value}
                label={'Twitter username/handle'}
                placeholder={'@yourusername'}
              />
            </View>
              :
              type === 'Email' ? <View style={styles.InputView2}>
                <SimpleInput
                  onChangeText={email.onChange}
                  value={email.value}
                  label={'Email'}
                  placeholder={'Com@amandamoon.me'}
                />
                {
                  user?.unconfirmed_email &&
                    <Text style={styles.messageText}>{'The new email is pending verification. In the meantime we’ll keep using '}{user.email}</Text>
                }
                {
                  user?.unconfirmed_email &&
                    <View>
                      <Text style={styles.messageText2}>
                        {'Please verify you have access to the new email in the next 24 hours. Enter the 8 digit code we sent to '}
                        <Text style={{ fontWeight: 'bold' }}>{user && user.unconfirmed_email ? user.unconfirmed_email : unverifiedEmail}
                        </Text>
                      </Text>
                      <InputText
                        label={'Verification code'}
                        onChangeText={verificationCode.onChange}
                        value={verificationCode.value}
                      />
                      <TouchableOpacity onPress={onResendVerificationCodeToEmail}>
                        <Text style={styles.ForgetPass}>Resend code</Text>
                      </TouchableOpacity>
                    </View>
                }
              </View>
                :
                type === 'Phone Number' ?
                  <View style={styles.phonoInput}>
                    <Text style={[styles.label]}>{'PhoneNumber'}</Text>
                    <View
                      style={[
                        styles.phoneView,
                        {
                          borderColor: colors.border,
                        },
                      ]}>
                      <PhoneInput
                        value={phone.value}
                        onChangePhoneNumber={phone.onChange}
                        initialCountry="us"
                        flagStyle={styles.flag}
                        style={{ width: responsiveWidth(90) }}
                      />
                    </View>
                    <Text style={styles.messageText}>This information will be used for account verification.</Text>
                  </View>
                  :
                  null



        }
      </ScrollView>
      {user?.unconfirmed_email ? <View style={styles.bottomView}>
        <View style={[styles.line, { marginBottom: responsiveHeight(2) }]} />
        <Button title='Verify Email'
          onPress={onSendVerificationCode}
        />
      </View> : <View style={styles.bottomView}>
        <View style={[styles.line, { marginBottom: responsiveHeight(2) }]} />
        <Button title={type === 'Email' ? 'Update Email' : 'Save'}
          onPress={onEditProfile}
        />
      </View>}
    </View>
  );
};

export default AccountDetails;
