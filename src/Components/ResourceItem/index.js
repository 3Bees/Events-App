import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../../Services';
import {styles} from './styles';

const resourceTypes = Object.freeze({
    image: { name: 'image', type: 'feather' },
    pdf: { name: 'pdffile1', type: 'antdesign' },
    video: { name: 'ondemand-video', type: 'materialicons' },
  })
  const ResourceItem = ({item, screen}) => {
    const navigation = useNavigation();
    const onResourcePress = (item) => {
        if(item.type === 'pdf'){
            navigation.navigate('PdfView',{link: item.object, previousScreen: screen})
        } else if(item.type === 'video'){
            navigation.navigate('Video',{key: item.key});
        } else if(item.type === 'image'){
          navigation.navigate('ImageView',{link: item.object, previousScreen: screen});
        } 
    }
    return (
      <TouchableOpacity
        style={[styles.ResourceFlatListBtn, { width: responsiveWidth(90) }]} onPress={()=> onResourcePress(item)}>
        <Icon
          type={resourceTypes[item.type] ? resourceTypes[item.type].type : 'antdesign'}
          name={resourceTypes[item.type] ? resourceTypes[item.type].name : 'pdffile1'}
          color={colors.black}
          size={responsiveFontSize(3)}
        />
        <Text style={styles.ResourceFlatListTitle}>{item.name || ''}</Text>
        <View style={{ height: responsiveHeight(2) }} />
      </TouchableOpacity>
    );
  };
  export default ResourceItem;