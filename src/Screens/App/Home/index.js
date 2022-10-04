import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  useWindowDimensions,
  Alert
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import { styles } from './style';
import { NewHeader, Button, Slider } from '../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { appImages, colors, fontFamily } from '../../../Services';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, getEvents } from '../../../features/events/eventsSlice';
import moment from 'moment';
import { getUser } from '../../../features/auth/authSlice';
import { getHomePage, getHomeVideo, getResourceInfo } from '../../../features/pages/pagesSlice';
import { useNavigation } from '@react-navigation/native';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const Home = props => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.list);
  const homeObject = useSelector(state => state.pages.home);
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getEvents());
    dispatch(getHomePage());
  }, [dispatch]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getUser());
    dispatch(getEvents());
    dispatch(getHomePage());
    wait(2000).then(() => setRefreshing(false));
  }, [dispatch]);
  const { width } = useWindowDimensions();
  const listOfEvents = useMemo(() => {
    console.log('events: ', events)
    if (events.length > 0) {
      return events.map((({ thumbnail, name, is_guest, is_registered, start, affiliation, address, paid, slug }) => {
        return {
          image: { uri: thumbnail },
          title: name,
          date: moment(start).format('MMM D, YYYY'),
          check: is_registered || is_guest,
          name: affiliation,
          address: `${address.city}, ${address.state}`,
          paid,
          slug
        };
      }));
    } else {
      return [];
    }
  }, [events]);
  const video = useMemo(() => {
    if (homeObject) {
      const videoObject = homeObject.body.find((item) => item.type === 'video');
      return videoObject.fields.table;
    } else {
      return null;
    }
  }, [homeObject]);
  const resources = useMemo(() => {
    if (homeObject) {
      const item = homeObject.body.find((item) => item.type === 'resources');
      console.log('resource list: ', item.fields.table.resource_list)
      return item.fields.table.resource_list;
    } else {
      return [];
    }
  }, [homeObject]);
  const onEventPress = (event) => {
    dispatch(getEvent(event.slug));
    navigation.navigate('EventDetails', { item: event, previousScreen: 'Home' });
  }
  const onResourcePress = (slug) => {
    dispatch(getResourceInfo(slug));
    navigation.navigate('ResourcesStack');
  }
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity onPress={() => onEventPress(item)} style={styles.FlatListMainView} key={index}>
        <ImageBackground style={styles.ImageBackground} source={item.image}>
          <View style={styles.RowView}>
            <View style={styles.TitleView}>
              <Text style={styles.title}>{item.name.toUpperCase()}</Text>
            </View>
            {item.check ? (
              <View style={styles.TitleView1}>
                <Icon
                  type="antdesign"
                  name="check"
                  color={colors.white}
                  size={responsiveFontSize(2.3)}
                />
              </View>
            ) : <View style={styles.notRegisteredView}>
              <Icon
                type="feather"
                name="user-plus"
                color={colors.lightgreen}
                size={responsiveFontSize(2.3)}
              />
            </View>}
            {
              item.paid ?
                <View style={styles.paidView}>
                  <Icon
                    type="feather"
                    name="dollar-sign"
                    color={colors.white}
                    size={responsiveFontSize(2.3)}
                  />
                </View>
                :
                <View style={styles.freeView}>
                  <Text style={styles.freeTitle}>Free</Text>
                </View>
            }
          </View>
        </ImageBackground>
        <View style={styles.RowView1}>
          <Icon
            type="feather"
            name="calendar"
            color={colors.royal}
            size={responsiveFontSize(2)}
          />
          <Text style={styles.date}>{item.date.toUpperCase()}</Text>
        </View>
        <Text style={styles.BtmTitle}>{item.title}</Text>
        <View style={styles.rowContainer}>
          <Icon
            type="feather"
            name="map-pin"
            color={colors.greyText}
            size={responsiveFontSize(1.4)}
          />
          <Text style={styles.location}>{item.address}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const onVideoThumbnailPress = () => {
    navigation.navigate('HomeVideo', { key: video.id });
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={styles.container}
      >
        <View style={[styles.container, { marginBottom: 80 }]}>
          <StatusBar
            backgroundColor={colors.white}
            barStyle="dark-content"
            translucent={false}
          />
          {video && <ImageBackground style={styles.VideoThumbnail} source={{ uri: video.thumbnail }}>
            <TouchableOpacity onPress={onVideoThumbnailPress}>
              <Image source={appImages.PlayCircle} style={styles.PlayCircle} />
              <Text style={styles.VideoText}>
                THE <Text style={{ fontFamily: fontFamily.bold }}>INCREASE</Text>
                {'\n'}CONFERENCE
              </Text>
            </TouchableOpacity>
          </ImageBackground>}
          <View style={styles.FlatListTopView}>
            {listOfEvents.length > 0 && <>
              <Text style={styles.grayHeading}>UPCOMING EVENTS</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={listOfEvents}
                renderItem={({ item, index }) => {
                  return renderItem(item, index);
                }}
              />
            </>}
            {
              resources.length > 0 && <View style={{ marginVertical: 20 }}>
                <Text style={styles.grayHeading}>RESOURCES</Text>{
                  resources.map(({ table: { slug, fields: { table: { title, description, image, resources, videos } } } }, index) => (
                    <TouchableOpacity onPress={() => onResourcePress(slug)} key={index} style={styles.resourcesContainer}>
                      <Image source={{ uri: image }} style={styles.resourceImage} />
                      <View style={{ marginLeft: responsiveWidth(2) }}>
                        <Text style={styles.BtmTitle}>{title} </Text>
                        <View style={{ height: responsiveHeight(1) }} />
                        <Text style={styles.location}>{description}</Text>
                        <View style={{ height: responsiveHeight(1) }} />
                        <Text style={styles.location}>{resources.length + videos.length} Files</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
              </View>
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
