import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DriverQueueStatusScreen from '../../screens/driver/DriverQueueStatusScreen';

const Stack = createNativeStackNavigator();

export default function DriverNavigator() {

  return (

    <Stack.Navigator

      screenOptions={{

        headerShown: false,

      }}

    >

      <Stack.Screen

        name="DriverDashboard"

        component={DriverQueueStatusScreen}

      />

    </Stack.Navigator>

  );

}