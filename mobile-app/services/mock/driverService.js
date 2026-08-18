const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getDriverStatus() {

  await delay(400);

  return {

    registration: 'CAA123NC',

    driverName: 'John Smith',

    queuePosition: 4,

    passengers: 0,

    capacity: 15,

    status: 'Waiting',

    estimatedTurn: '15 Minutes',

    rank: 'Kimberley Taxi Rank',

  };

}