import React, { useEffect, useMemo, useState } from 'react';
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
import { styles } from './style';
import { Button, NewHeader } from '../../../../Components';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { appImages, colors, fontFamily } from '../../../../Services';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import PhoneInput, { PhoneNumber } from 'react-native-phone-input';
import { useSelector } from 'react-redux';


const AccountDetails = props => {
    const user = useSelector((state) => state.auth.profile);
    const userDetails = useMemo(()=>{
        if(user){
            return [
                {
                    id: 1,
                    title: 'Name',
                    value: `${user.first_name} ${user.last_name}`,
                },
                {
                    id: 2,
                    title: 'Email',
                    value: user.email,
                    verified: false
                },
                {
                    id: 3,
                    title: 'Twitter',
                    value: user.twitter_handle,
                },
                {
                    id: 4,
                    title: 'Phone Number',
                    value: user.phone,
                },
            ]
        } else {
            return [];
        }
    },[user]);

    const userDetailRender = (item, index) => {
        return (
            <View>
                <View style={styles.FlatListBtn}>
                    <View>
                        <Text style={styles.FlatListTitle}>{item.title}</Text>
                        {item.title === 'Phone Number' ?
                            <View
                                style={[
                                    styles.phoneView,
                                    {
                                        borderColor: 'transparent',
                                    },
                                ]}>
                                {item.value ? <PhoneInput
                                    textStyle={styles.FlatListTitle2}
                                    initialCountry="US"
                                    initialValue={`${item.value}`}
                                    flagStyle={styles.flag}
                                    style={[{ width: responsiveWidth(70) }]}
                                    disabled
                                /> : <Text style={[styles.FlatListTitle2, {color: colors.greyText,}]}>+1 123 456 7890</Text>}
                            </View>
                            :
                            <Text style={item.value ? styles.FlatListTitle2 : [styles.FlatListTitle2, {color: colors.greyText}]}>{item.value}</Text>
                        }
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('EditDetails', { type: item.title })}>
                        <Image source={appImages.pencil} style={styles.editIcon} />
                    </TouchableOpacity>
                </View>
                {
                    item.verified ?
                        <View style={{ marginTop: responsiveHeight(1) }}>
                            <Text>
                                {'The new email is pending verification. In the meantime we’ll keep using communication@amandamoon.me'}
                            </Text>
                        </View>
                        :
                        null
                }
            </View>
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
                <Text numberOfLines={1} style={styles.headerTitle}>
                    {'Edit Account'}
                </Text>
            </View>
            <View
                style={styles.silverView}>
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={userDetails}
                    renderItem={({ item, index }) => {
                        return userDetailRender(item, index);
                    }}
                />
            </View>


        </View>
    );
};

export default AccountDetails;
