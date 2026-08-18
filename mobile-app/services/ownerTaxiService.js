import {
  getTaxiStore,
  setTaxiStore,
} from '../shared/taxiStore';

import {
  createActivity,
} from './activityService';

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export async function getOwnerTaxis() {

  await delay(300);

  return [...getTaxiStore()];

}

export async function getTaxiById(id) {

  await delay(300);

  return getTaxiStore().find(

    taxi => taxi.id === id

  );

}

export async function addTaxi(taxi) {

  await delay(300);

  const taxis = getTaxiStore();

  const newTaxi = {

    id: Date.now().toString(),

    registration: taxi.registration,

    driverId: taxi.driverId || '',

    capacity: Number(taxi.capacity),

    rank: taxi.rank,

    status: taxi.status || 'Waiting',

  };

  taxis.unshift(newTaxi);

  setTaxiStore(taxis);

  await createActivity({

    title: 'Taxi Registered',

    description: `${newTaxi.registration} registered at ${newTaxi.rank}`,

    type: 'taxi',

  });

  return newTaxi;

}

export async function updateTaxi(updatedTaxi) {

  await delay(300);

  const taxis = getTaxiStore().map(item =>

    item.id === updatedTaxi.id

      ? {

          ...item,

          ...updatedTaxi,

        }

      : item

  );

  setTaxiStore(taxis);

  await createActivity({

    title: 'Taxi Updated',

    description: updatedTaxi.registration,

    type: 'taxi',

  });

  return updatedTaxi;

}

export async function deleteTaxi(id) {

  await delay(300);

  const taxi = getTaxiStore().find(

    item => item.id === id

  );

  const taxis = getTaxiStore().filter(

    item => item.id !== id

  );

  setTaxiStore(taxis);

  await createActivity({

    title: 'Taxi Deleted',

    description: taxi?.registration || 'Unknown Taxi',

    type: 'warning',

  });

}

export async function updateTaxiStatus(

  id,

  status,

) {

  await delay(300);

  const taxis = getTaxiStore().map(item =>

    item.id === id

      ? {

          ...item,

          status,

        }

      : item

  );

  setTaxiStore(taxis);

  const taxi = taxis.find(

    item => item.id === id

  );

  await createActivity({

    title: 'Taxi Status Changed',

    description: `${taxi.registration} is now ${status}`,

    type: 'taxi',

  });

}

export async function assignDriver(

  taxiId,

  driverId,

) {

  await delay(300);

  const taxis = getTaxiStore().map(item =>

    item.id === taxiId

      ? {

          ...item,

          driverId,

        }

      : item

  );

  setTaxiStore(taxis);

  const taxi = taxis.find(

    item => item.id === taxiId

  );

  await createActivity({

    title: 'Driver Assigned',

    description: `Driver assigned to ${taxi.registration}`,

    type: 'driver',

  });

}