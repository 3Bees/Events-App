import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {appImages} from '../../assets/utility';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, fontFamily} from '../../Services';
export const Notify = props => {
  const {text, onPress, onAnimationEnd} = props;
  return (
    <Animatable.View
      animation={'fadeInDownBig'}
      duration={2000}
      onAnimationEnd={onAnimationEnd}
      style={{
        elevation: 5,
        shadowColor: '#0384BB',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 1,
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        height: responsiveHeight(14),
        backgroundColor: colors.green,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingLeft: responsiveWidth(5),
          paddingTop: responsiveHeight(3),
        }}>
        <AntDesign
          name={'checkcircleo'}
          color={colors.black}
          size={responsiveFontSize(3)}
        />
        <Text
          style={{
            color: colors.white,
            fontSize: responsiveFontSize(2.2),
            fontFamily: fontFamily.bold,
            marginLeft: responsiveWidth(3),
          }}
          ellipsizeMode={'tail'}
          numberOfLines={1}>
          {text}
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};
