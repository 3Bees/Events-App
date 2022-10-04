import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import {NewHeader, Button, Slider} from '../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appImages, colors, fontFamily} from '../../../Services';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import RBSheet from 'react-native-raw-bottom-sheet';

const MapScreen = props => {
  const RbSheet = useRef();

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.header}>
        <Icon
          type="antdesign"
          name="arrowleft"
          color={colors.white}
          size={responsiveFontSize(3)}
          onPress={() => props.navigation.goBack()}
        />
        <TouchableOpacity onPress={() => RbSheet.current.open()}>
          <Icon
            type="entypo"
            name="dots-three-vertical"
            color={colors.white}
            size={responsiveFontSize(2.5)}
          />
        </TouchableOpacity>
      </View>
      <Image source={appImages.mapSample} style={styles.mapSample} />
      <RBSheet
        ref={RbSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        height={responsiveHeight(22)}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          container: {
            // borderTopRightRadius: responsiveWidth(10),
            // borderTopLeftRadius: responsiveWidth(10),
            elevation: 2,
            backgroundColor: 'transparent',
          },
          // draggableIcon: {
          //   backgroundColor: 'transparent',
          //   width: responsiveWidth(40),
          // },
        }}>
        <View>
          <View style={styles.rbMainView}>
            <TouchableOpacity style={styles.rbBtn}>
              <Text style={styles.RbBtnText}>Download</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity style={styles.rbBtn}>
              <Text style={styles.RbBtnText}>Share</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.rbMainView, {marginTop: responsiveHeight(1)}]}>
            <TouchableOpacity
              style={styles.rbBtn}
              onPress={() => RbSheet.current.close()}>
              <Text style={[styles.RbBtnText, {fontFamily: fontFamily.bold}]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </ScrollView>
  );
};

export default MapScreen;
