import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image, KeyboardAvoidingView} from 'react-native';
import {styles} from './style';
import {appImages, colors, fontFamily} from '../../../Services';
import {NewHeader, InputText, Button, Notify} from '../../../Components';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const LoginVerification = props => {
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState('');
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
      <View style={{height: responsiveHeight(4.7)}} />
      <NewHeader title={"Verify it's you"} close />
      <Image source={appImages.verification2} style={styles.logo} />
      <Text style={styles.topText}>
        <Text style={{fontFamily: fontFamily.extraBold}}>
          {'We would like to verify it’s you.\n'}
        </Text>
        {'Please go to your email, we’ve sent you an 8 digit code to\t'}
        <Text style={{fontFamily: fontFamily.extraBold}}>
          youremail@example.com
        </Text>
      </Text>
      <InputText
        // placeholder={'Add your Email'}
        label={'Verification code'}
        value={email}
        onChangeText={val => setEmail(val)}
      />
      <TouchableOpacity onPress={() => setVerify(true)}>
        <Text style={styles.ForgetPass}>Resend code</Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <View style={[styles.line, {marginBottom: responsiveHeight(2)}]} />
        <Button
          title={'Verify account'}
          onPress={() => props.navigation.navigate('PendingVerification')}
        />
      </View>
    </View>
  );
};

export default LoginVerification;
