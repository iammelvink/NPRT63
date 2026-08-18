import { getQueueStore } from '../shared/queueStore';
import { getTaxiStore } from '../shared/taxiStore';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPassengerQueue() {

  await delay(300);

  const queue = getQueueStore()

    .slice()

    .sort((a, b) => a.position - b.position);

  const taxis = getTaxiStore();

  return queue.map(item => {

    const taxi = taxis.find(

      taxi => taxi.id === item.taxiId

    );

    return {

      id: item.id,

      position: item.position,

      registration: taxi?.registration || 'Unknown',

      capacity: taxi?.capacity || 0,

      rank: taxi?.rank || '',

      passengers: item.passengers,

      availableSeats:

        (taxi?.capacity || 0) - item.passengers,

      status: item.status,

      checkedIn: item.checkedIn,

    };

  });

}