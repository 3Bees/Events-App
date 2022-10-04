import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../Services';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  reminder: {
    color: colors.royal,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: responsiveHeight(12),
    width: responsiveWidth(30),
    alignSelf: 'center',
    marginTop: responsiveHeight(25),
  },
  boldText: {
    textAlign: 'center',
    marginTop: responsiveHeight(1.5),
    color: colors.black,
    fontFamily: fontFamily.extraBold,
    fontSize: responsiveFontSize(1.9),
  },
  regularText: {
    textAlign: 'center',
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: responsiveFontSize(1.9),
  },
});
3;
