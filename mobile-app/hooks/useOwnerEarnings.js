import useDataLoader from './useDataLoader';

import {

  getOwnerEarnings,

} from '../services/earningsService';

export default function useOwnerEarnings() {

  const {

    data,

    loading,

    refreshing,

    error,

    refresh,

    retry,

  } = useDataLoader(

    getOwnerEarnings,

    {

      initialData: {

        totalRevenue:0,

        totalTrips:0,

        totalPassengers:0,

        averageTripRevenue:0,

        averagePassengers:0,

        rides:[],

      },

      screen:'Owner Earnings',

    }

  );

  return {

    earnings:data,

    loading,

    refreshing,

    error,

    refresh,

    retry,

  };

}