import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {styles} from './style';
import {NewHeader} from '../../../Components';
import {colors} from '../../../Services';
import { useDispatch, useSelector } from 'react-redux';
import { getTermsAndConditionsPage } from '../../../features/pages/pagesSlice';
import RenderHtml from 'react-native-render-html';
import { WebView } from 'react-native-webview';

const TermsOfUse = props => {
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  const termsAndConditionsObject = useSelector((state)=>state.pages.termsAndConditions);
  useEffect(()=>{
    dispatch(getTermsAndConditionsPage());
  },[dispatch])
  const termsAndConditions = useMemo(()=>{
    if(termsAndConditionsObject && termsAndConditionsObject.body && termsAndConditionsObject.body.length > 0){
      const list = [...termsAndConditionsObject.body];
      console.log('list: ', list)
      return list;
    } else {
      return []
    }
   }, [termsAndConditionsObject]);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        translucent={false}
      />
      <NewHeader title={'Terms And Conditions'} back />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent: 'center', alignItems:'center'}}>
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          {termsAndConditions.length > 0 &&
            termsAndConditions.map((item, index) => (
              <View key={index} style={{justifyContent: 'center', alignItems: 'center'}}>
                {/* {item.fields.table.media_placement === 'above' && item.fields.table.media && <Image style={styles.image} source={{uri: item.fields.table.media}} />}
                {item.fields.table.title && !item.fields.table.title.includes('<p style=') && <Text style={styles.title}>{item.fields.table.title}</Text>}
                {item.fields.table.title && item.fields.table.title.includes('<p style=') && <RenderHtml contentWidth={width} source={{html: item.fields.table.title}} />}
                {item.fields.table.media_placement === 'below' && item.fields.table.media && <Image style={styles.image} source={{uri: item.fields.table.media}} />} */}
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

export default TermsOfUse;
