import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../Services';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  typeBtn: {
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(0.7),
    marginRight: responsiveWidth(4),
    borderColor: colors.royal,
  },
  typeText: {
    fontFamily: fontFamily.bold,
  },
  header: {
    marginLeft: responsiveWidth(5),
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2),
  },
  linestyles: {
    backgroundColor: colors.silver,
    width: responsiveWidth(100),
    height: responsiveHeight(0.2),
    marginTop: responsiveHeight(3),
  },
  ImageBackground: {
    width: responsiveWidth(35),
    height: responsiveWidth(35),
    resizeMode: 'contain',
    paddingHorizontal: responsiveWidth(3),
  },
  RowView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
    position:'absolute',
    left:responsiveWidth(2),
    bottom:responsiveHeight(1.5)
  },
  TitleView: {
    backgroundColor: colors.splash,
    borderRadius: responsiveWidth(1),
    paddingVertical:responsiveHeight(0.5),
    paddingHorizontal:responsiveHeight(0.7), 
    alignItems: 'center',
    justifyContent: 'center',
  },
  freeTitle: {
    color: colors.royal,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.6),
  },
  freeView: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(1),
    paddingVertical:responsiveHeight(0.5),
    paddingHorizontal:responsiveHeight(0.7), 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(1),
  },
  paidView: {
    backgroundColor: colors.royal,
    borderRadius: responsiveWidth(1),
    paddingVertical:responsiveHeight(0.5),
    paddingHorizontal:responsiveHeight(0.7), 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(1),
  },
  title: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.8),
  },
  RowView1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(31),
    height: responsiveHeight(3),
    alignItems: 'center',
  },
  date: {
    color: colors.royal,
    marginLeft: responsiveWidth(1),
    fontFamily: fontFamily.extraBold,
    fontSize: responsiveFontSize(1.5),
  },
  BtmTitle: {
    color: colors.black,
    fontFamily: fontFamily.extraBold,
    fontSize: responsiveFontSize(2),
    height: responsiveWidth(8),
    width: responsiveWidth(45),
  },
  FlatListTopView: {
    paddingHorizontal: responsiveWidth(5),
    alignSelf: 'center',
    // marginBottom: responsiveHeight(25),
  },
  FlatListMainView: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2.5),
  },
  iconSmall: {
    resizeMode: 'contain',
    height: responsiveFontSize(2),
    width: responsiveFontSize(2),
  },
  guestsText: {
    color: colors.greyText,
    marginLeft: responsiveWidth(1),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(31),
    height: responsiveHeight(2.5),
  },
  location: {
    color: colors.greyText,
    marginLeft: responsiveWidth(1),
    fontFamily: fontFamily.regular,
    // fontSize: responsiveFontSize(1.4),
  },
  TitleView1: {
    backgroundColor: colors.lightgreen,
    borderRadius: responsiveWidth(1),
    width: responsiveWidth(5),
    height: responsiveHeight(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(1),
  },
  notRegisteredView: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(1),
    width: responsiveWidth(6.5),
    height: responsiveHeight(3),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(1),
  },
});
