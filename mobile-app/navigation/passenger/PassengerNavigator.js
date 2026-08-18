import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PassengerTabNavigator from './tabs/PassengerTabNavigator';

const Stack = createNativeStackNavigator();

export default function PassengerNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="PassengerTabs"
        component={PassengerTabNavigator}
      />
    </Stack.Navigator>
  );
}