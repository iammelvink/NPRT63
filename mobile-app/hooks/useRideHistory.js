import useDataLoader from './useDataLoader';

import {

  getRideHistory,

} from '../services/rideHistoryService';

export default function useRideHistory() {

  const {

    data,

    loading,

    refreshing,

    error,

    refresh,

    retry,

  } = useDataLoader(

    getRideHistory,

    {

      initialData: [],

      screen: 'Ride History',

    }

  );

  return {

    rides: data || [],

    loading,

    refreshing,

    error,

    refresh,

    retry,

  };

}