import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  FlatList,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import {styles} from './style';
import {NewHeader, Button, Slider} from '../../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, appImages} from '../../../../Services';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutUsPage } from '../../../../features/pages/pagesSlice';
const Aboutus = props => {
  const dispatch = useDispatch();
  const aboutUsContent = useSelector((state)=>state.pages.aboutUs);
  useEffect(()=>{
    console.log('call about')
    dispatch(getAboutUsPage());
  },[dispatch])
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        translucent={false}
      />
      <NewHeader title={'About PAO'} back />
      <ScrollView>
      <ImageBackground source={appImages.about1} style={styles.about1}>
        <Text style={styles.about1Text}>Our Story</Text>
      </ImageBackground>
      <Image source={appImages.about2} style={styles.about2} />
      <Text style={styles.BoldHeading}>Who we are</Text>
      <Text style={styles.detailedText}>
        Since 1971, Pro Athletes Outreach has existed to unite a community of
        pro athletes and couples to grow as disciples of Jesus, and positively
        impact their spheres of influence.
      </Text>
      <Image source={appImages.about3} style={styles.about2} />
      <Text style={styles.BoldHeading}>Who we do</Text>
      <Text style={styles.detailedText}>
        As we continually seek to a point a unique community to pursue a life
        that looks more like Jesus, we focus on fostering discipleship in the
        form of yearly conferences, seasonal bible studies, women's gatherings,
        and local events.
      </Text>
      <View style={styles.learnMore}>
        <Text style={styles.learnMoreText}>
          {"LEARN MORE ABOUT WHAT'S AT THE CENTER OF:"}
        </Text>
        <Text style={styles.headinglearnMore}>"THE INCREASE"</Text>
      </View>
      <Text style={styles.detailedText}>
        John the Baptist represented the height of popularity in his day. People
        were coming to him in droves to follow him and listen to what he had to
        say about life.
      </Text>
      <View style={{height: responsiveHeight(2)}} />
      <Text style={styles.BoldHeading}>{'Does this sound\nfamiliar?'}</Text>
      <View style={{height: responsiveHeight(2)}} />
      <Text style={styles.detailedText}>
        And suddenly Jesus showed up and the people started leaving John and
        going to Jesus. Concerned, some of John's closest followers approached
        him with this: “Rabbi, that man who was with you on the other side of
        the Jordan — the one you testified about — look, he is baptizing, and
        everyone is going to him” (John 3:26). John's response is perfect, and
        it perfectly models what every one of us should hope to replicate in our
        own lives. He responds with such humility and sincerity.{'\n\n'}John
        knows who he is and understands who he is not. He also understands who
        Jesus is and how monumentally important it is that people are going to
        Him. John knows he is a finite being with a finite ability to help
        others, but Jesus is an infinite being with no limitations to offer
        everyone what they need most. Against that awareness, John assures those
        asking him that he is overjoyed about the masses not looking to him
        anymore, but rather to the one and only Son of God.{'\n\n'}In verse 30
        comes John's declaration: “He must increase, and I must decrease.” He —
        Jesus — must be ever-increasing in and through our lives, and our
        tendency to proclaim ourselves, our accomplishments and our own smaller
        stories must be ever-decreasing.
      </Text>
      <View style={{height: responsiveHeight(4)}} />
      <Button
        title={'Questions: Contact Us'}
        myStyles={{backgroundColor: colors.splash}}
        itsTextstyle={{fontSize: responsiveFontSize(2.7)}}
      />
      </ScrollView>
      <View style={{height: responsiveHeight(4)}} />
    </View>
  );
};

export default Aboutus;
