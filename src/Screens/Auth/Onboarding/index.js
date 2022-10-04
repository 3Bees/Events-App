import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import {styles} from './style';
import {NewHeader, Button, Slider} from '../../../Components';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, appImages} from '../../../Services';
import { useDispatch } from 'react-redux';
import { getLoggedOutImages } from '../../../features/pages/pagesSlice';
const Onboarding = props => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getLoggedOutImages());
  },[dispatch])
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <Slider />
      {/* <ImageBackground
        source={appImages.onBoarding}
        style={styles.image}></ImageBackground> */}
      <View style={styles.BottomView}>
        <Text style={styles.ImageText}>{'A community\nunlike any\nother'}</Text>
        <Button
          title={'Get Started'}
          myStyles={{
            width: responsiveWidth(80),
          }}
          onPress={() => {
            props.navigation.navigate('Signup', {check: false});
          }}
        />
        <Button
          title={'Log in'}
          myStyles={styles.loginBtn}
          itsTextstyle={{color: colors.black}}
          onPress={() => {
            props.navigation.navigate('Login');
          }}
        />
      </View>
      <View style={styles.ButtonsView}>
        <TouchableOpacity onPress={() => props.navigation.navigate('About')}>
          <Image source={appImages.Info} style={styles.icons} />
          <Text style={styles.ButtonsText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Shop')}>
          <Image source={appImages.ShoppingCart} style={styles.icons} />
          <Text style={styles.ButtonsText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Donate')}>
          <Image source={appImages.HandPalm} style={styles.icons} />
          <Text style={styles.ButtonsText}>Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
