import useDataLoader from './useDataLoader';

import {
  getMarshalDashboard,
} from '../services/marshal/marshalDashboardService';

export default function useMarshalDashboard() {

  return useDataLoader(

    getMarshalDashboard,

    {

      initialData: null,

      screen: 'Marshal Dashboard',

    }

  );

}