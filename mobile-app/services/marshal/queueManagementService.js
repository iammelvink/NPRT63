import {
  getQueueStore,
  setQueueStore,
} from '../../shared/queueStore';

import {
  getTaxiStore,
  setTaxiStore,
} from '../../shared/taxiStore';

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

function normalizeQueue(queue) {

  return queue.map((item, index) => ({
    ...item,
    position: index + 1,
  }));

}

export async function getManagedQueue() {

  await delay(200);

  const queue = getQueueStore()
    .slice()
    .sort((a, b) => a.position - b.position);

  return normalizeQueue(queue);

}

export async function moveTaxiToFront(taxiId) {

  await delay(200);

  const queue = getQueueStore()
    .slice()
    .sort((a, b) => a.position - b.position);

  const taxiIndex = queue.findIndex(
    item => item.taxiId === taxiId
  );

  if (taxiIndex === -1) {
    throw new Error(
      'Taxi is not currently in the queue.'
    );
  }

  const [selectedTaxi] =
    queue.splice(taxiIndex, 1);

  queue.unshift(selectedTaxi);

  const updatedQueue =
    normalizeQueue(queue);

  setQueueStore(updatedQueue);

  return updatedQueue;

}

export async function removeTaxiFromQueue(taxiId) {

  await delay(200);

  const queue = getQueueStore();

  const exists = queue.some(
    item => item.taxiId === taxiId
  );

  if (!exists) {
    throw new Error(
      'Taxi is not currently in the queue.'
    );
  }

  const updatedQueue = normalizeQueue(
    queue.filter(
      item => item.taxiId !== taxiId
    )
  );

  setQueueStore(updatedQueue);

  return updatedQueue;

}

export async function dispatchTaxi(taxiId) {

  await delay(200);

  const queue = getQueueStore();

  const taxis = getTaxiStore();

  const queueItem = queue.find(
    item => item.taxiId === taxiId
  );

  if (!queueItem) {
    throw new Error(
      'Taxi is not currently in the queue.'
    );
  }

  const taxi = taxis.find(
    item => item.id === taxiId
  );

  if (!taxi) {
    throw new Error(
      'Taxi could not be found.'
    );
  }

  const passengers =
    Number(queueItem.passengers || 0);

  const capacity =
    Number(taxi.capacity || 0);

  if (passengers < capacity) {

    throw new Error(
      `Taxi is not full. ${passengers}/${capacity} passengers loaded.`
    );

  }

  const updatedQueue = normalizeQueue(
    queue.filter(
      item => item.taxiId !== taxiId
    )
  );

  const updatedTaxis = taxis.map(item => {

    if (item.id !== taxiId) {
      return item;
    }

    return {
      ...item,
      status: 'Departed',
    };

  });

  setQueueStore(updatedQueue);

  setTaxiStore(updatedTaxis);

  return {

    taxi,

    passengers,

    departed: true,

    queue: updatedQueue,

  };

}

export async function resetTaxiQueuePosition(taxiId) {

  await delay(200);

  const queue = getQueueStore();

  const updatedQueue = normalizeQueue(
    queue.map(item => {

      if (item.taxiId !== taxiId) {
        return item;
      }

      return {
        ...item,
        position: item.position,
      };

    })
  );

  setQueueStore(updatedQueue);

  return updatedQueue;

}