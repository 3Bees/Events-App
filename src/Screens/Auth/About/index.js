import React, {useEffect, useMemo, useState} from 'react';
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
  useWindowDimensions,
} from 'react-native';
import {styles} from './style';
import {NewHeader, Button, Slider} from '../../../Components';
import {colors, appImages} from '../../../Services';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutUsPage } from '../../../features/pages/pagesSlice';
import RenderHtml from 'react-native-render-html';

const About = props => {
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  const aboutUsContent = useSelector((state)=>state.pages.aboutUs);
  useEffect(()=>{
    dispatch(getAboutUsPage());
  },[dispatch])
  const sections = useMemo(()=>{
    if(aboutUsContent && aboutUsContent.body && aboutUsContent.body.length > 0){
      const list = aboutUsContent.body.filter(item => item.type !== 'hero');
      return list;
    } else {
      return []
    }
   }, [aboutUsContent])
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        translucent={false}
      />
      <NewHeader title={'About PAO'} back />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center', alignItems:'center'}}>
        {
          aboutUsContent && aboutUsContent.body && aboutUsContent.body.length > 0 
          && aboutUsContent.body[0].type === 'hero' &&
          (    
            <ImageBackground style={styles.ImageBackground} source={{uri: aboutUsContent.body[0].fields.table.image}}>
              <View style={styles.imageContent}>
                <Text style={styles.ImageText}>
                  {aboutUsContent.body[0].fields.table.headline}
                </Text>
              </View>
            </ImageBackground>
          )
        }
        <View style={{marginTop: 10}}>
          {sections.length > 0 &&
            sections.map((item, index) => (
              item.fields.table.visible && <View key={index} style={{justifyContent: 'center', alignItems: 'center'}}>
                {item.fields.table.media_placement === 'above' && item.fields.table.media && <Image style={styles.image} source={{uri: item.fields.table.media}} />}
                {item.fields.table.title && !item.fields.table.title.includes('<p style=') && <Text style={styles.title}>{item.fields.table.title}</Text>}
                {item.fields.table.title && item.fields.table.title.includes('<p style=') && <RenderHtml contentWidth={width} source={{html: item.fields.table.title}} />}
                {item.fields.table.media_placement === 'below' && item.fields.table.media && <Image style={styles.image} source={{uri: item.fields.table.media}} />}
                <View style={{marginHorizontal: 10}}>
                  <RenderHtml
                    contentWidth={width}
                    source={{html: item.fields.table.content}}
                  />
                </View>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
