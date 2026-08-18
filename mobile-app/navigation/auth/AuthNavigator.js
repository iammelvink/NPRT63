import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../../screens/auth/SplashScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen';
import PassengerRegisterScreen from '../../screens/auth/PassengerRegisterScreen';
import MarshalRegisterScreen from '../../screens/auth/MarshalRegisterScreen';
import OwnerRegisterScreen from '../../screens/auth/OwnerRegisterScreen';
import ForgotPasswordScreen from '../../screens/auth/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {

  return (

    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >

      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      />

      <Stack.Screen
        name="PassengerRegister"
        component={PassengerRegisterScreen}
      />

      <Stack.Screen
        name="MarshalRegister"
        component={MarshalRegisterScreen}
      />

      <Stack.Screen
        name="OwnerRegister"
        component={OwnerRegisterScreen}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />

    </Stack.Navigator>

  );

}