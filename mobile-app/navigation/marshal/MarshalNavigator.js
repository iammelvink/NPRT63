import React from 'react';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import MarshalDashboard
  from '../../screens/marshal/MarshalDashboard';

import MarshalQRCodeScreen
  from '../../screens/marshal/MarshalQRCodeScreen';

import LiveQueueScreen
  from '../../screens/marshal/LiveQueueScreen';

import DriverCheckInScreen
  from '../../screens/marshal/DriverCheckInScreen';

import PassengerLoadingScreen
  from '../../screens/marshal/PassengerLoadingScreen';

const Stack = createNativeStackNavigator();

export default function MarshalNavigator() {

  return (

    <Stack.Navigator

      initialRouteName="MarshalDashboard"

      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}

    >

      <Stack.Screen
        name="MarshalDashboard"
        component={MarshalDashboard}
      />

      <Stack.Screen
        name="MarshalQRCode"
        component={MarshalQRCodeScreen}
      />

      <Stack.Screen
        name="LiveQueue"
        component={LiveQueueScreen}
      />

      <Stack.Screen
        name="DriverCheckIn"
        component={DriverCheckInScreen}
      />

      <Stack.Screen
        name="PassengerLoading"
        component={PassengerLoadingScreen}
      />

    </Stack.Navigator>

  );

}