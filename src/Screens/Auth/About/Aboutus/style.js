import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
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
  },
  about1: {
    width: responsiveWidth(100),
    height: responsiveHeight(10),
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  about1Text: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(4),
  },
  about2: {
    width: responsiveWidth(90),
    height: responsiveHeight(30),
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    resizeMode: 'cover',
  },
  BoldHeading: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    textAlign: 'center',
    marginVertical: responsiveHeight(1),
    fontSize: responsiveFontSize(3.5),
  },
  detailedText: {
    color: colors.black,
    width: responsiveWidth(90),
    alignSelf: 'center',
    fontFamily: fontFamily.regular,
    fontSize: responsiveFontSize(1.9),
  },
  learnMore: {
    backgroundColor: colors.red,
    width: responsiveWidth(100),
    marginVertical: responsiveHeight(3),
  },
  learnMoreText: {
    color: colors.white,
    fontFamily: fontFamily.semiBold,
    fontSize: responsiveFontSize(1.6),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
  },
  headinglearnMore: {
    color: colors.white,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1.5),
  },
});
