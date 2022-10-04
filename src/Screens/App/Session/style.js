import React from 'react';
import {Button, StyleSheet, Text, View,Platform} from 'react-native';
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
    justifyContent: 'space-between',
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
    backgroundColor: colors.silver + '40',
    paddingVertical: responsiveHeight(2),
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
    marginTop: responsiveHeight(3.5),
  },
  FLheader: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    fontSize: responsiveFontSize(2.5),
    marginBottom: responsiveHeight(2),
  },
  FlatListBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(80),
    alignSelf: 'center',
  },
  FlatListBtn2: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    alignItems: 'center',
    paddingLeft: responsiveWidth(8),
    marginTop: responsiveHeight(2),
  },
  userImg: {
    height: responsiveHeight(7),
    width: responsiveHeight(7),
    borderRadius: responsiveHeight(7),
  },
  FlatListTitle: {
    color: colors.black,
    marginLeft: 10,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2.1),
  },
  FlatListTitle2: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2.5),
  },
  SubTitle: {
    color: colors.royal,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.8),
  },
  LargeHeading: {
    color: colors.black,
    fontFamily: fontFamily.extraBold,
    fontSize: responsiveFontSize(3.6),
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(2),
  },
  wrapper: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  iconSmall1: {
    height: responsiveFontSize(3),
    width: responsiveFontSize(3),
    resizeMode: 'contain',
  },
  boldHeading: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    fontSize: responsiveFontSize(2.5),
    // marginBottom: responsiveHeight(2),
  },
  description: {
    color: colors.black,
    fontFamily: fontFamily.regular,
    marginTop: responsiveHeight(1),
  },
  MediumText: {
    color: colors.black,
    marginLeft: responsiveWidth(3),
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.9),
  },
  rsrIamge: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    resizeMode: 'contain',
  },
  FlatListTitle1: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(2),
  },
  FlatListBtn1: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: responsiveHeight(3),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: colors.white,
    height: responsiveHeight(10),
    paddingLeft: responsiveWidth(3),
  },
});
