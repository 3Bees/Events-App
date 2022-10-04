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
  card: {
    width: responsiveWidth(94),
    backgroundColor: colors.white,
    borderWidth: responsiveWidth(0.2),
    borderColor: colors.lighttexts,
    marginVertical: responsiveHeight(2),
    alignSelf: 'center',
    paddingHorizontal: responsiveWidth(3),
    paddingBottom:responsiveHeight(2)
  },
  logo: {
    resizeMode: 'cover',
    height: responsiveHeight(7),
    width: responsiveWidth(60),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(3),
  },
  label: {
    color: colors.black,
    fontFamily: fontFamily.semiBold,
  },
  paymentMethodView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  label1: {
    color: colors.greyText,
    fontFamily: fontFamily.bold,
  },
  greytext: {
    color: colors.lighttexts,
    marginLeft: responsiveWidth(37),
    fontFamily: fontFamily.bold,
  },
  card2: {
    borderWidth: responsiveWidth(0.7),
    borderColor: colors.black,
    paddingVertical: responsiveHeight(3),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4),
    marginTop: responsiveHeight(3),
  },
  label2: {
    width: responsiveWidth(27),
    backgroundColor: colors.white,
    marginTop: responsiveHeight(-4.5),
    textAlign: 'center',
    marginLeft: responsiveWidth(-1.5),
    color: colors.greyText,
    fontFamily: fontFamily.bold,
  },
});
