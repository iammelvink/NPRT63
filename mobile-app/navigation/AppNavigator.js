import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RoleRouter from './RoleRouter';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RoleRouter />
    </NavigationContainer>
  );
}