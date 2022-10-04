import React, { useEffect, useState } from 'react';
import {
  Home,
  Events,
  Aboutus,
  About,
  Donate,
  Videos,
  EventDetails,
  Shop,
  TermsOfUse,
  AccountDetails,
  EditDetails,
  AllSessions,
  Session,
  SpeakerDetails,
  MapScreen,
  Register,
  Resources,
  PdfView,
  ImageView
} from '../../../Screens/';
import { Icon } from 'react-native-elements';
import { Text, View, Image, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { appImages } from '../../../Services/utilities/assets';
import CustomeDrawar from '../Drawer';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { colors, fontFamily } from '../..';
import LinearGradient from 'react-native-linear-gradient';
import { DrawerActions } from '@react-navigation/native';
import Help from '../../../Screens/App/Help';
const MainApp = createStackNavigator();
const tabBarHeight =
  Platform.OS === 'android' ? responsiveHeight(9) : responsiveHeight(10);
const HomeStack = createStackNavigator();
const EventsStack = createStackNavigator();
const AccountStack = createStackNavigator();
const SessionStack = createStackNavigator();
const ResourcesStack = createStackNavigator();
const EventStack = createStackNavigator();

const MainTab = createBottomTabNavigator();
// const MainApp = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      showLabel={false}
      initialRouteName={'Home'}>
      <HomeStack.Screen name={'Home'} component={Home} />

    </HomeStack.Navigator>
  );
};
const ResourcesStackScreens = () => {
  return (
    <ResourcesStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={'Resources'}>
      <ResourcesStack.Screen name={'Resources'} component={Resources} />
      <ResourcesStack.Screen name={'Video'} component={Videos} />
      <ResourcesStack.Screen name={'PdfView'} component={PdfView} />
      <ResourcesStack.Screen name={'ImageView'} component={ImageView} />
    </ResourcesStack.Navigator>
  );
};
const EventsStackScreens = () => {
  return (
    <EventsStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={'Search'}>
      <EventsStack.Screen name={'Events'} component={Events} />

    </EventsStack.Navigator>
  );
};
const EventStackScreens = () => {
  return (
    <EventStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={'EventDetails1'}>
      <EventStack.Screen name={'EventDetails1'} component={EventDetails} />
      <EventStack.Screen name={'Video'} component={Videos} />
      <EventStack.Screen name={'PdfView'} component={PdfView} />
      <EventStack.Screen name={'ImageView'} component={ImageView} />
      <EventStack.Screen name={'Session'} component={SessionStackScreens} />

    </EventStack.Navigator>
  );
};
const AccountStackScreens = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={'AccountDetails'}>
      <AccountStack.Screen name={'AccountDetails'} component={AccountDetails} />
      <AccountStack.Screen name={'EditDetails'} component={EditDetails} />
    </AccountStack.Navigator>
  );
};

const SessionStackScreens = () => {
  return (
    <SessionStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={'Session1'}>
      <SessionStack.Screen name={'Session1'} component={Session} />
      <SessionStack.Screen name={'SpeakerDetails'} component={SpeakerDetails} />
      <SessionStack.Screen name={'MapScreen'} component={MapScreen} />
      <SessionStack.Screen name={'Video'} component={Videos} />


    </SessionStack.Navigator>
  );
};
const MainTabScreens = props => {
  const [isVisible, setIsVisible] = useState(true);

  const keyboardWillShow = event => {
    setIsVisible(false);
  };

  const keyboardWillHide = event => {
    setIsVisible(true);
  };
  return (
    <MainTab.Navigator
      barStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        allowFontScaling: true,
        tabBarShowLabel: false,
        gestureEnabled: false,
        tabBarStyle: {
          backgroundColor: 'white',
          display: 'flex',
          width: responsiveWidth(100),
          alignSelf: 'center',
          height: tabBarHeight,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          // borderTopLeftRadius: responsiveWidth(10),
          // borderTopRightRadius: responsiveWidth(10),
          position: 'absolute',
          // paddingHorizontal: responsiveWidth(5),
        },
      }}
      initialRouteName={'Explore'}>
      <MainTab.Screen
        name={'Drawer'}
        component={App}
        // listeners={{
        //   tabPress: e => {
        //     // console.log('aaaaaaaaaaaaaa'),
        //       props.navigation.dispatch(DrawerActions.openDrawer());
        //   },
        // }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
        options={props => ({
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  alignItems: 'center',
                  height: tabBarHeight / 1.5,
                  justifyContent: 'center',
                }}>
                <Image
                  source={appImages.List}
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(8),
                    resizeMode: 'contain',
                    marginBottom: responsiveHeight(0.5),
                  }}
                />
                <Text
                  style={{
                    color: focused ? colors.royal : colors.black,
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  Menu
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  height: tabBarHeight / 1.5,
                  justifyContent: 'center',
                }}>
                <Image
                  source={appImages.List}
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(8),
                    resizeMode: 'contain',
                    marginBottom: responsiveHeight(0.5),
                  }}
                />
                <Text
                  style={{
                    color: focused ? colors.royal : colors.black,
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  Menu
                </Text>
              </View>
            );
          },
        })}
      />
      <MainTab.Screen
        name={'Explore'}
        component={HomeStackScreens}
        initialParams={{ chk: false }}
        options={() => ({
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  alignItems: 'center',
                  height: tabBarHeight / 1.5,
                  justifyContent: 'center',
                  borderTopWidth: responsiveWidth(0.3),
                  borderColor: focused ? colors.royal : 'transparent',
                }}>
                <Image
                  source={appImages.homeIcon}
                  style={{
                    height: responsiveHeight(3),
                    width: responsiveWidth(6),
                    resizeMode: 'contain',
                    marginBottom: responsiveHeight(1),
                    marginTop: responsiveHeight(0.5),
                  }}
                />
                <Text
                  style={{
                    color: focused ? colors.royal : colors.black,
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  Explore
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  height: tabBarHeight / 1.5,
                  justifyContent: 'center',
                  borderTopWidth: responsiveWidth(0.3),
                  borderColor: focused ? colors.royal : 'transparent',
                }}>
                <Image
                  source={appImages.homeIcon}
                  style={{
                    height: responsiveHeight(3),
                    width: responsiveWidth(6),
                    resizeMode: 'contain',
                    marginBottom: responsiveHeight(1),
                    marginTop: responsiveHeight(0.5),
                  }}
                />
                <Text
                  style={{
                    color: focused ? colors.royal : colors.black,
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  Explore
                </Text>
              </View>
            );
          },
        })}
      />

      <MainTab.Screen
        name={'Events'}
        component={EventsStackScreens}
        options={props => ({
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <View
                style={{
                  alignItems: 'center',
                  height: tabBarHeight / 1.5,
                  justifyContent: 'center',
                  borderTopWidth: responsiveWidth(0.3),
                  borderColor: focused ? colors.royal : 'transparent',
                }}>
                <Image
                  source={appImages.eventIcon}
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(8),
                    resizeMode: 'contain',
                    marginBottom: responsiveHeight(0.5),
                  }}
                />
                <Text
                  style={{
                    color: focused ? colors.royal : colors.black,
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  Events
                </Text>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  height: tabBarHeight / 1.5,
                  justifyContent: 'center',
                  borderTopWidth: responsiveWidth(0.3),
                  borderColor: focused ? colors.royal : 'transparent',
                }}>
                <Image
                  source={appImages.eventIcon}
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveWidth(8),
                    resizeMode: 'contain',
                    marginBottom: responsiveHeight(0.5),
                  }}
                />
                <Text
                  style={{
                    color: focused ? colors.royal : colors.black,
                    fontSize: responsiveFontSize(1.5),
                  }}>
                  Events
                </Text>
              </View>
            );
          },
        })}
      />
    </MainTab.Navigator>
  );
};

// const App = () => {
//   return (
//     <MainApp.Navigator
//       screenOptions={{headerShown: false, gestureEnabled: false}}
//       initialRouteName={'MainApp'}>
//       <MainApp.Screen name={'Main'} component={MainTabScreens} />
//       <MainApp.Screen name={'Notification'} component={Notification} />
//       <MainApp.Screen name={'Add'} component={Add} />
//     </MainApp.Navigator>
//   );
// };
const App = () => {
  return (
    <Drawer.Navigator
      panThreshold
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomeDrawar {...props} />}>
      <Drawer.Screen name={'Main'} component={MainTabScreens} />
      <Drawer.Screen name={'HomeVideo'} component={Videos} /> 
      <Drawer.Screen name={'EventDetails'} component={EventStackScreens} />
      <Drawer.Screen name={'Aboutus'} component={Aboutus} />
      <Drawer.Screen name={'About'} component={About} />
      <Drawer.Screen name={'Donate'} component={Donate} />
      <Drawer.Screen name={'Shop'} component={Shop} />
      <Drawer.Screen name={'TermsAndConditions'} component={TermsOfUse} />
      <Drawer.Screen name={'Help'} component={Help} />
      <Drawer.Screen name={'AccountDetails'} component={AccountDetails} />
      <Drawer.Screen name={'EditDetails'} component={EditDetails} />
      {/* <Drawer.Screen name={'Session'} component={Session} /> */}
      <Drawer.Screen name={'SpeakerDetails'} component={SpeakerDetails} />
      <Drawer.Screen name={'Register'} component={Register} />
      <Drawer.Screen name={'ResourcesStack'} component={ResourcesStackScreens} />
      <Drawer.Screen name={'PdfView'} component={PdfView} />
      <Drawer.Screen name={'ImageView'} component={ImageView} />
      <Drawer.Screen
        name={'AccountStackScreens'}
        component={AccountStackScreens}
      />
    </Drawer.Navigator>
  );
};

export default App;
