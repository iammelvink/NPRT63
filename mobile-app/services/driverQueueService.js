import {

  getDriverStore,

} from '../shared/driverStore';

import {

  getTaxiStore,

} from '../shared/taxiStore';

import {

  getQueueStore,

} from '../shared/queueStore';

import {

  checkInTaxi,

  checkOutTaxi,

} from './queueService';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getDriverStatus(driverId = '1') {

  await delay(300);

  const driver = getDriverStore().find(

    item => item.id === driverId

  );

  if (!driver) {

    return null;

  }

  const taxi = getTaxiStore().find(

    item => item.driverId === driver.id

  );

  if (!taxi) {

    return null;

  }

  const queue = getQueueStore().find(

    item => item.taxiId === taxi.id

  );

  return {

    id: driver.id,

    fullName: driver.fullName,

    cellphone: driver.cellphone,

    licenseNumber: driver.licenseNumber,

    registration: taxi.registration,

    capacity: taxi.capacity,

    rank: taxi.rank,

    queuePosition: queue?.position || 0,

    passengers: queue?.passengers || 0,

    checkedIn: queue?.checkedIn || false,

    status: queue?.status || 'Offline',

    taxiId: taxi.id,

  };

}

export async function driverCheckIn(driverId = '1') {

  const status = await getDriverStatus(driverId);

  if (!status) {

    return;

  }

  await checkInTaxi(status.taxiId);

}

export async function driverCheckOut(driverId = '1') {

  const status = await getDriverStatus(driverId);

  if (!status) {

    return;

  }

  await checkOutTaxi(status.taxiId);

}