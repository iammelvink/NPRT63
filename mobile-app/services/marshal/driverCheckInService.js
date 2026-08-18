import {
  getQueueStore,
  setQueueStore,
} from '../../shared/queueStore';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function driverCheckIn(taxiId) {

  await delay(300);

  const queue = getQueueStore();

  const exists = queue.find(

    item => item.taxiId === taxiId

  );

  if (exists) {

    return exists;

  }

  const newItem = {

    id: Date.now().toString(),

    taxiId,

    position: queue.length + 1,

    status: 'Waiting',

    passengers: 0,

    checkedIn: true,

  };

  queue.push(newItem);

  setQueueStore(queue);

  return newItem;

}