import useDataLoader from './useDataLoader';

import {
  getOwnerDrivers,
} from '../services/ownerDriverService';

export default function useOwnerDrivers() {

  const {

    data,

    loading,

    refreshing,

    error,

    refresh,

    retry,

    setData,

  } = useDataLoader(

    getOwnerDrivers,

    {

      initialData: [],

      autoLoad: true,

      screen: 'Owner Drivers',

    }

  );

  return {

    drivers: data || [],

    loading,

    refreshing,

    error,

    refresh,

    retry,

    setDrivers: setData,

  };

}