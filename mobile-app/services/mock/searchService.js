const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const destinations = [
  {
    id: '1',
    name: 'Kimberley CBD',
    fare: 'R18.00',
    taxis: 18,
    queue: 6,
    operatingHours: '05:00 - 22:00',
    lastTaxi: '21:45',
    driver: 'Thabo Mokoena',
    registration: 'CA 458-923',
  },
  {
    id: '2',
    name: 'Galeshewe',
    fare: 'R16.00',
    taxis: 12,
    queue: 4,
    operatingHours: '05:00 - 21:30',
    lastTaxi: '21:30',
    driver: 'Kagiso Molefe',
    registration: 'CA 287-451',
  },
  {
    id: '3',
    name: 'Roodepan',
    fare: 'R17.00',
    taxis: 9,
    queue: 2,
    operatingHours: '05:00 - 21:00',
    lastTaxi: '20:45',
    driver: 'Sibusiso Ndlovu',
    registration: 'CA 913-564',
  },
  {
    id: '4',
    name: 'Cassandra',
    fare: 'R18.00',
    taxis: 7,
    queue: 3,
    operatingHours: '05:00 - 20:30',
    lastTaxi: '20:30',
    driver: 'Mpho Dlamini',
    registration: 'CA 624-311',
  },
  {
    id: '5',
    name: 'Greenpoint',
    fare: 'R20.00',
    taxis: 5,
    queue: 1,
    operatingHours: '05:00 - 20:00',
    lastTaxi: '20:00',
    driver: 'Lebo Khumalo',
    registration: 'CA 774-228',
  },
];

export async function searchDestinations(searchText = '') {

  await delay(500);

  const query = searchText.trim().toLowerCase();

  if (!query) {

    return destinations;

  }

  return destinations.filter(item =>
    item.name.toLowerCase().includes(query)
  );

}

export async function getPopularDestinations() {

  await delay(300);

  return destinations.slice(0, 3);

}