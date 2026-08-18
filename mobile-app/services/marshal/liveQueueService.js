import {
  getQueueStore,
} from '../../shared/queueStore';

import {
  getTaxiStore,
} from '../../shared/taxiStore';

import {
  getDriverStore,
} from '../../shared/driverStore';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getLiveQueue() {

  await delay(250);

  const queue = getQueueStore();

  const taxis = getTaxiStore();

  const drivers = getDriverStore();

  return queue
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

}