import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PassengerDashboard from '../../../screens/passenger/PassengerDashboard';
import SearchStackNavigator from '../stacks/SearchStackNavigator';

import colors from '../../../theme/colors';

const Tab = createBottomTabNavigator();

function PlaceholderScreen() {
  return null;
}

export default function PassengerTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.placeholder,

        tabBarStyle: {
          height: 68,
          backgroundColor: colors.surface,
          borderTopWidth: 0,
          paddingTop: 8,
          paddingBottom: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        tabBarIcon: ({ color, size }) => {
          let iconName = 'ellipse';

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;

            case 'Search':
              iconName = 'search';
              break;

            case 'Alerts':
              iconName = 'notifications';
              break;

            case 'Profile':
              iconName = 'person';
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={PassengerDashboard}
      />

      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
      />

      <Tab.Screen
        name="Alerts"
        component={PlaceholderScreen}
      />

      <Tab.Screen
        name="Profile"
        component={PlaceholderScreen}
      />
    </Tab.Navigator>
  );
}