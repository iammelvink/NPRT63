const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const taxiRanks = [
  {
    id: '1',
    name: 'Kimberley CBD',

    taxis: 18,

    queue: 6,

    lastTaxi: '21:45',

    operatingHours: '05:00 - 22:00',

    fare: 'R18.00',

    driver: 'Thabo Mokoena',

    registration: 'CA 458-923',

    rating: 4.8,

    safety: 'Safe',

    contact: '053 830 6000',

    address: 'Kimberley Taxi Rank',
  },

  {
    id: '2',
    name: 'Galeshewe',

    taxis: 12,

    queue: 4,

    lastTaxi: '21:30',

    operatingHours: '05:00 - 21:30',

    fare: 'R16.00',

    driver: 'Kagiso Molefe',

    registration: 'CA 287-451',

    rating: 4.6,

    safety: 'Safe',

    contact: '053 830 6001',

    address: 'Galeshewe Taxi Rank',
  },

  {
    id: '3',
    name: 'Roodepan',

    taxis: 9,

    queue: 2,

    lastTaxi: '20:45',

    operatingHours: '05:00 - 20:45',

    fare: 'R17.00',

    driver: 'Sibusiso Ndlovu',

    registration: 'CA 913-564',

    rating: 4.5,

    safety: 'Safe',

    contact: '053 830 6002',

    address: 'Roodepan Taxi Rank',
  },

];

export async function getTaxiRank(id) {

  await delay(500);

  return taxiRanks.find(rank => rank.id === id);

}