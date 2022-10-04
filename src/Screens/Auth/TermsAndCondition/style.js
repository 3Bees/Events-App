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
  line: {
    width: responsiveWidth(100),
    height: responsiveHeight(0.2),
    backgroundColor: colors.border + '30',
  },
  bottomView: {
    position: 'absolute',
    bottom: responsiveHeight(0),
    backgroundColor: colors.white,
    paddingBottom: responsiveHeight(2),
  },
  description: {
    color: colors.black,
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(1.9),
    width: responsiveWidth(90),
    alignSelf: 'center',
    fontFamily: fontFamily.medium,
  },
  heading: {
    color: colors.black,
    marginTop: responsiveHeight(4),
    fontSize: responsiveFontSize(1.9),
    width: responsiveWidth(90),
    alignSelf: 'center',
    fontFamily: fontFamily.extraBold,
  },
  bulletView: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: responsiveHeight(0.5),
  },
  bullet: {
    marginHorizontal: responsiveWidth(2),
    color: colors.black,
    fontSize: responsiveFontSize(0.8),
    marginTop: responsiveHeight(0.8),
  },
  bulletText: {
    color: colors.black,
    fontSize: responsiveFontSize(1.9),
    width: responsiveWidth(84.5),
    alignSelf: 'center',
    fontFamily: fontFamily.medium,
  },
});
