import React, {useEffect, useMemo, useState} from 'react';
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
import {Button, NewHeader, ResourceItem} from '../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appImages, colors, fontFamily} from '../../../Services';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import RenderHTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import { assignSpeaker } from '../../../features/events/eventsSlice';

const resourceTypes = Object.freeze({
  image: {name: 'image', type: 'feather'},
  pdf: {name: 'pdffile1', type: 'antdesign'},
  video: {name: 'ondemand-video', type: 'materialicons'},
})

const Session = props => {
  const session = useSelector(state => state.events.session);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  const onSpeakerNavigation = (speaker) => {
    dispatch(assignSpeaker(speaker));
    navigation.navigate('SpeakerDetails');
  }
  const speakerRender = (item, index) => {
    return (
      <TouchableOpacity
        style={[styles.FlatListBtn2]}
        onPress={()=>onSpeakerNavigation(item)}
        key={index}
        >
        <Image source={{uri: item.profile_image}} style={styles.userImg} />
        <View style={{marginLeft: responsiveWidth(2)}}>
          <Text style={styles.FlatListTitle2}>{item.name}</Text>
          <Text style={styles.SubTitle}>{'Speaker Bio'}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const resources = useMemo(()=>{
    if(session && session.assets){
      const videos = session.videos.map((video)=> ({name: video.title, type: 'video', key: video.id}));
        return [...session.assets,...videos];
    } else {
        [];
    }
},[session]);
  return (
    <View style={styles.container}>
    {session && <>
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
        <ScrollView>
          <View style={styles.wrapper}>
            <Text style={styles.LargeHeading}>{session.title}</Text>
            <View style={styles.rowView}>
              <Image source={appImages.session1} style={styles.iconSmall1} />
              <Text style={styles.MediumText}>{session.speakers.length > 1 ? 'Speakers' : 'Speaker'}</Text>
            </View>
            {
              session.speakers.length > 0 && session.speakers.map((speaker, index)=> speakerRender(speaker, index))
            }
            <View style={styles.rowView}>
              <Icon
                type="feather"
                name="calendar"
                color={'#2F3650'}
                size={responsiveFontSize(2.6)}
                style={{marginLeft: 2}}
              />
              <Text style={styles.MediumText}>{moment(session.date).format('dddd MMM D, YYYY')}</Text>
            </View>
            <View style={styles.rowView}>
              <Image source={appImages.session4} style={styles.iconSmall1} />
              <Text style={styles.MediumText}>{moment(session.start).format('h:mm')} - {moment(session.end).format('h:mm A')}</Text>
            </View>
            <View style={styles.rowView}>
              <Image source={appImages.session3} style={styles.iconSmall1} />
              <Text style={styles.MediumText}>Room {session.room}</Text>
            </View>
           {session.description.length > 0 &&
           <>
               <Text style={[styles.boldHeading, {marginTop: responsiveHeight(5)}]}>
              About this session
            </Text>
            <View style={{marginHorizontal: 20}}>
              <RenderHTML
                contentWidth={width}
                source={{html: session.description}}
              />
            </View>
           </>
           }
          </View>
            {resources.length > 0 &&
          <View style={[styles.silverView, {paddingBottom: responsiveHeight(7)}]}>
            <Text style={styles.FLheader}>Assets</Text>
              { resources.map((item, index) => <View key={index}><ResourceItem  item={item} screen="Session" /></View>)}
          </View>
        }
        </ScrollView>
    </>
    }    
  </View>
  );
};

export default Session;
