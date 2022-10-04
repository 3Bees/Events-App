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
    backgroundColor: colors.black,
  },
  header: {
    width: responsiveWidth(100),
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingLeft: responsiveWidth(8),
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveHeight(10),
    paddingRight: responsiveWidth(5),
    backgroundColor: colors.black,
    marginTop: responsiveHeight(5),
  },
  mapSample: {
    height: responsiveHeight(30),
    width: responsiveWidth(90),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: responsiveHeight(22),
  },
  rbMainView: {
    backgroundColor: colors.white,
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderRadius: responsiveWidth(3),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  rbBtn: {
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  RbBtnText: {
    color: colors.textBlue,
    fontFamily: fontFamily.medium,
    fontSize: responsiveFontSize(2.2),
  },
  line: {
    width: responsiveWidth(80),
    height: responsiveHeight(0.2),
    backgroundColor: colors.border + '30',
    alignSelf: 'center',
  },
});
