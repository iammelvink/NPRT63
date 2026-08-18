import {
  getTaxiStore,
  setTaxiStore,
} from '../shared/taxiStore';

import {
  getDriverStore,
} from '../shared/driverStore';

import {
  createActivity,
} from './activityService';

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export async function getAssignmentData() {

  await delay(300);

  return {

    taxis: [...getTaxiStore()],

    drivers: [...getDriverStore()],

  };

}

export async function assignDriverToTaxi(

  taxiId,

  driverId,

) {

  await delay(300);

  const driver = getDriverStore().find(

    item => item.id === driverId

  );

  const taxis = getTaxiStore().map(taxi =>

    taxi.id === taxiId

      ? {

          ...taxi,

          driverId,

        }

      : taxi

  );

  setTaxiStore(taxis);

  const taxi = taxis.find(

    item => item.id === taxiId

  );

  await createActivity({

    title: 'Driver Assigned',

    description: `${driver?.fullName || 'Driver'} → ${taxi.registration}`,

    type: 'driver',

  });

  return true;

}

export async function removeDriverFromTaxi(

  taxiId,

) {

  await delay(300);

  const taxis = getTaxiStore().map(taxi =>

    taxi.id === taxiId

      ? {

          ...taxi,

          driverId: '',

        }

      : taxi

  );

  setTaxiStore(taxis);

  const taxi = taxis.find(

    item => item.id === taxiId

  );

  await createActivity({

    title: 'Driver Removed',

    description: taxi.registration,

    type: 'warning',

  });

  return true;

}

export async function getTaxiAssignment(

  taxiId,

) {

  await delay(300);

  const taxi = getTaxiStore().find(

    item => item.id === taxiId

  );

  if (!taxi) {

    return null;

  }

  const driver = getDriverStore().find(

    item => item.id === taxi.driverId

  );

  return {

    taxi,

    driver,

  };

}