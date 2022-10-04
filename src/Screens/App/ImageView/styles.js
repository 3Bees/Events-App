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
    paddingTop:Platform.OS === 'ios' ? responsiveHeight(5):null
  },
  header: {
    width: responsiveWidth(100),
    alignSelf: 'center',
    paddingLeft: responsiveWidth(8),
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveHeight(10),
    paddingRight: responsiveWidth(5),
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    color: colors.black,
    fontSize: responsiveFontSize(2.3),
    fontFamily: fontFamily.extraBold,
  },

  headerSubTitle: {
    color: colors.black,
    fontSize: responsiveFontSize(1.55),
    fontFamily: fontFamily.medium,
  },
  silverView: {
    width: responsiveWidth(100),
    backgroundColor: colors.silver,
    paddingVertical: responsiveHeight(2),
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(10),
    flex: 1,
  },
  });
