import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily, appImages} from '../../Services';
import Swiper from 'react-native-swiper';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const Slider = props => {
  const images = useSelector((state)=>state.pages.images);
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      autoplay
      autoplayTimeout={5}
      removeClippedSubviews={false}
      showsPagination={false}>
        {
          images.length > 0 && images.map((item, index)=>
          (
            <View style={styles.slide1} key={index}>
              <ImageBackground
                source={{uri: item.image}}
                style={styles.ImageBackground}
                resizeMode="cover"></ImageBackground>
            </View>
          ))
        }
    </Swiper>
  );
};
export const styles = StyleSheet.create({
  ImageBackground: {
    height: responsiveHeight(86.5),
    width: responsiveWidth(100),
  },
  slide1: {
    width: responsiveWidth(100),
    backgroundColor: 'transparent',
  },
  ShareBtn: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: responsiveWidth(6),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: responsiveWidth(10),
    top: responsiveHeight(8),
  },
  description: {
    color: colors.black,
    fontSize: responsiveFontSize(1.9),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(1.5),
  },
  wrapper: {
    height: responsiveHeight(90),
  },
  BtnText: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: responsiveFontSize(2),
    marginRight: responsiveWidth(2),
  },
});
