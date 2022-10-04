import React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
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
  ButtonsView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(80),
    alignSelf: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: responsiveHeight(4),
  },
  ButtonsText: {
    color: colors.black,
    fontSize: responsiveFontSize(1.7),
    fontFamily: fontFamily.bold,
  },
  BottomView: {
    position: 'absolute',
    bottom: responsiveHeight(15),
    alignSelf: 'center',
  },
  image: {
    width: responsiveWidth(100),
    height: Platform.OS==='android'?responsiveHeight(87):responsiveHeight(82),
  },
  loginBtn: {
    backgroundColor: colors.white,
    width: responsiveWidth(80),
    borderWidth: responsiveWidth(0.4),
    marginTop: responsiveHeight(1.5),
    borderColor: colors.border,
  },
  ImageText: {
    color: colors.white,
    fontSize: responsiveFontSize(4.6),
    fontFamily: fontFamily.extraBold,
    marginBottom: responsiveHeight(3),
  },
  icons: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    alignSelf: 'center',
  },
});
