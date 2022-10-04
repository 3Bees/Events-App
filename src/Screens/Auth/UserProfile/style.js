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
    bottom: responsiveHeight(2),
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(2),
  },
  bottomView2: {
    // position: 'absolute',
    // bottom: responsiveHeight(2),
    backgroundColor: colors.white,
    marginTop: responsiveHeight(1),
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalTouchable: {
    backgroundColor: colors.white,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(80),
    height: responsiveHeight(10),
    marginVertical: responsiveHeight(4),
  },
  ModalText: {
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveWidth(3),
    marginTop: responsiveHeight(1),
    color: colors.black,
  },
  DisplayImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: responsiveWidth(10),
  },
  ImageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.silver,
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: responsiveWidth(15),
    borderStyle: 'dashed',
    borderWidth: responsiveWidth(0.4),
    borderColor: colors.dashBorders,
    marginTop: responsiveHeight(4),
  },
  selectedImage: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: responsiveWidth(15),
  },
  flag: {
    borderRadius: responsiveWidth(3.5),
    height: responsiveWidth(7),
    width: responsiveWidth(7),
  },
  InputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
  },
  phonoInput: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  label: {
    color: colors.black,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.bold,
  },
  phoneView: {
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // alignItems: 'center',
    borderBottomWidth: responsiveWidth(0.5),
    marginTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(1.5),
  },
  phoneMessage: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    color: colors.greyText,
  },
});