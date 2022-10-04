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
    backgroundColor: colors.lightbluebackground,
  },
  ImageBackground: {
    width: responsiveWidth(100),
    height: Platform.OS==='android'?responsiveHeight(12.5):responsiveHeight(8.5),
  },
  ImageText: {
    color: colors.white,
    fontSize: responsiveFontSize(3.5),
    fontFamily: fontFamily.extraBold,
    // marginLeft: responsiveWidth(6),
    marginBottom: responsiveHeight(3),
  },
  imageContent: {
    position: 'absolute',
    bottom: responsiveHeight(-3),
    alignSelf: 'center',
  },
  image: {
    width: responsiveWidth(85),
    height: responsiveHeight(25),
  },
  mainView: {
    width: responsiveWidth(50),
    marginTop: responsiveHeight(7),
  },
  title: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    textAlign: 'center',
    width: responsiveWidth(100),
    marginVertical: responsiveHeight(1),
    fontSize: responsiveFontSize(3),
  },
  content: {
    color: colors.greyText,
    fontFamily: fontFamily.regular,
    fontSize: responsiveFontSize(1.7),
    marginTop: responsiveHeight(0.5),
  },
});
