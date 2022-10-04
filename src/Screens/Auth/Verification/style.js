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
  topText: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: responsiveFontSize(1.9),
    marginVertical: responsiveHeight(5),
  },
  ForgetPass: {
    color: colors.royal,
    textDecorationLine: 'underline',
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(5),
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.medium,
  },
  bottomView: {
    position: 'absolute',
    bottom: responsiveHeight(2),
  },
});
3;
