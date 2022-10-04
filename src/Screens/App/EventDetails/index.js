import React, { useMemo, useState } from 'react';
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
import { styles } from './style';
import { Button, NewHeader, ResourceItem } from '../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { appImages, colors, fontFamily } from '../../../Services';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { getEventSession } from '../../../features/events/eventsSlice';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import moment from 'moment';
import RenderHTML from 'react-native-render-html';
import { BlurView } from "@react-native-community/blur";

const resourceTypes = Object.freeze({
  image: { name: 'image', type: 'feather' },
  pdf: { name: 'pdffile1', type: 'antdesign' },
  video: { name: 'ondemand-video', type: 'materialicons' },
})
const EventDetails = props => {
  const event = useSelector(state => state.events.event);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const [sessionIndex, setSessionIndex] = useState(0);
  const onSessionPress = (session) => {
    const sessionObject = {
      event: event.slug,
      session: session.id
    }
    dispatch(getEventSession(sessionObject))
    navigation.navigate('Session', { item: session, eventHeader: event.name });
  };
  const sessionRender = (item, index) => {
    return (
      <TouchableOpacity key={index} style={{ backgroundColor: colors.white, height: width / 3 }} onPress={() => onSessionPress(item)}>
        <View style={[styles.FlatListBtn, { marginVertical: 10 }]}>
          <View style={{ justifyContent: 'flex-start', width: width / 1.5 }}>
            <Text style={styles.FlatListTitle}>{item.title}</Text>
            <View
              style={[
                styles.RowView1,
                { marginTop: responsiveHeight(0.5), marginLeft: 2 },
              ]}>
              <Image source={appImages.session4} style={styles.iconSmall1} />
              <Text style={styles.FlatListDate}>{moment(item.start).format('h:mm')}-{moment(item.end).format('h:mm A')}</Text>
            </View>
            {item.speakers.length > 0 && <>
              {item.speakers.length > 1 ? (
                <View
                  style={[
                    styles.RowView1,
                    { marginTop: responsiveHeight(0.5), marginLeft: 2 },
                  ]}>
                  <Image source={appImages.session2} style={styles.iconSmall1} />
                  <Text style={styles.speaker}>{'Multiple Speakers'}</Text>
                </View>
              ) : (
                <View

                  style={[
                    styles.RowView1,
                    { marginTop: responsiveHeight(0.5), marginLeft: 2 },
                  ]}>
                  <Image source={appImages.session1} style={styles.iconSmall1} />
                  <Text style={styles.speaker}>{item.speakers[0].name}</Text>
                </View>
              )}
            </>}
            <View
              style={[
                styles.RowView1,
                { marginTop: responsiveHeight(0.5), marginLeft: 0 },
              ]}>
              <Image source={appImages.session3} style={styles.iconSmall1} />
              <Text style={styles.FlatListDate}>Room {item.room}</Text>
            </View>
          </View>
          <View>
            <Icon
              type="antdesign"
              name="arrowright"
              color={colors.royal}
              size={responsiveFontSize(3)}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const resources = useMemo(() => {
    if (event && event.resources) {
      const videos = event.videos.map((video) => ({ name: video.title, type: 'video', key: video.id }));
      return [...event.resources, ...videos];
    } else {
      [];
    }
  }, [event]);
  const onGoBack = () => {
    setSessionIndex(0);
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      {event &&
        <>
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
              onPress={onGoBack}
            />
            {/* <TouchableOpacity>
              <Image source={appImages.infobtn} style={styles.infobtn} />
            </TouchableOpacity> */}
          </View>
          <ScrollView>
            <ImageBackground source={{ uri: event.thumbnail }} style={styles.blurImage}>
              <View
                style={[
                  styles.RowView2
                ]}>
                <View style={styles.TitleView}>
                  <Text style={styles.title}>{event.affiliation.toUpperCase()}</Text>
                </View>
                {event.is_registered || event.is_guest ? (
                  <View style={styles.TitleView1}>
                    <Icon
                      type="antdesign"
                      name="check"
                      color={colors.white}
                      size={responsiveFontSize(2)}
                    />
                  </View>
                ) : <View style={styles.notRegisteredView}>
                  <Icon
                    type="feather"
                    name="user-plus"
                    color={colors.lightgreen}
                    size={responsiveFontSize(2.5)}
                  />
                </View>}
                {event.paid ? (
                  <View style={styles.dollarView}>
                    <Text style={styles.dollarText}>$</Text>
                  </View>
                ) : (
                  <View style={styles.Freeview}>
                    <Text style={styles.FreeText}>Free</Text>
                  </View>
                )}
              </View>
            </ImageBackground>
            <View style={styles.wrapper}>
              <Text style={styles.boldtext}>{event.name}</Text>
              {
                !event.active && <>
                  <View style={styles.RowView1}>
                    <Icon
                      type="feather"
                      name="calendar"
                      color={colors.black}
                      size={responsiveFontSize(3)}
                    />
                    <Text style={styles.date}>{moment(event.start).format('MMM D')}-{moment(event.end).format('MMM D, YYYY')}</Text>
                  </View>
                  <View style={styles.RowView1}>
                    <Image source={appImages.MapPin} style={styles.iconSmall} />
                    <View>
                      <Text style={styles.date}>{event.address.title}</Text>
                      <Text style={styles.date}>{event.address.street}, {event.address.city}, {event.address.state}</Text>
                    </View>
                  </View>
                  <View style={styles.RowView1}>
                    <Image source={appImages.UsersFour} style={styles.iconSmall} />
                    <Text style={styles.date}>{event.attendee_count > 1 ? `${event.attendee_count} Guests` : `${event.attendee_count} Guest`}</Text>
                  </View>
                  <Text style={styles.mediumHeading}>About</Text>
                  <View style={{ marginHorizontal: 20 }}>
                    <RenderHTML
                      contentWidth={width}
                      source={{ html: event.description }}
                    />
                  </View>
                </>
              }
            </View>
            {
              resources.length > 0 &&
              <View
                style={styles.silverView}>
                <Text style={styles.FLheader}>Resources</Text>
                {resources.map((resource, index) => (
                  <View key={index}>
                    <ResourceItem item={resource} screen="EventDetails" />
                  </View>
                ))}
              </View>}
            {(event.sessions && event.sessions.length > 0) &&
              <View style={{marginBottom: 80}}>
                <Text style={[styles.mediumHeading012, { marginLeft: responsiveWidth(5) }]}>Schedule</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {
                    event.sessions.map((session, index) => (
                      <View key={index} style={sessionIndex === index ? { borderBottomWidth: 1, borderBottomColor: colors.royal } : {}}><TouchableOpacity onPress={() => setSessionIndex(index)}>
                        <Text style={[styles.FlatListTitle, { width: width / 5, textAlign: 'center' }]}>{moment(session.date).format('ddd')}</Text>
                        <Text style={[styles.FlatListSubtitle, { width: width / 5, textAlign: 'center', paddingBottom: 10 }]}>{moment(session.date).format('Do')}</Text>
                      </TouchableOpacity>
                      </View>
                    ))
                  }
                </ScrollView>
                <View style={styles.sessionsSilverView}>
                  {
                    event.sessions[sessionIndex].times.map(({ time, sessions }, index) => (
                      <View key={index}>
                        <Text style={styles.dateText}>{time}</Text>
                        <View>
                          {sessions.map((item, itemIndex) => 
                            sessionRender(item, itemIndex)
                          )}
                        </View>
                      </View>
                    ))
                  }
                </View>
              </View>
            }
          </ScrollView>
          {event.registerable && <View style={styles.bottomView}>
            <View style={[styles.line, { marginBottom: responsiveHeight(2) }]} />
            <Button title={'Register'} myStyles={{ width: width / 1.2 }} onPress={() => navigation.navigate('Register', { link: event.links.registration.href })} />
          </View>}

        </>
      }
    </SafeAreaView>
  );
};

export default EventDetails;
