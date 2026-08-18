import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../../../screens/passenger/search/SearchScreen';
import TaxiRankDetailsScreen from '../../../screens/passenger/rank/TaxiRankDetailsScreen';

const Stack = createNativeStackNavigator();

export default function SearchStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="SearchHome"
        component={SearchScreen}
      />

      <Stack.Screen
        name="TaxiRankDetails"
        component={TaxiRankDetailsScreen}
      />
    </Stack.Navigator>
  );
}