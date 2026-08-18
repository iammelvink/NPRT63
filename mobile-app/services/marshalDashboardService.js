import {
  getQueueStore,
} from '../shared/queueStore';

import {
  getTaxiStore,
} from '../shared/taxiStore';

import {
  getDriverStore,
} from '../shared/driverStore';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getMarshalDashboard() {

  await delay(300);

  const queue = getQueueStore()

    .slice()

    .sort((a, b) => a.position - b.position);

  const taxis = getTaxiStore();

  const drivers = getDriverStore();

  const liveQueue = queue.map(queueItem => {

    const taxi = taxis.find(

      item => item.id === queueItem.taxiId

    );

    const driver = drivers.find(

      item => item.id === taxi?.driverId

    );

    return {

      ...queueItem,

      taxi,

      driver,

    };

  });

  const stats = {

    queue: liveQueue.length,

    departed: liveQueue.filter(

      item => item.status === 'Departed'

    ).length,

    loading: liveQueue.filter(

      item => item.status === 'Loading'

    ).length,

    waiting: liveQueue.filter(

      item => item.status === 'Waiting'

    ).length,

    checkedIn: liveQueue.filter(

      item => item.checkedIn

    ).length,

  };

  return {

    marshalName: 'John Marshal',

    rankName: 'Kimberley Taxi Rank',

    stats,

    queue: liveQueue,

  };

}