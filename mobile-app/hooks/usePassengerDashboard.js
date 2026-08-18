import useDataLoader from './useDataLoader';

import {

    getPassengerDashboard,

} from '../services/passengerDashboardService';

export default function usePassengerDashboard() {

    return useDataLoader(

        getPassengerDashboard,

        {

            screen: 'Passenger Dashboard',

        }

    );

}