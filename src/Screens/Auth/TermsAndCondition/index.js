import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import {styles} from './style';
import {colors} from '../../../Services';
import {NewHeader, InputText, Button} from '../../../Components';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {TouchableOpacity} from 'react-native-gesture-handler';
const TermsAndCondition = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <NewHeader title={'Terms and Conditions'} />
      <ScrollView>
        <Text style={styles.heading}>Introduction</Text>
        <Text style={styles.description}>
          {
            'These Website Standard Terms and Conditions written on this webpageshall manage your use of our website, Webiste Name accessible at Website.com.\n\nThese Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.\n\nMinors or people below 18 years old are not allowed to use this Website.'
          }
        </Text>
        <Text style={styles.heading}>Restrictions</Text>
        <Text style={[styles.description, {marginBottom: responsiveHeight(2)}]}>
          You are specifically restricted from all of the following:
        </Text>
        <View style={styles.bulletView}>
          <Text style={styles.bullet}>{'\u2B24'}</Text>
          <Text style={styles.bulletText}>
            publishing any Website material in any other media;
          </Text>
        </View>
        <View style={styles.bulletView}>
          <Text style={styles.bullet}>{'\u2B24'}</Text>
          <Text style={styles.bulletText}>
            selling, sublicensing and/or otherwise commercializing any Website
            material;
          </Text>
        </View>
        <View style={styles.bulletView}>
          <Text style={styles.bullet}>{'\u2B24'}</Text>
          <Text style={styles.bulletText}>
            publicly performing and/or showing any Website material;
          </Text>
        </View>
        <View style={styles.bulletView}>
          <Text style={styles.bullet}>{'\u2B24'}</Text>
          <Text style={styles.bulletText}>
            using this Website in any way that is or may be damaging to this
            Website;
          </Text>
        </View>
        <View style={styles.bulletView}>
          <Text style={styles.bullet}>{'\u2B24'}</Text>
          <Text style={styles.bulletText}>
            using this Website in any way that impacts user access to this
            Website;
          </Text>
        </View>
        <View style={styles.bulletView}>
          <Text style={styles.bullet}>{'\u2B24'}</Text>
          <Text style={styles.bulletText}>
            using this Website contrary to applicable laws and regulations, or
            in any way may cause harm to the Website, or to any person or
            business entity;
          </Text>
        </View>
        <View style={styles.bulletView}>
          <Text style={styles.bullet}>{'\u2B24'}</Text>
          <Text style={styles.bulletText}>
            engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this Website;
          </Text>
        </View>
        <View style={styles.bulletView}>
          <Text style={styles.bullet}>{'\u2B24'}</Text>
          <Text style={styles.bulletText}>
            using this Website to engage in any advertising or marketing.
          </Text>
        </View>
        <View style={{height: responsiveHeight(15)}} />
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={[styles.line, {marginBottom: responsiveHeight(2)}]} />
        <Button
          title={'I Agree'}
          onPress={() => props.navigation.navigate('Signup', {check: true})}
        />
      </View>
    </View>
  );
};

export default TermsAndCondition;
