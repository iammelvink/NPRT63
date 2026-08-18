import React from 'react';

import useDataLoader from './useDataLoader';

import {

  getActivities,

} from '../services/activityService';

export default function useActivityFeed() {

  const {

    data,

    loading,

    refreshing,

    error,

    refresh,

    retry,

  } = useDataLoader(

    getActivities,

    {

      initialData: [],

      screen: 'Activity Feed',

    }

  );

  React.useEffect(()=>{

    const interval=setInterval(

      refresh,

      1000,

    );

    return()=>clearInterval(interval);

  },[]);

  return{

    activities:data||[],

    loading,

    refreshing,

    error,

    refresh,

    retry,

  };

}