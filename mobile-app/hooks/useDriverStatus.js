import useDataLoader from './useDataLoader';

import {

  getDriverStatus,

} from '../services/mock/driverService';

export default function useDriverStatus() {

  return useDataLoader(

    getDriverStatus,

    {

      screen: 'Driver Status',

    },

  );

}