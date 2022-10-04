import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { State } from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../features/auth/authSlice';
import { appImages, colors, fontFamily } from '../../utilities';
const CustomDrawer = props => {
  const profile = useSelector((state) => state.auth.profile);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOut());
  }
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingLeft: responsiveWidth(5),
      }}>
      {/* <TouchableOpacity style={{marginTop: responsiveHeight(4)}}>
        <Image
          source={appImages.users}
          style={{
            height: responsiveWidth(18),
            width: responsiveWidth(18),
            borderRadius: responsiveWidth(9),
          }}
        />
      </TouchableOpacity> */}
      {profile && <>
        <Text style={styles.name}>Hello, {profile.first_name} {profile.last_name}</Text>
        <Text style={styles.email}>{profile.email}</Text>
      </>}
      <View
        style={{
          width: responsiveWidth(55),
          // alignSelf: 'center',
          height: responsiveHeight(0.2),
          backgroundColor: colors.silver,
          marginVertical: responsiveHeight(3),
        }}
      />
      <Text style={styles.manage}>Manage your account</Text>
      <TouchableOpacity style={styles.Button}
        onPress={() => props.navigation.navigate('AccountStackScreens')}

      >
        <Image source={appImages.UserCircle} style={styles.icon} />
        <Text style={styles.Buttontext}>Edit account</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.Button}>
        <Image source={appImages.Gear} style={styles.icon} />
        <Text style={styles.Buttontext}>Settings and Privacy</Text>
      </TouchableOpacity> */}
      <View
        style={{
          width: responsiveWidth(62),
          // alignSelf: 'center',
          height: responsiveHeight(0.2),
          backgroundColor: colors.silver,
          marginVertical: responsiveHeight(3),
        }}
      />
      <Text style={[styles.manage, { marginTop: 0 }]}>Explore more</Text>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => props.navigation.navigate('About')}>
        <Image source={appImages.Info} style={styles.icon} />
        <Text style={styles.Buttontext}>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => props.navigation.navigate('Shop')}>
        <Image source={appImages.ShoppingCart} style={styles.icon} />
        <Text style={styles.Buttontext}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => props.navigation.navigate('Donate')}>
        <Image source={appImages.HandPalm} style={styles.icon} />
        <Text style={styles.Buttontext}>Donate</Text>
      </TouchableOpacity>
      <View
        style={{
          width: responsiveWidth(62),
          // alignSelf: 'center',
          height: responsiveHeight(0.2),
          backgroundColor: colors.silver,
          marginVertical: responsiveHeight(3),
        }}
      />
      <Text style={[styles.manage, {marginTop: 0}]}>Need help?</Text>
      <TouchableOpacity style={styles.Button} onPress={() => props.navigation.navigate('Help')}>
        <Image source={appImages.HelpIcon} style={styles.icon} />
        <Text style={styles.Buttontext}>Help and Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} 
      onPress={() => props.navigation.navigate('TermsAndConditions')}
      >
        <Image source={appImages.Info} style={styles.icon} />
        <Text style={styles.Buttontext}>Terms of use</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={onLogOut}>
        <Image source={appImages.SignOut} style={styles.icon} />
        <Text style={styles.Buttontext}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  name: {
    color: colors.black,
    fontFamily: fontFamily.extraBold,
    marginTop: responsiveHeight(4.5),
    fontSize: responsiveFontSize(2.1),
  },
  email: {
    color: colors.border,
    fontFamily: fontFamily.extraBold,
    marginTop: responsiveHeight(0.5),
    fontSize: responsiveFontSize(1.5),
  },
  manage: {
    color: colors.disabledText,
    fontFamily: fontFamily.extraBold,
    marginTop: responsiveHeight(4),
  },
  icon: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(7),
  },
  Buttontext: {
    color: colors.black,
    fontFamily: fontFamily.extraBold,
    marginLeft: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
});
export default CustomDrawer;
