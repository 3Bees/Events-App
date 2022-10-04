import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Onboarding,
  About,
  Donate,
  Login,
  ForgetPassword,
  Signup,
  TermsAndCondition,
  UserProfile,
  Verification,
  Aboutus,
  PendingVerification,
  LoginVerification,
  Shop,
  TermsOfUse,
} from '../../../Screens/index';

const AuthStack = createStackNavigator();
const AuthScreens = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}
      initialRouteName="Splash">
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="About" component={About} />
      <AuthStack.Screen name="Aboutus" component={Aboutus} />
      <AuthStack.Screen name="Donate" component={Donate} />
      <AuthStack.Screen name="Shop" component={Shop} />
      <AuthStack.Screen name="TermsAndConditions" component={TermsOfUse} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="UserProfile" component={UserProfile} />
      <AuthStack.Screen name="Verification" component={Verification} />
      <AuthStack.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
      />
      <AuthStack.Screen
        name="PendingVerification"
        component={PendingVerification}
      />
      <AuthStack.Screen
        name="LoginVerification"
        component={LoginVerification}
      />
    </AuthStack.Navigator>
  );
};
export default AuthScreens;
