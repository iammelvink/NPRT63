import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OwnerDashboard from '../../screens/owner/OwnerDashboard';

import MyTaxisScreen from '../../screens/owner/MyTaxisScreen';
import AddTaxiScreen from '../../screens/owner/AddTaxiScreen';
import EditTaxiScreen from '../../screens/owner/EditTaxiScreen';

import MyDriversScreen from '../../screens/owner/MyDriversScreen';
import AddDriverScreen from '../../screens/owner/AddDriverScreen';
import EditDriverScreen from '../../screens/owner/EditDriverScreen';

import AssignDriverScreen from '../../screens/owner/AssignDriverScreen';

import EarningsScreen from '../../screens/owner/EarningsScreen';
import RideHistoryScreen from '../../screens/owner/RideHistoryScreen';

const Stack = createNativeStackNavigator();

export default function OwnerNavigator() {

  return (

    <Stack.Navigator

      screenOptions={{

        headerShown:false,

      }}

    >

      <Stack.Screen

        name="OwnerDashboard"

        component={OwnerDashboard}

      />

      <Stack.Screen

        name="MyTaxis"

        component={MyTaxisScreen}

      />

      <Stack.Screen

        name="AddTaxi"

        component={AddTaxiScreen}

      />

      <Stack.Screen

        name="EditTaxi"

        component={EditTaxiScreen}

      />

      <Stack.Screen

        name="AssignDriver"

        component={AssignDriverScreen}

      />

      <Stack.Screen

        name="MyDrivers"

        component={MyDriversScreen}

      />

      <Stack.Screen

        name="AddDriver"

        component={AddDriverScreen}

      />

      <Stack.Screen

        name="EditDriver"

        component={EditDriverScreen}

      />

      <Stack.Screen

        name="Earnings"

        component={EarningsScreen}

      />

      <Stack.Screen

        name="RideHistory"

        component={RideHistoryScreen}

      />

    </Stack.Navigator>

  );

}