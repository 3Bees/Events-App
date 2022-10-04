import React from 'react';
import { StatusBar, View } from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {styles} from './styles';
import {  colors } from '../../../Services';
import { WebView } from 'react-native-webview';
import { responsiveFontSize, responsiveWidth} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const ImageView = (props) => {
  const {link} = props.route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        translucent={false}
      />
        <View style={styles.header}>
            <Icon
            type="antdesign"
            name="arrowleft"
            color={colors.black}
            size={responsiveFontSize(4)}
            onPress={() => navigation.goBack()}
            />
        </View>
      <WebView
          source={{ uri: link }}
      />
    </View>
  );
};
export default ImageView;
