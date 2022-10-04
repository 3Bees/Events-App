import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import {
    View, StatusBar, ScrollView,Text, SafeAreaView
} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {  colors } from '../../../Services';
import { useSelector } from 'react-redux';
import { responsiveFontSize, responsiveWidth} from 'react-native-responsive-dimensions';
import { ResourceItem } from '../../../Components';

const Resources = () => {
    const navigation = useNavigation();
    const resource = useSelector(state=>state.pages.resource);
    const resources = useMemo(()=>{
        if(resource){
            const videos = resource.videos.map((video)=> ({table: {name: video.title, type: 'video', key: video.id}}));
            return [...resource.resources,...videos];
        } else {
            [];
        }
    },[resource]);
    return(
        <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle="dark-content"
        translucent={false}
      />
      {resource && <>
        <View style={styles.header}>
            <Icon
            type="antdesign"
            name="arrowleft"
            color={colors.black}
            size={responsiveFontSize(4)}
            onPress={() => navigation.goBack()}
            />
            <View style={{width: responsiveWidth(60), marginLeft: 15}}>
                <Text style={styles.headerTitle}>{resource.name}</Text>
                <Text style={styles.headerSubTitle}>
                    {resources.length} {resources.length>1? 'Files' : 'File'}
                </Text>
            </View>
        </View>
        <ScrollView contentContainerStyle={[styles.silverView]}>
            {
                resources  && resources.length > 0 &&resources.map(({table: item}, index)=>
                <View key={index} style={{marginLeft: 20}}>
                    <ResourceItem item={item} screen="Resources"/>
                </View>)
            }
        </ScrollView>
      </>}
    </View>

    )
}

export default Resources;