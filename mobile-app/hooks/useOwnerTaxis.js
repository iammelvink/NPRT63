import useDataLoader from './useDataLoader';

import {
  getOwnerTaxis,
} from '../services/ownerService';

export default function useOwnerTaxis() {

  const {

    data,

    loading,

    refreshing,

    error,

    refresh,

    retry,

    setData,

  } = useDataLoader(

    getOwnerTaxis,

    {

      initialData: [],

      autoLoad: true,

      screen: 'Owner Taxis',

    }

  );

  return {

    taxis: data || [],

    loading,

    refreshing,

    error,

    refresh,

    retry,

    setTaxis: setData,

  };

}