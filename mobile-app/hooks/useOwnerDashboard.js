import useDataLoader from './useDataLoader';

import {
  getOwnerDashboard,
} from '../services/ownerDashboardService';

export default function useOwnerDashboard() {

  const {

    data,

    loading,

    refreshing,

    error,

    refresh,

  } = useDataLoader(

    getOwnerDashboard,

    {

      initialData: {

        totalTaxis: 0,

        totalDrivers: 0,

        active: 0,

        waiting: 0,

        loading: 0,

        offline: 0,

        earnings: 0,

        trips: 0,

      },

      screen: 'Owner Dashboard',

    }

  );

  return {

    dashboard: data,

    loading,

    refreshing,

    error,

    refresh,

  };

}