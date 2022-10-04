import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { colors, fontFamily } from '../../Services';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ResourceFlatListBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginVertical: responsiveHeight(0.8),
    paddingLeft: 10,
    width: '100%',
    height: responsiveWidth(25),
    alignSelf: 'center',
  },
  FlatListTitle: {
    color: colors.royal,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2.1),
    marginTop: 10,
  },
  ResourceFlatListTitle: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2.1),
    marginLeft: 10
  }});
