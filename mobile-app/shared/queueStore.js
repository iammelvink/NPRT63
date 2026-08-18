let queue = [

  {
    id: '1',
    taxiId: '1',
    position: 1,
    status: 'Waiting',
    passengers: 0,
    checkedIn: false,
    departureTime: null,
  },

  {
    id: '2',
    taxiId: '2',
    position: 2,
    status: 'Waiting',
    passengers: 0,
    checkedIn: false,
    departureTime: null,
  },

  {
    id: '3',
    taxiId: '3',
    position: 3,
    status: 'Waiting',
    passengers: 0,
    checkedIn: false,
    departureTime: null,
  },

];

export function getQueueStore() {

  return queue;

}

export function setQueueStore(updatedQueue) {

  queue = updatedQueue;

}