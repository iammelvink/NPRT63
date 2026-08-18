import { getPassengerQueue } from './passengerQueueService';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPassengerDashboard() {

  await delay(300);

  const queue = await getPassengerQueue();

  const availableTaxis = queue.filter(

    item =>

      item.checkedIn &&

      item.status !== 'Departed'

  ).length;

  const lastDeparture = queue.find(

    item => item.status === 'Departed'

  );

  return {

    greeting: 'Good Morning',

    passengerName: 'Passenger',

    dashboard: {

      availableTaxis,

      liveQueue: queue.length,

      operatingHours: '06:00 - 22:00',

      lastTaxiDeparture: lastDeparture
        ? lastDeparture.registration
        : 'None',

      activeRank: queue[0]?.rank || 'Kimberley Taxi Rank',

    },

    queue,

    news: [

      {

        id: '1',

        title: 'Welcome to the Smart Taxi Rank System.',

      },

      {

        id: '2',

        title: 'Queue information updates automatically.',

      },

    ],

  };

}