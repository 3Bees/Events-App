import React, { useEffect } from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';
import Auth from './auth';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import { getAuthToken } from '../../features/auth/authSlice';
import { getUser } from '../../features/auth/authSlice';
const AppStack = createStackNavigator();

// decode jwt token to see if it's valid
const AppNavigation = () => {
  const dispatch = useDispatch();
  const token = useSelector((state)=> state.auth.token);
  const profile = useSelector((state)=> state.auth.profile);

  useEffect(()=>{
    dispatch(getAuthToken());
  },[dispatch]);
  useEffect(()=>{
    dispatch(getUser());
  },[dispatch]);
  
  return (
    <NavigationContainer>
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <AppStack.Navigator
        screenOptions={{headerShown: false}}>
          {
            token && (profile && profile.account_verified) ?
            <AppStack.Screen name="App" component={App} /> :
        <AppStack.Screen name="Auth" component={Auth} />
          }
      </AppStack.Navigator>
    </>
    </NavigationContainer>
  );
};

export default AppNavigation;
