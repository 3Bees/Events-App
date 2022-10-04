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
const AllSessions = props => {
  const [sessions, setSessions] = useState([
    {
      date: 'Day 1 - Wednesday Nov 30,2022',
      details: [
        {
          id: 1,
          date: 'Wednesday Nov 30,2022',
          title: 'Session 1',
          time: '8:00 - 10:00 AM',
          room: 'Room 1',
          description:
            'A session description is copy that aims to tell your potential attendees what will be happening at this session, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage.',
          speaker: [
            {
              Name: 'John Speaker',
              photo: appImages.user1,
              bio: 'A bio  is copy that aims to tell your potential attendees more details about the speaker’s background.',
              speakerat: [
                {
                  title: '2022 NFL Conference Title',
                },
                {
                  title: 'Conference 2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          date: 'Wednesday Nov 30,2022',
          title: 'Session 2',
          time: '8:00 - 10:00 AM',
          room: 'Room 2',
          description:
            'A session description is copy that aims to tell your potential attendees what will be happening at this session, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage.',
          speaker: [
            {
              Name: 'John Speaker',
              photo: appImages.user1,
              bio: 'A bio  is copy that aims to tell your potential attendees more details about the speaker’s background.',
              speakerat: [
                {
                  title: '2022 NFL Conference Title',
                },
                {
                  title: 'Conference 2',
                },
              ],
            },
            {
              Name: 'Jane Speaker',
              photo: appImages.user2,
              bio: 'A bio  is copy that aims to tell your potential attendees more details about the speaker’s background.',
              speakerat: [
                {
                  title: '2022 NFL Conference Title',
                },
                {
                  title: 'Conference 2',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          date: 'Wednesday Nov 30,2022',
          title: 'Session 3',
          time: '8:00 - 10:00 AM',
          room: 'Room 3',
          description:
            'A session description is copy that aims to tell your potential attendees what will be happening at this session, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage.',
          speaker: [
            {
              Name: 'John Speaker',
              photo: appImages.user1,
              bio: 'A bio  is copy that aims to tell your potential attendees more details about the speaker’s background.',
              speakerat: [
                {
                  title: '2022 NFL Conference Title',
                },
                {
                  title: 'Conference 2',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      date: 'Day 2 - Thursday Nov 31,2022',
      details: [
        {
          date: 'Thursday Nov 31,2022',
          id: 1,
          title: 'Session 1',
          time: '8:00 - 10:00 AM',
          room: 'Room 1',
          description:
            'A session description is copy that aims to tell your potential attendees what will be happening at this session, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage.',
          speaker: [
            {
              Name: 'John Speaker',
              photo: appImages.user1,
              bio: 'A bio  is copy that aims to tell your potential attendees more details about the speaker’s background.',
              speakerat: [
                {
                  title: '2022 NFL Conference Title',
                },
                {
                  title: 'Conference 2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          date: 'Thursday Nov 31,2022',
          title: 'Session 2',
          time: '8:00 - 10:00 AM',
          room: 'Room 2',
          description:
            'A session description is copy that aims to tell your potential attendees what will be happening at this session, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage.',
          speaker: [
            {
              Name: 'John Speaker',
              photo: appImages.user1,
              bio: 'A bio  is copy that aims to tell your potential attendees more details about the speaker’s background.',
              speakerat: [
                {
                  title: '2022 NFL Conference Title',
                },
                {
                  title: 'Conference 2',
                },
              ],
            },
            {
              Name: 'Jane Speaker',
              photo: appImages.user2,
              bio: 'A bio  is copy that aims to tell your potential attendees more details about the speaker’s background.',
              speakerat: [
                {
                  title: '2022 NFL Conference Title',
                },
                {
                  title: 'Conference 2',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          date: 'Thursday Nov 31,2022',
          title: 'Session 3',
          time: '8:00 - 10:00 AM',
          room: 'Room 3',
          description:
            'A session description is copy that aims to tell your potential attendees what will be happening at this session, who will be speaking, and what they will get out of attending. Good event descriptions can drive attendance to events and also lead to more media coverage.',
          speaker: [
            {
              Name: 'John Speaker',
              photo: appImages.user1,
              bio: 'A bio  is copy that aims to tell your potential attendees more details about the speaker’s background.',
              speakerat: [
                {
                  title: '2022 NFL Conference Title',
                },
                {
                  title: 'Conference 2',
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  const sessionHeader = (item, index) => {
    return (
      <View>
        <Text style={styles.dateText}>{item.date}</Text>
        <FlatList
          // ItemSeparatorComponent={() => {
          //   return <View style={styles.line1} />;
          // }}
          data={item.details}
          renderItem={({item, index}) => {
            return sessionRender(item, index);
          }}
        />
      </View>
    );
  };
  const sessionRender = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.FlatListBtn}
        onPress={() => {
          props.navigation.navigate('Session', {
            item,
            title: '2022 NFL Conference Title',
          });
        }}>
        <View>
          <Text style={styles.FlatListTitle}>{item.title}</Text>
          {item.speaker.length > 1 ? (
            <View
              style={[
                styles.RowView1,
                {marginTop: responsiveHeight(0.5), marginLeft: 0},
              ]}>
              <Image source={appImages.session2} style={styles.iconSmall1} />
              <Text style={styles.speaker}>{'Multiple Speakers'}</Text>
            </View>
          ) : (
            <View
              style={[
                styles.RowView1,
                {marginTop: responsiveHeight(0.5), marginLeft: 0},
              ]}>
              <Image source={appImages.session1} style={styles.iconSmall1} />
              <Text style={styles.speaker}>{item.speaker[0].Name}</Text>
            </View>
          )}
          <View
            style={[
              styles.RowView1,
              {marginTop: responsiveHeight(0.5), marginLeft: 0},
            ]}>
            <Image source={appImages.session3} style={styles.iconSmall1} />
            <Text style={styles.FlatListDate}>{item.room}</Text>
          </View>
          <View
            style={[
              styles.RowView1,
              {marginTop: responsiveHeight(0.5), marginLeft: 0},
            ]}>
            <Image source={appImages.session4} style={styles.iconSmall1} />
            <Text style={styles.FlatListDate}>{item.time}</Text>
          </View>
        </View>
        <Icon
          type="antdesign"
          name="arrowright"
          color={colors.royal}
          size={responsiveFontSize(3)}
        />
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
        <View style={{width: responsiveWidth(60)}}>
          <Text style={styles.headerTitle}>{'All Sessions'}</Text>
          <Text style={styles.headerSubTitle}>
            {'2022 NFL Conference Title'}
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            type="feather"
            name="x"
            color={colors.black}
            size={responsiveFontSize(4)}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.scheduleView}>
          <Text style={styles.mediumHeading012}>Schedule</Text>
          <TouchableOpacity style={styles.locationView}>
            <Icon
              type="feather"
              name="map"
              color={colors.royal}
              size={responsiveFontSize(2.2)}
            />
            <Text style={styles.mediumHeading01}>Location Map</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            ItemSeparatorComponent={() => {
              return <View style={{height: responsiveHeight(3)}} />;
            }}
            data={sessions}
            renderItem={({item, index}) => {
              return sessionHeader(item, index);
            }}
          />
        </View>
        <View style={{height: responsiveHeight(4)}} />
      </ScrollView>
    </View>
  );
};

export default AllSessions;
