import {
  getTaxiStore,
} from '../shared/taxiStore';

import {
  getDriverStore,
} from '../shared/driverStore';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getOwnerDashboard() {

  await delay(300);

  const taxis = getTaxiStore();
  const drivers = getDriverStore();

  const active = taxis.filter(
    taxi => taxi.status === 'Active'
  ).length;

  const waiting = taxis.filter(
    taxi => taxi.status === 'Waiting'
  ).length;

  const loading = taxis.filter(
    taxi => taxi.status === 'Loading'
  ).length;

  const offline = taxis.filter(
    taxi => taxi.status === 'Offline'
  ).length;

  return {

    totalTaxis: taxis.length,

    totalDrivers: drivers.length,

    active,

    waiting,

    loading,

    offline,

    earnings: 0,

    trips: 0,

  };

}