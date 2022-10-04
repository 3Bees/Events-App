import React, {useEffect} from 'react';
import {View, Image, Text, StatusBar} from 'react-native';
import {styles} from './style';
import {appImages} from '../../../Services/index';
const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Onboarding');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Image source={appImages.splash} style={styles.logo} />
    </View>
  );
};

export default Splash;
