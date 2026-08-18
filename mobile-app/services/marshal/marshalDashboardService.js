import {
  getQueueStore,
  setQueueStore,
} from '../../shared/queueStore';

import {
  getTaxiStore,
} from '../../shared/taxiStore';

import {
  getDriverStore,
} from '../../shared/driverStore';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getMarshalDashboard() {

  await delay(300);

  const queueStore = getQueueStore();

  const taxis = getTaxiStore();

  const drivers = getDriverStore();

  const queue = queueStore
    .sort((a, b) => a.position - b.position)
    .map(item => {

      const taxi = taxis.find(
        t => t.id === item.taxiId
      );

      const driver = drivers.find(
        d => d.id === taxi?.driverId
      );

      return {

        ...item,

        taxi,

        driver,

      };

    });

  return {

    marshalName: 'John Marshal',

    rankName: 'Kimberley Taxi Rank',

    stats: {

      queue: queue.length,

      waiting: queue.filter(
        q => q.status === 'Waiting'
      ).length,

      loading: queue.filter(
        q => q.status === 'Loading'
      ).length,

      departed: queue.filter(
        q => q.status === 'Departed'
      ).length,

      full: queue.filter(
        q => q.passengers >= (q.taxi?.capacity || 15)
      ).length,

    },

    queue,

  };

}