import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {styles} from './style';
import {NewHeader} from '../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {appImages, colors} from '../../../Services';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getEvent, getEvents } from '../../../features/events/eventsSlice';
import { useNavigation } from '@react-navigation/native';
const Events = props => {
  // const [eventsType, setEventsType] = useState([
  //   {
  //     id: 1,
  //     type: 'ALL',
  //     check: true,
  //   },
  //   {
  //     id: 2,
  //     type: 'UPCOMING',
  //     check: false,
  //   },
  //   {
  //     id: 3,
  //     type: 'PAST',
  //     check: false,
  //   },
  //   {
  //     id: 4,
  //     type: 'ARCHIVED',
  //     check: false,
  //   },
  // ]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.list);
  useEffect(()=>{
    dispatch(getEvents());
  },[dispatch]);
  const listOfEvents = useMemo(()=>{
   if(events.length > 0){
    return events.map((({slug, paid, address, is_guest, is_registered, thumbnail, name, attendee_count, start, affiliation, session_count}) => {
      return {
        image: {uri: thumbnail},
        title: name,
        date: moment(start).format('MMM D, YYYY'),
        guests: attendee_count,
        name: affiliation,
        sessions: session_count,
        address: `${address.city}, ${address.state}`,
        check: is_guest || is_registered,
        paid, 
        slug
      };
    }));
   } else {
     return [];
   }
  }, [events]);
  const renderTypes = (item, index) => {
    return (
      <TouchableOpacity
        style={[
          styles.typeBtn,
          {
            backgroundColor: item.check === true ? colors.royal : colors.white,
            marginLeft: index === 0 ? responsiveWidth(5) : 0,
          },
        ]}
        onPress={() => {
          let arr = [...eventsType];
          arr.forEach(e => {
            e.check = false;
            arr[index].check = true;
          });
          setEventsType(arr);
        }}>
        <Text
          style={[
            styles.typeText,
            {color: item.check === true ? colors.white : colors.royal},
          ]}>
          {item.type}
        </Text>
      </TouchableOpacity>
    );
  };
  const onEventPress=(event)=>{
    dispatch(getEvent(event.slug));
    navigation.navigate('EventDetails',{item: event, previousScreen: 'Events'});
  }
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.FlatListMainView}
        onPress={() => onEventPress(item)}>
        <ImageBackground style={styles.ImageBackground} source={item.image}>
          <View style={styles.RowView}>
            <View style={styles.TitleView}>
              <Text style={styles.title}>{item.name.toUpperCase()}</Text>
            </View>
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <View style={{marginLeft: responsiveWidth(2), width: responsiveWidth(45), alignSelf: 'flex-start'}}>
            <View style={styles.RowView1}>
              <Icon
                type="feather"
                name="calendar"
                color={colors.royal}
                size={responsiveFontSize(2)}
              />
              <Text style={styles.date}>{item.date.toUpperCase()}</Text>
            </View>
            <Text style={styles.BtmTitle}>{item.title} </Text>
            <View style={{height: responsiveHeight(1)}} />
            <View style={styles.rowContainer}>
            <Icon
              type="feather"
              name="map-pin"
              color={colors.greyText}
              size={responsiveFontSize(1.4)}
            />
            <Text style={styles.location}>{item.address}</Text>
          </View>
            <View style={styles.RowView1}>
              <Image source={appImages.UsersFour} style={styles.iconSmall} />
              <Text style={styles.guestsText}>{item.guests} Guests</Text>
            </View>
              <View style={styles.RowView1}>
                <Image
                  source={appImages.MegaphoneSimple}
                  style={styles.iconSmall}
                />
                <Text style={styles.guestsText}>{item.sessions} Sessions</Text>
            </View>
          </View>
          <View>
              {item.check ? (
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
                size={responsiveFontSize(2)}
              />
            </View>}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        translucent={false}
      />
      <Text style={styles.header}>Events</Text>
      <View>
        {/* <FlatList
          data={eventsType}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return renderTypes(item, index);
          }}
        /> */}
      </View>
      <View style={styles.linestyles} />
      <View style={styles.FlatListTopView}>
        <FlatList
          data={listOfEvents}
          // contentContainerStyle={{height: '100%'}}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return renderItem(item, index);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Events;
