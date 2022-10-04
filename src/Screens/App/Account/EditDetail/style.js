import React from 'react';
import {Button, StyleSheet, Text, View,Platform} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../../Services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop:Platform.OS === 'ios' ? responsiveHeight(5):null

  },
  header: {
    width: responsiveWidth(100),
    alignSelf: 'center',
    paddingLeft: responsiveWidth(8),
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveHeight(10),
    paddingRight: responsiveWidth(5),
    borderBottomColor:'gray',
    borderBottomWidth:0.3
  },
  headerTitle: {
    color: colors.black,
    fontSize: responsiveFontSize(2.3),
    fontFamily: fontFamily.extraBold,
    marginLeft:responsiveWidth(5)

  },
  InputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
  },
  InputView2: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    height: responsiveHeight(10),
  },
  line: {
    width: responsiveWidth(100),
    height: responsiveHeight(0.2),
    backgroundColor: colors.border + '30',
  },
  phonoInput: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(5),

  },
  label: {
    color: colors.black,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.bold,
  },
  phoneView: {
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // alignItems: 'center',
    borderBottomWidth: responsiveWidth(0.5),
    marginTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(1.5),
  },
  messageText:{
    marginTop:responsiveHeight(1),
    fontFamily:fontFamily.regular
  },
  messageText2:{
    marginTop:responsiveHeight(10),
    fontFamily:fontFamily.regular,
    fontSize:responsiveFontSize(2),
    color:'black',
    marginBottom:responsiveHeight(5)
  },
  ForgetPass: {
    color: colors.royal,
    textDecorationLine: 'underline',
    marginTop: responsiveHeight(5),
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.medium,
  },
  flag: {
    borderRadius: responsiveWidth(3.5),
    height: responsiveWidth(7),
    width: responsiveWidth(7),
  },
});
