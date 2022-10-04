import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {styles} from './style';
import {Button, NewHeader} from '../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appImages, colors, fontFamily} from '../../../Services';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import RenderHTML from 'react-native-render-html';
import { useSelector } from 'react-redux';
const SpeakerDetails = props => {
  const speaker = useSelector((state) => state.events.speaker);
  const {width} = useWindowDimensions();
  const resourceRender = (item, index) => {
    return (
      <TouchableOpacity
        style={[styles.FlatListBtn, {width: responsiveWidth(84)}]}>
        <Text style={styles.FlatListTitle}>{item.title}</Text>
        <Icon
          type="antdesign"
          name="arrowright"
          color={colors.royal}
          size={responsiveFontSize(3)}
        />
      </TouchableOpacity>
    );
  };

  const speakerRender = (item, index) => {
    return (
      <TouchableOpacity style={[styles.FlatListBtn2]} key={index}>
        <Image source={appImages.user2} style={styles.userImg} />
        <View style={{marginLeft: responsiveWidth(2)}}>
          <Text style={styles.FlatListTitle2}>{item.name}</Text>
          <Text style={styles.SubTitle}>{'Speaker Bio'}</Text>
        </View>
      </TouchableOpacity>
    );
  };
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
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        {speaker && <>
          <ImageBackground
          source={appImages.BlurBG}
          style={{
            height: responsiveHeight(25),
            width: responsiveWidth(100),
            resizeMode: 'cover',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={{uri: speaker.profile_image}} style={styles.userImg} />
        </ImageBackground>
        <View style={styles.wrapper}>
          <Text style={styles.LargeHeading}>{speaker.name}</Text>
          <Text style={[styles.boldHeading, {marginTop: responsiveHeight(3)}]}>
            Bio
          </Text>
          <View style={{marginHorizontal: 20}}>
                <RenderHTML
                  contentWidth={width}
                  source={{html: speaker.bio}}
                />
              </View>
        </View>
        <View style={{paddingBottom: 80}} />
        </>}
      </ScrollView>
     
      {/* <View style={[styles.silverView, {paddingBottom: responsiveHeight(7)}]}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          ListHeaderComponent={<Text style={styles.FLheader}>Speaker at</Text>}
          data={item.speakerat}
          renderItem={({item, index}) => {
            return resourceRender(item, index);
          }}
          ItemSeparatorComponent={() => {
            return <View style={{height: responsiveHeight(2)}} />;
          }}
        />
      </View> */}
    </View>
  );
};

export default SpeakerDetails;
