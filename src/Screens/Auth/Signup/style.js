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
    // position: 'absolute',
    bottom:responsiveHeight(2),
    backgroundColor: colors.white,
  },
  checkBox: {
    borderWidth: responsiveWidth(0.3),
    borderColor: colors.splash,
    height: responsiveHeight(3.5),
    width: responsiveWidth(7),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termscondition: {
    backgroundColor: colors.lighterblue,
    width: responsiveWidth(90),
    alignSelf: 'center',
    padding: responsiveFontSize(2),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(4),
  },
  agreeterms: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    marginLeft: responsiveWidth(3),
    fontSize: responsiveFontSize(1.95),
  },
  arrowRight: {
    height: responsiveHeight(4),
    width: responsiveWidth(8),
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
  },
  Button: {
    backgroundColor: colors.lightroyal,
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btntitle: {
    color: colors.white,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.bold,
    marginRight: responsiveWidth(3),
  },
});
3;
