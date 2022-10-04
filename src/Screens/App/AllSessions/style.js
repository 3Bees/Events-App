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
    backgroundColor: colors.silver + '20',
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
  },
  headerTitle: {
    color: colors.black,
    fontSize: responsiveFontSize(2.3),
    // width: responsiveWidth(60),
    fontFamily: fontFamily.extraBold,
  },
  scheduleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(4),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
  },
  mediumHeading012: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    fontSize: responsiveFontSize(2.3),
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mediumHeading01: {
    fontFamily: fontFamily.bold,
    color: colors.royal,
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(1),
  },
  dateText: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.8),
    marginBottom: responsiveHeight(2),
    marginLeft: responsiveWidth(5),
  },
  line1: {
    width: responsiveWidth(90),
    height: responsiveHeight(0.2),
    backgroundColor: colors.border + '30',
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(2),
    alignSelf: 'center',
  },
  FlatListBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: responsiveHeight(3),
    width: responsiveWidth(86),
    alignSelf: 'center',
    marginVertical: responsiveHeight(1),
    borderBottomWidth: responsiveHeight(0.2),
    borderBottomColor: colors.border + '30',
    paddingBottom: responsiveHeight(2),
  },
  FlatListTitle: {
    color: colors.royal,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2.1),
  },
  RowView1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(31),
    // height: responsiveHeight(3),
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(5),
  },
  iconSmall1: {
    resizeMode: 'contain',
    height: responsiveFontSize(2.7),
    width: responsiveFontSize(2.7),
  },
  speaker: {
    width: responsiveWidth(50),
    color: colors.black,
    marginLeft: responsiveWidth(1),
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.bold,
  },
  FlatListDate: {
    width: responsiveWidth(50),
    color: colors.black,
    marginLeft: responsiveWidth(1),
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.regular,
  },
  dateText1: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.8),
    marginBottom: responsiveHeight(2),
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(3),
  },
  headerSubTitle: {
    color: colors.black,
    fontSize: responsiveFontSize(1.55),
    fontFamily: fontFamily.medium,
  },
});
