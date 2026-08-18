import {

  getRideStore,

  setRideStore,

} from '../shared/rideStore';

import {

  createActivity,

} from './activityService';

const delay = (ms) =>

  new Promise(resolve => setTimeout(resolve, ms));

export async function getRideHistory() {

  await delay(300);

  return [...getRideStore()];

}

export async function addRide(ride) {

  await delay(300);

  const rides = getRideStore();

  const revenue =

    Number(ride.passengers) *

    Number(ride.fare);

  const newRide = {

    id: Date.now().toString(),

    ...ride,

    revenue,

    status: 'Completed',

  };

  rides.unshift(newRide);

  setRideStore(rides);

  await createActivity({

    title: 'Ride Completed',

    description:

      `${ride.taxiRegistration} generated R${revenue}`,

    type: 'taxi',

  });

  return newRide;

}

export async function deleteRide(id) {

  await delay(300);

  const rides = getRideStore().filter(

    item => item.id !== id

  );

  setRideStore(rides);

}