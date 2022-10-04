import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {styles} from './style';
import {appImages, colors} from '../../../Services';
import {NewHeader, InputText, Button, Notify} from '../../../Components';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { remindAdminToVerifyEmail } from '../../../features/auth/authSlice';
import { getUser } from '../../../features/auth/authSlice';
const PendingVerification = props => {
  const [verify, setVerify] = useState(false);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
  },[dispatch]);
  const onRemindAdminToVerifyEmail = () => {
    dispatch(remindAdminToVerifyEmail());
    setVerify(true);
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
          text={'Reminder sent.'}
          onAnimationEnd={() =>
            setTimeout(() => {
              setVerify(false);
            }, 1000)
          }
        />
      ) : null}
      <View style={{height: responsiveHeight(6.2)}} />
      <NewHeader title={'Pending Verification'} close />
      <Image source={appImages.verification1} style={styles.logo} />
      <Text style={styles.boldText}>We’re verifying your information.</Text>
      <Text style={styles.regularText}>
        {
          'Someone from our team is taking care of it.\nThis may take a few hours, but we’ll send you an\nemail when everything is complete.\nThank you for your patience!'
        }
      </Text>
      <Text style={styles.boldText}>If you think is taking too long</Text>
      <TouchableOpacity onPress={onRemindAdminToVerifyEmail}>
        <Text style={styles.reminder}>Send us a reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PendingVerification;
