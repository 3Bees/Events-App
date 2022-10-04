import React from 'react';
import { View, TouchableOpacity, Text, Image, SafeAreaView, Platform } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { colors, fontFamily } from '../../Services/index';
import { Icon } from 'react-native-elements';
import { appImages } from '../../Services/utilities';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../features/auth/authSlice';
export const NewHeader = props => {
  const navigation = useNavigation();
  const { title, close, back } = props;
  const dispatch = useDispatch();
  const onClose = async () => {
    dispatch(clearUser());
    navigation.navigate('Onboarding');
  }
  return (
    <View>
      {Platform.OS === 'android' ? null : <SafeAreaView style={{ backgroundColor: colors.white }} />}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: responsiveWidth(100),
          alignSelf: 'center',
          // marginBottom: responsiveHeight(1),
          paddingHorizontal: responsiveWidth(5),
          height: Platform.OS === 'android' ? responsiveHeight(8) : responsiveHeight(7),
          backgroundColor: colors.white,
          borderBottomWidth: responsiveHeight(0.2),
          borderBottomColor: colors.border + '30',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {back ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={appImages.ArrowLeft}
                style={{
                  height: responsiveHeight(4),
                  width: responsiveWidth(8),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          ) : (null)}
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontFamily: fontFamily.bold,
              color: colors.black,
              marginLeft: responsiveWidth(5),
            }}>
            {title ? title : ''}
          </Text>
        </View>
        {close ? (
          <TouchableOpacity onPress={onClose}>
            <Icon
              type={'feather'}
              name={'x'}
              color={colors.black}
              size={responsiveFontSize(4)}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: responsiveFontSize(3) }} />
        )}
      </View>
    </View>
  );
};
