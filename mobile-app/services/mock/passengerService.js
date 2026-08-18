const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPassengerDashboard() {

  await delay(700);

  return {

    greeting: 'Good Morning',

    passengerName: 'Passenger',

    dashboard: {

      availableTaxis: 18,

      liveQueue: 6,

      operatingHours: '06:00 - 22:00',

      lastTaxiDeparture: '21:45',

      activeRank: 'Kimberley Taxi Rank',

    },

    news: [

      {

        id:1,

        title:'No transport announcements available.',

      }

    ],

  };

}