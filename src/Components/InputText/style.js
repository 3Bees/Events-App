import {Platform, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../Services';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: responsiveWidth(90),
  },
  ATextInputstyle: {
    color: colors.black,
    fontSize: responsiveFontSize(2),
  },
  InputView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: responsiveWidth(0.5),
    paddingBottom: Platform.OS === 'android' ? null : responsiveHeight(1),
  },
  label: {
    color: colors.black,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.extraBold,
    marginBottom: Platform.OS === 'android' ? null : responsiveHeight(1),
  },
  bordered: {
    borderWidth: responsiveWidth(0.5),
    borderColor: colors.lighttexts,
    paddingHorizontal: responsiveWidth(1),
    borderTopColor: colors.border,
  },
  borderedInput: {
    color: colors.black,
    fontSize: responsiveFontSize(1.7),
    width: responsiveWidth(90),
    padding: 0,
  },
});
