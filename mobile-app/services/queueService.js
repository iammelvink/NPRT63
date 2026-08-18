import { getTaxiStore, setTaxiStore } from '../shared/taxiStore';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getQueue() {

  await delay(200);

  const taxis = getTaxiStore();

  const queue = taxis
    .filter(taxi => taxi.status === 'Waiting')
    .sort((a, b) => {

      const aPos = a.queuePosition || 9999;
      const bPos = b.queuePosition || 9999;

      return aPos - bPos;

    });

  return queue;

}

export async function checkInTaxi(taxiId) {

  await delay(200);

  const taxis = getTaxiStore();

  const waiting = taxis.filter(
    taxi => taxi.status === 'Waiting'
  );

  const nextPosition = waiting.length + 1;

  const updated = taxis.map(taxi => {

    if (taxi.id === taxiId) {

      return {

        ...taxi,

        status: 'Waiting',

        queuePosition: nextPosition,

      };

    }

    return taxi;

  });

  setTaxiStore(updated);

}

export async function dispatchTaxi(taxiId) {

  await delay(200);

  let taxis = getTaxiStore();

  taxis = taxis.map(taxi => {

    if (taxi.id === taxiId) {

      return {

        ...taxi,

        status: 'Departed',

        queuePosition: null,

      };

    }

    return taxi;

  });

  const waiting = taxis
    .filter(taxi => taxi.status === 'Waiting')
    .sort((a, b) => a.queuePosition - b.queuePosition);

  waiting.forEach((taxi, index) => {

    taxi.queuePosition = index + 1;

  });

  setTaxiStore(taxis);

}

export async function returnTaxi(taxiId) {

  await delay(200);

  const taxis = getTaxiStore();

  const waiting = taxis.filter(
    taxi => taxi.status === 'Waiting'
  );

  const nextPosition = waiting.length + 1;

  const updated = taxis.map(taxi => {

    if (taxi.id === taxiId) {

      return {

        ...taxi,

        status: 'Waiting',

        queuePosition: nextPosition,

      };

    }

    return taxi;

  });

  setTaxiStore(updated);

}

export async function getQueueStatistics() {

  await delay(100);

  const taxis = getTaxiStore();

  return {

    waiting: taxis.filter(
      t => t.status === 'Waiting'
    ).length,

    loading: taxis.filter(
      t => t.status === 'Loading'
    ).length,

    departed: taxis.filter(
      t => t.status === 'Departed'
    ).length,

    available: taxis.filter(
      t => t.status === 'Available'
    ).length,

  };

}