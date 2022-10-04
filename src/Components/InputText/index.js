import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { colors } from '../../Services';
import styles from './style';
export const InputText = ({
  placeholder,
  onChangeText,
  keyboardType,
  MyStyles,
  value,
  onSubmitEditing,
  itsStyle,
  onPress,
  secureTextEntry,
  numberOfLines,
  icon,
  label,
  error,
  capitalize,
  ...otherProps
}) => {
  useEffect(() => {
  }, [onChangeText]);
  const [active, setActive] = useState(false);
  return (
    <View style={[styles.container, MyStyles]}>
      <Text
        style={[
          styles.label,
          {
            color:
              value != '' && !error
                ? colors.royal
                : error
                  ? colors.red
                  : colors.black,
          },
        ]}>
        {label}
      </Text>
      <View
        style={[
          styles.InputView,
          {
            borderColor:
              value != '' && !error
                ? colors.royal
                : error
                  ? colors.red
                  : colors.border,
          },
        ]}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          // onFocus={() => setActive(true)}
          // onBlur={() => setActive(false)}
          autoCapitalize={capitalize ? 'characters' : 'none'}
          autoCorrect={false}
          placeholderTextColor={colors.greyText}
          style={{
            color: colors.black,
            fontSize: responsiveFontSize(2),
            width: icon ? responsiveWidth(83) : responsiveWidth(90),
            padding: 0,
          }}
        />
        {icon ? (
          <>
            {secureTextEntry ? (
              <Icon
                type={'ionicon'}
                name={'eye-off-outline'}
                color={colors.black}
                size={responsiveFontSize(3)}
                onPress={onPress}
              />
            ) : (
              <Icon
                type={'ionicon'}
                name={'eye-outline'}
                color={colors.black}
                size={responsiveFontSize(3)}
                onPress={onPress}
              />
            )}
          </>
        ) : null}
      </View>
    </View>
  );
};
export const SimpleInput = ({
  placeholder,
  onChangeText,
  keyboardType,
  MyStyles,
  value,
  onSubmitEditing,
  itsStyle,
  onPress,
  secureTextEntry,
  numberOfLines,
  label,
  error,
  customstyle,
  capitalize,

  ...otherProps
}) => {
  return (
    <View style={[styles.container, MyStyles]}>
      <Text
        style={[
          styles.label,
          {
            color: error ? colors.red : colors.black,
          },
        ]}>
        {label}
      </Text>
      <View
        style={[
          styles.InputView,
          {
            borderColor: error ? colors.red : colors.border,
          },
        ]}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={colors.greyText}
          autoCapitalize={capitalize ? 'words' : 'none'}
          autoCorrect={false}
          style={{
            color: colors.black,
            fontSize: responsiveFontSize(2),
            width: customstyle ? responsiveWidth(42.5) : responsiveWidth(90),
          }}
        />
      </View>
    </View>
  );
};

export const BorderInput = ({
  placeholder,
  onChangeText,
  keyboardType,
  MyStyles,
  value,
  onSubmitEditing,
  itsStyle,
  onPress,
  secureTextEntry,
  numberOfLines,
  label,
  multiline,
  customstyle,
  capitalize,
  ...otherProps
}) => {
  return (
    <View style={[styles.bordered, MyStyles]}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={capitalize ? 'characters' : 'none'}
        autoCorrect={false}
        placeholderTextColor={colors.greyText}
        multiline={multiline}
        style={[styles.borderedInput, itsStyle]}
      />
    </View>
  );
};
