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

export async function getPassengerLoadingData() {

  await delay(200);

  const queue = getQueueStore()
    .slice()
    .sort((a, b) => a.position - b.position);

  const taxis = getTaxiStore();

  return queue
    .map(item => {

      const taxi = taxis.find(
        taxiItem => taxiItem.id === item.taxiId
      );

      if (!taxi) {
        return null;
      }

      return {
        ...item,
        taxi,
        passengers: Number(item.passengers || 0),
        capacity: Number(taxi.capacity || 0),
      };

    })
    .filter(Boolean);

}

export async function addPassenger(taxiId) {

  await delay(150);

  const queue = getQueueStore();

  const taxis = getTaxiStore();

  const queueItem = queue.find(
    item => item.taxiId === taxiId
  );

  const taxi = taxis.find(
    item => item.id === taxiId
  );

  if (!queueItem) {
    throw new Error(
      'Taxi is not currently in the queue.'
    );
  }

  if (!taxi) {
    throw new Error(
      'Taxi could not be found.'
    );
  }

  const capacity = Number(taxi.capacity || 0);

  const passengers = Number(
    queueItem.passengers || 0
  );

  if (passengers >= capacity) {

    throw new Error(
      'This taxi is already full.'
    );

  }

  const newPassengerCount = passengers + 1;

  const updatedQueue = queue.map(item => {

    if (item.taxiId !== taxiId) {
      return item;
    }

    return {
      ...item,

      passengers: newPassengerCount,

      status:
        newPassengerCount >= capacity
          ? 'Full'
          : 'Loading',

    };

  });

  const updatedTaxis = taxis.map(item => {

    if (item.id !== taxiId) {
      return item;
    }

    return {
      ...item,

      status:
        newPassengerCount >= capacity
          ? 'Full'
          : 'Loading',

    };

  });

  setQueueStore(updatedQueue);

  setTaxiStore(updatedTaxis);

  return {

    passengers: newPassengerCount,

    capacity,

    full: newPassengerCount >= capacity,

  };

}

export async function removePassenger(taxiId) {

  await delay(150);

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

  const passengers = Number(
    queueItem.passengers || 0
  );

  if (passengers <= 0) {

    throw new Error(
      'There are no passengers to remove.'
    );

  }

  const newPassengerCount = passengers - 1;

  const updatedQueue = queue.map(item => {

    if (item.taxiId !== taxiId) {
      return item;
    }

    return {
      ...item,

      passengers: newPassengerCount,

      status:
        newPassengerCount > 0
          ? 'Loading'
          : 'Waiting',

    };

  });

  const updatedTaxis = taxis.map(item => {

    if (item.id !== taxiId) {
      return item;
    }

    return {
      ...item,

      status:
        newPassengerCount > 0
          ? 'Loading'
          : 'Waiting',

    };

  });

  setQueueStore(updatedQueue);

  setTaxiStore(updatedTaxis);

  return {

    passengers: newPassengerCount,

  };

}