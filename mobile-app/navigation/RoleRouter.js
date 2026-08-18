import React from 'react';

import { useAuth } from '../context/AuthContext';

import AuthNavigator from './auth/AuthNavigator';
import PassengerNavigator from './passenger/PassengerNavigator';
import MarshalNavigator from './marshal/MarshalNavigator';
import OwnerNavigator from './owner/OwnerNavigator';
import DriverNavigator from './driver/DriverNavigator';
import AdminNavigator from './admin/AdminNavigator';

export default function RoleRouter() {

  const { user } = useAuth();

  if (!user) {

    return <AuthNavigator />;

  }

  switch (user.role) {

    case 'passenger':
      return <PassengerNavigator />;

    case 'marshal':
      return <MarshalNavigator />;

    case 'owner':
      return <OwnerNavigator />;

    case 'driver':
      return <DriverNavigator />;

    case 'admin':
      return <AdminNavigator />;

    default:
      return <AuthNavigator />;

  }

}