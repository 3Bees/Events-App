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
    width: responsiveWidth(60),
    fontFamily: fontFamily.extraBold,
    marginLeft:responsiveWidth(5)

  },
  infobtn: {
    resizeMode: 'contain',
    height: responsiveHeight(4),
    width: responsiveWidth(8),
  },
  blurImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(30),
    resizeMode: 'cover',
  },
  home2: {
    width: responsiveWidth(50),
    height: responsiveHeight(30),
    // resizeMode: 'contain',
    alignSelf: 'center',
  },
  TitleView: {
    backgroundColor: colors.splash,
    borderRadius: responsiveWidth(1),
    width: responsiveWidth(10),
    height: responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2),
  },
  boldtext: {
    color: colors.black,
    fontFamily: fontFamily.extraBold,
    fontSize: responsiveFontSize(3.3),
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(5),
  },
  wrapper: {
    alignSelf: 'center',
  },
  boldheading: {
    marginLeft: responsiveWidth(5),
    fontFamily: fontFamily.bold,
    marginTop: responsiveHeight(0.5),
    color: colors.black,
    fontSize: responsiveFontSize(3.5),
    marginBottom: responsiveHeight(2),
  },
  RowView1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(31),
    // height: responsiveHeight(3),
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(5),
  },
  date: {
    color: colors.black,
    marginLeft: responsiveWidth(3),
    fontFamily: fontFamily.semiBold,
    fontSize: responsiveFontSize(2),
  },
  iconSmall: {
    resizeMode: 'contain',
    height: responsiveFontSize(3),
    width: responsiveFontSize(3),
  },
  mediumHeading: {
    fontFamily: fontFamily.bold,
    marginTop: responsiveHeight(4),
    color: colors.black,
    fontSize: responsiveFontSize(2.5),
    marginBottom: responsiveHeight(1),
    paddingLeft: responsiveWidth(5),
  },
  mediumHeading2: {
    fontFamily: fontFamily.bold,
    marginTop: responsiveHeight(2),
    color: colors.black,
    fontSize: responsiveFontSize(2.5),
    paddingLeft: responsiveWidth(5),
    marginBottom: responsiveHeight(2),
  },
  regular: {
    color: colors.black,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.medium,
    paddingHorizontal: responsiveWidth(5),
  },
  FlatListMainView: {
    marginVertical: responsiveHeight(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  FlatListMainView2: {
    marginVertical: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
  },
  text2: {
    color: colors.greyText,
    marginLeft: responsiveWidth(1),
    fontFamily: fontFamily.semiBold,
    fontSize: responsiveFontSize(1.6),
  },
  text1: {
    color: colors.royal,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.semiBold,
  },
  cont: {
    flexDirection: 'row',
    marginTop: responsiveHeight(0.5),
  },
  FLWrapper: {
    backgroundColor: 'rgba(232, 233, 236, 0.2)',
    marginTop: responsiveHeight(2),
    width: responsiveWidth(100),
  },
  bottomView: {
    backgroundColor: 'white',
    bottom: responsiveHeight(2),
  },
  line: {
    width: responsiveWidth(100),
    height: responsiveHeight(0.2),
    backgroundColor: colors.border + '30',
  },
  silverView: {
   
    paddingVertical: responsiveHeight(2),
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
  },
  FlatListBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
  editIcon:{
    height:responsiveHeight(3.5),
    width:responsiveHeight(3.5),
    resizeMode:'contain',
    top:responsiveHeight(1.5)
  },
  FlatListTitle: {
    color: colors.greyText,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(60),
  },
  FlatListTitle2: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2.4),
    marginTop:responsiveHeight(1),
    width: responsiveWidth(75),
  },
  FlatListDate: {
    width: responsiveWidth(50),
    color: colors.black,
    marginLeft: responsiveWidth(1),
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.medium,
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
  FLheader: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    fontSize: responsiveFontSize(2.5),
    marginBottom: responsiveHeight(1),
  },
  dollarView: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    borderRadius: responsiveWidth(1),
    backgroundColor: colors.royal,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(1),
  },
  dollarText: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2),
  },
  Freeview: {
    height: responsiveHeight(3),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(1),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(1),
  },
  FreeText: {
    color: colors.royal,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2),
  },
  RowView2: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: responsiveHeight(2),
    left: responsiveWidth(1),
    flexDirection: 'row',
  },
  phoneView: {
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // alignItems: 'center',
    borderBottomWidth: responsiveWidth(0.5),
    marginTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(1.5),
  },
  flag: {
    borderRadius: responsiveWidth(3.5),
    height: responsiveWidth(7),
    width: responsiveWidth(7),
  },
});
